---
updatedAt: 2026-10-07T11:52:23.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Çekme (getShipmentPackages)

<br />

<br />

<Callout icon="⚠️" theme="warning">
  ### **ÖNEMLİ GÜNCELLEME (15 Ekim 2026 Tarihinde v2 Endpointi ile Devreye Alınacaktır)**

  `getShipmentPackages` endpoint’i için aşağıdaki değişiklikler planlanmaktadır:

  \- Maksimum erişilebilir kayıt sayısı **10.000 (maxQueryWindowResult)** ile sınırlandırılacaktır _(ilerleyen dönemlerde bu limit daha da düşürülebilir)_
  \- **10.000 limiti shipment package ID bazındadır.**

  \- Sayaç, orderNumber üzerinden çalışmaz.
  \- **shipmentPackageId** üzerinden çalışır.Aynı sipariş birden fazla pakete bölünmüşse her paket ayrı sayılır. Paket içindeki lines veya ürün adedi sayılmaz.
  **Limit Nasıl Uygulanır?**<br />Tek bir istekte en fazla size=200 paket döner. 10.000 limiti tek response boyutu değil, sayfalama ile erişilebilen maksimum kayıt penceresidir.<br />Sayfalama sıfır tabanlıdır:

  page=0\&size=200: 1–200<br />page=1\&size=200: 201–400<br />page=49\&size=200: 9.801–10.000<br />Bu nedenle güvenli erişim aralığı page=0 ile page=49 arasındadır.<br />Filtre sonucunun 10.000’den fazla olduğu nasıl anlaşılır?<br />Response içindeki totalElements, filtreyle eşleşen toplam paket sayısını gösterir.<br />

  **Örnek:**<br /><br />"totalElements": 12540,<br />"totalPages": 63,<br />"page": 0,<br />"size": 200,<br />"content": \[]

  **Bu response şu anlama gelir:**

  \- Filtreyle eşleşen 12.540 paket vardır.
  \- Mevcut response yalnızca ilk 200 paketi içerir.
  \- v2/orders ile ilk 10.000 kayda kadar erişilebilir.
  \- Kalan 2.540 kayıt aynı geniş filtreyle alınamaz.
  **Kontrol şu şekilde yapılmalıdır:**
  totalElements > 10000
  totalPages 50’den büyük görünebilir; ancak bu, bütün sayfaların v2/orders üzerinden erişilebilir olduğu anlamına gelmez.

  **10.000’den fazla sonuç varsa ne yapılmalı?**

  1\. **Sipariş Paketlerini Akış ile Çekme servisi kullanılabilir:**
  Tüm paketlerin alınması gerekiyorsa Sipariş Paketlerini Akış ile Çekme servisi kullanılmalıdır. Her response’taki nextCursor sonraki isteğe gönderilir; hasMore=false olana kadar devam edilir.
  2\. **Tarih aralığı küçültülebilir:**
  startDate ve endDate kullanılarak sorgu daha küçük zaman aralıklarına bölünebilir.

  Örnek:

  \- İlk sorgu: 1–2 Ağustos&#x20;
  \- İkinci sorgu: 3–4 Ağustos&#x20;
  \- Üçüncü sorgu: 5–6 Ağustos
  Her parçanın totalElements değeri ayrıca kontrol edilmelidir.
  3\. **Filtre daraltılabilir:**<br />İhtiyaca göre şu alanlar kullanılabilir:

  \- status
  \- orderNumber
  \- barcode
  \- shipmentPackageIds
  \- storeFrontCode
  \- startDate/endDate
  \- Erişilebilir veri kapsamı **son 1 ay** ile sınırlandırılacaktır
  \- Rate limit değerleri güncellenecek olup, yüksek hacimli isteklerde daha sık **429 (Too Many Requests)** hatası alınabilecektir

  Bu değişiklikler, büyük veri setlerini tarama (scanning) senaryolarında mevcut endpoint’in kullanımını sınırlayacaktır.

  ***

  🚀 **Önerilen Aksiyon**

  Büyük veri çekme ve senkronizasyon işlemleri için **getShipmentPackagesStream** endpoint’ine geçiş yapmanız önerilir.

  Stream endpoint:

  \- Cursor tabanlı pagination ile çalışır
  \- Büyük veri setleri için optimize edilmiştir
  \- Rate limit açısından daha verimli kullanım sağlar

  ***

  💡 **Not**

  Mevcut `getShipmentPackages` endpoint’i kullanılmaya devam edilebilir, ancak:

  \- Büyük veri tarama (full scan)
  \- Periyodik senkronizasyon (polling)

  gibi senaryolar için uygun değildir.
