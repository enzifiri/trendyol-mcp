---
updatedAt: 2026-07-20T08:17:08.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Buybox Kontrol Servisi

Bu servis üzerinden Trendyol'daki ürünlerinizin buybox bilgisini öğrenebilirsiniz. Servis response'unda barcode'ların:

* Buybox'taki sırasını
* Ürünün buybox fiyatını
* Ürünün birden fazla satıcısı olup olmadığı bilgisini elde edebileceksiniz.
* Bu servis üzerinden maksimum 10 barcode için sorgu atabilirsiniz. Servis limiti 1000 req/min'dir

### **POST** Ürün Buybox Kontrol Servisi

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/buybox-information`
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
`https://stageapigw.trendyol.com/integration/product/sellers/{sellerId}/products/buybox-information`
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
    "barcodes": [
        "1111111111111",
        "2222222222",
        "3333333333"
    ]
}
```

**Örnek Servis Cevabı**

```json
{
  "buyboxInfo": [
    {
      "barcode": "1111111111111",
      "buyboxOrder": 1,
      "buyboxPrice": 600,
      "hasMultipleSeller": false,
      "secondBuyboxPrice": 2999,
      "thirdBuyboxPrice": 3199
    },
    {
      "barcode": "2222222222",
      "buyboxOrder": 3,
      "buyboxPrice": 299.9,
      "hasMultipleSeller": true,
      "secondBuyboxPrice": 400,
      "thirdBuyboxPrice": 500
    },
    {
      "barcode": "3333333333",
      "buyboxOrder": 47,
      "buyboxPrice": 340,
      "hasMultipleSeller": true,
      "secondBuyboxPrice": 700,
      "thirdBuyboxPrice": 800
    }
  ]
}
```

<br />