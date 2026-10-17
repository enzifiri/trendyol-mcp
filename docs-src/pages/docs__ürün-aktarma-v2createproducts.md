---
updatedAt: 2026-10-04T10:43:47.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Aktarma V1 (createProducts)

Trendyol sistemine ürün aktarımı ve varyantlama işlemleri hakkında detaylı bilgi.

<Callout icon="❗️" theme="error">
  \*\*Aşağıdaki Ürün V1 endpoint servisleri **15 Ekim 2026 itibari ile kullanım dışı olacaktır.** Bu tarihe kadar [Product V2 servis geliştirmelerini](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-ak%C4%B1%C5%9F%C4%B1) yapmanız gerekmektedir.
</Callout>

### Ürün Aktarımı V1

Ürünleriniz Trendyol sistemine yüklenirken bu metod kullanılmaktadır. Tekli ve çoklu ürün gönderimini desteklemektedir.

* Bu method ile ürün aktarımı sağlanmadan önce Trendyol Marka Liste ve Kategori/Kategori Özellik bilgileri servisleri üzerinden ilgili detaylar alınmalıdır.
* Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.
* fastDeliveryType alanında tanımlama yapabilmek için deliveryDuration alanını 1 olarak girilmesi gerekmektedir.
* Product yaratma servisinde bulunan "stockCode" alanı, sipariş paketlerini çekme servisinden dönen "merchantSku" alanına gelmektedir. getShipmentPackages servisi üzerinden kontrol edilebilir.
* Ürün aktarma isteğinizin başarılı olması durumunda ürünleriniz ürün onay sürecine girer. Onay süreci devam eden ya da reddedilen ürünler yayına çıkmaz. Ürününüzün yayına çıkmaması durumunda, statüsünü productFilter servisinden kontrol etmeniz önerilmektedir.

