import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Schema = Record<string, any>;

export interface Parameter {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required?: boolean;
  description?: string;
  schema?: Schema;
  style?: string;
  explode?: boolean;
}

export interface Operation {
  id: string;
  method: string;
  path: string;
  summary: string;
  description: string;
  api: string;
  section: string;
  tags: string[];
  docUrl: string;
  updatedAt: string | null;
  servers: { prod: string | null; stage: string | null };
  isWrite: boolean;
  deprecated: boolean;
  parameters: Parameter[];
  requestBody: { required?: boolean; content?: Record<string, { schema?: Schema; example?: any; examples?: any }> } | null;
  responses: Record<string, { description?: string; content?: Record<string, { schema?: Schema; example?: any; examples?: any }> }>;
}

export interface Guide {
  slug: string;
  url: string;
  title: string;
  section: string;
  description: string;
  updatedAt: string | null;
  markdown: string;
}

export interface Catalog {
  source: string;
  generatedAt: string;
  guides: Guide[];
  operations: Operation[];
}

const here = path.dirname(fileURLToPath(import.meta.url));
export const catalog: Catalog = JSON.parse(fs.readFileSync(path.join(here, "..", "data", "catalog.json"), "utf8"));

// ---- arama -------------------------------------------------------------------------------

/** Türkçe karakterleri ve büyük/küçük harfi yok sayan normalizasyon. */
export function normalize(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

interface Doc {
  kind: "guide" | "operation";
  key: string;
  title: string;
  section: string;
  head: string; // yüksek ağırlıklı alanlar
  body: string; // düşük ağırlıklı alanlar
  raw: string; // snippet için
}

const index: Doc[] = [
  ...catalog.guides.map<Doc>((g) => ({
    kind: "guide",
    key: g.slug,
    title: g.title,
    section: g.section,
    head: normalize(`${g.title} ${g.slug} ${g.description}`),
    body: normalize(g.markdown),
    raw: g.markdown,
  })),
  ...catalog.operations.map<Doc>((o) => ({
    kind: "operation",
    key: o.id,
    title: o.summary,
    section: o.section,
    head: normalize(`${o.id} ${splitCamel(o.id)} ${o.summary} ${o.path}`),
    body: normalize(`${o.description} ${o.section} ${o.parameters.map((p) => `${p.name} ${p.description ?? ""}`).join(" ")}`),
    raw: o.description,
  })),
];

function splitCamel(s: string) {
  return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function count(hay: string, needle: string) {
  let n = 0;
  for (let i = hay.indexOf(needle); i !== -1 && n < 20; i = hay.indexOf(needle, i + needle.length)) n++;
  return n;
}

export interface SearchHit {
  kind: Doc["kind"];
  key: string;
  title: string;
  section: string;
  score: number;
  snippet: string;
}

export function search(query: string, limit = 10, kind?: Doc["kind"]): SearchHit[] {
  const q = normalize(query);
  const terms = q.split(" ").filter((t) => t.length > 1);
  if (!terms.length) return [];
  const hits: SearchHit[] = [];
  for (const d of index) {
    if (kind && d.kind !== kind) continue;
    let score = 0;
    let matched = 0;
    for (const t of terms) {
      const h = count(d.head, t);
      const b = count(d.body, t);
      if (h || b) matched++;
      score += h * 6 + Math.min(b, 10);
    }
    if (!matched) continue;
    score *= matched / terms.length; // tüm terimleri içerenler öne çıkar
    if (d.head.includes(q)) score += 15;
    else if (d.body.includes(q)) score += 5;
    hits.push({ kind: d.kind, key: d.key, title: d.title, section: d.section, score: Math.round(score * 10) / 10, snippet: snippet(d.raw, terms) });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}

function snippet(raw: string, terms: string[]): string {
  const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const norm = normalize(text); // uzunluk farklı olabilir; yaklaşık konum yeterli
  let pos = -1;
  for (const t of terms) {
    pos = norm.indexOf(t);
    if (pos !== -1) break;
  }
  const ratio = text.length / Math.max(norm.length, 1);
  const start = Math.max(0, Math.floor(pos * ratio) - 80);
  return (start > 0 ? "…" : "") + text.slice(start, start + 240).trim() + "…";
}

// ---- arama yardımcıları ------------------------------------------------------------------

export function findOperation(id: string): Operation | undefined {
  const n = id.trim().toLowerCase();
  return catalog.operations.find((o) => o.id.toLowerCase() === n);
}

export function findGuide(slugOrUrl: string): Guide | undefined {
  const key = decodeURIComponent(slugOrUrl.trim())
    .replace(/^https?:\/\/developers\.trendyol\.com\//, "")
    .replace(/\.md$/, "")
    .split("/")
    .pop()!;
  const n = normalize(key);
  return catalog.guides.find((g) => g.slug === key) ?? catalog.guides.find((g) => normalize(g.slug) === n);
}

export function suggestOperations(id: string): string[] {
  return search(id, 5, "operation").map((h) => h.key);
}

// ---- şema özetleme -----------------------------------------------------------------------

/** JSON şemasını LLM'in kolay okuyacağı kısa bir taslağa dönüştürür. */
export function sketch(schema: Schema | undefined, depth = 0, maxDepth = 8): any {
  if (!schema) return "any";
  if (schema.$circular) return `<döngüsel: ${schema.$circular}>`;
  const variants = schema.oneOf || schema.anyOf;
  if (variants) return { [schema.oneOf ? "oneOf" : "anyOf"]: variants.map((v: Schema) => sketch(v, depth + 1, maxDepth)) };
  if (schema.allOf) return Object.assign({}, ...schema.allOf.map((s: Schema) => sketch(s, depth, maxDepth)));
  const type = schema.type ?? (schema.properties ? "object" : schema.items ? "array" : "any");
  if (type === "object" && schema.properties) {
    if (depth >= maxDepth) return "object";
    const req = new Set<string>(schema.required ?? []);
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries<Schema>(schema.properties)) {
      out[req.has(k) ? `${k}*` : k] = sketch(v, depth + 1, maxDepth);
    }
    return out;
  }
  if (type === "array") {
    const inner = sketch(schema.items, depth + 1, maxDepth);
    const lim = [schema.minItems != null && `min ${schema.minItems}`, schema.maxItems != null && `max ${schema.maxItems}`].filter(Boolean).join(", ");
    return lim ? { [`array (${lim})`]: [inner] } : [inner];
  }
  return describeScalar(schema, type);
}

function describeScalar(s: Schema, type: string): string {
  const bits: string[] = [String(type)];
  if (s.format) bits.push(s.format);
  if (s.enum) bits.push(`enum: ${s.enum.join(" | ")}`);
  if (s.maxLength != null) bits.push(`max ${s.maxLength} karakter`);
  if (s.minimum != null) bits.push(`min ${s.minimum}`);
  if (s.maximum != null) bits.push(`max ${s.maximum}`);
  if (s.default !== undefined) bits.push(`varsayılan ${JSON.stringify(s.default)}`);
  let out = bits.join(", ");
  if (s.description) out += ` — ${String(s.description).replace(/\s+/g, " ").slice(0, 220)}`;
  if (s.example !== undefined) out += ` (örn. ${JSON.stringify(s.example).slice(0, 80)})`;
  return out;
}

function firstExample(media?: { example?: any; examples?: any; schema?: Schema }): any {
  if (!media) return undefined;
  if (media.example !== undefined) return media.example;
  if (media.examples) {
    const first: any = Object.values(media.examples)[0];
    return first?.value ?? first;
  }
  if (media.schema?.example !== undefined) return media.schema.example;
  return undefined;
}

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n)}\n… (${s.length - n} karakter kırpıldı)` : s);

/** get_operation çıktısı. */
export function describeOperation(o: Operation, opts: { rawSchema?: boolean } = {}): string {
  const lines: string[] = [];
  lines.push(`# ${o.summary}`, "");
  lines.push(`- operationId: \`${o.id}\``);
  lines.push(`- İstek: \`${o.method} ${o.path}\``);
  lines.push(`- Canlı: ${o.servers.prod ? `${o.servers.prod}${o.path}` : "— (yalnızca test ortamı)"}`);
  lines.push(`- Test: ${o.servers.stage ? `${o.servers.stage}${o.path}` : "—"}`);
  lines.push(`- Bölüm: ${o.section}`);
  lines.push(`- Tür: ${o.isWrite ? "YAZMA (veri değiştirir)" : "okuma"}${o.deprecated ? " · KULLANIMDAN KALDIRILDI" : ""}`);
  lines.push(`- Doküman: ${o.docUrl}${o.updatedAt ? ` (güncelleme: ${o.updatedAt.slice(0, 10)})` : ""}`);
  if (o.description) lines.push("", clip(o.description, 4000));

  const params = o.parameters.filter((p) => !(p.in === "header" && p.name.toLowerCase() === "authorization"));
  if (params.length) {
    lines.push("", "## Parametreler", "", "| ad | yer | zorunlu | tip | açıklama |", "|---|---|---|---|---|");
    for (const p of params) {
      const t = p.schema ? describeScalar({ ...p.schema, description: undefined }, p.schema.type ?? "any") : "any";
      const auto = isSellerParam(p.name) ? " (seçilen mağazadan otomatik doldurulur)" : "";
      lines.push(`| ${p.name} | ${p.in} | ${p.required ? "evet" : "hayır"} | ${t} | ${(p.description ?? "").replace(/\s+/g, " ").replace(/\|/g, "/")}${auto} |`);
    }
  }

  if (o.requestBody?.content) {
    for (const [ct, media] of Object.entries(o.requestBody.content)) {
      lines.push("", `## İstek gövdesi (${ct})${o.requestBody.required ? " — zorunlu" : ""}`, "", "`*` zorunlu alan demektir.", "");
      lines.push("```json", clip(JSON.stringify(opts.rawSchema ? media.schema : sketch(media.schema), null, 2), 12000), "```");
      const ex = firstExample(media);
      if (ex !== undefined) lines.push("", "Örnek:", "```json", clip(JSON.stringify(ex, null, 2), 6000), "```");
    }
  }

  const ok = Object.entries(o.responses).filter(([code]) => /^2/.test(code));
  for (const [code, r] of ok.slice(0, 2)) {
    const media = r.content?.["application/json"] ?? Object.values(r.content ?? {})[0];
    lines.push("", `## Yanıt ${code}${r.description ? ` — ${r.description}` : ""}`);
    if (media?.schema) lines.push("```json", clip(JSON.stringify(opts.rawSchema ? media.schema : sketch(media.schema), null, 2), 8000), "```");
    const ex = firstExample(media);
    if (ex !== undefined) lines.push("Örnek:", "```json", clip(JSON.stringify(ex, null, 2), 4000), "```");
  }
  const errs = Object.entries(o.responses).filter(([code]) => !/^2/.test(code));
  if (errs.length) lines.push("", `Hata yanıtları: ${errs.map(([c, r]) => `${c}${r.description ? ` (${r.description})` : ""}`).join(", ")}`);

  lines.push("", "## Örnek kod", "", ...codeSample(o));
  return lines.join("\n");
}

