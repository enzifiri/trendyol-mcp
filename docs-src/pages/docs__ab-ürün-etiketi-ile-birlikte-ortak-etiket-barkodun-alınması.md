---
updatedAt: 2026-07-02T11:28:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# AB Ürün Etiketi ile Birlikte Ortak Etiket Barkodun Alınması

<Callout icon="📘" theme="info">
  ###

  **ÖNEMLİ BİLGİ**

  Yalnızca **Trendyol Yurt Dışı Aracılığı** siparişleri için kullanılmalıdır.
</Callout>

* Trendyol Yurt Dışı Aracılığı modelinde, sipariş paketinin içinde veya ürünün üstünde **AB Ürün Etiketi / Avrupa Birliği Ürün Etiketi** olması gerekmektedir.
* Bu etiketin yer almaması, ürünün ürün güvenliği standartlarına uygunsuz olduğu sonucunu doğurabilir ve ürünün gümrük idareleri tarafından yapılacak denetimler neticesinde reddine sebep olabilir.
* Fatura oluşturulmadan kargo etiketi bastırılamamaktadır ama ürün etiketi bastırılabilir.
* Sipariş paketinin içinde birden fazla farklı ürün olması durumunda birden fazla AB ürün etiketi dönecektir.
  * **Trendyol öder** modeli ile çalışan satıcıların **TEX** veya **Aras kargo gönderileri** için **Kargo Etiketi ve AB Ürün Etiketi beraber** dönecektir. Kargo etiketinin alınmasında hata olması durumunda, yalnızca AB ürün etiketi dönecektir.
  * **Satıcı öder** modeli ile çalışan satıcılar ve **Trendyol öder ile çalışan satıcıların TEX veya Aras harici gönderileri** için servisten **yalnızca AB Ürün Etiketi** dönecektir. Kargo etiketini satıcımızın kendisi çıkarması beklenmektedir.
* **AB ürün etiketi ile birlikte kargo etiketi de almak** isteyen satıcılarımızın önce [createCommonLabel servisinden ](https://developers.trendyol.com/docs/ortak-etiket-barkod-talebi-createcommonlabel)ortak etiket barkodu talep etmesi gerekmektedir. **Yalnızca AB ürün etiketi alacak satıcılarımızın bu servise istek atması yeterli olacaktır**.
* AB ürün etiketi, query parametresinde belirttiğiniz formata uygun olacak şekilde ZPL veya PDF olarak dönecektir. Kargo etiketi yalnızca ZPL formatta dönmektedir. Etiketlerin ölçüleri 100 mm genişlik, 130 mm yükseklik, 8 dpi olacaktır.
* AB ürün etiketi için bazı kategori ve markalarda muafiyet bulunmaktadır. AB ürün etiketinin Trendyol servisinden alınması zorunlu olmayan ürünler için "message" alanında, "Bu ürün için AB ürün etiketi gerekmemektedir." dönecektir.
* Stage ortamda test için seller id: 2738, Order number: 1238522676, Cargo tracking number: 7260000167037306 olan siparişi kullanabilirsiniz.

### **GET** ProductLabelWithCommonLabel

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/sellers/\{sellerId\}/common-labels/\{cargoTrackingNumber\}/with-product-labels?productLabelType=\{ZPL](https://apigw.trendyol.com/integration/sellers/\{sellerId\}/common-labels/\{cargoTrackingNumber\}/with-product-labels?productLabelType=\{ZPL) veya PDF girilmelidir\}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/sellers/\{sellerId\}/common-labels/\{cargoTrackingNumber\}/with-product-labels?productLabelType=\{ZPL](https://stageapigw.trendyol.com/integration/sellers/\{sellerId\}/common-labels/\{cargoTrackingNumber\}/with-product-labels?productLabelType=\{ZPL) veya PDF girilmelidir\}
</NoLinkCallout>

**Servis Parametreleri**

| Parametre        | Parametre Değer | Açıklama                                                                    | Tip    |
| :--------------- | --------------- | --------------------------------------------------------------------------- | ------ |
| productLabelType | PDF veya ZPL    | AB ürün etiketinin belirtilen formatta dönmesi için kullanılması zorunludur | string |

**Örnek Servis Cevabı**

```json
{
    "data": [
        {
            "label": "^XA^POI^FS^FX Barkod alanı^BY3,3,130 ^FX Barkod boyutu^FO143,40  ^FX Konum değişkenleri (x,y)^BC^FD1022069492243^FS^FWN,0^FO40,220^GB650,280,3  ^FX Çerçeve konum ve kalınlığı^FS^CFA,20^FO160,170^FD^FS^FX Adres alanı^CFA,22^FO50,250^FDKHALID BIN AL WALEED RD 43AL KARAMA ^FS^CFA,22^FO50,280^FD^FS^CFA,22^FO50,310^FD^FS^A0N,22,22^FO50,470^FDINDUSTRIAL CITY/RIYADH^FS^FX Yan barkod alanı^BY3,3,250^FO720,220^BCB,200,N,N,N^FD${barcode}^FS^A0N,40,40^FO40,450^FD^FX Alıcı adı alanı^FO40,535 ^FX Çerçeve konumu^GB650,95,3 ^FX Çerçeve konum ve kalınlığı^FS^CFA,22^FO50,560^FDABDULREZZAK TRAORE^FS^FX Sipariş numarası alanı^CFA,22^FO50,650^FD1238497642^FS^CFA,22^FO50,680^FD1022069492243^XZ",
            "format": "ZPL",
            "labelType": "CARGO"
        },
        {
            "labelType": "PRODUCT",
            "barcode": "868171180178431",
            "message": "Bu üründe AB ürün etiketi için gerekli ürün özellik bilgileri eksik ya da yanlıştır. AB ürün etiketi basılamamaktadır."
        },
        {
            "labelType": "PRODUCT",
            "barcode": "868171180178432",
            "message": "Ürün barkodu alınırken bir hata oluştu"
        },
        {
            "labelType": "PRODUCT",
            "barcode": "868171180178433",
            "message": "Bu ürün için AB ürün etiketi gerekmemektedir."
        },
        {
            "label": "https://cdn.dsmcdn.com/public-delivery-partner/product-label/35_2738_8681711801785.pdf",
            "format": "PDF",
            "labelType": "PRODUCT",
            "barcode": "868171180178434"
        }
    ]
}
```

**Hata Kodları**

| Status Code | Reason                                                                              |
| ----------- | ----------------------------------------------------------------------------------- |
| 401         | Authorization bilgileri yanlış ya da eksiktir.                                      |
| 400         | productLabelType query parametresi eksiktir.                                        |
| 404         | Belirttiğiniz  cargoTrackingNumber ile ilişkili bir sipariş paketi bulunmamaktadır. |
| 500         | Sunucu Hatası (Internal server error)                                               |

<br />