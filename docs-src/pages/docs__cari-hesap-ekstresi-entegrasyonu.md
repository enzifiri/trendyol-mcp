---
updatedAt: 2026-09-02T11:39:36.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Cari Hesap Ekstresi Entegrasyonu

**Trendyol sisteminde oluşan muhasebesel kayıtlarınızı bu servis aracılığı ile entegrasyon üzerinden çekebilirsiniz.**

* Finansal kayıtlar sipariş teslim edildikten sonra oluşmaktadır.
* transactionType veya transactionTypes girilmesi zorunludur:
  * transactionType için 1 istekte yalnızca 1 type girilebilir.
  * transactionTypes girilmesi halinde 1 istekte birden fazla type girilebilir. Örnek: transactionTypes=Type1, Type2
  * transactionType ve transactionTypes beraber girilmesi durumunda transactionTypes için girilen değerler geçerli kabul edilir.
* paymentOrderId siparişin ödemesi yapıldıktan sonra oluşmaktadır. İstisnalar hariç, her çarşamba, ilgili haftada vadesi gelen siparişler için ödeme emri oluşur.
* paymentOrderId ile sipariş ve ödemelerinizi eşleştirebilirsiniz.
* Tarih filtresi için **startDate+endDate**, **paymentDate** veya **paymentOrderId** gönderilmelidir. startDate ve endDate arasındaki süre **15** günden uzun **olamaz**. paymentDate (`yyyy-MM-dd`) gönderildiğinde kayıtlar işlem tarihi yerine ödeme/vade tarihine göre filtrelenir.
* Store bilgileri Marketplace satıcıları için "null" olarak dönecektir.
* "affiliate" alanı "TRENDYOLTR" yada "TRENDYOLAZJV" dönebilir.

**Kullanılacak olan servisler (settlements, otherfinancials, payment-order) birbirinden ayrı işlem kayıtlarını vermektedir.**

* "Settlements" servisinden satış, iade, indirim, kupon, provizyon işlemlerinin detaylarına ulaşabilirsiniz.

  * Transaction Type, SellerRevenuePositive ve CommissionNegative birlikte değerlendirilmelidir.
  * Transaction Type, SellerRevenueNegative ve CommissionPositive birlikte değerlendirilmelidir.
  * Transaction Type, SellerRevenuePositiveCancel ve CommissionNegativeCancel birlikte değerlendirilmelidir.
  * Transaction Type, SellerRevenueNegativeCancel ve CommissionPositiveCancel birlikte değerlendirilmelidir.

* "Other Financial" servisinden ise tedarikçi finansmanı, virman, ödemeler (hakediş), faturalar (Trendyoldan tedarikçiye) , tedarikçi faturaları (Tedarikçiden Trendyola), gelen havale, komisyon mutabakat faturaları işlemlerinin detaylarına ulaşabilirsiniz.

* "Payment Order" servisinden satıcının PAID ödeme emirlerini sayfalı olarak listeleyebilirsiniz. Her sayfada en fazla 10 kayıt döner. Satıcı listeden `id` seçer; bu değer `paymentOrderId` olarak settlements / otherfinancials sorgusunda kullanılır.

### **GET** settlements

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements](https://stageapigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements)
</NoLinkCallout>

**Önerilen Endpoint'ler**

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements?endDate=\{endDate}\&startDate=\{startDate}\&transactionType=\{Type}\&page=0\&size=500](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements?endDate=\{endDate}\&startDate=\{startDate}\&transactionType=\{Type}\&page=0\&size=500)
</NoLinkCallout>

veya paymentDate ile:

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements?paymentDate=\{paymentDate}\&transactionType=\{Type}\&page=0\&size=500](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements?paymentDate=\{paymentDate}\&transactionType=\{Type}\&page=0\&size=500)
</NoLinkCallout>

<br />

