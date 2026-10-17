import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { ATTRIBUTION, ATTRIBUTION_LINE } from "./attribution.js";
import { catalog, describeOperation, findGuide, findOperation, normalize, search, suggestOperations, type Operation } from "./catalog.js";
import { callOperation, UserError, type CallInput } from "./client.js";
import { findStore, loadConfig, type Config, type Store } from "./config.js";

const VERSION = "0.1.0";

const server = new McpServer(
  { name: "trendyol-mcp", version: VERSION, title: `Trendyol MCP (${ATTRIBUTION.name})` },
  {
    instructions: [
      "Bu sunucu Trendyol Partner (Marketplace) API'sinin tüm geliştirici dokümantasyonunu ve API işlemlerini sunar.",
      "Önerilen akış: (1) trendyol_search_docs ile konuyu bul, (2) trendyol_get_operation ile uç noktanın parametre ve şemasını öğren,",
      "(3) gerekirse trendyol_read_doc ile kılavuzu oku, (4) trendyol_call_api ile isteği çalıştır (emin değilsen önce dryRun: true).",
      "Kullanıcı birden çok mağaza yönetebilir: trendyol_list_stores ile mağazaları gör, trendyol_call_api'de store ile seç (tüm mağazalarda okuma için store: \"*\").",
      "sellerId/supplierId parametreleri seçilen mağazadan otomatik doldurulur. Yazma işlemleri sadece kullanıcının yazma izni verdiği mağazalarda çalışır.",
      "API key/secret'ı asla sohbette isteme; mağaza yoksa kullanıcıya kendi terminalinde 'npx -y trendyol-mcp stores add' çalıştırmasını söyle.",
      "Kullanıcıya bir yazma işlemi (ürün oluşturma, fiyat/stok güncelleme, sipariş statüsü vb.) yaptırmadan önce ne yapılacağını özetleyip onay al.",
      ATTRIBUTION_LINE,
    ].join("\n"),
  },
);

const text = (s: string) => ({ content: [{ type: "text" as const, text: s }] });
const fail = (s: string) => ({ content: [{ type: "text" as const, text: s }], isError: true });

