import readline from "node:readline";
import { ATTRIBUTION_LINE } from "./attribution.js";
import { findOperation } from "./catalog.js";
import { callOperation, UserError } from "./client.js";
import { findStore, loadConfig, normalizeAlias, readStoresFile, storesFilePath, writeStoresFile, type StoresFile } from "./config.js";

const HELP = `Trendyol MCP — mağaza yönetimi

Kullanım:
  npx trendyol-mcp                         MCP sunucusunu başlatır (asistanlar bunu çalıştırır)
  npx trendyol-mcp stores add [ad]         Mağaza ekler/günceller (eksik bilgileri sorar)
  npx trendyol-mcp stores list             Tanımlı mağazaları listeler
  npx trendyol-mcp stores test [ad]        API bilgilerini Trendyol'a sorarak doğrular
  npx trendyol-mcp stores default <ad>     Varsayılan mağazayı belirler
  npx trendyol-mcp stores remove <ad>      Mağazayı siler
  npx trendyol-mcp stores path             Mağaza dosyasının yerini gösterir

"stores add" seçenekleri (verilmeyenler sorulur):
  --seller-id <id>  --api-key <key>  --api-secret <secret>
  --label "<görünen ad>"  --env prod|stage  --allow-write evet|hayir  --integrator <ad>
  --yes   eksik isteğe bağlı alanları sormadan varsayılanı kullanır

Bilgiler yalnızca bu bilgisayarda saklanır: ${storesFilePath()}
(TRENDYOL_STORES_FILE ortam değişkeniyle değiştirilebilir.)

${ATTRIBUTION_LINE}
`;

export async function runCli(argv: string[]): Promise<number> {
  const [group, sub, ...rest] = argv;
  if (!group || /^(-h|--help|help)$/.test(group)) {
    console.log(HELP);
    return 0;
  }
  if (group !== "stores") {
    console.error(`Bilinmeyen komut: ${group}\n\n${HELP}`);
    return 1;
  }
  const { positional, flags } = parseArgs(rest);
  try {
    switch (sub) {
      case "add":
        return await add(positional[0], flags);
      case "list":
      case "ls":
        return list();
      case "remove":
      case "rm":
        return remove(positional[0]);
      case "default":
        return setDefault(positional[0]);
      case "test":
        return await test(positional[0]);
      case "path":
        console.log(storesFilePath());
        return 0;
      default:
        console.log(HELP);
        return sub ? 1 : 0;
    }
  } catch (e) {
    console.error(`Hata: ${(e as Error).message}`);
    return 1;
  }
}

function parseArgs(args: string[]) {
  const positional: string[] = [];
  const flags: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith("--")) {
      const [k, inline] = a.slice(2).split("=", 2);
      if (inline !== undefined) flags[k] = inline;
      else if (args[i + 1] && !args[i + 1].startsWith("--")) flags[k] = args[++i];
      else flags[k] = "true";
    } else positional.push(a);
  }
  return { positional, flags };
}

// ---- etkileşimli sorular ------------------------------------------------------------------

function ask(question: string, { hidden = false, def = "" } = {}): Promise<string> {
  if (!process.stdin.isTTY) throw new Error(`"${question}" için değer gerekli (etkileşimsiz modda --bayrak olarak verin).`);
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    const prompt = `${question}${def ? ` [${def}]` : ""}: `;
    if (hidden) {
      // Gizli girişte yazılan karakterleri ekrana basma.
      (rl as unknown as { _writeToOutput: (s: string) => void })._writeToOutput = (s: string) => {
        if (s.includes(prompt)) process.stdout.write(prompt);
        else if (/\r|\n/.test(s)) process.stdout.write("\n");
        else process.stdout.write("*".repeat(s.length));
      };
    }
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer.trim() || def);
    });
  });
}

const yes = (s: string) => /^(e|evet|y|yes|true|1)$/i.test(s.trim());

