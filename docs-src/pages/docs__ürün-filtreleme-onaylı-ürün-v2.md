---
updatedAt: 2026-09-11T11:38:03.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Onaylı Ürün v2

Bu servis ile Trendyol mağazanızdaki onaylı ürünlerinizi listeleyebilirsiniz.

* Bu servise yapılan isteklere "nextPageToken" bilgisi eklenmiştir. Yapmış olduğunuz istekte request?page=10\&size=100 yazmanız halinde 10. sayfadaki 100 content response olarak döner Sonraki isteğinizde request?size=100≠xtPageToken=TOKEN yazmanız halinde sonraki sayfa olan 11. sayfadaki 100 content response olarak döner (nextPageToken isteği 10.000'den fazla onaylı content olması halinde kullanılabilir.)
* Page x size maksimum 10.000 değerini alabilir.

### **GET** filterProducts

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved)
</NoLinkCallout>

**Giriş Parametreleri**

<Table align={["left","center","right"]}>
  <thead>
    <tr>
      <th>
        Parametre
      </th>

      <th style={{ textAlign: "center" }}>
        Açıklama
      </th>

      <th style={{ textAlign: "right" }}>
        Tip
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        barcode
      </td>

      <td style={{ textAlign: "center" }}>
        Tekil barkod sorgulamak için gönderilmelidir
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        barcodes
      </td>

      <td style={{ textAlign: "center" }}>
        Çoklu barkod sorgulamak için gönderilmelidir (maksimum 50 barcode gönderilebilir)
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td style={{ textAlign: "center" }}>
        Belirli bir tarihten sonraki ürünleri getirir. Timestamp olarak gönderilmelidir.
      </td>

      <td style={{ textAlign: "right" }}>
        long
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td style={{ textAlign: "center" }}>
        Belirli bir tarihten sonraki önceki getirir. Timestamp olarak gönderilmelidir.
      </td>

      <td style={{ textAlign: "right" }}>
        long
      </td>
    </tr>

    <tr>
      <td>
        page
      </td>

      <td style={{ textAlign: "center" }}>
        Sadece belirtilen sayfadaki bilgileri döndürür.
      </td>

      <td style={{ textAlign: "right" }}>
        int
      </td>
    </tr>

    <tr>
      <td>
        dateQueryType
      </td>

      <td style={{ textAlign: "center" }}>
        Tarih filtresinin çalışacağı tarih VARIANT_CREATED_DATE, VARIANT_MODIFIED_DATE, CONTENT_MODIFIED_DATE olarak gönderilebilir.

        - VARIANT_CREATED_DATE: Satıcının kendi barkoduyla ürünü açtığı tarih. Response body'deki "sellerCreatedDate"e denk gelmektedir.
        - VARIANT_MODIFIED_DATE: Barkodun satıcı tarafından en son güncellendiği tarih. Response body'deki "sellerModifiedDate"e denk gelmektedir.
        - CONTENT_MODIFIED_DATE: Content üzerine yapılan en son değişikliğin tarihi. Response body'deki "lastModifiedDate"e denk gelmektedir.
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        size
      </td>

      <td style={{ textAlign: "center" }}>
        Bir sayfada listelenecek maksimum adeti belirtir. Maksimum 100 değerini alabilir.
      </td>

      <td style={{ textAlign: "right" }}>
        int
      </td>
    </tr>

    <tr>
      <td>
        supplierId
      </td>

      <td style={{ textAlign: "center" }}>
        İlgili tedarikçinin ID bilgisi gönderilmelidir
      </td>

      <td style={{ textAlign: "right" }}>
        long
      </td>
    </tr>

    <tr>
      <td>
        stockCode
      </td>

      <td style={{ textAlign: "center" }}>
        İlgili tedarikçinin stock code bilgisi gönderilmelidir
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        origin
      </td>

      <td style={{ textAlign: "center" }}>
        Ürün menşei değerleri
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        productMainId
      </td>

      <td style={{ textAlign: "center" }}>
        İlgili tedarikçinin productMainId bilgisi gönderilmelidir
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        brandIds
      </td>

      <td style={{ textAlign: "center" }}>
        Belirtilen brandId'ye sahip ürünleri listelemek için kullanılmalıdır.
      </td>

      <td style={{ textAlign: "right" }}>
        array
      </td>
    </tr>

    <tr>
      <td>
        status
      </td>

      <td style={{ textAlign: "center" }}>
        Status alanı archived, blacklisted, locked, onSale, notOnSale değerlerini alabilir
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        nextPageToken
      </td>

      <td style={{ textAlign: "center" }}>
        10.000 adet content'den sonraki contentleri almak için kullanılmalıdır
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        contentId
      </td>

      <td style={{ textAlign: "center" }}>
        Tekil contentId sorgulamak için gönderilmelidir
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>

    <tr>
      <td>
        orderByDirection
      </td>

      <td style={{ textAlign: "center" }}>
        "SellerCreatedDate" alanına göre ASC/DESC olarak gönderilebilir.<br />ASC: Eskiden yeniye doğru sıralar.<br />DESC: Yeniden eskiye doğru sıralar.
      </td>

      <td style={{ textAlign: "right" }}>
        string
      </td>
    </tr>
  </tbody>