</Callout>

<br />

Trendyol sistemine ilettiğiniz ürünler ile müşteriler tarafından verilen ve ödeme kontrolünde olan her siparişin bilgisini bu method yardımıyla alabilirsiniz. Sistem tarafından ödeme kontrolünden sonra otomatik paketlenerek sipariş paketleri oluşturulur.

**Sipariş Sorgulama ve Sıralama:**

\- Bu servise 1 dakika içinde en fazla 1000 adet istek atabilirsiniz.<br />- Servise atılan isteklerde, PackageLastModifiedDate sıralamasına göre bir response alırsınız.<br />- suppliers/(supplierid)/orders?status=Created gibi bir query ile paket statülerine göre sorgulama yapılabilir. Kullanılabilen statüler: Created, Picking, Invoiced, Shipped, Cancelled, Delivered, UnDelivered, Returned, UnSupplied, Awaiting, Verified<br />- Sipariş bilgilerini çekerken, ürünün createProducts ile gönderilen Barkod değerlerine göre paketleme ve işlemler yapılmalıdır.<br />- Maksimum 1 aylık geçmişe dönük sipariş sorgularını bu servis üzerinden yapabilirsiniz.

**Alanlar, Veri Tipleri ve Karakter Sayıları:**

\- Body içindeki değerlerin karakter sayıları ve veri tipleri, sipariş sayısının doğal artışıyla birlikte değişebilir. Sisteminizi buna uygun şekilde kurmanız önerilir.
\- Sipariş datasında bulunan orderNumber, Trendyol sistemindeki ana sipariş numarasını temsil eder. İlgili seviyede yer alan id değeri, oluşturulmuş Sipariş Paketini temsil eder.
\- customerId, Trendyol müşteri hesabına tanımlı unique bir değerdir.
\- deliveryAddressType, "Shipment" veya "CollectionPoint" olarak dönebilir. "CollectionPoint" ise sipariş teslimat noktası siparişidir.
\- orderDate, Timestamp (milliseconds) formatında GMT +3 olarak iletilir. createdDate bilgileri ise GMT formatında iletilir. Convert işlemi yaparken bu bilgiye dikkat edilmelidir.
\- Hızlı teslimat bilgisi için kullanılan fastDeliveryType alanı, "TodayDelivery", "SameDayShipping", "FastDelivery" değerlerini alabilir.
\- Trendyol Satıcı Panelinde cargoTrackingNumber değeri için kullanılan barkod CODE128 formatındadır.
\- Trendyol İhracat Partnerliği kapsamında sipariş paketlerini çekme servisimize yeni bir alan olarak 3pByTrendyol alanını ekledik. Alan boolean bir alandır. Alan değeri true olduğunda ;
\- micro alanı false değer alacaktır.
\- invoiceAddress datasında Trendyol’a ait şirket bilgileri yer alacak olup faturalar da buradaki bilgilere göre kesilecektir.
\- "defectiveClaimListingInsight" kusurlu/eksik/yanlış reasonla iadesi onaylanan ürünleri tespit edip, yeni sipariş geldiğinde satıcıya o ürün özelinde müşteride nasıl bir problem yarattığını ifade eden bir alandır. Bu sayede yeni gelen siparişte de aynı durumu yaşamamak için satıcının proaktif davranmasını ve ürünleri hazırlar\&kargolarken önlemlerini almasını, satıcı kaynaklı defective sebeplerle iade edilme oranlarını düşürmeyi hedefliyoruz.

