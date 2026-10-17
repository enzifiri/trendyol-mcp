# Trendyol MCP

> **Enzifiri** tarafından geliştirilmiştir — https://github.com/enzifiri
> Ücretsiz ve açık kaynaklıdır. Resmi bir Trendyol ürünü değildir; Trendyol ile bağlantısı yoktur.

Trendyol Partner (Marketplace) API'si için bir [Model Context Protocol](https://modelcontextprotocol.io) sunucusu.
Claude, Cursor, VS Code Copilot gibi yapay zekâ asistanlarına şunları kazandırır:

- **Tüm geliştirici dokümantasyonu:** [developers.trendyol.com](https://developers.trendyol.com)'daki 96 kılavuz sayfası ve 93 API işleminin tam OpenAPI tanımı pakete gömülüdür. API anahtarı olmadan da arama yapılabilir, şemalar ve örnek kod görülebilir.
- **Çoklu mağaza:** 1 ya da 20 mağaza fark etmez. Her mağazayı kendi bilgisayarınızda bir kez tanımlarsınız, asistan hangi mağazada işlem yapacağını seçer. Okuma işlemleri tüm mağazalarda tek seferde de çalıştırılabilir.
- **93 API işleminin tamamı:** ürün, stok/fiyat, sipariş, iade, fatura, webhook, soru-cevap, finans, adres, ortak etiket ve ihracat (AutoFT) işlemleri tek bir araçla yapılabilir. Kimlik doğrulama, zorunlu `User-Agent` ve `sellerId` otomatik eklenir.
- **Güvenli varsayılanlar:** API bilgileri pakette ya da sohbette yer almaz, sadece sizin bilgisayarınızda saklanır. Canlı mağazalarda değişiklik yapma izni siz açmadıkça kapalıdır. `dryRun` ile istek göndermeden önce görülebilir.

## Kurulum (2 adım)

Node.js 18.17 veya üstü gerekir ([nodejs.org](https://nodejs.org)).

### 1. Mağazalarınızı ekleyin

Terminalde çalıştırın. Program Satıcı ID, API Key ve API Secret bilgilerini sorar (Satıcı Paneli > Hesap Bilgilerim > Entegrasyon Bilgileri):

```bash
npx -y trendyol-mcp stores add
```

Birden fazla mağazanız varsa her biri için tekrarlayın. Bilgilerin doğru olup olmadığını kontrol etmek için:

```bash
npx -y trendyol-mcp stores test
```

### 2. Asistanınıza ekleyin

**Claude Code:**

```bash
claude mcp add trendyol -- npx -y trendyol-mcp
```

**Claude Desktop** (`claude_desktop_config.json`), **Cursor** (`.cursor/mcp.json`), **VS Code** (`.vscode/mcp.json`, burada anahtar `"servers"`) için:

```json
{
  "mcpServers": {
    "trendyol": {
      "command": "npx",
      "args": ["-y", "trendyol-mcp"]
    }
  }
}
```

Bu kadar. Ayar dosyasına API bilgisi yazmanız gerekmez. Sonradan mağaza ekleyip çıkardığınızda asistanı yeniden başlatmanız da gerekmez.

## Mağaza yönetimi

```bash
npx -y trendyol-mcp stores add [ad]        # ekle / güncelle
npx -y trendyol-mcp stores list            # listele
npx -y trendyol-mcp stores test [ad]       # bağlantıyı doğrula (ad verilmezse hepsi)
npx -y trendyol-mcp stores default <ad>    # varsayılan mağaza
npx -y trendyol-mcp stores remove <ad>     # sil
npx -y trendyol-mcp stores path            # dosyanın yeri
```

Komut sormadan da çalışabilir (betikler için):

```bash
npx -y trendyol-mcp stores add kozmetik --seller-id 123456 --api-key KEY --api-secret SECRET --label "Kozmetik" --env prod --allow-write hayir --yes
```

| Seçenek | Açıklama |
|---|---|
| `--env prod\|stage` | Canlı veya test ortamı. Test ortamı bilgileri canlıdan farklıdır ve IP yetkilendirmesi gerektirir. |
| `--allow-write evet\|hayir` | Asistan bu mağazada ürün, stok, fiyat, sipariş gibi verileri değiştirebilsin mi? Varsayılan: `hayir` |
| `--integrator <ad>` | User-Agent'taki entegratör adı. Varsayılan `SelfIntegration` → `"<satıcıId> - SelfIntegration"` |
| `--label "<ad>"` | Görünen ad |

Mağazalar `~/.trendyol-mcp/stores.json` dosyasında saklanır (Windows: `C:\Users\<kullanıcı>\.trendyol-mcp\stores.json`). Dosyayı elle de düzenleyebilirsiniz:

```json
{
  "defaultStore": "kozmetik",
  "stores": {
    "kozmetik":   { "label": "Kozmetik", "sellerId": "123456", "apiKey": "...", "apiSecret": "...", "environment": "prod", "allowWrite": false },
    "elektronik": { "sellerId": "654321", "apiKey": "...", "apiSecret": "...", "environment": "prod", "allowWrite": true },
    "test":       { "sellerId": "999", "apiKey": "...", "apiSecret": "...", "environment": "stage", "allowWrite": true }
  }
}
```

> Bu dosyayı kimseyle paylaşmayın, GitHub'a yüklemeyin.

### Gelişmiş: ortam değişkenleri

| Değişken | Açıklama |
|---|---|
| `TRENDYOL_STORES_FILE` | Mağaza dosyasının yolu (varsayılan `~/.trendyol-mcp/stores.json`) |
| `TRENDYOL_STORES` | Mağazaları dosya yerine JSON olarak verir (sunucu/CI ortamları için) |
| `TRENDYOL_SELLER_ID`, `TRENDYOL_API_KEY`, `TRENDYOL_API_SECRET`, `TRENDYOL_ENV` | Tek mağaza için kısa yol (`default` adıyla eklenir) |
| `TRENDYOL_ALLOW_WRITE` | `allowWrite` belirtilmemiş mağazalar için varsayılan |
| `TRENDYOL_TIMEOUT_MS` | İstek zaman aşımı, varsayılan 60000 |

## Araçlar

| Araç | Ne yapar | Mağaza gerekir mi? |
|---|---|---|
| `trendyol_search_docs` | Kılavuz ve API işlemlerinde arama (Türkçe karakter duyarsız) | hayır |
| `trendyol_read_doc` | Bir dokümantasyon sayfasını markdown olarak okur, ya da tüm sayfaları listeler | hayır |
| `trendyol_list_operations` | 93 API işlemini bölümlere göre listeler | hayır |
| `trendyol_get_operation` | Bir işlemin URL, parametre, istek/yanıt şeması, örnekleri ve örnek TypeScript kodu | hayır |
| `trendyol_list_stores` | Tanımlı mağazalar (API bilgileri gösterilmez) | hayır |
| `trendyol_call_api` | Herhangi bir işlemi `operationId` ve `store` ile çalıştırır. `store: "*"` verilirse okuma işlemi tüm mağazalarda çalışır, `dryRun` desteklenir. | evet |

## Örnek kullanım

Asistanınıza doğal dille sorabilirsiniz:

- "Tüm mağazalarımda bugün gelen yeni siparişleri listele."
- "Elektronik mağazasında X barkodlu ürünün stoğunu 50 yap." (sadece yazma izni açık mağazada çalışır)
- "Trendyol'da stok ve fiyat nasıl güncellenir? Örnek TypeScript kodu yaz."
- "createProducts için zorunlu alanlar neler? Elimdeki ürün JSON'unu buna dönüştür."
- "Kozmetik mağazasındaki cevaplanmamış müşteri sorularını getir ve cevap taslakları hazırla."

## Notlar

- **Rate limit:** aynı uç noktaya 10 saniyede en fazla 50 istek gönderilebilir. 429 alınırsa sunucu bekleyip otomatik olarak tekrar dener. Ürün servislerinin grup bazlı limitleri için asistana `1-servis-limitleri` sayfasını okutabilirsiniz.
- **Test ortamı** IP yetkilendirmesi gerektirir. Yetki yoksa 503 hatası döner. Ayrıntılar `3-canlı-test-ortam-bilgileri` sayfasında.
- **Toplu işlemler** (ürün oluşturma, stok/fiyat güncelleme) bir `batchRequestId` döndürür. İşlemin sonucu bu ID ile `getBatchRequestResult` üzerinden sorgulanır.
- Büyük yanıtlar (örneğin kategori ağacı) `maxResponseChars` sınırında kırpılır.

## Geliştirme

```bash
git clone https://github.com/enzifiri/trendyol-mcp.git
cd trendyol-mcp
npm install
npm test            # derler, CLI ve tüm MCP araçlarını dener (gerçek istek göndermez)
npm run inspect     # MCP Inspector ile arayüzden deneme
npm run update-docs # developers.trendyol.com'dan dokümanları yeniden indirip kataloğu üretir
```

```
src/index.ts         Giriş: argümansız → MCP sunucusu, "stores …" → CLI
src/server.ts        MCP araç tanımları
src/cli.ts           Mağaza yönetimi komutları
src/config.ts        Mağaza dosyası ve ortam değişkenleri
src/client.ts        Trendyol HTTP istemcisi (auth, User-Agent, retry, yazma koruması)
src/catalog.ts       Doküman kataloğu, arama, şema özetleme, örnek kod
src/attribution.ts   Geliştirici bilgisi
scripts/             Doküman indirme, katalog üretme, duman testi
data/catalog.json    Üretilmiş katalog (96 kılavuz + 93 işlem)
```

## Lisans

MIT, ayrıntılar için [LICENSE](LICENSE) dosyasına bakın. Dokümantasyon içeriğinin hakları Trendyol'a aittir. Bu proje, geliştiricilerin erişimini kolaylaştırmak için yalnızca bir kopyasını içerir.