export const isSellerParam = (name: string) => /^(seller|supplier)id$/i.test(name);

function codeSample(o: Operation): string[] {
  const base = o.servers.prod ?? o.servers.stage ?? "";
  const url = base + o.path.replace(/\{([^}]+)\}/g, (_, n) => (isSellerParam(n) ? "${SELLER_ID}" : `\${${n}}`));
  const query = o.parameters.filter((p) => p.in === "query" && p.required).map((p) => `${p.name}=...`);
  const fullUrl = url + (query.length ? `?${query.join("&")}` : "");
  const json = o.requestBody?.content?.["application/json"];
  const ex = firstExample(json);
  const multipart = !!o.requestBody?.content?.["multipart/form-data"];
  const bodyLine = json ? `  body: JSON.stringify(${ex !== undefined ? clip(JSON.stringify(ex), 600) : "{ /* yukarıdaki şemaya göre */ }"}),` : multipart ? "  body: formData, // multipart/form-data" : null;
  return [
    "```ts",
    "// Node 18+ / TypeScript",
    'const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");',
    `const res = await fetch(\`${fullUrl}\`, {`,
    `  method: "${o.method}",`,
    "  headers: {",
    "    Authorization: `Basic ${auth}`,",
    '    "User-Agent": `${SELLER_ID} - SelfIntegration`, // zorunlu, yoksa 403',
    ...(json ? ['    "Content-Type": "application/json",'] : []),
    "  },",
    ...(bodyLine ? [bodyLine] : []),
    "});",
    "const data = await res.json();",
    "```",
    "",
    "Bu MCP üzerinden denemek için: `trendyol_call_api` aracını `operationId: \"" + o.id + "\"` ile çağırın (önce `dryRun: true` ile isteği görebilirsiniz).",
  ];
}