| Parametre                             | Parametre Değer                                                                                                                                                                                                                                                                                                                                                                                                                             | Açıklama                                                                                                            | Tip             | Zorunlu |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --------------- | ------- |
| transactionType veya transactionTypes | Sale, Return, Discount, DiscountCancel, Coupon, CouponCancel, ProvisionPositive, ProvisionNegative, ManualRefund, ManualRefundCancel, TyDiscount, TyDiscountCancel, TyCoupon, TyCouponCancel, SellerRevenuePositive, SellerRevenueNegative, CommissionPositive, CommissionNegative, SellerRevenuePositiveCancel, SellerRevenueNegativeCancel, CommissionPositiveCancel, CommissionNegativeCancel, DeliveryFee, DeliveryFeeCancel, PayByLink | Finansal işlem türüdür.                                                                                             | string          | Evet    |
| startDate                             |                                                                                                                                                                                                                                                                                                                                                                                                                                             | İşlem tarihi aralığının başlangıcı. Timestamp milisecond olarak gönderilmelidir. paymentDate yoksa zorunludur.      | long            | Hayır   |
| endDate                               |                                                                                                                                                                                                                                                                                                                                                                                                                                             | İşlem tarihi aralığının bitişi. Timestamp milisecond olarak gönderilmelidir. Aralık 15 günden uzun olamaz.          | long            | Hayır   |
| page                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                             | Sadece belirtilen sayfadaki bilgileri döndürür                                                                      | int             | Hayır   |
| size                                  | 500 ve 1000 değerlerini alabilir. (Default=500)                                                                                                                                                                                                                                                                                                                                                                                             | Bir sayfada listelenecek maksimum adeti belirtir.                                                                   | int             | Hayır   |
| supplierId                            |                                                                                                                                                                                                                                                                                                                                                                                                                                             | İlgili tedarikçinin ID bilgisi gönderilmelidir                                                                      | long            | Evet    |
| paymentDate                           | yyyy-MM-dd (Europe/Istanbul)                                                                                                                                                                                                                                                                                                                                                                                                                | Ödemeye girebileceği en erken tarih. Gönderildiğinde startDate/endDate yerine ödeme/vade tarihine göre filtreler.   | string          | Hayır   |
| paymentOrderId                        |                                                                                                                                                                                                                                                                                                                                                                                                                                             | payment-order servisinden dönen id. Hakediş dönemindeki kayıtları startDate/endDate olmadan çekmek için kullanılır. | integer (int64) | Hayır   |

#### **transactionType için kullanılabilecek işlem türlerinin açıklamaları aşağıdaki gibidir**

