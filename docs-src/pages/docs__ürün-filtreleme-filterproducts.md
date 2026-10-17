---
updatedAt: 2026-09-15T13:34:06.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme V1 (filterProducts)

<Callout icon="❗️" theme="error">
  \*\*Aşağıdaki Ürün V1 endpoint servisleri **15 Ekim 2026 itibari ile kullanım dışı olacaktır.** Bu tarihe kadar [Product V2 servis geliştirmelerini](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-ak%C4%B1%C5%9F%C4%B1) yapmanız gerekmektedir.
</Callout>

### Onaylanmış Ürünlerin Alınması

Bu servis ile Trendyol mağazanızdaki ürünlerinizi listeleyebilirsiniz.

### **GET** filterProducts

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products`
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
`https://stageapigw.trendyol.com/integration/product/sellers/{sellerId}/products`
</NoLinkCallout>

**Giriş Parametreleri**

| Parametre     |                                          Açıklama                                          |     Tip |
| :------------ | :----------------------------------------------------------------------------------------: | ------: |
| approved      |    Ürün onaylı ya da onaysız kontrolü için kullanılır. Onaylı için true gönderilmelidir    | boolean |
| barcode       |                        Tekil barkod sorgulamak için gönderilmelidir                        |  string |
| startDate     |      Belirli bir tarihten sonraki ürünleri getirir. Timestamp olarak gönderilmelidir.      |    long |
| endDate       |       Belirli bir tarihten sonraki önceki getirir. Timestamp olarak gönderilmelidir.       |    long |
| page          |     Sadece belirtilen sayfadaki bilgileri döndürür. ( Maksimum 2500 değerini alabilir )    |     int |
| dateQueryType | Tarih filtresinin çalışacağı tarih CREATED\_DATE ya da LAST\_MODIFIED\_DATE gönderilebilir |  string |
| size          |                      Bir sayfada listelenecek maksimum adeti belirtir.                     |     int |
| supplierId    |                       İlgili tedarikçinin ID bilgisi gönderilmelidir                       |    long |
| stockCode     |                   İlgili tedarikçinin stock code bilgisi gönderilmelidir                   |  string |
| archived      |          Arşivlenmiş ürünleri listelemek için archived=true olarak gönderilmelidir         | boolean |
| productMainId |                  İlgili tedarikçinin productMainId bilgisi gönderilmelidir                 |  string |
| onSale        |       Satıştaki ürünleri listelemek için yalnızca onSale=true olarak gönderilmelidir       | boolean |
| rejected      |     Reddedilen ürünleri listelemek için rejected=true yada false olarak gönderilmelidir    | boolean |
| blacklisted   |   Black list ürünleri listelemek için blacklisted=true yada false olarak gönderilmelidir   | boolean |
| brandIds      |            Belirtilen brandId'ye sahip ürünleri listelemek için kullanılmalıdır.           |   array |

**Örnek Servis Cevabı**

`locationBasedDelivery` alanı `"ENABLED"`, `"DISABLED"` veya `null` değerini alabilir.

```json
{
  "totalElements": 42078,
  "totalPages": 4208,
  "page": 0,
  "size": 10,
  "content": [
    {
      "id": "1f8eef1aeef3cbfaad2f0ec207945d9f",
      "approved": true,
      "archived": false,
      "productCode": 75984627,
      "batchRequestId": "e86bd939-c950-4320-9fd2-1a05dd2d68b1-1593766542",
      "supplierId": 99999999,
      "createDateTime": 1593680142092,
      "lastUpdateDate": 1594382124384,
      "gender": "Kadın / Kız",
      "brand": "Trendyol Test",
      "barcode": "Trendyol123456",
      "title": "Elbise",
      "categoryName": "Giyim",
      "productMainId": "test1234",
      "description": "İpek Kumaş",
      "stockUnitType": "Adet",
      "quantity": 0,
      "listPrice": 100.0,
      "salePrice": 0.0,
      "cargoProviders": ["kargo firması kodu"], //barcode bazlı bir kargo firması tanımlanırsa onun değeri döner.
      "vatRate": 8,
      "dimensionalWeight": 3.0,
      "stockCode": "test1234",
      "origin": "AD",
      "locationBasedDelivery": "ENABLED",
      "lotNumber": "string",
      "channels": ["CORE", "LUXE"],// CORE ve LUXE değerlerini dönmektedir. Lüks segmentteki ürünler için LUXE dönmekte, diğer ürünler için CORE dönmektedir.İkisinde de satılıyorsa iki değer beraber dönmektedir.Yalnızca onaylı ürün için dolu dönmektedir.
      "deliveryOption": {
        "deliveryDuration": 1|0,
        "fastDeliveryType": "SAME_DAY_SHIPPING|FAST_DELIVERY"
      },
      "images": [
        {
          "url": "https://marketplace-supplier-media-center.oss-eu-central-1.aliyuncs.com/prod/119084/ccbc6ef9-9dad-4741-b865-641c2cfae2f6/IMG7783222200.jpg?x-oss-process=style/resized"
        },
        {
          "url": "https://marketplace-supplier-media-center.oss-eu-central-1.aliyuncs.com/prod/119084/9510d859-c136-4d3e-9216-fc404a291c88/IMG7783111200.jpg?x-oss-process=style/resized"
        }
      ],
      "attributes": [
        {
          "attributeId": 338,
          "attributeName": "Beden",
          "attributeValueId": 5639,
          "attributeValue": "36-38"
        },
        {
          "attributeId": 343,
          "attributeName": "Cinsiyet",
          "attributeValueId": 4295,
          "attributeValue": "Kadın / Kız"
        },
        {
          "attributeId": 346,
          "attributeName": "Yaş Grubu"
        },
        {
          "attributeId": 12,
          "attributeName": "Kol Tipi"
        },
        {
          "attributeId": 22,
          "attributeName": "Yaka"
        },
        {
          "attributeId": 250,
          "attributeName": "Stil"
        },
        {
          "attributeId": 33,
          "attributeName": "Desen"
        },
        {
          "attributeId": 179,
          "attributeName": "Kalıp"
        },
        {
          "attributeId": 101,
          "attributeName": "Cep"
        },
        {
          "attributeId": 2,
          "attributeName": "Boy / Ölçü"
        },
        {
          "attributeId": 200,
          "attributeName": "Kumaş Tipi"
        },
        {
          "attributeId": 102,
          "attributeName": "Cep Tipi"
        },
        {
          "attributeId": 47,
          "attributeName": "Renk",
          "attributeValue": "Pudra"
        }
      ],
      "platformListingId": "562eb0814ce594daec4de8c5b8cfa1a7",
      "stockId": "3f8ed81f39b3da035f84bb2dc9be7c74",
      "hasActiveCampaign": false,
      "locked": true,
      "productContentId": 42733553,
      "pimCategoryId": 2731,
      "brandId": 969490,
      "version": 2,
      "color": "Pudra",
      "size": "36-38",
      "lockedByUnSuppliedReason": false,
      "onsale": false,
      "productUrl": "https://www.trendyol.com/****"
    }
  ]
}
```