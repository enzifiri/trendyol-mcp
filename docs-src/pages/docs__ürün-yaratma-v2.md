---
updatedAt: 2026-09-18T12:43:33.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Yaratma v2

Ürünleriniz Trendyol sistemine yüklenirken bu metod kullanılmaktadır. Tekli ve çoklu ürün gönderimini desteklemektedir.

* Bu method ile ürün aktarımı sağlanmadan önce Trendyol Marka Listesi, Kategori Listesi, Kategori Özellik bilgileri listesi ve Kategori Özellik Değerleri listesi servisleri üzerinden ilgili detaylar alınmalıdır.
* Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.
* fastDeliveryType alanında tanımlama yapabilmek için deliveryDuration alanını 1 olarak girilmesi gerekmektedir.
* Attribute altında bulunan "attributeValueIds" bilgisi, uygun attribute'lar için (Kategori özellik bilgileri listesi servisinden dönen allowMultipleAttributeValues alanı true olduğu durumda) birden fazla değer alabilmektedir.
* "listPrice" alanı, "salePrice" alanından küçük olamaz.
* Ürün aktarma isteğinizin başarılı olması durumunda ürünleriniz ürün onay sürecine girer. Onay süreci devam eden ya da reddedilen ürünler yayına çıkmaz. Ürününüzün yayına çıkmaması durumunda, statüsünü productFilter servisinden kontrol etmeniz önerilmektedir.

<Callout icon="❗️" theme="error">
  **TOPLU İŞLEM KONTROLÜ**

  Ürün aktarım işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu [getBatchRequestResult](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1) servisi üzerinden kontrol etmeniz gerekmektedir.
</Callout>

### **POST** createProducts (Tekli Örnek)

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/v2/products](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/v2/products)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/v2/products](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/v2/products)
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
        Satıcı tarafından belirlenen, ana ürün kodudur. Ürün varyantlamak için kullanılmaktadır. Satıcı panelinde Model Koduna denk gelmektedir.
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
        Trendyol Marka ID Bilgisi.
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
        Trendyol Kategori ID Bilgisi.
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
        Hayır
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
        origin
      </td>

      <td>
        Hayır
      </td>

      <td>
        Ürünün menşei bilgisi. Girebileceğiniz değerlere [buradan](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-men%C5%9Fei-de%C4%9Ferleri) ulaşabilirsiniz.
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
        deliveryDuration
      </td>

      <td>
        Hayır
      </td>

      <td>
        Sevkiyat Süresi (Operasyon ekiplerimiz tarafından belirtilen aralıklarda barkod bazlı sevkiyat süresi girebilirsiniz. Göndermediğiniz taktirde varsayılan termin süreniz barkod üzerinde işletilecektir.)

        Ağustos 2026 itibari ile:

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

        Ağustos 2026 itibari ile

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
        Ürünün, Kategori bilgisi için gönderilebilecek özellik (Spesification/Attribute) bilgileridir. Renk bilgisi 50 karakterden fazla olamaz.
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
        "barcode": "TestBarcode",
        "title": "string",
        "description": "string",
        "productMainId": "string",
        "brandId": 1,
        "categoryId": 1,
        "quantity": 0,
        "stockCode": "string",
        "origin": "AD",
        "dimensionalWeight": 0,
        "listPrice": 0,
        "salePrice": 0,
        "vatRate": 0,
        "lotNumber": "string",
        "cargoProviders": ["kargo firması kodu"],
        "shipmentAddressId": 0,
        "returningAddressId": 0,
        "deliveryOption": {
            "deliveryDuration": 0
        },
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

### Ürün Varyantlama

<Callout icon="🚧" theme="warn">
  **ÖNEMLİ**

  **NOT : Bir ürünün birden fazla variant’ı olması durumunda productMainId değeri aynı olacak şekilde (Ürünün XL ve L bedeni gibi) isteğin gönderilmesi beklenmektedir. Ürünün sadece attributes bölümü farklılaştırılmalıdır.**
</Callout>

Ürün varyantlama işlemi "productMainId" değerine göre yapılmaktadır. İlgili kategori özelliği üzerinden "slicer" ve "varianter" değeri kontrol edilmelidir.

**"slicer"** (ürün renk değeri, ürün hafıza değeri vb.)

Ürünü ayrı contentlerde açar, sistem üzerinde en fazla Slicer olarak kullanılan değer renktir, ancak elektronik kategorilerinde ürünün ayrı contentlerde açılabilmesi için (dahili hafıza gibi) slicer değeri olarak kullanılabilir. (kategori özelliği servisi üzerinden slicer=true dönmelidir.)

* Bir kategoride birden fazla slicer değeri olabilir.
* Slicer değer ürünü ayrı contentlerde açtığı için, variant olarak kullanılabilir.

<Image src="https://files.readme.io/54b3e8bffb2f277352d5707df3be64e1bcdb81eef1e3a5a1d6cd2010b173fd27-slicer.png" align="center" />

![](./assets/slicer.png)

**"varianter"** (ürün beden değeri vb.)

Aynı content üzerinde yer alan ürünün ayrı bedenleridir. Ürünü farklı contentlerde açmaz. Her kategoride bir tane varianter seçilebilir. Birden fazla seçime izin verilmemektedir.

<Image src="https://files.readme.io/047749686dd7e09456e432ad98625eebbde7aa3ac0dbd3d648ba6e303a865ab9-varianter.png" align="center" />

![](./assets/varianter.png)

**Servis Cevapları**

| Status Code | Açıklama                                                                                                                                                                                                                                           |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | Gönderilen istek başarılı olmuştur. Tarafınıza dönen batchRequestId ile [Toplu İşlem Kontrolü Servisine](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1) giderek işlem sonucunu görebilirsiniz. |
| **400**     | URL içerisinde eksik veya hatalı paremetre kullanılmaktadır. Dokümanı tekrar inceleyiniz.                                                                                                                                                          |
| **401**     | İstek gönderirken kullandığınız supplierID, API Key, API Secure Key bilgilerinden birisi eksik ya da yanlıştır. Mağazanız için doğru bilgilere [Trendyol Satıcı Paneli](https://partner.trendyol.com/account/info) üzerinden ulaşabilirsiniz.      |
| **404**     | İstek gönderilen url bilgisi hatalıdır. Dokümanı tekrar inceleyiniz.                                                                                                                                                                               |
| **500**     | Anlık bir hata yaşanmış olabilir.. Bir kaç dakika bekleyerek durumun düzelmemesi durumunda kullanılan endpoint, gönderilen istek ve cevap ile beraber "API Entegrasyon Destek Talebi" başlığından talep oluşturunuz.                               |