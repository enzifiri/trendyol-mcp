---
updatedAt: 2026-10-07T11:52:46.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Akış ile Çekme (getShipmentPackagesStream)

getShipmentPackagesStream, sipariş paketlerini cursor tabanlı (stream) olarak çekmenizi sağlayan endpoint'tir.

<Callout icon="⚠️" theme="warn">
  ### **ÖNEMLİ**

  [Mevcut `getShipmentPackages` endpoint’i](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages) büyük veri setlerini tarama (scanning) amacıyla optimize edilmemiştir.

  Bu endpoint için:

  - Maksimum erişilebilir kayıt sayısı: **10.000**
  - Yüksek hacimli veri çekimlerinde sistem üzerinde yük oluşabilir
  - Rate limit kısıtlarına daha hızlı takılınabilir

  Bu nedenle aşağıdaki senaryolarda **getShipmentPackagesStream kullanılması önerilir**:

  ✔ Büyük veri tarama (full scan) ✔ Periyodik senkronizasyon (polling / cron) ✔ Tüm siparişleri export etme

  ✅ Response yapısı aynıdır, sadece pagination ile ilgili alanlar dönmeyecektir. (totalElements, totalPages, page) ❗ Pagination mekanizması değişmiştir (**cursor tabanlı**)
</Callout>

***

## 📦 Veri Kapsamı & Tarih Kısıtları

> * Bu endpoint üzerinden **son 3 aylık veri** erişilebilir
>
> ❗ Zaman aralığı maksimum **2 hafta (14 gün)** ile sınırlandırılmıştır:
>
> * `lastModifiedStartDate` ve `lastModifiedEndDate` gönderilmezse → sistem otomatik olarak **son 2 hafta** ile sınırlar.

## ❗ Response Farkı

> getShipmentPackagesStream endpoint’inin response yapısı mevcut endpoint ile aynıdır; sadece aşağıdaki alanlar **artık dönmemektedir**:
>
> * `totalElements`
> * `totalPages`
> * `page`
>
> Bunun yerine aşağıdaki alanlar kullanılır:
>
> * `hasMore`
> * `nextCursor`
> * `size`
>
> Bu nedenle page tabanlı pagination kullanan entegrasyonların, cursor tabanlı yapıya geçmesi gerekmektedir.

<Callout icon="💡" theme="default">
  ### **Migration Notu**

  - `page++` yerine → `nextCursor` kullanılır
  - `totalPages` kontrolü yerine → `hasMore` kontrol edilir
</Callout>

***

## Stream Servisi vs. Mevcut Servis

| Özellik                | Mevcut Servis ([getShipmentPackages](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages)) | Stream Servisi ([getShipmentPackagesStream](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme)) |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Kullanım Amacı         | Küçük / anlık sorgular                                                                                                              | Büyük veri tarama & senkronizasyon                                                                                                        |
| Pagination             | Page tabanlı (page, totalPages)                                                                                                     | Cursor tabanlı (nextCursor, hasMore)                                                                                                      |
| Maksimum Veri Erişimi  | ⚠️ 10.000 kayıt ile sınırlı                                                                                                         | ✅ Yüksek limitli akış                                                                                                                     |
| Büyük Veri Performansı | ⚠️ Sınırlı                                                                                                                          | ✅ Optimize                                                                                                                                |

***

## Cursor Tabanlı Sayfalama Nasıl Çalışır?

Cursor mekanizması, klasik page mantığından farklıdır:

* `page` yerine **akış pointer’ı (cursor)** kullanılır
* Her istek, bir önceki kaldığı yerden devam eder
* Büyük veri setlerinde stabil ve verimli ilerleme sağlar

### Akış

1. İlk istekte `nextCursor` gönderilmez
2. Yanıtta `hasMore = true` ise devam edilir
3. `nextCursor`değeri alınır ve sonraki istekte kullanılır
4. `hasMore = false` olduğunda akış tamamlanır

***

## ⚠️ Kritik Kurallar

* `nextCursor` **opaque** bir değerdir → parse edilmemelidir, değiştirilmemelidir.
* Aynı cursor değeri kullanırken daha önce başlatılan filtreler **değiştirilmemelidir**
* Filtre değişirse → **400 Bad Request** alınır
* Sıralama sabittir, Last Modified Date'e göre DESC olarak sonuç döner
* Yeni filtre ile çalışmak için → **yeni akış başlatılmalıdır**

