---
updatedAt: 2026-10-07T11:53:02.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Model

Webhook ( web kancaları ) geliştirmeleri ile birlikte , belirli bir olay ve ya işlem gerçekleştiğinde başka bir uygulamayı otomatik olarak bilgilendirebileceğiz.

Siparişlerinizi çekmek için kullandığınız getshipmentpackage servisini kullanarak veri almak yerine , webhook ile (web kancaları ile) ,olayın meydana geldiği zaman tetiklenen, sizin paylaştığınız özel bir URL’ye istek gönderen bir mekanizma kullanılmaktadır.

### Webhook Servisi

Trendyol Satıcı Merkezi'ndeki sipariş pakerleri ile ilgili bildirim almak için webhook aboneliklerini kullanabilirsiniz. Siparişlerin aşağıdaki statuleri için webhook kullanılabilir

* "CREATED"
* "PICKING"
* "INVOICED"
* "SHIPPED"
* "CANCELLED"
* "DELIVERED"
* "UNDELIVERED"
* "RETURNED"
* "UNSUPPLIED"
* "AWAITING"
* "UNPACKED"
* "AT\_COLLECTION\_POINT"
* "VERIFIED"

Tüm statuleri tek bir webhook yaratma servisi ile elde edebilirsiniz. Yapılan istekler statu farketmeksizin full order datası olarak iletilecek olup, satıcıların, siparişin istenen durumunu alabilmesi için webhook hizmetini aşağıda ki modele göre sağlamanız gerekmektedir.

### Webhook Authorization

İzin verilen 2 tür yetkilendirme yöntemi vardır: "BASIC\_AUTHENTICATION" veya "API\_KEY". Webhook isteğinizi oluştururken "AuthenticationType" adlı alanda ilgili yöntemlerden birini kullanmalısınız.

* "AuthenticationType" alanı "API\_KEY" ise, "apiKey" alanı zorunludur ve "username" ve "password" alanları gönderilmeyebilir.
  * Eğer servisiniz header'da api key bekliyorsa, ilgili alan "x-api-key" olarak gönderilecektir.
* "AuthenticationType" alanı "BASIC\_AUTHENTICATION" ise, "username" ve "password" alanları zorunludur. "apiKey" alanı gönderilmeyebilir.

### Webhook Yeniden Tetikleme Modeli

Webhook servislerinde hata alınması durumunda, sistem otomatik olarak aksiyon alacak olup ilgili webhook isteğini pasife alacaktır, bu kapsamda satıcılarımıza iki adet mail iletiyor olacağız.

* 1.Mailde hata alınan webhook ID ile ilgili bilgileri paylaşıyor olup, bu servise istek atmaya devam edeceğimiz süreyi sizinle paylaşıyor olacağız.
* 2.Mailde ise ilgili sürenin sonuna geldiğimizi ve hata alınan webhook ID nin pasife alındığını sizlere bildirmiş olacağız.

Pasife alınan webhooklarınızı servisinizdeki sorunu giderdikten sonra aktife alabilirsiniz.

### Webhook Önemli Notlar

* Webhook servislerinize yapılan herhangi bir başarısız istek olması durumunda, Trendyol, başarılı olana kadar her 5 dakikada bir başarısız istekleri iletecektir. (Bu gelecekte değiştirilecektir)
* Webhook ile veri gönderimi her zaman olanaklı olamadığı için, ilgili servis üzerinden, Trendyol'dan periyodik olarak veri almak için geliştirme yapmanız tavsiye edilmektedir.
  * Örneğin sipariş datası için bir webhook isteği oluşturduysanız, getshipmentpackage servisini kullanarak periyodik olarak datalarınızı eşitlemenizi öneririz.