| transactionType                 | Açıklama                                                                                                                                                                       |
| :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sale**                        | Siparişlere ait satış kayıtlarını verir                                                                                                                                        |
| **Return**                      | Siparişlere ait iade kayıtlarını verir                                                                                                                                         |
| **Discount**                    | Tedarikçi tarafından karşılanan indirim tutarını gösterir.                                                                                                                     |
| **DiscountCancel**              | Ürün iptal veya iade olduğunda atılan kayıttır. İndirim kaydının tersi olarak düşünülebilir                                                                                    |
| **Coupon**                      | Tedarikçi tarafından karşılanan kupon tutarını gösterir.                                                                                                                       |
| **CouponCancel**                | Ürün iptal veya iade olduğunda atılan kayıttır. Kupon kaydının tersi olarak düşünülebilir                                                                                      |
| **ProvisionPositive**           | Gramaj farkından dolayı oluşan tutarlar Provizyon kaydı olarak atılır. Sipariş iptal veya iade olduğunda birbirinin tersi olarak kayıt atılır.                                 |
| **ProvisionNegative**           | Gramaj farkından dolayı oluşan tutarlar Provizyon kaydı olarak atılır. Sipariş iptal veya iade olduğunda birbirinin tersi olarak kayıt atılır.                                 |
| **ManualRefund**                | Kısmi iade durumunda atılan kayıttır. Bir ürün için ürün tutarından daha az olacak şekilde iade kaydı oluşturuluyor ise bu kayıt atılmaktadır.                                 |
| **ManualRefundCancel**          | Kısmi iade olan bir ürün için ürün tamamen iade olduğunda, kısmi iadenin iptali amacıyla bu kayıt atılır. Böylece, daha önceden atılan kısmi iade tutarı için mahsuplaşılır.   |
| **TyDiscount**                  | Kurumsal faturalı alışverişlerde, Trendyol’un karşıladığı indirimler için bu kayıt atılır. Bu tutar, ay sonlarında satıcıdan talep edilen fatura ile satıcıya ödenir.          |
| **TyDiscountCancel**            | Kurumsal faturalı alışverişlerde, Trendyol’un karşıladığı indirimler için atılan TyDiscount kaydına istinaden atılır. Ürünün iptal veya iade olması durumunda bu kayıt atılır. |
| **TyCoupon**                    | Kurumsal faturalı alışverişlerde, Trendyol’un karşıladığı kuponlar için bu kayıt atılır. Bu tutar, ay sonlarında satıcıdan talep edilen fatura ile satıcıya ödenir.            |
| **TyCouponCancel**              | Kurumsal faturalı alışverişlerde, Trendyol’un karşıladığı kuponlar için atılan TyCoupon kaydına istinaden atılır. Ürünün iptal veya iade olması durumunda bu kayıt atılır.     |
| **SellerRevenuePositive**       | Hakediş Pozitif Düzeltme                                                                                                                                                       |
| **SellerRevenueNegative**       | Hakediş Negatif Düzeltme                                                                                                                                                       |
| **CommissionPositive**          | Komisyon Pozitif Düzeltme                                                                                                                                                      |
| **CommissionNegative**          | Komisyon Negatif Düzeltme                                                                                                                                                      |
| **SellerRevenuePositiveCancel** | Hakediş Pozitif Düzeltme İptal                                                                                                                                                 |
| **SellerRevenueNegativeCancel** | Hakediş Negatif Düzeltme İptal                                                                                                                                                 |
| **CommissionPositiveCancel**    | Komisyon Pozitif Düzeltme İptal                                                                                                                                                |
| **CommissionNegativeCancel**    | Komisyon Negatif Düzeltme İptal                                                                                                                                                |
| **DeliveryFee**                 | Teslimat ücreti kayıtlarını verir.                                                                                                                                             |
| **DeliveryFeeCancel**           | Ürün iptal veya iade olduğunda atılan teslimat ücreti iptal kaydıdır.                                                                                                          |
| **PayByLink**                   | Pay by Link ile yapılan siparişlere ait satış kayıtlarını verir.                                                                                                               |

#### Örnek Servis Cevabı (transactionType=Sale kullanılmıştır)

