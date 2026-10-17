import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import type { Environment, Store } from "./config.js";
import { isSellerParam, type Operation } from "./catalog.js";

export type FormValue = string | number | boolean | { filePath: string; fileName?: string; contentType?: string };

export interface CallInput {
  pathParams?: Record<string, string | number>;
  query?: Record<string, string | number | boolean | Array<string | number>>;
  headers?: Record<string, string>;
  body?: unknown;
  formData?: Record<string, FormValue | FormValue[]>;
  dryRun?: boolean;
}

export interface CallResult {
  ok: boolean;
  status?: number;
  request: { method: string; url: string; headers: Record<string, string>; body?: unknown; environment: Environment; store: string };
  notes: string[];
  data?: unknown;
  savedFile?: string;
}

export class UserError extends Error {}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function callOperation(op: Operation, store: Store | null, timeoutMs: number, input: CallInput): Promise<CallResult> {
  const notes: string[] = [];
  let env: Environment = store?.environment ?? "prod";
  if (!op.servers[env]) {
    const other: Environment = env === "prod" ? "stage" : "prod";
    if (store && !input.dryRun) {
      throw new UserError(
        other === "stage"
          ? `${op.id} yalnızca test (stage) ortamında çalışır, "${store.alias}" ise canlı mağaza. environment: "stage" olan bir test mağazası tanımlayıp onu seçin.`
          : `${op.id} test ortamında yok, "${store.alias}" ise test mağazası. Canlı bir mağaza seçin.`,
      );
    }
    notes.push(`${op.id} yalnızca ${other === "stage" ? "test (stage)" : "canlı"} ortamda var; önizleme o ortama göre gösterildi.`);
    env = other;
  }

  if (!store && !input.dryRun) throw new UserError("Mağaza seçilmedi.");

  if (op.isWrite && env === "prod" && store && !store.allowWrite && !input.dryRun) {
    throw new UserError(
      `${op.id} canlı ortamda veri değiştiren bir işlemdir ve "${store.alias}" mağazasında yazma işlemleri kapalıdır. ` +
        `Açmak için: npx -y trendyol-mcp stores add ${store.alias} komutuyla yazma iznini "evet" yapın (veya stores.json'da "allowWrite": true). ` +
        "İsteği göndermeden görmek için dryRun: true kullanabilirsiniz.",
    );
  }

  const sellerId = store?.sellerId ?? "<SELLER_ID>";
  const pick = (bag: Record<string, unknown> | undefined, name: string) => {
    if (!bag) return undefined;
    if (name in bag) return bag[name];
    const k = Object.keys(bag).find((x) => x.toLowerCase() === name.toLowerCase());
    return k ? bag[k] : undefined;
  };

