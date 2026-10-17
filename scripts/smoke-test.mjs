// MCP sunucusunu ve mağaza CLI'sini dener. Geçici bir mağaza dosyası kullanır, gerçek API isteği göndermez.
// Kullanım: npm test
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "trendyol-mcp-test-"));
const storesFile = path.join(tmp, "stores.json");
const baseEnv = { ...process.env, TRENDYOL_STORES_FILE: storesFile };
for (const k of ["TRENDYOL_SELLER_ID", "TRENDYOL_API_KEY", "TRENDYOL_API_SECRET", "TRENDYOL_STORES", "TRENDYOL_ALLOW_WRITE"]) delete baseEnv[k];

let failed = 0;
const report = (ok, label, detail) => {
  if (!ok) failed++;
  console.log(`${ok ? "OK  " : "FAIL"} ${label}`);
  if (!ok && detail) console.log(String(detail).slice(0, 1500));
};

// ---- CLI ----
const cli = (...args) => {
  try {
    return { code: 0, out: execFileSync(process.execPath, ["dist/index.js", ...args], { env: baseEnv, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }) };
  } catch (e) {
    return { code: e.status, out: `${e.stdout}${e.stderr}` };
  }
};
let r = cli("stores", "list");
report(r.out.includes("Henüz mağaza yok"), "cli: boş liste", r.out);
r = cli("stores", "add", "Kozmetik Mağazam", "--seller-id", "111", "--api-key", "k1", "--api-secret", "s1", "--yes");
report(r.code === 0 && r.out.includes("kozmetik-mağazam"), "cli: mağaza ekle (1)", r.out);
r = cli("stores", "add", "elektronik", "--seller-id", "222", "--api-key", "k2", "--api-secret", "s2", "--allow-write", "evet", "--label", "Elektronik", "--yes");
report(r.code === 0, "cli: mağaza ekle (2)", r.out);
r = cli("stores", "add", "test", "--seller-id", "333", "--api-key", "k3", "--api-secret", "s3", "--env", "stage", "--yes");
report(r.code === 0, "cli: test mağazası ekle", r.out);
r = cli("stores", "list");
report(r.out.includes("kozmetik-mağazam") && r.out.includes("varsayılan") && r.out.includes("yazma açık") && r.out.includes("stage"), "cli: liste", r.out);
r = cli("stores", "remove", "yok");
report(r.code === 1, "cli: olmayan mağazayı sil → hata", r.out);
const saved = JSON.parse(fs.readFileSync(storesFile, "utf8"));
report(saved.defaultStore === "kozmetik-mağazam" && Object.keys(saved.stores).length === 3, "cli: dosya içeriği", JSON.stringify(saved));

// ---- MCP ----
const transport = new StdioClientTransport({ command: process.execPath, args: ["dist/index.js"], env: baseEnv, stderr: "pipe" });
const client = new Client({ name: "smoke-test", version: "0.0.0" });
await client.connect(transport);

async function check(name, args, expect, expectError = false) {
  const res = await client.callTool({ name, arguments: args });
  const t = res.content.map((c) => c.text).join("\n");
  report(!!res.isError === expectError && expect.every((e) => t.includes(e)), `${name} ${JSON.stringify(args).slice(0, 90)}`, t);
  return t;
}

const { tools } = await client.listTools();
console.log("Araçlar:", tools.map((t) => t.name).join(", "));

await check("trendyol_list_stores", {}, ["3 mağaza", "varsayılan: kozmetik-mağazam", "satıcı 222", "Enzifiri"]);
await check("trendyol_search_docs", { query: "stok fiyat güncelleme" }, ["updatePriceAndInventory"]);
await check("trendyol_search_docs", { query: "iade onaylama", kind: "operation" }, ["approveClaimLineItems"]);
await check("trendyol_read_doc", {}, ["2-authorization"]);
await check("trendyol_read_doc", { slug: "2-authorization" }, ["User-Agent", "SelfIntegration"]);
await check("trendyol_read_doc", { slug: "https://developers.trendyol.com/docs/3-canlı-test-ortam-bilgileri" }, ["stageapigw"]);
await check("trendyol_list_operations", { filter: "webhook" }, ["createWebhook", "deleteWebhook"]);
await check("trendyol_get_operation", { operationId: "createProducts" }, ["barcode*", "/product/sellers/{sellerId}/v2/products", "Örnek kod"]);
await check("trendyol_get_operation", { operationId: "createProduct" }, ["createProducts"], true);

// varsayılan mağaza
await check("trendyol_call_api", { operationId: "getShipmentPackages", query: { status: "Created", size: 50 }, dryRun: true }, [
  "[mağaza: kozmetik-mağazam]",
  "/order/sellers/111/orders?",
  "111 - SelfIntegration",
  "Basic ****",
]);
// satıcı ID ile mağaza seçimi
await check("trendyol_call_api", { operationId: "getShipmentPackages", store: "222", dryRun: true }, ["[mağaza: elektronik]", "/sellers/222/"]);
// tüm mağazalar
await check("trendyol_call_api", { operationId: "getShipmentPackages", store: "*", dryRun: true }, ["### kozmetik-mağazam", "### elektronik (Elektronik)", "### test", "stageapigw"]);
await check("trendyol_call_api", { operationId: "updatePriceAndInventory", store: "*", body: { items: [] } }, ["sadece okuma"], true);
// yazma koruması
await check("trendyol_call_api", { operationId: "updatePriceAndInventory", body: { items: [] } }, ["yazma işlemleri kapalıdır"], true);
await check("trendyol_call_api", { operationId: "updatePriceAndInventory", store: "elektronik", body: { items: [{ barcode: "x", quantity: 1 }] }, dryRun: true }, [
  "/inventory/sellers/222/products/price-and-inventory",
]);
// test ortamına özel işlem
await check("trendyol_call_api", { operationId: "createTestOrder", store: "elektronik", body: {} }, ["yalnızca test"], true);
await check("trendyol_call_api", { operationId: "createTestOrder", store: "test", body: {}, dryRun: true }, ["stageapigw", "333"]);
await check("trendyol_call_api", { operationId: "getQuestion", dryRun: true }, ["Eksik zorunlu alanlar", "id (path)"], true);
await check("trendyol_call_api", { operationId: "getBrands", store: "olmayan" }, ["adlı mağaza yok"], true);

await client.close();

// varsayılan yokken birden çok mağaza
r = cli("stores", "default", "elektronik");
report(r.code === 0 && JSON.parse(fs.readFileSync(storesFile, "utf8")).defaultStore === "elektronik", "cli: varsayılanı değiştir", r.out);
r = cli("stores", "remove", "kozmetik-mağazam");
report(r.code === 0 && !JSON.parse(fs.readFileSync(storesFile, "utf8")).stores["kozmetik-mağazam"], "cli: mağaza sil", r.out);

fs.rmSync(tmp, { recursive: true, force: true });
console.log(failed ? `\n${failed} test başarısız` : "\nTüm testler geçti");
process.exit(failed ? 1 : 0);