```json
{
    "page": 0,
    "size": 500,
    "totalPages": 878,
    "totalElements": 438974,
    "content": [
        {
            "id": "725041340",
            "transactionDate": 1613397671561,  // İşlem Tarihi
            "barcode": "8681385952874",
            "transactionType": "Satış",
            "receiptId": 48376618,             // Dekont No
            "description": "Satış",
            "debt": 0.0,                       // Borç
            "credit": 449.99,                  // Alacak
            "paymentPeriod": 30,               // Vade Süresi
            "commissionRate": 15.0,            // Siparişteki Ürüne Ait Komisyon Oranı
            "commissionAmount": 67.4985,       // Trendyol Komisyon Tutarı
            "commissionInvoiceSerialNumber": null,
            "sellerRevenue": 382.4915,         // Satıcı Hakediş Tutarı
            "orderNumber": "501915861",
            "paymentOrderId": 112360,          // Ödeme Numarası
            "paymentDate": 1615989671561,      // Ödeme Tarihi
            "sellerId": 123456,
            "storeId": null,
            "storeName": null,
            "storeAddress": null,
            "country": "Türkiye",
            "orderDate": 1720107451532,
            "affiliate": "TRENDYOLTR",
            "shipmentPackageId": 1111111111 // sipariş paket numarası
        },
        {
            "id": "725041335",
            "transactionDate": 1613397671557,
            "barcode": "8681387147421",
            "transactionType": "Satış",
            "receiptId": 48376618,
            "description": "Satış",
            "debt": 0.0,
            "credit": 699.99,
            "paymentPeriod": 28,
            "commissionRate": 15.0,
            "commissionAmount": 104.9985,
            "commissionInvoiceSerialNumber": null,
            "sellerRevenue": 594.9915,
            "orderNumber": "501915861",
            "paymentOrderId": 112360,
            "paymentDate": 1615989671557,
            "sellerId": 123456,
            "storeId": null,
            "storeName": null,
            "storeAddress": null,
            "country": "Türkiye",
            "orderDate": 1720107451532,
            "affiliate": "TRENDYOLTR",
            "shipmentPackageId": 1111111111
        }
        ]
}
```

### **GET** otherfinancials

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials](https://stageapigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials)
</NoLinkCallout>

**Önerilen Endpoint'ler**

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?endDate=\{endDate}\&startDate=\{startDate}\&transactionType=\{Type}\&page=0\&size=500](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?endDate=\{endDate}\&startDate=\{startDate}\&transactionType=\{Type}\&page=0\&size=500)
</NoLinkCallout>

veya

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?endDate=\{endDate}\&startDate=\{startDate}\&transactionTypes=\{Type1,Type2}\&page=0\&size=500](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?endDate=\{endDate}\&startDate=\{startDate}\&transactionTypes=\{Type1,Type2}\&page=0\&size=500)
</NoLinkCallout>

**Yalnızca Platform Hizmet Bedeli kayıtlarını filtrelemek için önerilen endpoint**

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?transactionType=DeductionInvoices\&transactionSubType=PlatformServiceFee\&startDate=\{startDate}\&endDate=\{endDate}](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?transactionType=DeductionInvoices\&transactionSubType=PlatformServiceFee\&startDate=\{startDate}\&endDate=\{endDate})
</NoLinkCallout>

<br />

| Parametre                             | Parametre Değer                                                                                                                                  | Açıklama                                                                                                                                                                                                           | Tip             | Zorunlu |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :------ |
| transactionType veya transactionTypes | Stoppage, CashAdvance, WireTransfer, IncomingTransfer, ReturnInvoice, CommissionAgreementInvoice, PaymentOrder, DeductionInvoices, FinancialItem | Finansal işlem türüdür.                                                                                                                                                                                            | string          | Evet    |
| transactionSubType                    | PlatformServiceFee                                                                                                                               | Platform hizmet bedeli kayıtlarını filtrelemek için kullanılır. Bu parametreyi kullanmak için transactionType=DeductionInvoices ya da transactionTypes içinde DeductionInvoices olacak şekilde istek yapılmalıdır. | string          | Hayır   |
| startDate                             |                                                                                                                                                  | İşlem tarihi aralığının başlangıcı. Timestamp millisecond olarak gönderilmelidir. paymentDate yoksa zorunludur.                                                                                                    | long            | Hayır   |
| endDate                               |                                                                                                                                                  | İşlem tarihi aralığının bitişi. Timestamp millisecond olarak gönderilmelidir. Aralık 15 günden uzun olamaz.                                                                                                        | long            | Hayır   |
| page                                  |                                                                                                                                                  | Sadece belirtilen sayfadaki bilgileri döndürür                                                                                                                                                                     | int             | Hayır   |
| size                                  | 500 ve 1000 değerlerini alabilir. (Default=500)                                                                                                  | Bir sayfada listelenecek maksimum adeti belirtir.                                                                                                                                                                  | int             | Hayır   |
| supplierId                            |                                                                                                                                                  | İlgili tedarikçinin ID bilgisi gönderilmelidir                                                                                                                                                                     | long            | Evet    |
| paymentDate                           | yyyy-MM-dd (Europe/Istanbul)                                                                                                                     | Ödemeye girebileceği en erken tarih. Gönderildiğinde startDate/endDate yerine ödeme/vade tarihine göre filtreler.                                                                                                  | string          | Hayır   |
| paymentOrderId                        |                                                                                                                                                  | payment-order servisinden dönen id. Hakediş dönemindeki kayıtları startDate/endDate olmadan çekmek için kullanılır.                                                                                                | integer (int64) | Hayır   |