<br />

### Önerilen kullanım:

* Önerilen kullanım**minimum 5 saniye aralıklarda** istek atılmasıdır.

**Adres Bilgilerine Erişim**

* Mikro ihracat ve Yurt Dışı Aracılığı Modeli siparişlerindeki shipment adres alanları bazı durumlarda boş dönebilir. İlgili siparişler için tekrar istek attığınızda adres alanları dolu gelecektir.
* "defectiveClaimListingInsight" kusurlu/eksik/yanlış reasonla iadesi onaylanan ürünleri tespit edip, yeni sipariş geldiğinde satıcıya o ürün özelinde müşteride nasıl bir problem yarattığını ifade eden bir alandır. Bu sayede yeni gelen siparişte de aynı durumu yaşamamak için satıcının proaktif davranmasını ve ürünleri hazırlar\&kargolarken önlemlerini almasını, satıcı kaynaklı defective sebeplerle iade edilme oranlarını düşürmeyi hedefliyoruz.

**Servis Parametreleri**

| Parametre             | Parametre Değer                                                                                                                               | Açıklama                                                                                                                                                                                 | Tip    |
| :-------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| supplierId            |                                                                                                                                               | İlgili tedarikçinin ID bilgisi gönderilmelidir                                                                                                                                           | long   |
| packageItemStatuses   | Created, Picking, Invoiced, Shipped ,Cancelled, Delivered, UnDelivered, Returned, AtCollectionPoint, UnPacked, UnSupplied, Awaiting, Verified | Siparişlerin statülerine göre bilgileri getirir.                                                                                                                                         | string |
| lastModifiedStartDate |                                                                                                                                               | Son güncellenme tarihi belirli bir tarihten sonra olan siparişleri getirir. Timestamp (milliseconds) ve GMT +3 olarak gönderilmelidir.                                                   | long   |
| lastModifiedEndDate   |                                                                                                                                               | Son güncellenme tarihi belirtilen tarihe kadar olan siparişleri getirir. Timestamp (milliseconds) ve GMT +3 olarak gönderilmelidir.                                                      | long   |
| size                  | size verilmezse default 50 kabul edilir, maksimum 200 değerini alabilir.                                                                      | Bir sayfada listelenecek maksimum adeti belirtir.                                                                                                                                        | int    |
| nextCursor            |                                                                                                                                               | İlk istekte nextCursor gönderilmez. Yanıtta hasMore = true ise devam edilir.<br />nextCursordeğeri alınır ve sonraki istekte kullanılır.<br />hasMore = false olduğunda akış tamamlanır. | string |

## Endpoint

### PROD

```json
GET https://apigw.trendyol.com/integration/order/sellers/{sellerId}/orders/stream
```

### STAGE

```json
GET https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/orders/stream
```

<br />

**Örnek Servis Cevabı**