**Sipariş Statüleri İle İlgili Bilgiler:**

\- **Awaiting** statüsündeki siparişleri sadece **stok** işlemleri için kullanabilirsiniz. Bu statüdeki siparişler ile ilgili farklı bir işlem **yapmamanız** gerekmektedir. Şu an bu statüdeki siparişler için sizlere servis cevabında gerekli veriler iletilmektedir. İlerleyen günlerde bu veriler sizlere dönmeyecektir.Bu statüdeki siparişleri kargoya teslim ettiğinizde, yaşanabilecek sipariş iptali işlemlerinin olabileceğini ve Trendyol olarak bu konuda bir sorumluluk kabul etmediklerini belirtmek isteriz.
\- İptal olan siparişler için status=Cancelled,UnSupplied parametresi kullanılabilir.
\- Bölünmüş siparişler için status=UnPacked parametresi kullanılabilir.
\- Bir sipariş paketi içindeki bir ya da birden fazla kalem iptal edilirse, orderNumber aynı kalarak sipariş paketi bozulur ve yeni bir id değeri ve kargo barkodu oluşturulur.

**Adres Bilgilerine Erişim:**

\- Sipariş paketlerini çekme servisi tarafından dönen **Türkiye, Azerbaycan ve GULF** bölgelerinin adres alanlarının id değerlerine (city, district, neighbourhood) [Adres Bilgileri Servislerinden](https://integration-documentation-udwy.readme.io/docs/adres-bilgileri) ulaşabilirsiniz.

\- **GULF Bölgesi**(Suudi Arabistan, Bahreyn, Katar, Kuveyt, Birleşik Arap Emirlikleri ve Umman) siparişlerindeki adres alanları bazı durumlarda boş dönebilir. Özellikle ilçe bilgisi ile ilgili sistemlerinizde kontroller varsa kaldırmanızı rica ederiz.

\- Mikro ihracat ve Yurt Dışı Aracılığı Modeli siparişlerindeki shipment adres alanları bazı durumlarda boş dönebilir. İlgili siparişler için tekrar istek attığınızda adres alanları dolu gelecektir.

**Menşei Bilgisi:**

\- Mikro ihracat siparişlerinde oluşan paketlerde faturalara menşei bilgisi eklenmesi gerekmektedir. Menşei bilgisi “lines” alanı altından "productOrigin" datası üzerinden dönecektir.

**Altın, Gübre ve Yüksek Tutarlı Siparişler:**

\- Altın, gübre veya 5000₺ üzeri siparişlere ait TCKN numarası "IdentityNumber" alanında iletilir.

**Kurumsal Faturalı Siparişler**

\- Siparişin kurumsal olup olmadığını belirlemek için sipariş datasındaki **commercial** değerini kontrol ediniz.

\- Eğer "commercial" değeri "true" olarak dönerse, kurumsal bir sipariş olduğunu belirtir.

\- Eğer "commercial" değeri "false" olarak dönerse, siparişin bireysel bir müşteriye ait olduğunu belirtir.

\- **Kurumsal Fatura Bilgileri:** Eğer sipariş kurumsal bir müşteriye aitse (commercial=true), aşağıdaki bilgileri **invoiceAddress** alanından alabilirsiniz:

\- "company": Kurumun adı

\- "taxNumber": Kurumun vergi numarası

\- "taxOffice": Kurumun bağlı olduğu vergi dairesi

\- **E-Fatura Mükellefi Kontrolü:** Kurumsal müşterinin e-fatura mükellefi olup olmadığını kontrol etmek için invoiceAddress alanındaki **eInvoiceAvailable** değerini kullanabilirsiniz.

\- Eğer "eInvoiceAvailable" değeri "true" ise, müşteri e-fatura mükellefidir.

\- Eğer "eInvoiceAvailable" değeri "false" ise, müşteri e-fatura mükellefi değildir.

**"createdBy" aşağıdaki değerleri alabilir:**

\- "order-creation" -> Paket, gelen siparişle doğrudan oluşturulur
\- "cancel" -> Paket, kısmi iptalden sonra oluşturulur
\- "split" -> Paket, paket bölünmesine göre oluşturulur
\- "transfer" -> Siparişi alan satıcının ürünü olmaması nedeniyle Trendyol tarafından başka bir satıcıya yönlendirilen siparişler.

### **GET** getShipmentPackages

Herhangi bir tarih parametresi vermeden aşağıdaki endpoint ile istek atmanız halinde son bir hafta içerisindeki siparişleriniz sizlere gösterilecektir. startDate ve endDate parametrelerini eklemeniz halinde verilebilecek maksimum aralık iki hafta olacaktır.

<Callout icon="❗️" theme="success">
  ### **Order V2 Servisleri**

  **Aşağıdaki v2 endpoint servisinin 15 Ekim 2026 tarihi itibari ile kullanımı zorunlu olacaktır. İşlemlerinize devam edebilmek için güncel olan aşağıdaki endpoint servisini kullanmanız gerekmektedir. V2 endpoint servisi ile birlikte:**<br />**Maksimum erişilebilir kayıt (ShipmentPackageId) sayısı 10.000 (maxQueryWindowResult) ile sınırlandırılacaktır.&#x20;**
</Callout>

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders)
</NoLinkCallout>