#### **transactionType için kullanılabilecek işlem türlerinin açıklamaları aşağıdaki gibidir.**

| transactionType                | Açıklama                                                                                                                                 |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **CashAdvance**                | Vadesi henüz gelmemiş hakedişler için erken ödeme alındığında atılan kayıttır.                                                           |
| **WireTransfer**               | Trendyol ile Tedarikçi arasında yapılan virman için atılan kayıttır.                                                                     |
| **IncomingTransfer**           | Borçlu durumundaki tedarikçiden, Trendyola yapılan ödemeler için atılan kayıttır                                                         |
| **ReturnInvoice**              | Tedarikçiden Trendyola kesilen iade faturalarıdır. Bakiyeyi + olarak etkiler.                                                            |
| **CommissionAgreementInvoice** | Tedarikçinin mahsuplaşma yapılacak alacağı olmadığı durumda, iade gelen ürünler için tedarikçiden alınan komisyon mutabakat faturasıdır. |
| **PaymentOrder**               | Vadesi gelen işlemlerden hesaplanarak tedarikçiye yapılan hakediş ödemesidir                                                             |
| **DeductionInvoices**          | Trendyol tarafından sağlanan hizmetler için tedarikçiye kesilen faturadır.                                                               |
| **FinancialItem**              | Trendyol tarafından atılan düzeltme kayıtlarıdır.                                                                                        |
| **Stoppage**                   | Bu işlem tipiyle gelindiğinde ilgili tarih aralığındaki E-ticaret Stopajı ve E-ticaret Stopaj İptali kalemleri listelenecek.             |

#### Örnek Servis Cevabı (transactionType=PaymentOrder kullanılmıştır)

```json
{
    "page": 0,
    "size": 500,
    "totalPages": 1,
    "totalElements": 2,
    "content": [
        {
            "id": "1639160",
            "transactionDate": 1613062815995,
            "barcode": null,
            "transactionType": "Ödeme",
            "receiptId": null,
            "description": null,
            "debt": 8754732.06,
            "credit": 0.0,
            "paymentPeriod": null,
            "commissionRate": null,
            "commissionAmount": null,
            "commissionInvoiceSerialNumber": null,
            "sellerRevenue": null,
            "orderNumber": null,
            "paymentOrderId": 112360,
            "paymentDate": null,
            "sellerId": 123456,
            "storeId": null,
            "storeName": null,
            "storeAddress": null,
            "country": "Türkiye",
            "orderDate": 1720107451532,
            "affiliate": "TRENDYOLTR",
            "shipmentPackageId": 1111111111

        },
        {
            "id": "1576967",
            "transactionDate": 1612458029832,
            "barcode": null,
            "transactionType": "Ödeme",
            "receiptId": null,
            "description": null,
            "debt": 5707246.85,
            "credit": 0.0,
            "paymentPeriod": null,
            "commissionRate": null,
            "commissionAmount": null,
            "commissionInvoiceSerialNumber": null,
            "sellerRevenue": null,
            "orderNumber": null,
            "paymentOrderId": 1576967,
            "paymentDate": null,
            "sellerId": 123456,
            "storeId": null,
            "storeName": null,
            "storeAddress": null,
            "country": "Türkiye",
            "orderDate": 1720107451532,
            "affiliate": "TRENDYOLTR",
            "shipmentPackageId": 1111111111
        }
    ]
}
```

