---
updatedAt: 2026-10-12T08:22:03.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Güncelleme - Onaysız Ürün v2

Bu servis ile Trendyol mağazanızda bulunan onaysız ürünleri güncelleyebilirsiniz.

* Bu servis üzerinden sadece ürün bilgileri güncellenmektedir.
* Güncelleme isteklerinde bir alanı null olarak göndermek (Örnek; title: null), o alana ait mevcut değerin ürün üzerinden tamamen silinmesine neden olur. Verisinin silinmesini veya değişmesini istemediğiniz alanları istek gövdesine hiç eklemeyiniz.
* Yeni kategori ve kategori özellik değerleri eklenebileceği sebebiyle ürün güncellemelerinizden önce kullandığınız kategori, kategori özellik ve kategori özellik değerlerinin güncel olup olmadığını getCategoryTree, getCategoryAttributes, getCategoryAttributesValues servislerinden kontrol etmenizi öneririz.
* Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.

<Callout icon="❗️" theme="error">
  **TOPLU İŞLEM KONTROLÜ**

  Ürün güncelleme işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu [getBatchRequestResult](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1) servisi üzerinden kontrol etmelisiniz.
</Callout>

### **POST** updateProducts

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved-bulk-update](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved-bulk-update)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved-bulk-update](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved-bulk-update)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "items": [
    {
        "barcode": "barcodelarrtest1",
        "title": "string",
        "description": "string",
        "productMainId": "string",
        "brandId": 1,
        "categoryId": 1,
        "stockCode": "string",
        "origin": "AD",
        "dimensionalWeight": 0,
        "vatRate": 0,
        "deliveryOption": {
            "deliveryDuration": 0
        },
        "locationBasedDelivery": "string", //"ENABLED", "DISABLED" yada null değerlerini alabilir
        "lotNumber": "string",
        "cargoProviders": ["kargo firması kodu"], //barcode bazlı bir kargo firması tanımlanmak istenirse gönderilebilir.
        "shipmentAddressId": 0,
        "returningAddressId": 0,
        "images": [
            {
                "url": "trendyol.com/test.jpeg"
            }
        ],
        "attributes": [
            {
                "attributeId": 1,
                "attributeValueId": 1
            },
            {
                "attributeId": 2,
                "customAttributeValue": "String"
            }
        ]
    }
]
}
```