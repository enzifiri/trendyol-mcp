---
updatedAt: 2026-10-12T08:20:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Güncelleme - Onaylı Ürün v2

Trendyol mağazanızda bulunan onaylı ürünlerin content, varyant ve teslimat bilgilerini güncelleme yöntemleri.

<Tabs>
  <Tab title="Content Güncelleme">
    Bu method ile Trendyol mağazanızda bulunan onaylı ürünlerin contentlerini güncelleyebilirsiniz.

    - Bu servis üzerinden sadece ürüne ait content bilgileri güncellenmektedir.
    - Yeni kategori ve kategori özellik değerleri eklenebileceği sebebiyle ürün güncellemelerinizden önce kullandığınız kategori, kategori özellik ve kategori özellik değerlerinin güncel olup olmadığını getCategoryTree, getCategoryAttributes, getCategoryAttributesValues servislerinden kontrol etmenizi öneririz.
    - Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.
    - Onaylı ürünlerde "barcode", "productMainId", "brandId", "categoryId" ve slicer veya varianter olan attribute value değerleri güncellenememektedir.
    - Attribute değerleri hariç **partial update** desteklenmektedir. Örneğin sadece description güncellenmek isteniyorsa "contentId": 9510902 ve "description": "string" gönderilmesi yeterlidir.
      - Attribute'lardan herhangi biri güncellenmek isteniyorsa ürünün altındaki tüm attribute ve değerleri istek body'sinde gönderilmelidir.
      - Güncelleme isteklerinde bir alanı null olarak göndermek (Örnek; title: null), o alana ait mevcut değerin ürün üzerinden tamamen silinmesine neden olur. Verisinin silinmesini veya değişmesini istemediğiniz alanları istek gövdesine hiç eklemeyiniz.

    <NoLinkCallout type="danger" title="TOPLU İŞLEM KONTROLÜ">
      Ürün güncelleme işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu **[getBatchRequestResult](/docs/marketplace/urun-entegrasyonu/toplu-islem-kontrolu/)** servisi üzerinden kontrol etmelisiniz.
    </NoLinkCallout>

    ### **POST** updateProducts

    <NoLinkCallout type="info" title="PROD">
      [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/content-bulk-update](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/content-bulk-update)
    </NoLinkCallout>

    <NoLinkCallout type="info" title="STAGE">
      [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/content-bulk-update](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/content-bulk-update)
    </NoLinkCallout>

    **Örnek Servis İsteği**

    ```json
    {
      "items": [
        {
          "contentId": 9510902,
          "title": "string",
          "description": "string",
          "images": [
            {
              "url": "string"
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
  </Tab>

  <Tab title="Varyant Güncelleme">
    Bu method ile Trendyol mağazanızda bulunan onaylı ürünlerin varyantlarını güncelleyebilirsiniz.

    - Bu servis üzerinden sadece ürüne ait varyant bilgileri güncellenmektedir.
    - Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.
    - "barcode" alanı hariç bütün alanlar güncellenebilmektedir.
    - Request body'deki field'lar için partial istek yapılabilir. İsteklerinizde barcode ve değiştirmek istediğiniz field'ı yollarsanız partial update uygulanacaktır.
    - Güncelleme isteklerinde bir alanı null olarak göndermek (Örnek; vatRate: null), o alana ait mevcut değerin ürün üzerinden tamamen silinmesine neden olur. Verisinin silinmesini veya değişmesini istemediğiniz alanları istek gövdesine hiç eklemeyiniz.
    - "channels" field'ı CORE veya LUXE değerlerini alabilir. Bu alanın yalnızca ürünü bir kanalda yayına kapatmak veya açmak istendiğinde gönderilmesi tavsiye edilir.

    Örnek Kullanımlar:

    1.Ürün hem CORE hem LUXE kanalda yayında ise her iki kanalda ürün bilgisi güncellenmek istendiğinde channels alanı gönderilmeyebilir ya da \["CORE", "LUXE"] değerleri ile istek yapılmalıdır.

    2.Ürün yalnızca CORE kanalda yayında ise \["CORE"] olarak istek yapılabilir ya da channels alanı gönderilmeyebilir.

    3.Ürün yalnızca LUXE kanalda yayında ise \["LUXE"] olarak istek yapılabilir ya da channels alanı gönderilmeyebilir.

    4.Ürün hem CORE hem LUXE kanalda yayında ise ve LUXE kanalındaki ürün yayına kapatılmak istenirse \["CORE"] olarak istek yapılmalıdır.

    5.Ürün yalnızca CORE kanalında yayına açıksa; LUXE koşullarını sağladığı taktirde LUXE kanalda da yayına açılmak isteniyorsa \["CORE", "LUXE"] değerleri ile istek yapılmalıdır.

    6.channels alanı request'e eklenir ve \[] olarak gönderilirse hata döner.

    <NoLinkCallout type="danger" title="TOPLU İŞLEM KONTROLÜ">
      Ürün güncelleme işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu **[getBatchRequestResult](/docs/marketplace/urun-entegrasyonu/toplu-islem-kontrolu/)** servisi üzerinden kontrol etmelisiniz.
    </NoLinkCallout>

    ### **POST** updateProducts

    <NoLinkCallout type="info" title="PROD">
      [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/variant-bulk-update](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/variant-bulk-update)
    </NoLinkCallout>

    <NoLinkCallout type="info" title="STAGE">
      [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/variant-bulk-update](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/variant-bulk-update)
    </NoLinkCallout>

    **Örnek Servis İsteği**

    `locationBasedDelivery` alanı `ENABLED`, `DISABLED` veya `null` değerlerini alabilir.

    ```json
    {
      "items": [
        {
          "barcode": "test1",
          "channels": ["CORE", "LUXE"],
          "stockCode": "test",
          "origin": "AD",
          "vatRate": 123,
          "shipmentAddressId": 123,
          "returningAddressId": 122,
          "dimensionalWeight": 1.1,
          "lotNumber": "test",
          "cargoProviders": ["kargo firması kodu"], //barcode bazlı bir kargo firması tanımlanmak istenirse kullanılabilir.
          "locationBasedDelivery": "ENABLED"
        }
      ]
    }
    ```
  </Tab>

  <Tab title="Teslimat Bilgisi Güncelleme">
    Bu method ile Trendyol mağazanızda bulunan onaylı ürünlerin teslimat bilgilerini güncelleyebilirsiniz.

    - Her bir istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.
    - "barcode" alanı hariç bütün alanlar güncellenebilmektedir.
    - **Ağustos 2026 itibari ile:**<br />Yeni yapıyla birlikte fastDeliveryType alanına olan bağımlılık kaldırılmış olup işlemler yalnızca deliveryDuration parametresi üzerinden yönetilecektir. fastDeliveryType alanı için ekstra bir değer gönderilmesine gerek kalmayacak olup gönderilse dahi işlenmeyecektir.

      Bugün Kargoda: deliveryDuration: 0
      En Geç Yarın Kargoda: deliveryDuration: 1

    <NoLinkCallout type="danger" title="TOPLU İŞLEM KONTROLÜ">
      Ürün güncelleme işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu **[getBatchRequestResult](/docs/marketplace/urun-entegrasyonu/toplu-islem-kontrolu/)** servisi üzerinden kontrol etmelisiniz.
    </NoLinkCallout>

    ### **POST** updateProducts

    <NoLinkCallout type="info" title="PROD">
      [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/delivery-info-bulk-update](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/delivery-info-bulk-update)
    </NoLinkCallout>

    <NoLinkCallout type="info" title="STAGE">
      [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/delivery-info-bulk-update](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/delivery-info-bulk-update)
    </NoLinkCallout>

    **Örnek Servis İsteği**

    ```json
    {
      "items": [
        {
          "barcode": "string",
          "deliveryOptions": {
            "deliveryDuration": 0
          }
        }
      ]
    }
    ```
  </Tab>
</Tabs>