```json

{
    "hasMore": true,
    "nextCursor": "609ca79b-1fdf-4c4e-a814-498ce9c1c039",
    "size": 50,
    "content": [
        {
            "shipmentAddress": {
                "id": 11111111,
                "firstName": "John",
                "lastName": "Doe",
                "company": "",
                "address1": "John Doe's House",
                "address2": "John Doe's House",
                "city": "İstanbul",
                "cityCode": 34,
                "district": "Sarıyer",
                "districtId": 54,
                "countyId": 0, // CEE bölgesi için gelecektir.
                "countyName": "", // CEE bölgesi için gelecektir.
                "shortAddress": "", // GULF bölgesi için gelecektir.
                "stateName": "", // GULF bölgesi için gelecektir.
                "addressLines": {
                    "addressLine1": "John Doe's House",
                    "addressLine2": "John Doe's House"
                },
                "postalCode": "34200",
                "countryCode": "TR",
                "neighborhoodId": 21111,
                "neighborhood": "Maslak Mahallesi",
                "phone": "333333333",
                "fullAddress": "John Doe's House",
                "fullName": "John Doe"
            },
            "orderNumber": "10654411111",
            "paymentMethod": "Alışveriş Kredisi", //  "Alışveriş Kredisi", "Banka Kartı", "Kredi Kartı", "Cüzdan - Trendpay", "Şimdi Al Sonra Öde - Trendpay" veya "-" değerlerinden birini alabilir
            "orderCountryCode": "TR", // müşterinin bulunduğu , sipariş verdiği ülke
            "packageGrossAmount": 498.90, // Paketin toplam brüt tutarı (indirimsiz)
            "packageSellerDiscount": 0.00, // Satıcı indirim tutarı
            "packageTyDiscount": 0.00, // commercial true olduğu durumda dolu gelebilir, false olduğu durumda 0 dönecektir.
            "packageTotalDiscount": 0.00, // Toplam indirim tutarı (packageSellerDiscount + packageTyDiscount)
            "discountDisplays": [
                {
                    "displayName": "Sepette %20 İndirim",
                    "discountAmount": 100
                }
            ],
            "taxNumber": null,
            "invoiceAddress": { // Trendyol Yurt Dışı Aracılığı siparişleri için "DSM Grup Danışmanlık" bilgileri dönecektir.
                "id": 11111112,
                "firstName": "John",
                "lastName": "Doe",
                "company": "", // GULF bölgesi siparişlerinde boş gelebilir.
                "address1": "John Doe's House",
                "address2": "John Doe's House",
                "city": "İstanbul",
                "cityCode": 0,
                "district": "Sarıyer", // GULF bölgesi siparişlerinde boş gelebilir.
                "districtId": 54,
                "countyId": 0, // CEE bölgesi için gelecektir.
                "countyName": "", // CEE bölgesi için gelecektir.
                "shortAddress": "", // GULF bölgesi için gelecektir.
                "stateName": "", // GULF bölgesi için gelecektir.
                "addressLines": {
                    "addressLine1": "John Doe's House",
                    "addressLine2": "John Doe's House"
                },
                "postalCode": "", // GULF bölgesi siparişlerinde boş gelebilir.
                "sector": "",
                "countryCode": "TR",
                "neighborhoodId": 0,
                "phone": "333333333",
                "latitude": "11.111111",
                "longitude": "22.222222",
                "fullAddress": "John Doe's House",
                "fullName": "John Doe",
                "taxOffice": "Company of OMS's Tax Office", // Kurumsal fatura olmadığı durumda (commercial=false ise) body içerisinde dönmeyecektir.
                "taxNumber": "Company of OMS's Tax Number" // Kurumsal fatura olmadığı durumda (commercial=false ise) body içerisinde dönmeyecektir.
            },
            "customerFirstName": "John",
            "customerEmail": "pf+j2jm8x99@trendyolmail.com",
            "customerId": 888888888,
            "supplierId": 99999999,
            "customerLastName": "Doe",
            "channelId": 25, // 1 ise TR core,25 ise luxury kanalından gelen sipariştir.
            "shipmentPackageId": 3330111111, // Paket ID'si
            "cargoTrackingNumber": 7280027504111111,
            "cargoTrackingLink": "https://tracking.trendyol.com/?id=111111111-1111-1111-1111-11111111",
            "cargoSenderNumber": "210090111111",
            "sellerDeliveryMethod": "", // Türkiye marketplace için her zaman null gelir
            "sellerOtpCode": "", // Türkiye marketplace için her zaman null gelir
            "cargoProviderName": "Trendyol Express",
            "lines": [
                {
                    "quantity": 1,
                    "salesCampaignId": 11,
                    "productSize": "Tek Ebat",
                    "stockCode": "111111", // Satıcı stok kodu
                    "productName": "Kuş ve Çiçek Desenli Tepsi - Yeşil / Altın Sarısı - 49 cm, 01SYM134, Tek Ebat",
                    "contentId": 1239111111,
                    "productOrigin": "TR",
                    "sellerId": 2738, // Satıcı ID'si
                    "lineGrossAmount": 498.90, // Ürünün birim brüt fiyatı (indirimsiz)
                    "lineTotalDiscount": 0.00, // Birim toplam indirim (lineSellerDiscount + lineTyDiscount)
                    "lineSellerDiscount": 0.00, // Birim satıcı indirimi (item'ların ortalaması)
                    "lineTyDiscount": 0.00, // Birim Trendyol indirimi (item'ların ortalaması)
                    "discountDetails": [ // Her bir adet (item) için ayrı indirim detayı
                        {
                            "lineItemId": "11111111",
                            "lineItemPrice": 498.90, // İndirimli birim fiyat (lineGrossAmount - lineItemSellerDiscount - lineItemTyDiscount)
                            "lineItemSellerDiscount": 0.00, // Bu item'a uygulanan satıcı indirimi
                            "lineItemTyDiscount": 0.00 // Bu item'a uygulanan Trendyol indirimi
                        }
                    ],
                    "currencyCode": "TRY",
                    "productColor": "Yeşil",
                    "lineId": 4765111111, // Sipariş satır ID'si
                    "vatRate": 20.00, // KDV oranı
                    "barcode": "8683772071724",
                    "orderLineItemStatusName": "Delivered",
                    "lineUnitPrice": 498.90, // Net birim fiyat (lineGrossAmount - lineSellerDiscount - lineTyDiscount)
                    "fastDeliveryOptions": [],
                    "productCategoryId": 2710,
                    "commission": 13, // Komisyon oranı
                    "businessUnit": "Sports Shoes",
                    "cancelledBy": "", // İptal eden taraf
                    "cancelReason": "", // İptal nedeni
                    "cancelReasonCode": 0, // İptal neden kodu
                    "defectiveClaimListingInsight": "Kırık ve akma sorunları var" //new field
                }
            ],
            "orderDate": 1762253333685,
            "identityNumber": "11111111111",
            "currencyCode": "TRY",
            "packageHistories": [
                {
                    "createdDate": 1762242537624,
                    "status": "Created"
                }
            ],
            "shipmentPackageStatus": "Delivered",
            "status": "Delivered",
            "whoPays": 1, // Eğer satıcı anlaşması ise 1 gelir, trendyol anlaşması ise alan gelmez
            "deliveryType": "normal",
            "timeSlotId": 0,
            "estimatedDeliveryStartDate": 1762858136000,
            "estimatedDeliveryEndDate": 1763030936000,
            "packageTotalPrice": 498.90, // Paketin toplam net fiyatı (indirimli)
            "deliveryAddressType": "Shipment",
            "agreedDeliveryDate": 1762376340000,
            "fastDelivery": false,
            "originShipmentDate": 1762242537619,
            "lastModifiedDate": 1762865408581,
            "commercial": false,
            "fastDeliveryType": "",
            "deliveredByService": false,
            "warehouseId": 372389,
            "invoiceLink": "https://developers.trendyolefaturam.com/11111111111",
            "micro": true, // micro ihracat siparişleri için true olarak dönecektir.
            "giftBoxRequested": false,
            "3pByTrendyol": false,
            "etgbNo": "25341453EX025864", // micro true olduğunda etgbNo alanı için bilgi dönecektir.
            "etgbDate": 1762646400000, // micro true olduğunda etgbDate alanı için bilgi dönecektir.
            "containsDangerousProduct": false, // micro ihracat siparişlerinde satıcıya gelen siparişte paket içerisinde herhangi bir tehlikeli ürün varsa pil, parfüm vb. gibi, true dönecektir.
            "cargoDeci": 10, // Bu bilgi sonradan değişebilmektedir
            "boxQuantity": 4,
            "deci": 4.4,
            "width": "", // Bu bilgi Türkiye Pazaryeri için null olarak dönmektedir
            "length": "", // Bu bilgi Türkiye Pazaryeri için null olarak dönmektedir
            "height": "", // Bu bilgi Türkiye Pazaryeri için null olarak dönmektedir
            "isCod": false,
            "createdBy": "order-creation", // Paketin nasıl oluşturulduğunu gösterir, "order-creation", "split", "cancel" veya "transfer" olabilir
            "originPackageIds": null, // Bu alan iptal veya bölme işlemlerinden sonra doldurulur ve bu işlemlerden sonra ilk paketin packageid'sini verir.
            "hsCode": "711111000000", // Bu alan mikro siparişler için string olarak dönecektir.
            "shipmentNumber": 606404425,
            "is4P": true // Trendyol Yurt Dışı Aracılığı siparişleri için true olarak dönecektir.
        }
    ]
}
 
   
```