  // --- path ---
  const missing: string[] = [];
  const urlPath = op.path.replace(/\{([^}]+)\}/g, (_, name: string) => {
    let v = pick(input.pathParams, name);
    if (v === undefined && isSellerParam(name)) v = sellerId;
    if (v === undefined || v === "") {
      missing.push(`${name} (path)`);
      return `{${name}}`;
    }
    return encodeURIComponent(String(v));
  });

  // --- query ---
  const qs = new URLSearchParams();
  const specQuery = op.parameters.filter((p) => p.in === "query");
  for (const p of specQuery) {
    let v = pick(input.query, p.name);
    if (v === undefined && isSellerParam(p.name)) v = sellerId;
    if (v === undefined || v === null || v === "") {
      if (p.required) missing.push(`${p.name} (query)`);
      continue;
    }
    appendQuery(qs, p.name, v, p.explode ?? true);
  }
  // Şemada olmayan ekstra query parametrelerine de izin ver (dokümantasyon eksik olabilir).
  for (const [k, v] of Object.entries(input.query ?? {})) {
    if (specQuery.some((p) => p.name.toLowerCase() === k.toLowerCase())) continue;
    if (v === undefined || v === null || v === "") continue;
    appendQuery(qs, k, v, true);
    notes.push(`"${k}" parametresi dokümantasyonda yok, yine de gönderildi.`);
  }

  // --- headers ---
  const headers: Record<string, string> = {
    Accept: "application/json",
    "User-Agent": `${sellerId} - ${store?.integratorName ?? "SelfIntegration"}`,
  };
  for (const p of op.parameters.filter((p) => p.in === "header")) {
    if (p.name.toLowerCase() === "authorization") continue;
    let v = pick(input.headers, p.name);
    if (v === undefined && isSellerParam(p.name)) v = sellerId;
    if (v === undefined || v === "") {
      if (p.required) missing.push(`${p.name} (header)`);
      continue;
    }
    headers[p.name] = String(v);
  }
  for (const [k, v] of Object.entries(input.headers ?? {})) {
    if (/^(authorization|user-agent)$/i.test(k)) continue;
    if (!Object.keys(headers).some((h) => h.toLowerCase() === k.toLowerCase())) headers[k] = String(v);
  }

  // --- body ---
  const content = op.requestBody?.content ?? {};
  const isMultipart = "multipart/form-data" in content && !("application/json" in content);
  let body: BodyInit | undefined;
  let bodyPreview: unknown;
  if (isMultipart) {
    if (!input.formData && op.requestBody?.required) missing.push("formData (multipart/form-data gövdesi)");
    if (input.formData) {
      const { form, preview } = buildForm(input.formData, input.dryRun);
      body = form;
      bodyPreview = preview;
    }
  } else if (input.body !== undefined) {
    headers["Content-Type"] = "application/json";
    body = typeof input.body === "string" ? input.body : JSON.stringify(input.body);
    bodyPreview = input.body;
  } else if (op.requestBody?.required) {
    missing.push("body (JSON gövdesi)");
  }

  if (missing.length) {
    throw new UserError(`Eksik zorunlu alanlar: ${missing.join(", ")}. Ayrıntılar için trendyol_get_operation("${op.id}") kullanın.`);
  }

  const base = (env === "prod" ? op.servers.prod : op.servers.stage)!;
  const url = `${base}${urlPath}${qs.size ? `?${qs}` : ""}`;
  const shownHeaders = { ...headers, Authorization: "Basic ****" };
  const request = { method: op.method, url, headers: shownHeaders, body: bodyPreview, environment: env, store: store?.alias ?? "-" };

  if (input.dryRun) {
    if (!store) notes.push("Mağaza seçilmedi; satıcı ID yerine <SELLER_ID> gösterildi.");
    return { ok: true, request, notes: [...notes, "dryRun: istek gönderilmedi."] };
  }

  headers.Authorization = `Basic ${Buffer.from(`${store!.apiKey}:${store!.apiSecret}`).toString("base64")}`;

  let res: Response | undefined;
  for (let attempt = 0; attempt < 4; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      res = await fetch(url, { method: op.method, headers, body, signal: ctrl.signal });
    } catch (e) {
      clearTimeout(timer);
      const msg = (e as Error).name === "AbortError" ? `zaman aşımı (${timeoutMs} ms)` : (e as Error).message;
      throw new UserError(`Trendyol API'ye ulaşılamadı: ${msg}`);
    }
    clearTimeout(timer);
    // 429: aynı uç noktaya 10 sn'de en fazla 50 istek. Gövde stream değilse tekrar dene.
    if (res.status !== 429 || isMultipart || attempt === 3) break;
    const retryAfter = Number(res.headers.get("retry-after"));
    const wait = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 2000 * 2 ** attempt;
    notes.push(`429 (too.many.requests) alındı, ${wait} ms sonra tekrar denendi.`);
    await sleep(wait);
  }

  const status = res!.status;
  const ct = res!.headers.get("content-type") ?? "";
  let data: unknown;
  let savedFile: string | undefined;
  if (/json/.test(ct)) {
    const text = await res!.text();
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = text;
    }
  } else if (/^(text\/|application\/(xml|zpl))/.test(ct) || !ct) {
    data = await res!.text();
  } else {
    const buf = Buffer.from(await res!.arrayBuffer());
    const ext = ct.includes("pdf") ? ".pdf" : ct.includes("png") ? ".png" : ct.includes("zip") ? ".zip" : ".bin";
    savedFile = path.join(os.tmpdir(), `trendyol-${op.id}-${Date.now()}${ext}`);
    fs.writeFileSync(savedFile, buf);
    data = `İkili yanıt (${ct}, ${buf.length} bayt) dosyaya kaydedildi: ${savedFile}`;
  }

  notes.push(...hintsFor(status, env, data));
  return { ok: res!.ok, status, request, notes, data, savedFile };
}

function appendQuery(qs: URLSearchParams, name: string, v: unknown, explode: boolean) {
  if (Array.isArray(v)) {
    if (explode) v.forEach((x) => qs.append(name, String(x)));
    else qs.append(name, v.join(","));
  } else qs.append(name, String(v));
}

function buildForm(fields: Record<string, FormValue | FormValue[]>, dryRun?: boolean) {
  const form = new FormData();
  const preview: Record<string, unknown> = {};
  for (const [k, raw] of Object.entries(fields)) {
    const values = Array.isArray(raw) ? raw : [raw];
    preview[k] = values.map((v) => (typeof v === "object" ? `<dosya: ${v.filePath}>` : v));
    for (const v of values) {
      if (typeof v === "object" && v && "filePath" in v) {
        if (!fs.existsSync(v.filePath)) throw new UserError(`Dosya bulunamadı: ${v.filePath}`);
        if (dryRun) continue;
        const blob = new Blob([fs.readFileSync(v.filePath)], { type: v.contentType ?? guessType(v.filePath) });
        form.append(k, blob, v.fileName ?? path.basename(v.filePath));
      } else form.append(k, String(v));
    }
  }
  return { form, preview };
}

function guessType(file: string) {
  const ext = path.extname(file).toLowerCase();
  return (
    { ".pdf": "application/pdf", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".xml": "application/xml", ".html": "text/html" }[ext] ??
    "application/octet-stream"
  );
}

function hintsFor(status: number, env: Environment, data: unknown): string[] {
  const text = typeof data === "string" ? data : JSON.stringify(data ?? "");
  const hints: string[] = [];
  if (status === 401) hints.push("401: API key/secret hatalı ya da bu ortama ait değil (canlı ve test bilgileri farklıdır).");
  if (status === 403) hints.push("403: User-Agent eksik/hatalı olabilir ya da IP adresiniz engellenmiş olabilir.");
  if (status === 503 && env === "stage") hints.push("503 (test ortamı): IP adresiniz test ortamı için yetkilendirilmemiş. 0850 258 58 00 üzerinden talep oluşturun.");
  if (status === 429) hints.push("429: Rate limit aşıldı (aynı uç noktaya 10 sn'de en fazla 50 istek). Biraz bekleyip tekrar deneyin.");
  if (/batchRequestId/i.test(text)) hints.push("Toplu işlem başlatıldı. Sonucu görmek için getBatchRequestResult işlemini batchRequestId ile çağırın.");
  return hints;
}