* Webhook servislerinizin endpointi "Trendyol", "Dolap", "Localhost" ibareleri içermemelidir.
* 1 satıcı için oluşturulabileceek maksimum webhook sayısı 15 dir. Pasife alınan webhooklarda burdaki sayıya dahildir. Maksimum webhook sayısını aşarsanız var olan webhooklarınızdan uygun olanı silip yeniden webhook tanımlayabilirsiniz

### Webhook Request Modeli

Şu anda satıcıların getShipmentPackages hizmetiyle yalnızca aynı modele sahip siparişleri kullanmasına izin veriyoruz.

* Request tipi JSON formatında olmalıdır.
* Request methodu POST olmalıdır.

**"createdBy" aşağıdaki değerleri alabilir:**

* "order-creation" -> Paket, gelen siparişle doğrudan oluşturulur
* "cancel" -> Paket, kısmi iptalden sonra oluşturulur
* "split" -> Paket, paket bölünmesine göre oluşturulur
* "transfer" -> Siparişi alan satıcının ürünü olmaması nedeniyle Trendyol tarafından başka bir satıcıya yönlendirilen siparişler.

**Adres Bilgilerine Erişim**

* Mikro ihracat ve Yurt Dışı Aracılığı Modeli siparişlerindeki shipment adres alanları bazı durumlarda boş dönebilir. İlgili siparişler için tekrar istek attığınızda adres alanları dolu gelecektir.
* "defectiveClaimListingInsight" kusurlu/eksik/yanlış reasonla iadesi onaylanan ürünleri tespit edip, yeni sipariş geldiğinde satıcıya o ürün özelinde müşteride nasıl bir problem yarattığını ifade eden bir alandır. Bu sayede yeni gelen siparişte de aynı durumu yaşamamak için satıcının proaktif davranmasını ve ürünleri hazırlar\&kargolarken önlemlerini almasını, satıcı kaynaklı defective sebeplerle iade edilme oranlarını düşürmeyi hedefliyoruz.

**Trendyol siparişleri aşağıdaki modele göre iletiyor olacak**

```json

{
    "totalElements": 1,
    "totalPages": 1,
    "page": 0,
    "size": 1,
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
            "invoiceNumber": "1255141",
            "invoiceStatus": "NotInvoiced",
            "invoiceRejectedReasonKeys": "" ,// Yalnızca Trendyol Yurt Dışı Aracılığı modelindeki siparişler için bu alan dönecektir.
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

**15 Haziran 2026 tarihinden itibaren Trendyol Yurt Dışı Aracılığı ile modeli için servis cevabına aşağıdaki alanlar da eklenecektir (bu tarih, şu an taslaktır):**

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

| invoiceStatus   | Açıklama                                                                                                                                                                                                                                                                                                                                                                              |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **NotInvoiced** | Sipariş paketine ait faturanın beslenmediğini gösterir.                                                                                                                                                                                                                                                                                                                               |
| **Received**    | Sipariş paketine ait fatura beslenmiştir ve kontrol aşamasındadır.                                                                                                                                                                                                                                                                                                                    |
| **Rejected**    | Sipariş paketine ait fatura, kontroller sonucu hatalı bulunmuştur. Bu statüdeki sipariş paketleri için; Türkiye Pazaryerindeki bir sipariş ise hatalı faturanın sipariş üzerinden silinip, tekrar gönderilmesi gerekmektedir. Sipariş Mikro İhracat veya Trendyol Yurtdışı Aracılığı siparişi ise aynı sipariş paketine fatura silme isteği yapılmadan yeni bir fatura beslenmelidir. |
| **Invoiced**    | Sipariş paketine ait fatura yapılan kontroller sonucu doğru bulunmuştur. Sipariş paketine ait "invoiceLink" alanı yalnızca bu statüye geçen sipariş paketinlerinde dolu olarak dönecektir. Bu statüye geçmeyen Mikro İhracat ve Trendyol Yurt Dışı Aracılığı sipariş paketleri için kargo etiketi entegrasyon servisimizden dönmeyecektir.                                            |

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