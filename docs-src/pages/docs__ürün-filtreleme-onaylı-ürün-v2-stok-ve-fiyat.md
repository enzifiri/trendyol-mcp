---
updatedAt: 2026-08-07T12:24:47.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme – Onaylı Ürün V2 Stok ve Fiyat

Onaylı ürünlerinizin yalnızca stok ve fiyat bilgisini bu servis üzerinden alabilirsiniz.

* Bu servise yapılan isteklere "nextPageToken" bilgisi eklenmiştir. Yapmış olduğunuz istekte request?page=10\&size=100 yazmanız halinde 10. sayfadaki 100 content response olarak döner Sonraki isteğinizde request?size=100≠xtPageToken=TOKEN yazmanız halinde sonraki sayfa olan 11. sayfadaki 100 content response olarak döner (nextPageToken isteği 10.000'den fazla onaylı content olması halinde kullanılabilir.)
* Page x size maksimum 10.000 değerini alabilir.
* stockLastModifiedDate alanı eğer ürüne bir stock güncellemesi yapılmışsa değer dönecektir yoksa null olarak response dönecektir.

### **GET** filterProducts

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved/inventory-and-price](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved/inventory-and-price)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved/inventory-and-price](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/approved/inventory-and-price)
</NoLinkCallout>

**Giriş Parametreleri**

| Parametre        |                                                                      Açıklama                                                                     |    Tip |
| :--------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------: | -----: |
| barcode          |                                                    Tekil barkod sorgulamak için gönderilmelidir                                                   | string |
| barcodes         |                                 Çoklu barkod sorgulamak için gönderilmelidir (maksimum 50 barcode gönderilebilir)                                 | string |
| page             |                                                  Sadece belirtilen sayfadaki bilgileri döndürür.                                                  |    int |
| size             |                                 Bir sayfada listelenecek maksimum adeti belirtir. Maksimum 100 değerini alabilir.                                 |    int |
| stockCode        |                                               İlgili tedarikçinin stock code bilgisi gönderilmelidir                                              | string |
| productMainId    |                                             İlgili tedarikçinin productMainId bilgisi gönderilmelidir                                             | string |
| status           |                                 Status alanı archived, blacklisted, locked, onSale, notOnSale değerlerini alabilir                                | string |
| nextPageToken    |                                       10.000 adet content'den sonraki contentleri almak için kullanılmalıdır                                      | string |
| contentId        |                                                  Tekil contentId sorgulamak için gönderilmelidir                                                  | string |
| orderByDirection | "SellerCreatedDate" alanına göre ASC/DESC olarak gönderilebilir.<br />ASC: Eskiden yeniye doğru sıralar.<br />DESC: Yeniden eskiye doğru sıralar. | string |

<br />

**Örnek Servis Cevabı**

```json
{
    "totalElements": 1,
    "totalPages": 1,
    "page": 0,
    "size": 1,
    "nextPageToken": "eyJzb3J0IjpbMTc4MDQ0NTY5MjAwMasasf",
    "content": [
        {
            "contentId": 12431242141,
            "productMainId": "1242141241",
            "variants": [
                {
                    "variantId": 3953959353,
                    "barcode": "60506560",
                    "salePrice": 699.99,
                    "listPrice": 699.99,
                    "quantity": 50,
                    "stockCode": "056565964",
                    "stockLastModifiedDate": 1780463592464
                }
            ]
        }
    ]
}
```