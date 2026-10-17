---
updatedAt: 2026-07-20T08:38:03.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Silme

Trendyol sisteminden ürün silme işlemi hakkında detaylı bilgi ve örnekler.

Ürünleriniz Trendyol sisteminden kaldırırken bu metod kullanılmaktadır. Tekli ve çoklu ürün silme işlemini desteklemektedir. Onay bekleyen ürünlerinizi ve **arşivde bir günden fazla bulunmuş**, Trendyol tarafından satışa durdurulmamış onaylı ürünlerinizi silebilirsiniz.

* Delete methodunu kullanmanız gerekmektedir.

<Callout icon="❗️" theme="error">
  ###

  **TOPLU İŞLEM KONTROLÜ**

  Ürün silme işlemi sonrasında response içerisinde yer alan batchRequestId ile yaptığınız işleminin durumunu **[getBatchRequestResult](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1)** servisi üzerinden kontrol etmeniz gerekmektedir.
</Callout>

### **DELETE**

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products`
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
`https://stageapigw.trendyol.com/integration/product/sellers/{sellerId}/products`
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
    "items":[
        {
            "barcode": "test123"
        },
        {
            "barcode": "test456"
        }
    ]
}
```

**Örnek Servis Cevabı**

```json
{
    "batchRequestId": "c0bd29e1-003d-455a-9d74-3a00d868ce9d-1678194595"
}
```

<br />