async function add(aliasArg: string | undefined, f: Record<string, string>): Promise<number> {
  const data = readStoresFile();
  const quick = f.yes === "true";
  const alias = normalizeAlias(aliasArg ?? (await ask("Mağaza kısa adı (örn. magaza1, kozmetik)")));
  if (!alias) throw new Error("Geçerli bir mağaza adı girin.");
  const prev = data.stores[alias] ?? {};
  if (Object.keys(prev).length) console.log(`"${alias}" zaten var; boş bırakılan alanlar korunur.`);

  const req = async (flag: string, q: string, cur?: string, hidden = false) => {
    const v = f[flag] ?? (await ask(q, { hidden, def: hidden && cur ? "" : (cur ?? "") }));
    const out = v || cur || "";
    if (!out) throw new Error(`${q} zorunlu.`);
    return out;
  };
  const opt = async (flag: string, q: string, def: string) => f[flag] ?? (quick ? def : await ask(q, { def }));

  const sellerId = await req("seller-id", "Satıcı ID (Satıcı Paneli > Hesap Bilgilerim > Entegrasyon Bilgileri)", prev.sellerId);
  const apiKey = await req("api-key", "API Key", prev.apiKey, true);
  const apiSecret = await req("api-secret", "API Secret", prev.apiSecret, true);
  const label = await opt("label", "Görünen ad (isteğe bağlı)", prev.label ?? "");
  const envRaw = await opt("env", "Ortam (prod / stage)", prev.environment ?? "prod");
  const allow = await opt("allow-write", "Asistan bu mağazada değişiklik yapabilsin mi? (ürün/stok/fiyat/sipariş) evet/hayir", prev.allowWrite ? "evet" : "hayir");
  const integrator = await opt("integrator", "User-Agent entegratör adı", prev.integratorName ?? "SelfIntegration");

  data.stores[alias] = {
    ...(label ? { label } : {}),
    sellerId,
    apiKey,
    apiSecret,
    environment: /^(stage|test)$/i.test(envRaw) ? "stage" : "prod",
    allowWrite: yes(allow),
    integratorName: integrator,
  };
  if (!data.defaultStore || Object.keys(data.stores).length === 1) data.defaultStore = alias;
  writeStoresFile(data);
  console.log(`\n✓ "${alias}" kaydedildi → ${storesFilePath()}`);
  console.log(`  Toplam ${Object.keys(data.stores).length} mağaza, varsayılan: ${data.defaultStore}`);
  console.log(`  Doğrulamak için: npx -y trendyol-mcp stores test ${alias}`);
  return 0;
}

function list(): number {
  const cfg = loadConfig();
  cfg.errors.forEach((e) => console.error(`! ${e}`));
  if (!cfg.stores.length) {
    console.log(`Henüz mağaza yok. Eklemek için: npx -y trendyol-mcp stores add`);
    return 0;
  }
  for (const s of cfg.stores) {
    const flags = [s.environment, s.allowWrite ? "yazma açık" : "salt okunur", s.alias === cfg.defaultStore ? "varsayılan" : ""].filter(Boolean);
    console.log(`- ${s.alias}${s.label ? ` (${s.label})` : ""} — satıcı ${s.sellerId} · ${flags.join(" · ")}`);
  }
  return 0;
}

function remove(alias?: string): number {
  if (!alias) throw new Error("Silinecek mağaza adını verin.");
  const data: StoresFile = readStoresFile();
  const a = normalizeAlias(alias);
  if (!data.stores[a]) throw new Error(`"${a}" bulunamadı.`);
  delete data.stores[a];
  if (data.defaultStore === a) data.defaultStore = Object.keys(data.stores)[0];
  writeStoresFile(data);
  console.log(`✓ "${a}" silindi.`);
  return 0;
}

function setDefault(alias?: string): number {
  if (!alias) throw new Error("Mağaza adını verin.");
  const data = readStoresFile();
  const a = normalizeAlias(alias);
  if (!data.stores[a]) throw new Error(`"${a}" bulunamadı.`);
  data.defaultStore = a;
  writeStoresFile(data);
  console.log(`✓ Varsayılan mağaza: ${a}`);
  return 0;
}

async function test(alias?: string): Promise<number> {
  const cfg = loadConfig();
  const targets = alias ? [findStore(cfg, alias)].filter((s) => !!s) : cfg.stores;
  if (!targets.length) throw new Error(alias ? `"${alias}" bulunamadı.` : "Tanımlı mağaza yok.");
  const op = findOperation("getShipmentPackages")!;
  let bad = 0;
  for (const s of targets) {
    try {
      const r = await callOperation(op, s, cfg.timeoutMs, { query: { size: 1 } });
      if (r.ok) console.log(`✓ ${s.alias}: bağlantı başarılı (${s.environment})`);
      else {
        bad++;
        console.log(`✗ ${s.alias}: HTTP ${r.status} ${r.notes.join(" ")}`);
      }
    } catch (e) {
      bad++;
      console.log(`✗ ${s.alias}: ${e instanceof UserError ? e.message : (e as Error).message}`);
    }
  }
  return bad ? 1 : 0;
}