### **GET** payment-order

Satıcının PAID ödeme emirlerini sayfalı listeler. Cevap bir **ödeme emri listesidir**. Listedeki `id`, `settlements` ve `otherfinancials` servislerinde kullanılacak `paymentOrderId` değeridir. Tarih alanı `payoutDate`'tir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order](https://stageapigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order)
</NoLinkCallout>

**Önerilen Endpoint**

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order?page=0\&size=10](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order?page=0\&size=10)
</NoLinkCallout>

<br />

| Parametre | Parametre Değer | Açıklama                                    | Tip     | Zorunlu |
| :-------- | :-------------- | :------------------------------------------ | :------ | :------ |
| sellerId  |                 | İlgili satıcının ID bilgisi                 | long    | Evet    |
| page      | 0               | Sayfa numarası (0'dan başlar)               | integer | Hayır   |
| size      | 10              | Sayfa boyutu. Varsayılan ve maksimum **10** | integer | Hayır   |

#### Payment Order List Alımı

```json
{
    "page": 0,
    "size": 10,
    "totalPages": 1,
    "totalElements": 1,
    "content": [
        {
            "id": 112360,
            "status": "PAID",
            "amount": 8754732.06,
            "payoutDate": 1736460000000,
            "paymentType": "PAYMENT",
            "sellerId": 123456,
            "regionId": 1,
            "regionName": "Türkiye",
            "regionCode": "TR"
        }
    ]
}
```

Bu örnekteki `id` (112360) değeri, `settlements` ve `otherfinancials` isteklerinde `paymentOrderId=112360` olarak kullanılır.

### Ödeme gününe göre sorgulama

Bir ödeme günündeki muhasebe kayıtlarını çekmek için akış iki adımdır:

1. `payment-order` servisini çağırın (`page`, `size`; varsayılan size=10, maksimum 10). Dönen `content` bir **ödeme emri listesidir**; listedeki `id`**&#x20;alanı&#x20;**`paymentOrderId`**&#x20;değeridir.** Satıcı listeden ilgili kaydı seçer.
2. Seçilen `id` değerini `settlements` ve `otherfinancials` isteklerinde `paymentOrderId` query parametresi olarak kullanın. `startDate` / `endDate` göndermeniz zorunlu değildir.

Liste birden fazla ödeme emri içerebilir; her `id` için ayrı `settlements` / `otherfinancials` isteği atılmalıdır.

> **Dikkat:** Trendyol tarafından hakediş ödeme emirleriniz oluşturulduktan sonra settlements ve otherfinancials verilerinde güncellemeler zaman alabilir. Önerilen akış: bir sonraki gün `paymentOrderId` ile sorgulayın.

**Önerilen sıralama**

PAID ödeme emirlerini sayfalı listeler.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order?page=0\&size=10](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/payment-order?page=0\&size=10)
</NoLinkCallout>

Seçilen `paymentOrderId` için satış, iade ve diğer settlement kayıtlarını getirir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements?paymentOrderId=\{paymentOrderId}\&transactionType=\{Type}\&page=0\&size=500](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/settlements?paymentOrderId=\{paymentOrderId}\&transactionType=\{Type}\&page=0\&size=500)
</NoLinkCallout>