<br />

<Callout icon="❗️" theme="error">
  ### UYARI

  **Aşağıdaki endpoint servisleri 15 Ekim 2026 tarihi itibari ile kullanım dışı olacaktır. Bu tarihe kadar yukarıda belirtilen Order V2 endpoint servisine geçiş yapmanız gerekmektedir.&#x20;**
</Callout>

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders)
</NoLinkCallout>

**Önerilen Endpoint**

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders?status=Created\&startDate=\{startDate\}\&endDate=\{endDate\}\&orderByField=PackageLastModifiedDate\&orderByDirection=DESC\&size=50](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders?status=Created\&startDate=\{startDate\}\&endDate=\{endDate\}\&orderByField=PackageLastModifiedDate\&orderByDirection=DESC\&size=50)
</NoLinkCallout>

**Servis Parametreleri**

| Parametre          | Parametre Değer                                                                                                                               | Açıklama                                                                                                     | Tip    |
| :----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------ |
| startDate          |                                                                                                                                               | Belirli bir tarihten sonraki siparişleri getirir. Timestamp (milliseconds) ve GMT +3 olarak gönderilmelidir. | long   |
| endDate            |                                                                                                                                               | Belirtilen tarihe kadar olan siparişleri getirir. Timestamp (milliseconds) ve GMT +3 olarak gönderilmelidir. | long   |
| page               |                                                                                                                                               | Sadece belirtilen sayfadaki bilgileri döndürür                                                               | int    |
| size               | Maksimum 200                                                                                                                                  | Bir sayfada listelenecek maksimum adeti belirtir.                                                            | int    |
| supplierId         |                                                                                                                                               | İlgili tedarikçinin ID bilgisi gönderilmelidir                                                               | long   |
| orderNumber        |                                                                                                                                               | Sadece belirli bir sipariş numarası verilerek o siparişin bilgilerini getirir                                | string |
| status             | Created, Picking, Invoiced, Shipped ,Cancelled, Delivered, UnDelivered, Returned, AtCollectionPoint, UnPacked, UnSupplied, Awaiting, Verified | Siparişlerin statülerine göre bilgileri getirir.                                                             | string |
| orderByField       | PackageLastModifiedDate                                                                                                                       | Son güncellenme tarihini baz alır.                                                                           | string |
| orderByDirection   | ASC                                                                                                                                           | Eskiden yeniye doğru sıralar.                                                                                | string |
| orderByDirection   | DESC                                                                                                                                          | Yeniden eskiye doğru sıralar.                                                                                | string |
| shipmentPackageIds |                                                                                                                                               | Paket numarasıyla sorgu atılır.                                                                              | lon    |

