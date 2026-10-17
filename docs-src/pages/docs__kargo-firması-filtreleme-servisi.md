---
updatedAt: 2026-09-15T06:39:34.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kargo Firması Filtreleme Servisi

### **GET&#x20;**&#x43;argo Providers

* Method: `GET`
* Kullanılabilir kargo sağlayıcılarını (`code` / `name`) olarak listeler. Dönen `code` değerlerini ürün create/update isteklerindeki `cargoProviders` alanında gönderebilirsiniz.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/lookup/cargo-providers](https://apigw.trendyol.com/integration/product/lookup/cargo-providers)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/lookup/cargo-providers](https://stageapigw.trendyol.com/integration/product/lookup/cargo-providers)
</NoLinkCallout>

<br />

### Örnek Servis Cevabı

```json
[
    {
        "code": "KOLAYGELSINMP",
        "name": "Kolay Gelsin"
    },
    {
        "code": "YKMP",
        "name": "Yurtiçi Kargo"
    },
    {
        "code": "SURATMP",
        "name": "Sürat Kargo"
    },
    {
        "code": "DHLECOMMP",
        "name": "DHL eCommerce"
    },
    {
        "code": "PTTMP",
        "name": "PTT Kargo"
    },
    {
        "code": "CEVAMP",
        "name": "CEVA Lojistik"
    }
]
```

<br />

### Alan açıklamaları

| Alan   | Tip      | Nullable | Açıklama                                                            |
| ------ | -------- | -------- | ------------------------------------------------------------------- |
| `code` | `string` | Hayır    | Kargo sağlayıcı kodu. `cargoProviders` alanına bu değer gönderilir. |
| `name` | `string` | Hayır    | Kargo sağlayıcının görünen adı.                                     |