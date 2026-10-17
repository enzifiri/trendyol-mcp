---
updatedAt: 2026-09-09T13:19:10.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Onaysız Ürün v2

Bu servis ile Trendyol mağazanızdaki onaysız (draft) ürünlerinizi listeleyebilirsiniz.

* Bu servis ile ürün onay süreci devam eden ve kontrol sonrası reddedilen ürünlerinizi listeleyebilirsiniz. Reddedilen ürün için reddetme sebebini kontrol edip, gerekli güncellemeleri yapmanız halinde, ürününüz tekrar onay sürecine girecektir.
* Bu servise yapılan isteklere "nextPageToken" bilgisi eklenmiştir. Yapmış olduğunuz istekte request?page=10\&size=1000 yazmanız halinde 10. sayfadaki 1000 ürün response olarak döner Sonraki isteğinizde request?size=1000≠xtPageToken=TOKEN yazmanız halinde sonraki sayfa olan 11. sayfadaki 1000 ürün response olarak döner (nextPageToken isteği 10.000'den fazla onaysız barcode olması halinde kullanılabilir.)
* Page x size maksimum 10.000 değerini alabilir.

### **GET** filterProducts

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unapproved)
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
        Tarih filtresinin çalışacağı tarih CREATED_DATE ya da LAST_MODIFIED_DATE gönderilebilir

        - CREATED_DATE: ürünün yaratılma tarihi. Response body'deki "createDateTime"e denk gelmektedir.
        - LAST_MODIFIED_DATE: satıcının ürün üzerinde yaptığı son güncellemenin tarihi. Response body'deki "lastUpdateDate"e denk gelmektedir.
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
        Bir sayfada listelenecek maksimum adeti belirtir. Maksimum 1000 değerini alabilir
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
        origin
      </td>

      <td style={{ textAlign: "center" }}>
        Ürünün menşei bilgisi
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
        Status alanı rejected ve pendingApproval değerlerini alabilir
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
        10.000 adet ürün'den sonraki ürünleri almak için kullanılmalıdır
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
"size": 1,
"nextPageToken": "eyJzb3J0IjpbMTI3MTU4MTVdfQ==",
"content": [
    {
        "supplierId": 99999999,
        "productMainId": "smoketest-114333a11",
        "status": "rejected"/"pendingApproval",
        "createDateTime": 1763964757705,
        "lastUpdateDate": 1764059908901,
        "lastPriceChangeDate": 1763964757656,
        "lastStockChangeDate": 1763964757656,
        "brand": {
            "id": 317259,
            "name": "Trendyol Üyelik"
        },
        "category": {
            "id": 129332,
            "name": "Üyelik Servisi"
        },
        "barcode": "smoketest-114333a11",
        "title": "Test Product",
        "description": "Test Product Description",
        "quantity": 1,
        "listPrice": 25000,
        "salePrice": 20000,
        "cargoProviders": ["kargo firması kodu"], //barcode bazlı bir kargo firması tanımlanırsa onun değeri döner.
        "docNeeded": true/false, // status:pendingApproval ve docNeeded:true olması helinde ürünün onaylanması için gerekli dokumanın kontrol edilerek, panelden yüklenmesi gerekmektedir.
        "vatRate": 20,
        "dimensionalWeight": null,
        "stockCode": "TEST-STOCK",
        "origin": "AD",
        "media": [
            {
                "url": "https://marketplace-supplier-media-center.oss-eu-central-1.aliyuncs.com/prod/431929/3bda8d78-00e8-4bbf-abb7-f7a13297d2f3/A_TABLO1148.jpg?x-oss-process=style/resized"
            }
        ],
        "attributes": [
            {
                "attributeId": 293,
                "attributeName": "Beden",
                "attributeValueId": 410928,
                "attributeValue": "tttt"
            },
            {
                "attributeId": 294,
                "attributeName": "Yaş Grubu",
                "attributeValueId": 2879,
                "attributeValue": "Yetişkin"
            },
            {
                "attributeId": 7,
                "attributeName": "Ekartman",
                "attributeValueId": 603,
                "attributeValue": "Çocuk"
            },
            {
                "attributeId": 296,
                "attributeName": "Cinsiyet",
                "attributeValueId": 2875,
                "attributeValue": "Unisex"
            },
            {
                "attributeId": 47,
                "attributeName": "Renk",
                "attributeValue": "Sarı"
            },
            {
                "attributeId": 295,
                "attributeName": "Web Color",
                "attributeValueId": 2899,
                "attributeValue": "Haki"
            }
        ],
        "rejectReasonDetails": [
            {
                "rejectReason": "Sakıncalı Görsel Değişt",
                "rejectReasonDetail": "Ürün görselleriniz  platform kurallarımız uyarınca sakıncalı olarak kabul edilen görselleri içermektedir. Ürün görselleri ile kelepçe, bağlama ipleri vb. ürünlerin canlı mankenler üzerinde gösterimi, cinsel oyuncak kullanımının gösterimi, cinsel pozisyonun veya cinsel organların gösterimi ve çocuk manken üzerinde iç çamaşırı/plaj giyimi sunumu platform kurallarımız uyarınca yasaktır. Lütfen ürün görsellerinizi platform kurallarımıza uygun hale getirecek şekilde değiştiriniz. https://akademi.trendyol.com/ELearning?TrainingId=23555 Değişti"
            },
            {
                "rejectReason": "Zorunlu Ürün Özellik Değeri Eksik/Yanlış",
                "rejectReasonDetail": "Zorunlu özellik değeri hatalı ya da eksiktir. Lütfen zorunlu özellik bilgilerinizi doldurun ya da değiştiriniz."
            },
            {
                "rejectReason": "Hatalı Marka Bilgisi",
                "rejectReasonDetail": "Ürün markasındaki, ismindeki, görselindeki, barkodundaki ve/veya açıklamasındaki marka ile ürünün asıl markası uyuşmamaktadır. Lütfen ürünün markasını ve ürün listeleme kurallarına/içerik kalitesine uygunluğunu kontrol ediniz."
            },
            {
                "rejectReason": "Satış Kurallarına Aykırı Ürün",
                "rejectReasonDetail": "Bu ürün Trendyol Platformu satış kurallarıyla uyumlu değildir. Kuralları görmek için tıklayınız. https://tymp.mncdn.com/prod/documents/engagement/yasal_surecler/satisa_uygun_olmayan_urunler.pdf"
            }
        ],
        "locationBasedDelivery": "DISABLED",
        "lotNumber": "PartiNo:011220,SeriNo:M00A59153,SKT:12/12/2012,LotNo:0301A79"
    }
]
}
```