<Callout icon="❗️" theme="error">
  **TOPLU İŞLEM KONTROLÜ**

  Ürün aktarım işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu [getBatchRequestResult](https://integration-documentation-udwy.readme.io/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult) servisi üzerinden kontrol etmeniz gerekmektedir.
</Callout>

### **POST** createProducts (Tekli Örnek)

<NoLinkCallout type="info" title="PROD">
    [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
    [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products)
</NoLinkCallout>

**Parametre Açıklamaları & Kuralları**

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parametre
      </th>

      <th>
        Zorunluluk
      </th>

      <th>
        Açıklama
      </th>

      <th>
        Veri Tipi
      </th>

      <th>
        Max. Karakter Sayısı
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        barcode
      </td>

      <td>
        Evet
      </td>

      <td>
        Özel karakter olarak yalnızca "." nokta , "-" tire , "\_" alt tire kullanılabilir. Türkçe karakterlerin(ğ, Ğ, Ş, ş, İ, Ü vb) kullanılması uygundur. Barkodunuzun ortasında boşluk varsa birleştirilerek içeri alınır. Stok-fiyat güncellemelerinizi de içeri alınan barkoda göre yapmanız gerekmektedir.
      </td>

      <td>
        string
      </td>

      <td>
        40
      </td>
    </tr>

    <tr>
      <td>
        title
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün ismi
      </td>

      <td>
        string
      </td>

      <td>
        100
      </td>
    </tr>

    <tr>
      <td>
        productMainId
      </td>

      <td>
        Evet
      </td>

      <td>
        Satıcı tarafından belirlenen, ana ürün kodudur. Ürün varyantlamak için kullanılmaktadır. Satıcı panelindeki karşılığı Model Kodudur.
      </td>

      <td>
        string
      </td>

      <td>
        40
      </td>
    </tr>

    <tr>
      <td>
        brandId
      </td>

      <td>
        Evet
      </td>

      <td>
        Trendyol Marka ID Bilgisi. Marka bilgilerini çekeceğiniz servise [buradan](https://integration-documentation-udwy.readme.io/docs/trendyol-marka-listesi-getbrands) ulaşabilirsiniz.
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        categoryId
      </td>

      <td>
        Evet
      </td>

      <td>
        Trendyol Kategori ID Bilgisi. Kategori bilgilerini çekeceğiniz servise [buradan](https://integration-documentation-udwy.readme.io/docs/trendyol-kategori-listesi-getcategorytree) ulaşabilirsiniz.
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        quantity
      </td>

      <td>
        Evet
      </td>

      <td>
        Stok miktarı
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        stockCode
      </td>

      <td>
        Hayır
      </td>

      <td>
        Tedarikçi iç sistemindeki unique stok kodu
      </td>

      <td>
        string
      </td>

      <td>
        100
      </td>
    </tr>

    <tr>
      <td>
        dimensionalWeight
      </td>

      <td>
        Evet
      </td>

      <td>
        Desi miktarı
      </td>

      <td>
        number
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        origin
      </td>

      <td>
        Hayır
      </td>

      <td>
        Ürünün menşei bilgisi. Menşei için girebileceğiniz değerlere [buradan](https://developers.trendyol.com/docs/men%C5%9Fei-de%C4%9Ferleri) ulaşabilirsiniz.
      </td>

      <td>
        string
      </td>

      <td>
        2
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün açıklama bilgileridir.
      </td>

      <td>
        HTML - string
      </td>

      <td>
        30.000
      </td>
    </tr>

    <tr>
      <td>
        currencyType
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün liste fiyatı para birimidir.
      </td>

      <td>
        string
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        listPrice
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün liste fiyatı(Satış fiyatı düşük olunca üstü çizilen fiyat) PSF
      </td>

      <td>
        number
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        salePrice
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün satış fiyatı TSF
      </td>

      <td>
        number
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        cargoCompanyId
      </td>

      <td>
        Evet
      </td>

      <td>
        Trendyol Kargo Firması Bilgisi. Kargo bilgilerini çekeceğiniz servise [buradan](https://integration-documentation-udwy.readme.io/docs/trendyol-kargo-%C5%9Firketleri-listesi-getproviders) ulaşabilirsiniz.
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        deliveryDuration
      </td>

      <td>
        Hayır
      </td>

      <td>
        Sevkiyat Süresi (Operasyon ekiplerimiz tarafından belirtilen aralıklarda barkod bazlı sevkiyat süresi girebilirsiniz. Göndermediğiniz taktirde varsayılan termin süreniz barkod üzerinde işletilecektir.)

        **Ağustos 2026 itibari ile:**

        Bugün Kargoda tanımı için 0 ve En Geç Yarın Kargoda tanımı için 1 değerinin gönderilmesi gerekecektir.
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        deliveryOption
      </td>

      <td>
        Hayır
      </td>

      <td>
        Hızlı teslimat seçeneklerinin girilmesini sağlar. 

        **Ağustos 2026 itibari ile&#xA0;**

        "fastDeliveryType" alanından değer gönderilmesine gerek kalmayacak olup, gönderilse dahi işlenmeyecektir. Yalnızca “deliveryDuration” altından yukarıda belirtilen değerlerden biri girilebilir.
      </td>

      <td>
        string
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        images
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün görsellerine ait URL adresi listesidir. Görsel url adresleri SSL sertifikalı "https" formatında adresler olmalıdır. Bir barkod için maksimum 8 adet görsel eklenebilir.Ürünlere ait görsellerin boyutlarının 1200x1800 ve 96dpi olması gerekmektedir.
      </td>

      <td>
        List
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        vatRate
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürün KDV oranı 0,1,10,20 gibi olmalı
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        lotNumber
      </td>

      <td>
        Hayır
      </td>

      <td>
        İlgili mevzuat kapsamında "Parti/Lot/SKT Bilgisi" alanını kullanarak ürününüze ait ilgili bilgileri sisteme girmeniz gerekmektedir. Ör: Parti No: 011220, Seri No: M00A59153, SKT: 12/12/2012, Lot No: 0301A79
      </td>

      <td>
        string(max: 100 karakter, A-Z, a-z, 0-9, ",", "-", ".", ":", "/") / null
      </td>

      <td>
        100
      </td>
    </tr>

    <tr>
      <td>
        shipmentAddressId
      </td>

      <td>
        Hayır
      </td>

      <td>
        Ürün Trendyol sistemindeki sevkiyat depo adresi ID bilgisi
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        returningAddressId
      </td>

      <td>
        Hayır
      </td>

      <td>
        Ürün Trendyol sistemindeki iade depo adresi ID bilgisi
      </td>

      <td>
        integer
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        attributes
      </td>

      <td>
        Evet
      </td>

      <td>
        Ürünün, Kategori bilgisi için gönderilebilecek özellik (Spesification/Attribute) bilgileridir. Özellik bilgilerini çekeceğiniz servise [buradan](https://integration-documentation-udwy.readme.io/docs/trendyol-kategori-%C3%B6zellik-listesi-getcategoryattributes) ulaşabilirsiniz. Renk bilgisi 50 karakterden fazla olamaz.
      </td>

      <td>
        List
      </td>

      <td>
        \-
      </td>
    </tr>

    <tr>
      <td>
        cargoProviders
      </td>

      <td>
        Hayır
      </td>

      <td>
        Barcode bazlı bir kargo firması tanımlamak istiyorsanız. [Linkteki](https://developers.trendyol.com/docs/kargo-firmas%C4%B1-filtreleme-servisi) servisten dönen kargo firmalarından birini kullanabilirsiniz.
      </td>

      <td>
        string
      </td>

      <td>
        \-
      </td>
    </tr>
  </tbody>
</Table>

**Örnek Servis İsteği**

```json
{
  "items": [
    {
        "barcode": "barkod-1234",
        "title": "Bebek Takımı Pamuk",
        "productMainId": "1234BT",
        "brandId": 1791,
        "categoryId": 411,
        "quantity": 100,
        "stockCode": "STK-345",
        "origin": "AD",
        "dimensionalWeight": 2,
        "description": "Ürün açıklama bilgisi",
        "currencyType": "TRY",
        "listPrice": 250.99,
        "salePrice": 120.99,
        "vatRate": 18,
        "cargoCompanyId": 10,
        "lotNumber": "string",
        "cargoProviders": ["kargo firması kodu"],
        "deliveryOption": {
            "deliveryDuration": 1
        },
      "images": [
            {
                "url": "https://www.sampleaddress/path/folder/image_1.jpg"
            }
        ],
        "attributes": [
            {
                "attributeId": 338,
                "attributeValueId": 6980
            },
            {
                "attributeId": 47,
                "customAttributeValue": "PUDRA"
            },
            {
                "attributeId": 346,
                "attributeValueId": 4290
            }
        ]
    }
]
}
```

**Birden fazla depo ile çalışıyorsanız aşağıdaki json'ı kullanmanızı rica ederiz.**

```json
{
  "items": [
    {
        "barcode": "barkod-1234",
        "title": "Bebek Takımı Pamuk",
        "productMainId": "1234BT",
        "brandId": 1791,
        "categoryId": 411,
        "quantity": 100,
        "stockCode": "STK-345",
        "origin": "AD",
        "dimensionalWeight": 2,
        "description": "Ürün açıklama bilgisi",
        "currencyType": "TRY",
        "listPrice": 250.99,
        "salePrice": 120.99,
        "vatRate": 18,
        "cargoCompanyId": 10,
        "lotNumber": "string",
        "shipmentAddressId": 0,
        "returningAddressId": 0,
        "deliveryOption": {
            "deliveryDuration": 1
        }
      "images": [
            {
                "url": "https://www.sampleaddress/path/folder/image_1.jpg"
            }
        ],
        "attributes": [
            {
                "attributeId": 338,
                "attributeValueId": 6980
            },
            {
                "attributeId": 47,
                "customAttributeValue": "PUDRA"
            },
            {
                "attributeId": 346,
                "attributeValueId": 4290
            }
        ]
    }
]
}
```

### **POST** createProducts (Tek Ürün 2 Variant Örnek)

<NoLinkCallout theme="info">
  **PROD**

  \[[https://apigw.trendyol.com/integration/product/sellers/](https://apigw.trendyol.com/integration/product/sellers/){'{'}sellerId{'}'}/products]
</NoLinkCallout>

<NoLinkCallout theme="info">
  **STAGE**

  \[[https://stageapigw.trendyol.com/integration/product/sellers/](https://stageapigw.trendyol.com/integration/product/sellers/){'{'}sellerId{'}'}/products]
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "items": [
    {
        "barcode": "barkod-1234",
        "title": "Bebek Takımı Pamuk",
        "productMainId": "1234BT",
        "brandId": 1791,
        "categoryId": 411,
        "quantity": 100,
        "stockCode": "STK-345",
        "origin": "AD",
        "dimensionalWeight": 2,
        "description": "Ürün açıklama bilgisi",
        "currencyType": "TRY",
        "listPrice": 250.99,
        "salePrice": 120.99,
        "vatRate": 18,
        "cargoCompanyId": 10,
        "lotNumber": "string",
        "shipmentAddressId": 0,
        "returningAddressId": 0,
        "deliveryOption": {
            "deliveryDuration": 1
        }
      "images": [
            {
                "url": "https://www.sampleaddress/path/folder/image_1.jpg"
            }
        ],
        "attributes": [
            {
                "attributeId": 338,
                "attributeValueId": 6980
            },
            {
                "attributeId": 343,
                "attributeValueId": 4294
            },
            {
                "attributeId": 346,
                "attributeValueId": 4290
            }
        ]
    },
    {
        "barcode": "barkod-12345",
        "title": "Bebek Takımı Pamuk",
        "productMainId": "1234BT",
        "brandId": 1791,
        "categoryId": 411,
        "quantity": 100,
        "stockCode": "STK-3454",
        "origin": "AD",
        "dimensionalWeight": 2,
        "description": "Ürün açıklama bilgisi",
        "currencyType": "TRY",
        "listPrice": 250.99,
        "salePrice": 120.99,
        "vatRate": 18,
        "cargoCompanyId": 10,
        "shipmentAddressId": 0,
        "returningAddressId": 0,
        "deliveryOption": {
            "deliveryDuration": 1
        }
      "images": [
            {
                "url": "https://www.sampleaddress/path/folder/image_2.jpg"
            }
        ],
        "attributes": [
            {
                "attributeId": 338,
                "attributeValueId": 6981
            },
            {
                "attributeId": 343,
                "attributeValueId": 4294
            },
            {
                "attributeId": 346,
                "attributeValueId": 4290
            }
        ]
    }
]
}
```

<Callout icon="🚧" theme="warn">
  **ÖNEMLİ**

  **NOT : Bir ürünün birden fazla variant’ı olması durumunda productMainId değeri aynı olacak şekilde (Ürünün XL ve L bedeni gibi) çoklu örnekte olduğu şekliyle isteğin gönderilmesi beklenmektedir. Ürünün sadece attributes bölümü farklılaştırılmalıdır.**
</Callout>

### Ürün Varyantlama

Ürün varyantlama işlemi "productMainId" değerine göre yapılmaktadır. İlgili kategori özelliği üzerinden "slicer" ve "varianter" değeri kontrol edilmelidir.

**"slicer"** (ürün renk değeri, ürün hafıza değeri vb.)

Ürünü ayrı contentlerde açar, sistem üzerinde en fazla Slicer olarak kullanılan değer renktir, ancak elektronik kategorilerinde ürünün ayrı contentlerde açılabilmesi için (dahili hafıza gibi) slicer değeri olarak kullanılabilir. (kategori özelliği servisi üzerinden slicer=true dönmelidir.)

* Bir kategoride birden fazla slicer değeri olabilir.
* Slicer değer ürünü ayrı contentlerde açtığı için, variant olarak kullanılabilir.

<Image src="https://files.readme.io/44761edbb04de9d6b1b0360c4c62a9151956896a2f80ddfac6a87d7f11535f28-slicer.png" align="center" />

![](./assets/slicer.png)

**"varianter"** (ürün beden değeri vb.)

Aynı content üzerinde yer alan ürünün ayrı bedenleridir. Ürünü farklı contentlerde açmaz. Her kategoride bir tane varianter seçilebilir. Birden fazla seçime izin verilmemektedir.

<Image src="https://files.readme.io/627e39e9e797dd6474bad1ce80cfb9807ce798fdde3631c7edfbc5cef874a019-varianter.png" align="center" />

![](./assets/varianter.png)

**Servis Cevapları**

| Status Code | Açıklama                                                                                                                                                                                                                                                          |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | Gönderilen istek başarılı olmuştur. Tarafınıza dönen batchRequestId ile [Toplu İşlem Kontrolü Servisine](https://integration-documentation-udwy.readme.io/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult) giderek işlem sonucunu görebilirsiniz. |
| **400**     | URL içerisinde eksik veya hatalı paremetre kullanılmaktadır. Dokümanı tekrar inceleyiniz.                                                                                                                                                                         |
| **401**     | İstek gönderirken kullandığınız supplierID, API Key, API Secure Key bilgilerinden birisi eksik ya da yanlıştır. Mağazanız için doğru bilgilere [Trendyol Satıcı Paneli](https://partner.trendyol.com/account/info) üzerinden ulaşabilirsiniz.                     |
| **404**     | İstek gönderilen url bilgisi hatalıdır. Dokümanı tekrar inceleyiniz.                                                                                                                                                                                              |
| **500**     | Anlık bir hata yaşanmış olabilir.. Bir kaç dakika bekleyerek durumun düzelmemesi durumunda kullanılan endpoint, gönderilen istek ve cevap ile beraber "API Entegrasyon Destek Talebi" başlığından talep oluşturunuz.                                              |