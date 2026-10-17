---
updatedAt: 2026-10-04T10:43:47.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Bilgisi Güncelleme V1 (updateProduct)

Trendyol mağazanızda ürün bilgilerini güncelleme servisi hakkında detaylı bilgi.

<Callout icon="❗️" theme="error">
  \*\*Aşağıdaki Ürün V1 endpoint servisleri **15 Ekim 2026 itibari ile kullanım dışı olacaktır.** Bu tarihe kadar [Product V2 servis geliştirmelerini](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-ak%C4%B1%C5%9F%C4%B1) yapmanız gerekmektedir.
</Callout>

Bu method ile Trendyol mağazanızda [createProduct V2](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts) servisiyle oluşturduğunuz ürünleri güncelleyebilirsiniz.

* Bu servis üzerinden sadece ürün bilgileri güncellenmektedir. Stok ve fiyat değerlerini güncellemek için [updatePriceAndInventory](https://integration-documentation-udwy.readme.io/docs/stok-ve-fiyat-g%C3%BCncelleme-updatepriceandinventory) servisini kullanmanız gerekmektedir.

* Yeni kategori ve kategori özellik değerleri eklenebileceği sebebiyle ürün güncellemelerinizden önce kullandığınız kategori ve kategori özellik değerlerinin güncel olup olmadığını [getCategoryTree](https://integration-documentation-udwy.readme.io/docs/trendyol-kategori-listesi-getcategorytree) ve [getCategoryAttributes](https://integration-documentation-udwy.readme.io/docs/trendyol-kategori-%C3%B6zellik-listesi-getcategoryattributes) servislerinden kontrol etmenizi öneririz.

* Güncelleme isteğinden sonra "İçerik kontrol bekleniyor." statüsüne geçen ürünleriniz satışa açık durumda olabilir. Sipariş almak istemediğiniz durumlarda stok ve fiyat bilginizi sıfırlamanız gerekmektedir.

* Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.

* Onaylı ürünlerde "barcode", "productMainId", "brandId", "categoryId" ve slicer veya varianter olan attribute value değerleri güncellenememektedir.

<Callout icon="❗️" theme="error">
  **TOPLU İŞLEM KONTROLÜ**

  Ürün güncelleme işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu [getBatchRequestResult](https://integration-documentation-udwy.readme.io/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult) servisi üzerinden kontrol etmelisiniz.
</Callout>

### **PUT** updateProducts

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products`
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
`https://stageapigw.trendyol.com/integration/product/sellers/{sellerId}/products`
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
        "channels": ["CORE", "LUXE"],
        "stockCode": "STK-123",
        "origin": "AD",
        "dimensionalWeight": 12,
        "description": "Ürün açıklama bilgisi",
        "vatRate": 0,
        "locationBasedDelivery": "string", //"ENABLED", "DISABLED" yada null değerlerini alabilir
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
                "attributeId": 343,
                "attributeValueId": 4294
            },
            {
                "attributeId": 47,
                "customAttributeValue": "Attribute özelliği(text olarak girebilirsiniz.)"
            }
        ],
        "cargoCompanyId": 10,
        "shipmentAddressId": 0,
        "returningAddressId": 0
    }
]
}
```

### **Ürün güncelleme servisi üzerinden ürünlerinize ait güncellenebilir özellik durumları aşağıdaki gibidir:**

<Callout icon="🚧" theme="warn">
  **ÖNEMLİ**

  Onaylı ürünlerde attribute bilgileri ilgili özelliğe ait "slicer" ve "varianter" değeri "false" ise güncellenebilir. "True" ise güncellenemez. Bu bilgiler değişebileceği için [Kategori Özellik Listesi](/docs/marketplace/urun-entegrasyonu/trendyol-kategori-ozellik-listesi) üzerinden güncel durumun takip edilmesi önerilmektedir.
</Callout>

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
        Ana Ürün Kodu
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
        Ürünün menşei bilgisi. girebileceğiniz değerlere [buradan](https://developers.trendyol.com/docs/men%C5%9Fei-de%C4%9Ferleri) ulaşabilirsiniz.
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
        object
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
        currencyType
      </td>

      <td>
        Evet
      </td>

      <td>
        TRY olarak gönderilmelidir.Ürünlerinize ait fiyatları Türk Lirası üzerinden belirlemeniz gerekmektedir. Döviz kuru bilgisi desteklenmemektedir.
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

    <tr>
      <td>
        channels
      </td>

      <td>
        Hayır
      </td>

      <td>
        Sadece onaylı ürün (approved:true) için kullanılabilir. CORE veya LUXE değerlerini alabilir. Bu alanın yalnızca ürünü bir kanalda yayına kapatmak veya açmak istendiğinde gönderilmesi tavsiye edilir. <br /><br />Örnek Kullanımlar:<br /><br /> 1.Ürün hem CORE hem LUXE kanalda yayında ise her iki kanalda ürün bilgisi güncellenmek istendiğinde channels alanı gönderilmeyebilir ya da \["CORE", "LUXE"] değerleri ile istek yapılmalıdır.

        2.Ürün yalnızca CORE kanalda yayında ise \["CORE"] olarak istek yapılabilir ya da channels alanı gönderilmeyebilir.

        3.Ürün yalnızca LUXE kanalda yayında ise \["LUXE"] olarak istek yapılabilir ya da channels alanı gönderilmeyebilir.

        <br />4.Ürün hem CORE hem LUXE kanalda yayında ise  ve LUXE kanalındaki ürün yayına kapatılmak istenirse \["CORE"] olarak istek yapılmalıdır.<br /><br />5.Ürün yalnızca CORE kanalında yayına açıksa; LUXE koşullarını sağladığı taktirde LUXE kanalda da yayına açılmak isteniyorsa \["CORE", "LUXE"] değerleri ile istek yapılmalıdır.<br />

        6.channels alanı request'e eklenir ve \[] olarak gönderilirse hata döner.
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