Seçilen `paymentOrderId` için hakediş, fatura ve diğer financial kayıtlarını getirir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?paymentOrderId=\{paymentOrderId}\&transactionType=\{Type}\&page=0\&size=500](https://apigw.trendyol.com/integration/finance/che/sellers/\{sellerId}/otherfinancials?paymentOrderId=\{paymentOrderId}\&transactionType=\{Type}\&page=0\&size=500)
</NoLinkCallout>

| TransactionType             |  MP | Türkçe                                | ÖdemeTipi  |
| :-------------------------- | :-: | :------------------------------------ | ---------- |
| Sale                        |  +  | Satış                                 | Alacak (+) |
| Return                      |  +  | İade                                  | Borç (-)   |
| Discount                    |  +  | İndirim                               | Borç (-)   |
| Discount Cancel             |  +  | İndirim İptal                         | Alacak (+) |
| Coupon                      |  +  | Kupon                                 | Alacak (+) |
| Coupon Cancel               |  +  | Kupon İptal                           | Borç (-)   |
| Provision Positive          |  -  | Provizyon +                           | Alacak (+) |
| Provision Negative          |  -  | Provizyon -                           | Borç (-)   |
| TyDiscount                  |  +  | Kurumsal Fatura - TY Promosyon        | Borç (-)   |
| TyDiscountCancel            |  +  | Kurumsal Fatura - TY Promosyon İptali | Alacak (+) |
| TyCoupon                    |  +  | Kurumsal Fatura - TY Kupon            | Borç (-)   |
| TyCoupon Cancel             |  +  | Kurumsal Fatura - TY Kupon İptali     | Alacak (+) |
| ManuelRefund                |  -  | Kısmi İade                            | Borç (-)   |
| ManuelRefundCancel          |  -  | Kısmi İade İptal                      | Alacak (+) |
| SellerRevenuePositive       |  +  | Hakediş Pozitif Düzeltme              | Alacak (+) |
| SellerRevenueNegative       |  -  | Hakediş Negatif Düzeltme              | Borç (-)   |
| CommissionPositive          |  -  | Komisyon Pozitif Düzeltme             | Borç (-)   |
| CommissionNegative          |  +  | Komisyon Negatif Düzeltme             | Alacak (+) |
| SellerRevenuePositiveCancel |  -  | Hakediş Pozitif Düzeltme İptal        | Borç (-)   |
| SellerRevenueNegativeCancel |  +  | Hakediş Negatif Düzeltme İptal        | Alacak (+) |
| CommissionPositiveCancel    |  +  | Komisyon Pozitif Düzeltme İptal       | Alacak (+) |
| CommissionNegativeCancel    |  -  | Komisyon Negatif Düzeltme İptal       | Borç (-)   |
| DeliveryFee                 |  +  | Teslimat Ücreti                       | Alacak (+) |
| DeliveryFeeCancel           |  +  | Teslimat Ücreti İptal                 | Borç (-)   |
| PayByLink                   |  +  | Satış                                 | Alacak (+) |

| Parametre                   | comissionAmount | sellerRevenue |
| :-------------------------- | :-------------: | :-----------: |
| Sale                        |        -        |       +       |
| Return                      |        +        |       -       |
| Discount                    |        +        |       -       |
| Discount Cancel             |        -        |       +       |
| Coupon                      |        +        |       -       |
| Coupon Cancel               |        -        |       +       |
| Provision Positive          |        -        |       +       |
| Provision Negative          |        +        |       -       |
| TyDiscount                  |        +        |       -       |
| TyDiscountCancel            |        -        |       +       |
| TyCoupon                    |        +        |       -       |
| TyCoupon Cancel             |        -        |       +       |
| ManuelRefund                |        +        |       -       |
| ManuelRefundCancel          |        -        |       +       |
| SellerRevenuePositive       |        0        |       +       |
| SellerRevenueNegative       |        0        |       -       |
| CommissionPositive          |        +        |       0       |
| CommissionNegative          |        -        |       0       |
| SellerRevenuePositiveCancel |        0        |       -       |
| SellerRevenueNegativeCancel |        0        |       +       |
| CommissionPositiveCancel    |        -        |       0       |
| CommissionNegativeCancel    |        +        |       0       |
| DeliveryFee                 |        -        |       +       |
| DeliveryFeeCancel           |        +        |       -       |
| PayByLink                   |        -        |       +       |