<br />

**15 Haziran 2026 itibari ile Trendyol Yurt Dışı Aracılığı ile modeli için servis cevabına aşağıdaki alanlar da eklenecektir:**

**"invoiceRejectedReasonKeys" alanı yalnızca is4P:true siparişler ve invoiceStatus=Rejected ise dönmektedir.**

```json
"invoiceNumber": "1255141" 
"invoiceStatus": "NotInvoiced" 
"invoiceRejectedReasonKeys: [
{	
"INVOICE_NUMBER_ALREADY_EXISTS",
"INVOICE_TOTAL_MISMATCH"    
}
]

```

**"invoiceStatus" alanı değerleri açıklamaları:**

| invoiceStatus   | Açıklama                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NotInvoiced** | Sipariş paketine ait faturanın beslenmediğini gösterir.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Received**    | Sipariş paketine ait fatura beslenmiştir ve kontrol aşamasındadır.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Rejected**    | Sipariş paketine ait fatura, kontroller sonucu hatalı bulunmuştur. Bu statüdeki sipariş paketleri için; Türkiye Pazaryerindeki bir sipariş ise hatalı faturanın sipariş üzerinden silinip, tekrar gönderilmesi gerekmektedir. Sipariş Mikro İhracat veya Trendyol Yurtdışı Aracılığı siparişi ise aynı sipariş paketine fatura silme isteği yapılmadan yeni bir fatura beslenmelidir. is4P:true olan Trendyol Yurt Dışı Aracılığı siparişleri için invoiceStatus=Rejected ise "invoiceRejectedReasonKeys" alanı dönmektedir. |
| **Invoiced**    | Sipariş paketine ait fatura yapılan kontroller sonucu doğru bulunmuştur. Sipariş paketine ait "invoiceLink" alanı yalnızca bu statüye geçen sipariş paketinlerinde dolu olarak dönecektir. Bu statüye geçmeyen Mikro İhracat ve Trendyol Yurt Dışı Aracılığı sipariş paketleri için kargo etiketi entegrasyon servisimizden dönmeyecektir.                                                                                                                                                                                   |