</Table>

**Örnek Servis Cevabı**

```json
{
"totalElements": 1,
"totalPages": 1,
"page": 0,
"size": 20,
"nextPageToken": "eyJzb3J0IjpbMTI3MTU4MTVdfQ==",
"content": [
    {
        "contentId": 12715815,
        "productMainId": "12613876842A60",
        "brand": {
            "id": 315675,
            "name": "GUEYA"
        },
        "category": {
            "id": 91266,
            "name": "DOKUNMAYIN Attribute Attribute"
        },
        "creationDate": 1760531038063,
        "lastModifiedDate": 1760938781669,
        "lastModifiedBy": "anilcan.gul@trendyol.com",
        "title": "Açık Gri T-",
        "description": "değişti değişti2",
        "images": [
            {
                "url": "/mediacenter-stage3/stage/QC_PREP/20250731/11/f63d6503-ab94-3567-adbc-8f26a5cdaac6/1.jpg"
            }
        ],
        "attributes": [
            {
                "attributeId": 47,
                "attributeName": "Renk",
                "attributeValue": "Black"
            },
            {
                "attributeId": 295,
                "attributeName": "Web Color",
                "attributeValueId": 2886,
                "attributeValue": "Kırmızı"
            },
            {
                "attributeId": 294,
                "attributeName": "Yaş Grubu",
                "attributeValueId": 2879,
                "attributeValue": "Yetişkin"
            },
            {
                "attributeId": 296,
                "attributeName": "Cinsiyet",
                "attributeValueId": 2873,
                "attributeValue": "Erkek"
            }
        ],
        "variants": [
            {
                "variantId": 70228905,
                "supplierId": 99999999,
                "barcode": "12613876842A60",
                "commission": 7.83,
                "attributes": [
                    {
                        "attributeId": 293,
                        "attributeName": "Beden",
                        "attributeValueId": 4602,
                        "attributeValue": "77 x 200 cm"
                    }
                ],
                "productUrl": "https://stage.trendyol.com/abc/xyz-p-12715815?&merchantId=99999999&filterOverPriceListings=false",
                "onSale": false,
                "channels": ["CORE", "LUXE"],// CORE ve LUXE değerlerini dönmektedir. Lüks segmentteki ürüNler için LUXE dönmekte, diğer ürünler için CORE dönmektedir. İkisinde de satılıyorsa iki değer beraber dönmektedir.
                "deliveryOption": {
                    "deliveryDuration": 0,
                },
                "stock": {
                    "quantity": 0,
                    "lastModifiedDate": 1774948958844
                },
                "price": {
                    "salePrice": 222,
                    "listPrice": 222,
                    "priceSeenByCustomer": 169
                },
                "stockCode": "STK-stokum-1",
                "origin": "AD",
                "vatRate": 0,
                "sellerCreatedDate": 1760534152000,
                "sellerModifiedDate": 1761041127000,
                "locked": false,
                "lockReason": null,
                "lockDate": null,
                "archived": false,
                "archivedDate": null,
                "docNeeded": false,
                "hasViolation": false,
                "blacklisted": false
            },
            {
                "variantId": 70229505,
                "supplierId": 99999999,
                "barcode": "12613876842A61",
                "commission": 7.83,
                "attributes": [
                    {
                        "attributeId": 293,
                        "attributeName": "Beden",
                        "attributeValueId": 4603,
                        "attributeValue": "77 x 300 cm"
                    }
                ],
                "productUrl": "https://stage.trendyol.com/abc/xyz-p-12715815?&merchantId=99999999&filterOverPriceListings=false",
                "onSale": false,
                "channels": ["CORE", "LUXE"],// CORE veya LUXE değerlerinden biri dönmektedir. Lüks segmentteki ürüler için LUXE dönmekte, diğer ürünler için CORE dönmektedir.
                "deliveryOption": {
                    "deliveryDuration": 0,
                },
                "stock": {
                    "lastModifiedDate": null
                },
                "price": {
                    "salePrice": 222,
                    "listPrice": 222,
                    "priceSeenByCustomer": 169
                },
                "stockCode": "STK-stokum-1",
                "vatRate": 0,
                "sellerCreatedDate": 1760534320000,
                "sellerModifiedDate": 1761041127000,
                "locked": false,
                "lockReason": null,
                "lockDate": null,
                "archived": false,
                "archivedDate": null,
                "docNeeded": false,
                "hasViolation": false,
                "blacklisted": false,
                "cargoProviders": ["kargo firması kodu"], //barcode bazlı bir kargo firması tanımlanırsa onun değeri döner.
            }
        ]
    }
]
}
```