// ---- 1. Doküman arama ---------------------------------------------------------------------
server.registerTool(
  "trendyol_search_docs",
  {
    title: "Trendyol dokümantasyonunda ara",
    description:
      "developers.trendyol.com içindeki tüm kılavuzlarda ve API işlemlerinde arama yapar (Türkçe karakter duyarsız). " +
      "Örnek sorgular: 'stok fiyat güncelleme', 'iade onaylama', 'kargo etiketi', 'webhook', 'createProducts'.",
    inputSchema: {
      query: z.string().min(1).describe("Aranacak kelimeler"),
      kind: z.enum(["all", "guide", "operation"]).default("all").describe("Sadece kılavuz ya da sadece API işlemi"),
      limit: z.number().int().min(1).max(30).default(10),
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  async ({ query, kind, limit }) => {
    const hits = search(query, limit, kind === "all" ? undefined : kind);
    if (!hits.length) return text(`"${query}" için sonuç bulunamadı. Farklı/daha kısa kelimeler deneyin veya trendyol_list_operations kullanın.`);
    const out = hits.map((h, i) => {
      const how = h.kind === "operation" ? `trendyol_get_operation("${h.key}")` : `trendyol_read_doc("${h.key}")`;
      return `${i + 1}. [${h.kind === "operation" ? "API" : "Kılavuz"}] ${h.title}\n   ${h.section}\n   → ${how}\n   ${h.snippet}`;
    });
    return text(out.join("\n\n"));
  },
);

// ---- 2. Kılavuz okuma ---------------------------------------------------------------------
server.registerTool(
  "trendyol_read_doc",
  {
    title: "Trendyol kılavuz sayfasını oku",
    description:
      "Bir Trendyol dokümantasyon sayfasını markdown olarak döndürür. slug (örn. '2-authorization') ya da tam URL verin. " +
      "slug boş bırakılırsa tüm kılavuzların listesi döner.",
    inputSchema: {
      slug: z.string().optional().describe("Sayfa slug'ı veya developers.trendyol.com URL'si"),
      offset: z.number().int().min(0).default(0).describe("Uzun sayfalarda başlangıç karakteri"),
      maxChars: z.number().int().min(1000).max(100000).default(30000),
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  async ({ slug, offset, maxChars }) => {
    if (!slug) {
      const groups = new Map<string, string[]>();
      for (const g of catalog.guides) {
        const list = groups.get(g.section) ?? [];
        list.push(`- ${g.title} → \`${g.slug}\``);
        groups.set(g.section, list);
      }
      return text([...groups].map(([s, l]) => `## ${s}\n${l.join("\n")}`).join("\n\n"));
    }
    const g = findGuide(slug);
    if (!g) {
      const alt = search(slug, 5, "guide").map((h) => h.key);
      return fail(`"${slug}" sayfası bulunamadı.${alt.length ? ` Şunları deneyin: ${alt.join(", ")}` : ""}`);
    }
    const body = g.markdown.slice(offset, offset + maxChars);
    const rest = g.markdown.length - offset - body.length;
    const head = `Kaynak: ${g.url}\nBölüm: ${g.section}${g.updatedAt ? `\nGüncelleme: ${g.updatedAt.slice(0, 10)}` : ""}\n\n`;
    return text(head + body + (rest > 0 ? `\n\n… ${rest} karakter daha var. Devamı için offset: ${offset + body.length}` : ""));
  },
);

// ---- 3. İşlem listesi ---------------------------------------------------------------------
server.registerTool(
  "trendyol_list_operations",
  {
    title: "Trendyol API işlemlerini listele",
    description:
      "Tüm Trendyol API işlemlerini (operationId, HTTP metodu, yol, kısa açıklama) bölümlere göre listeler. " +
      "Ürün, sipariş, iade, fatura, webhook, finans, soru-cevap, adres, etiket, ihracat (AutoFT) vb.",
    inputSchema: {
      filter: z.string().optional().describe("Bölüm, yol, operationId ya da açıklamada geçen kelime (örn. 'iade', 'webhook', 'product')"),
      type: z.enum(["all", "read", "write"]).default("all"),
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  async ({ filter, type }) => {
    const f = filter ? normalize(filter) : "";
    const ops = catalog.operations.filter(
      (o) =>
        (type === "all" || (type === "write") === o.isWrite) &&
        (!f || normalize(`${o.id} ${o.summary} ${o.section} ${o.path} ${o.api}`).includes(f)),
    );
    if (!ops.length) return text("Eşleşen işlem yok.");
    const groups = new Map<string, string[]>();
    for (const o of ops) {
      const list = groups.get(o.section) ?? [];
      list.push(`- \`${o.id}\` ${o.method} ${o.path} — ${o.summary}${o.isWrite ? " [yazma]" : ""}${o.servers.prod ? "" : " [yalnızca test]"}`);
      groups.set(o.section, list);
    }
    return text(`${ops.length} işlem\n\n` + [...groups].map(([s, l]) => `## ${s}\n${l.join("\n")}`).join("\n\n"));
  },
);

// ---- 4. İşlem ayrıntısı -------------------------------------------------------------------
server.registerTool(
  "trendyol_get_operation",
  {
    title: "Trendyol API işleminin ayrıntıları",
    description:
      "Bir API işleminin tam tanımını verir: URL'ler, parametreler, istek gövdesi şeması (zorunlu alanlar * ile), yanıt şeması, örnekler ve örnek TypeScript kodu.",
    inputSchema: {
      operationId: z.string().describe("Örn. getShipmentPackages, createProducts, updatePriceAndInventory"),
      rawSchema: z.boolean().default(false).describe("true ise sadeleştirilmiş taslak yerine ham JSON Schema döner"),
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  async ({ operationId, rawSchema }) => {
    const op = findOperation(operationId);
    if (!op) return fail(`"${operationId}" bulunamadı. Benzerleri: ${suggestOperations(operationId).join(", ") || "yok"}`);
    return text(describeOperation(op, { rawSchema }));
  },
);

// ---- 5. Mağazalar -------------------------------------------------------------------------
const SETUP_HINT =
  "Mağaza eklemek için kullanıcı kendi terminalinde şunu çalıştırmalı: npx -y trendyol-mcp stores add  " +
  "(API bilgileri sadece kullanıcının bilgisayarında saklanır; sohbet üzerinden API key/secret İSTEME.)";

function resolveStore(cfg: Config, requested?: string): Store {
  if (!cfg.stores.length) throw new UserError(`Hiç mağaza tanımlı değil. ${SETUP_HINT}`);
  if (requested) {
    const s = findStore(cfg, requested);
    if (!s) throw new UserError(`"${requested}" adlı mağaza yok. Tanımlı mağazalar: ${cfg.stores.map((x) => x.alias).join(", ")}`);
    return s;
  }
  const def = cfg.defaultStore ? findStore(cfg, cfg.defaultStore) : undefined;
  if (!def) {
    throw new UserError(`Birden fazla mağaza var, store parametresiyle birini seçin: ${cfg.stores.map((x) => x.alias).join(", ")} (veya tümü için "*").`);
  }
  return def;
}

server.registerTool(
  "trendyol_list_stores",
  {
    title: "Tanımlı Trendyol mağazaları",
    description:
      "Kullanıcının bu bilgisayarda tanımladığı Trendyol mağazalarını listeler (ad, satıcı ID, ortam, yazma izni). API bilgileri gösterilmez. " +
      "Birden fazla mağaza varsa trendyol_call_api'de store parametresiyle seçim yapılır.",
    inputSchema: {},
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  async () => {
    const cfg = loadConfig();
    const lines = [`Trendyol MCP v${VERSION} — ${ATTRIBUTION_LINE}`, "", `Mağaza dosyası: ${cfg.storesFile}`];
    if (!cfg.stores.length) lines.push("", `Hiç mağaza tanımlı değil. ${SETUP_HINT}`);
    else {
      lines.push(`${cfg.stores.length} mağaza${cfg.defaultStore ? `, varsayılan: ${cfg.defaultStore}` : " (varsayılan yok — her çağrıda store belirtin)"}`, "");
      for (const s of cfg.stores) {
        lines.push(
          `- ${s.alias}${s.label ? ` (${s.label})` : ""} — satıcı ${s.sellerId} · ${s.environment === "prod" ? "canlı" : "test"} · ${s.allowWrite ? "yazma AÇIK" : "salt okunur"}`,
        );
      }
    }
    if (cfg.errors.length) lines.push("", "Uyarılar:", ...cfg.errors.map((e) => `! ${e}`));
    lines.push("", `Dokümantasyon: ${catalog.guides.length} kılavuz, ${catalog.operations.length} API işlemi (${catalog.generatedAt.slice(0, 10)} tarihli kopya)`);
    return text(lines.join("\n"));
  },
);

// ---- 6. API çağrısı -----------------------------------------------------------------------
const scalar = z.union([z.string(), z.number(), z.boolean()]);
const fileRef = z.object({
  filePath: z.string().describe("Yerel dosya yolu"),
  fileName: z.string().optional(),
  contentType: z.string().optional(),
});

server.registerTool(
  "trendyol_call_api",
  {
    title: "Trendyol API isteği gönder",
    description:
      "Herhangi bir Trendyol API işlemini operationId ile, seçilen mağaza adına çalıştırır. Kimlik doğrulama, User-Agent ve sellerId mağazadan otomatik eklenir. " +
      "Önce trendyol_get_operation ile parametreleri öğrenin. store: mağaza adı (trendyol_list_stores), boşsa varsayılan mağaza; " +
      '"*" verilirse okuma işlemi tüm mağazalarda sırayla çalışır. Yazma işlemleri sadece yazma izni açık mağazalarda çalışır. ' +
      "dryRun: true ile istek gönderilmeden oluşturulan URL/gövde gösterilir.",
    inputSchema: {
      operationId: z.string(),
      store: z.string().optional().describe('Mağaza adı veya satıcı ID. Boş = varsayılan mağaza. "*" = tüm mağazalar (sadece okuma)'),
      pathParams: z.record(z.union([z.string(), z.number()])).optional().describe("Yol parametreleri, örn. { packageId: 123 }"),
      query: z.record(z.union([scalar, z.array(z.union([z.string(), z.number()]))])).optional().describe("Query parametreleri"),
      body: z.any().optional().describe("JSON istek gövdesi"),
      formData: z
        .record(z.union([scalar, fileRef, z.array(z.union([scalar, fileRef]))]))
        .optional()
        .describe("multipart/form-data alanları; dosyalar için { filePath }"),
      headers: z.record(z.string()).optional().describe("Ek header'lar (örn. storefrontcode)"),
      dryRun: z.boolean().default(false),
      maxResponseChars: z.number().int().min(1000).max(500000).default(40000).describe("Yanıt bu uzunluktan sonra kırpılır (çoklu mağazada mağaza başına)"),
    },
    annotations: { readOnlyHint: false, destructiveHint: true, openWorldHint: true },
  },
  async ({ operationId, store, maxResponseChars, ...input }) => {
    const op = findOperation(operationId);
    if (!op) return fail(`"${operationId}" bulunamadı. Benzerleri: ${suggestOperations(operationId).join(", ") || "yok"}`);
    const cfg = loadConfig();
    try {
      if (store?.trim() === "*") {
        if (op.isWrite) return fail(`"*" (tüm mağazalar) sadece okuma işlemlerinde kullanılabilir; ${op.id} bir yazma işlemi. Mağazaları tek tek seçin.`);
        if (!cfg.stores.length) throw new UserError(`Hiç mağaza tanımlı değil. ${SETUP_HINT}`);
        const sections: string[] = [];
        let anyOk = false;
        for (const s of cfg.stores) {
          sections.push(`### ${s.alias}${s.label ? ` (${s.label})` : ""}\n${await runOne(op, s, cfg.timeoutMs, input, maxResponseChars).then(
            (r) => ((anyOk ||= r.ok), r.text),
            (e) => (e instanceof UserError ? `Hata: ${e.message}` : Promise.reject(e)),
          )}`);
        }
        const out = sections.join("\n\n");
        return anyOk ? text(out) : fail(out);
      }
      const s = cfg.stores.length || !input.dryRun ? resolveStore(cfg, store) : null;
      const r = await runOne(op, s, cfg.timeoutMs, input, maxResponseChars);
      return r.ok ? text(r.text) : fail(r.text);
    } catch (e) {
      if (e instanceof UserError) return fail(e.message);
      throw e;
    }
  },
);

async function runOne(op: Operation, s: Store | null, timeoutMs: number, input: CallInput, maxChars: number) {
  const r = await callOperation(op, s, timeoutMs, input);
  const parts = [
    `[mağaza: ${r.request.store}] ${r.request.method} ${r.request.url}`,
    r.status !== undefined ? `HTTP ${r.status}${r.ok ? "" : " (hata)"}` : "",
    ...r.notes.map((n) => `Not: ${n}`),
  ].filter(Boolean);
  if (input.dryRun) parts.push("", "İstek:", JSON.stringify(r.request, null, 2));
  else {
    let payload = typeof r.data === "string" ? r.data : JSON.stringify(r.data, null, 2);
    if (payload.length > maxChars) {
      payload = `${payload.slice(0, maxChars)}\n… yanıt kırpıldı (toplam ${payload.length} karakter). Daha küçük sayfa boyutu (size) kullanın veya maxResponseChars'ı artırın.`;
    }
    parts.push("", payload);
  }
  return { ok: r.ok, text: parts.join("\n") };
}

const transport = new StdioServerTransport();
await server.connect(transport);
{
  const cfg = loadConfig();
  console.error(`trendyol-mcp v${VERSION} çalışıyor (${catalog.operations.length} işlem, ${cfg.stores.length} mağaza, ${cfg.storesFile})`);
}