**Örnek Servis Cevabı**

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
            "orderCountryCode":"TR", // müşterinin bulunduğu , sipariş verdiği ülke
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
            "channelId": 25, //1 ise TR core,25 ise luxury kanalından gelen sipariştir.
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
            "invoiceRejectedReasonKeys": "" ,// Yalnızca Trendyol Yurt Dışı Aracılığı modelindeki invoiveStatus=Rejected olan siparişleri için bu alan dönecektir.
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
| **Invoiced**    | Sipariş paketine ait fatura yapılan kontroller sonucu doğru bulunmuştur. Sipariş paketine ait "invoiceLink" alanı yalnızca bu statüye geçen sipariş paketinlerinde dolu olarak dönecektir. Bu statüye geçmeyen Mikro İhracat ve Trendyol Yurt Dışı Aracılığı sipariş paketleri için kargo etiketi, entegrasyon servisimizden dönmeyecektir.                                                                                                                                                                                  |

Stage ortamda seller id: 2738 satıcısı için aşağıdaki sipariş paketlinde onaylanan fatura statüsünü görebilirsiniz:

\- shipment package Id : 92087137 - order number: 1238560700

Stage ortamda seller id: 2738 satıcısı için aşağıdaki sipariş paketlerinde reddedilen fatura statü ve reddedilme sebeplerini örnek olarak kullanabilirsiniz:

\- shipment package Id : 92083563 - order number: 710581601
\- shipment package Id: 92083587 - order number: 714285493
\- shipment package Id: 92083589 - order number: 776411193
\- shipment package Id: 92083603 - order number: 791289440
\- shipment package Id: 92083577 - order number: 785513075

\*\***"invoiceRejectedReasonKeys" alanı için dönen değerlerin açıklamaları aşağıdaki gibidir:**

| invoiceRejectedReasonKeys            | İlgili İş Modeli             | Açıklama                                                                                                                                          |
| :----------------------------------- | :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **INVOICE\_LINE\_MISMATCH**          | Trendyol Yurt Dışı Aracılığı | Siparişinizde yer alan her bir ürün çeşidi için; ürün miktarı, birim fiyat ve KDV bilgileri uyuşan bir kalem bulunması gerekmektedir.             |
| **INVOICE\_TOTAL\_MISMATCH**         | Trendyol Yurt Dışı Aracılığı | Faturanızdaki dip toplam tutarın siparişteki toplam tutar ile eşleşmesi gerekmektedir.                                                            |
| **INVOICE\_LINE\_NUMBER\_MISMATCH**  | Trendyol Yurt Dışı Aracılığı | Faturanızdaki kalem sayısı ile siparişteki ürün çeşidi sayısı eşleşmelidir.                                                                       |
| **INVOICE\_TYPE\_MISMATCH**          | Trendyol Yurt Dışı Aracılığı | Faturanızdaki fatura tipi satış olmalıdır.                                                                                                        |
| **SENDER\_VKN\_MISMATCH**            | Trendyol Yurt Dışı Aracılığı | Faturanızdaki VKN bilginiz sistemdeki tanımlı VKN ile aynı olmalıdır.                                                                             |
| **RECEIPENT\_VKN\_MISMATCH**         | Trendyol Yurt Dışı Aracılığı | Faturanızdaki alıcı VKN bilgisi Trendyol VKN bilgisi olmalıdır.                                                                                   |
| **INVOICE\_NUMBER\_MISMATCH**        | Trendyol Yurt Dışı Aracılığı | Faturanızdaki fatura numarası sipariş için beslediğiniz fatura numarası ile aynı olmalıdır.                                                       |
| **INVOICE\_DATE\_MISMATCH**          | Trendyol Yurt Dışı Aracılığı | Faturanızdaki fatura tarihi sipariş tarihinden sonra olmalıdır.                                                                                   |
| **INVOICE\_SCENARIO\_MISMATCH**      | Trendyol Yurt Dışı Aracılığı | Faturanızdaki fatura senaryosu temel veya ticari olmalıdır.                                                                                       |
| **INVOICE\_NOT\_FOUND\_IN\_MAILBOX** | Trendyol Yurt Dışı Aracılığı | Fatura Trendyol gelen kutusunda bulunamamaktadır. Yeni bir fatura iletmeniz beklenmektedir.                                                       |
| **INVOICE\_NUMBER\_ALREADY\_EXISTS** | Trendyol Yurt Dışı Aracılığı | Daha önce gönderilen bir "invoiceNumber" farklı bir sipariş paketi için tekrar gönderilmektedir. Fatura numarasının değiştirilmesi gerekmektedir. |

