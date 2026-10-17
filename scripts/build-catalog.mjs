// docs-src/ içindeki ham dokümantasyondan data/catalog.json üretir.
// - Kılavuz sayfaları (docs/*) markdown olarak saklanır.
// - API referans sayfalarındaki gömülü OpenAPI tanımları ayrıştırılır, $ref'ler çözülür.
// Kullanım: npm run build-catalog
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "docs-src");
const pagesDir = path.join(srcDir, "pages");
const BASE = "https://developers.trendyol.com";

// POST/PUT olsa da veri değiştirmeyen (sadece sorgulama yapan) işlemler.
const READ_ONLY_NON_GET = new Set(["getBuyboxInformation", "autoft-get-categories-by-barcodes"]);

// ---- llms.txt: sayfa -> bölüm hiyerarşisi -------------------------------------------------
const llms = fs.readFileSync(path.join(srcDir, "llms.txt"), "utf8");
const meta = new Map(); // fileName -> { section, title, description }
{
  let h2 = "";
  const stack = [];
  for (const line of llms.split(/\r?\n/)) {
    if (line.startsWith("## ")) {
      h2 = line.slice(3).replace(/^(Guides|API Reference):\s*/, "").replace(/^documentation$/, "Kılavuzlar").trim();
      stack.length = 0;
      continue;
    }
    const m = line.match(/^(\s*)- (.*)$/);
    if (!m) continue;
    const depth = m[1].length / 2;
    const link = m[2].match(/^\[(.+?)\]\((https:[^)]+)\)(?::\s*(.*))?$/);
    stack.length = depth;
    if (!link) {
      stack[depth] = m[2].trim();
      continue;
    }
    const file = link[2].replace(`${BASE}/`, "").replace(/\//g, "__");
    meta.set(file, {
      title: link[1],
      description: (link[3] || "").replace(/\*\*/g, "").trim(),
      section: [h2, ...stack.slice(0, depth)].filter(Boolean).join(" > "),
    });
  }
}

// ---- yardımcılar ---------------------------------------------------------------------------
const squash = (s) => String(s || "").replace(/\s+/g, " ").trim();
const stripFrontmatter =(md) => md.replace(/^---[\s\S]*?\n---\s*\n/, "").trim();

function resolveRefs(node, spec, seen = []) {
  if (Array.isArray(node)) return node.map((n) => resolveRefs(n, spec, seen));
  if (!node || typeof node !== "object") return node;
  if (typeof node.$ref === "string") {
    const ref = node.$ref;
    if (seen.includes(ref)) return { $circular: ref.split("/").pop() };
    const target = ref
      .replace(/^#\//, "")
      .split("/")
      .reduce((o, k) => (o ? o[decodeURIComponent(k.replace(/~1/g, "/").replace(/~0/g, "~"))] : undefined), spec);
    if (target === undefined) return { $unresolved: ref };
    const { $ref, ...rest } = node;
    return { ...resolveRefs(target, spec, [...seen, ref]), ...resolveRefs(rest, spec, seen) };
  }
  const out = {};
  for (const [k, v] of Object.entries(node)) out[k] = resolveRefs(v, spec, seen);
  return out;
}

// ---- sayfaları işle ------------------------------------------------------------------------
const guides = [];
const operations = [];
const problems = [];

for (const file of fs.readdirSync(pagesDir).sort()) {
  const raw = fs.readFileSync(path.join(pagesDir, file), "utf8");
  const md = stripFrontmatter(raw);
  const info = meta.get(file) || {};
  const urlPath = file.replace(/__/g, "/").replace(/\.md$/, "");
  const url = `${BASE}/${urlPath}`;
  const updatedAt = (raw.match(/updatedAt:\s*(\S+)/) || [])[1] || null;
  const heading = (md.match(/^#\s+(.+)$/m) || [])[1]?.trim();

  if (!file.startsWith("reference__")) {
    guides.push({
      slug: urlPath.split("/").pop(),
      url,
      title: info.title || heading || urlPath,
      section: info.section || "",
      description: info.description || "",
      updatedAt,
      markdown: md,
    });
    continue;
  }

  const m = md.match(/# OpenAPI definition\s*```json\s*([\s\S]*?)```/);
  if (!m) {
    problems.push(`OpenAPI yok: ${file}`);
    continue;
  }
  const spec = JSON.parse(m[1]);
  const intro = md.slice(0, m.index).replace(/^#\s+.+$/m, "").trim();
  for (const [p, item] of Object.entries(spec.paths || {})) {
    const pathParams = item.parameters || [];
    for (const [method, op] of Object.entries(item)) {
      if (!["get", "post", "put", "delete", "patch"].includes(method)) continue;
      const servers = (op.servers || item.servers || spec.servers || []).map((s) => s.url);
      const prod = servers.find((s) => !s.includes("stageapigw")) || null;
      const stage = servers.find((s) => s.includes("stageapigw")) || null;
      const resolved = resolveRefs(
        { parameters: [...pathParams, ...(op.parameters || [])], requestBody: op.requestBody, responses: op.responses },
        spec,
      );
      const upper = method.toUpperCase();
      operations.push({
        id: op.operationId,
        method: upper,
        path: p,
        summary: op.summary || info.title || "",
        description: [op.description, intro && !squash(op.description).includes(squash(intro)) ? intro : ""].filter(Boolean).join("\n\n"),
        api: spec.info?.title || "",
        section: info.section || "",
        tags: op.tags || [],
        docUrl: url,
        updatedAt,
        servers: { prod, stage },
        isWrite: upper !== "GET" && !READ_ONLY_NON_GET.has(op.operationId),
        deprecated: !!op.deprecated,
        parameters: resolved.parameters,
        requestBody: resolved.requestBody || null,
        responses: resolved.responses || {},
      });
    }
  }
}

const ids = operations.map((o) => o.id);
const dups = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dups.length) problems.push(`Tekrarlanan operationId: ${dups.join(", ")}`);

const catalog = {
  source: BASE,
  generatedAt: new Date().toISOString(),
  guides,
  operations,
};
fs.mkdirSync(path.join(root, "data"), { recursive: true });
fs.writeFileSync(path.join(root, "data", "catalog.json"), JSON.stringify(catalog));
const size = (fs.statSync(path.join(root, "data", "catalog.json")).size / 1024).toFixed(0);
console.error(`Katalog: ${guides.length} kılavuz, ${operations.length} işlem, ${size} KB`);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exitCode = 1;
}