**"invoiceRejectedReasonKeys" alanı değerleri açıklamaları:**

| invoiceRejectedReasonKeys            | Açıklama                                                                                                                                          |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **INVOICE\_LINE\_MISMATCH**          | Siparişinizde yer alan her bir ürün çeşidi için; ürün miktarı, birim fiyat ve KDV bilgileri uyuşan bir kalem bulunması gerekmektedir.             |
| **INVOICE\_TOTAL\_MISMATCH**         | Faturanızdaki dip toplam tutarın siparişteki toplam tutar ile eşleşmesi gerekmektedir.                                                            |
| **INVOICE\_LINE\_NUMBER\_MISMATCH**  | Faturanızdaki kalem sayısı ile siparişteki ürün çeşidi sayısı eşleşmelidir.                                                                       |
| **INVOICE\_TYPE\_MISMATCH**          | Faturanızdaki fatura tipi satış olmalıdır.                                                                                                        |
| **SENDER\_VKN\_MISMATCH**            | Faturanızdaki VKN bilginiz sistemdeki tanımlı VKN ile aynı olmalıdır.                                                                             |
| **RECEIPENT\_VKN\_MISMATCH**         | Faturanızdaki alıcı VKN bilgisi Trendyol VKN bilgisi olmalıdır.                                                                                   |
| **INVOICE\_NUMBER\_MISMATCH**        | Faturanızdaki fatura numarası sipariş için beslediğiniz fatura numarası ile aynı olmalıdır.                                                       |
| **INVOICE\_DATE\_MISMATCH**          | Faturanızdaki fatura tarihi sipariş tarihinden sonra olmalıdır.                                                                                   |
| **INVOICE\_SCENARIO\_MISMATCH**      | Faturanızdaki fatura senaryosu temel veya ticari olmalıdır.                                                                                       |
| **INVOICE\_NOT\_FOUND\_IN\_MAILBOX** | Fatura Trendyol gelen kutusunda bulunamamaktadır. Yeni bir fatura iletmeniz beklenmektedir.                                                       |
| **INVOICE\_NUMBER\_ALREADY\_EXISTS** | Daha önce gönderilen bir "invoiceNumber" farklı bir sipariş paketi için tekrar gönderilmektedir. Fatura numarasının değiştirilmesi gerekmektedir. |