<br />

**Paket Statüleri**

| Statü                  | Açıklama                                                                                                                                                                                                                                                                                               |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **orderDate**          | Müşterinin trendyol.com üzerinde siparişi oluşturduğu zaman dönmektedir.                                                                                                                                                                                                                               |
| **Awaiting, Verified** | Müşterinin trendyol.com üzerinde siparişi oluşturduktan sonra ödeme onayından bekleyen siparişler için bu statü dönmektedir. **(Bu statüdeki siparişler "Created" statüsüne geçene kadar herhangi bir işlem yapmamanız gerekmektedir. Sadece stok güncellemeleri için bu statüyü kullanabilirsiniz.)** |
| **Created**            | Sipariş gönderime hazır statüsünde olduğu zaman dönmektedir.                                                                                                                                                                                                                                           |
| **Picking**            | Sizin tarafınızdan iletilebilecek bir statüdür. Siparişi toplamaya başladığınız zaman veya paketi hazırlamaya başladığınız zaman iletebilirsiniz.                                                                                                                                                      |
| **Invoiced**           | Siparişin faturasını kestiğiniz zaman bize iletebileceğiniz statüdür.                                                                                                                                                                                                                                  |
| **Shipped**            | Taşıma durumuna geçen siparişler bu statüde belirtilmektedir.                                                                                                                                                                                                                                          |
| **AtCollectionPoint**  | Ürün ilgili PUDO teslimat noktasındadır. Müşterinin PUDO noktasına giderek teslim alması beklenmektedir.                                                                                                                                                                                               |
| **Cancelled**          | İptal edilen siparişlerdir. Unsupplied siparişleri de kapsar.                                                                                                                                                                                                                                          |
| **UnPacked**           | Paketi bölünmüş olan siparişlerdir.                                                                                                                                                                                                                                                                    |
| **Delivered**          | Teslim edilen siparişlerdir. Bu statüden sonra herhangi bir statü değişikliği yapılamaz.                                                                                                                                                                                                               |
| **UnDelivered**        | Sipariş müşteriye ulaştırılamadığı zaman dönen bilgisidir.                                                                                                                                                                                                                                             |
| **Returned**           | Müşteriye ulaşmayan siparişin tedarikçiye geri döndüğü bilgisidir. Bu statüden sonra herhangi bir statü değişikliği yapılamaz                                                                                                                                                                          |

**Mikro ihracat siparişleri için ülke kodu bilgileri**

| Ülke                      | Ülke Kodu |
| :------------------------ | :-------- |
| Suudi Arabistan           | SA        |
| Birleşik Arap Emirlikleri | AE        |
| Katar                     | QA        |
| Kuveyt                    | KW        |
| Umman                     | OM        |
| Bahreyn                   | BH        |
| Azerbaycan                | AZ        |
| Slovakya                  | SK        |
| Romanya                   | RO        |
| Çekya                     | CZ        |