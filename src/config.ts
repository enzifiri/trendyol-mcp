import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export type Environment = "prod" | "stage";

/** Kullanıcının kendi bilgisayarında tanımladığı bir Trendyol mağazası. */
export interface Store {
  alias: string;
  label?: string;
  sellerId: string;
  apiKey: string;
  apiSecret: string;
  environment: Environment;
  allowWrite: boolean;
  integratorName: string;
}

/** stores.json dosyasının biçimi. */
export interface StoresFile {
  defaultStore?: string;
  stores: Record<string, Partial<Omit<Store, "alias">>>;
}

export interface Config {
  stores: Store[];
  defaultStore?: string;
  storesFile: string;
  errors: string[];
  timeoutMs: number;
}

const env = (name: string) => process.env[name]?.trim() || undefined;
const truthy = (v?: string | boolean) => (typeof v === "boolean" ? v : /^(1|true|yes|evet)$/i.test(v ?? ""));

export function storesFilePath(): string {
  return env("TRENDYOL_STORES_FILE") ?? path.join(os.homedir(), ".trendyol-mcp", "stores.json");
}

export function readStoresFile(file = storesFilePath()): StoresFile {
  if (!fs.existsSync(file)) return { stores: {} };
  const parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  return { defaultStore: parsed.defaultStore, stores: parsed.stores ?? {} };
}

export function writeStoresFile(data: StoresFile, file = storesFilePath()) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", { mode: 0o600 });
  try {
    fs.chmodSync(file, 0o600); // Windows'ta etkisizdir
  } catch {
    /* yok say */
  }
}

export const normalizeAlias = (s: string) =>
  s
    .trim()
    .toLocaleLowerCase("tr")
    .replace(/[^a-z0-9ğüşöçı_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const cleanIntegrator = (s?: string) => (s ?? "").replace(/[^A-Za-z0-9]/g, "").slice(0, 30) || "SelfIntegration";

function toStore(alias: string, raw: Partial<Omit<Store, "alias">>, errors: string[], where: string): Store | null {
  const sellerId = raw.sellerId != null ? String(raw.sellerId).trim() : "";
  const apiKey = raw.apiKey?.trim() ?? "";
  const apiSecret = raw.apiSecret?.trim() ?? "";
  if (!sellerId || !apiKey || !apiSecret) {
    errors.push(`${where}: "${alias}" mağazasında sellerId/apiKey/apiSecret eksik, atlandı.`);
    return null;
  }
  const e = String(raw.environment ?? "prod").toLowerCase();
  return {
    alias,
    label: raw.label,
    sellerId,
    apiKey,
    apiSecret,
    environment: e === "stage" || e === "test" ? "stage" : "prod",
    allowWrite: raw.allowWrite !== undefined ? truthy(raw.allowWrite) : truthy(env("TRENDYOL_ALLOW_WRITE")),
    integratorName: cleanIntegrator(raw.integratorName ?? env("TRENDYOL_INTEGRATOR_NAME")),
  };
}

/**
 * Mağazaları şu kaynaklardan toplar (her çağrıda yeniden okunur, sunucuyu yeniden başlatmak gerekmez):
 *  1. stores.json dosyası (varsayılan ~/.trendyol-mcp/stores.json, TRENDYOL_STORES_FILE ile değiştirilebilir)
 *  2. TRENDYOL_STORES ortam değişkeni (aynı biçimde JSON)
 *  3. Tek mağaza için TRENDYOL_SELLER_ID / TRENDYOL_API_KEY / TRENDYOL_API_SECRET ("default" adıyla)
 */
export function loadConfig(): Config {
  const errors: string[] = [];
  const stores = new Map<string, Store>();
  let defaultStore: string | undefined;
  const file = storesFilePath();

  const addAll = (data: StoresFile, where: string) => {
    for (const [rawAlias, raw] of Object.entries(data.stores ?? {})) {
      const alias = normalizeAlias(rawAlias);
      const s = alias ? toStore(alias, raw ?? {}, errors, where) : null;
      if (s) stores.set(alias, s);
    }
    if (data.defaultStore) defaultStore = normalizeAlias(data.defaultStore);
  };

  try {
    addAll(readStoresFile(file), file);
  } catch (e) {
    errors.push(`${file} okunamadı: ${(e as Error).message}`);
  }

  const inline = env("TRENDYOL_STORES");
  if (inline) {
    try {
      const parsed = JSON.parse(inline);
      addAll(parsed.stores ? parsed : { stores: parsed }, "TRENDYOL_STORES");
    } catch (e) {
      errors.push(`TRENDYOL_STORES geçerli JSON değil: ${(e as Error).message}`);
    }
  }

  if (env("TRENDYOL_SELLER_ID") || env("TRENDYOL_API_KEY")) {
    const s = toStore(
      "default",
      { sellerId: env("TRENDYOL_SELLER_ID"), apiKey: env("TRENDYOL_API_KEY"), apiSecret: env("TRENDYOL_API_SECRET"), environment: env("TRENDYOL_ENV") as Environment },
      errors,
      "ortam değişkenleri",
    );
    if (s && !stores.has("default")) stores.set("default", s);
  }

  if (defaultStore && !stores.has(defaultStore)) {
    errors.push(`Varsayılan mağaza "${defaultStore}" tanımlı değil.`);
    defaultStore = undefined;
  }
  if (!defaultStore && stores.size === 1) defaultStore = [...stores.keys()][0];

  return { stores: [...stores.values()], defaultStore, storesFile: file, errors, timeoutMs: Number(env("TRENDYOL_TIMEOUT_MS")) || 60_000 };
}

export function findStore(cfg: Config, alias: string): Store | undefined {
  const a = normalizeAlias(alias);
  return cfg.stores.find((s) => s.alias === a) ?? cfg.stores.find((s) => s.sellerId === alias.trim());
}
