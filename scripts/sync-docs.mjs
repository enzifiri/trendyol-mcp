// developers.trendyol.com dokümantasyonunu (llms.txt üzerinden) docs-src/ klasörüne indirir.
// Kullanım: npm run sync-docs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "docs-src");
const BASE = "https://developers.trendyol.com";
const UA = "Mozilla/5.0 (trendyol-mcp docs sync)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(encodeURI(url), { headers: { "User-Agent": UA } });
    if (res.ok) return res.text();
    if (res.status === 429 || res.status >= 500) {
      await sleep(attempt * 4000);
      continue;
    }
    throw new Error(`${res.status} ${url}`);
  }
  throw new Error(`retry limit ${url}`);
}

const llms = await get(`${BASE}/llms.txt`);
if (llms.includes("Hello there, human")) throw new Error("Cloudflare challenge döndü, daha sonra tekrar deneyin.");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, "pages"), { recursive: true });
fs.writeFileSync(path.join(outDir, "llms.txt"), llms);

const urls = [...llms.matchAll(/\((https:\/\/developers\.trendyol\.com\/[^)]+\.md)\)/g)].map((m) => m[1]);
const queue = [...new Set(urls)];
const failures = [];
let done = 0;

await Promise.all(
  [0, 1, 2].map(async () => {
    while (queue.length) {
      const url = queue.shift();
      const rel = url.replace(`${BASE}/`, "").replace(/\//g, "__");
      try {
        fs.writeFileSync(path.join(outDir, "pages", rel), await get(url));
      } catch (e) {
        failures.push(String(e.message));
      }
      done++;
      if (done % 25 === 0) console.error(`${done}/${urls.length}`);
      await sleep(400);
    }
  }),
);

console.error(`Bitti: ${urls.length - failures.length}/${urls.length} sayfa indirildi.`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
