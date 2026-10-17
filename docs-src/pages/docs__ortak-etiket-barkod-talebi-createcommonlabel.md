---
updatedAt: 2026-02-02T08:15:24.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ortak Etiket Barkod Talebi (createCommonLabel)

<Image align="center" border={false} src="https://files.readme.io/f3fca2d6aac4567e45916cbab2fa72710b0c42b03096c5f73b43676cb825cc4f-Ortak_Barkod.jpg" />

Ortak barkod süreci TEX ,Aras Kargo için trendyol öder gönderilerde kullanılabilmektedir.

Bu servis ile ortak etiket sürecindeki siparişler için ilgili kargo numarasına ait barkod talebi yapabilirsiniz. Barkod oluştuktan sonra sizlere ZPL formatında Ortak Etiket Oluşan Barkodun Alınması Servisinden dönecektir.

* Barkod talebini ilgili sipariş paketine picking veya invoiced statüsü besledikten sonra yapmanız tavsiye edilmektedir.
* Format olarak şu an için sadece ZPL formatı bulunmaktadır.

### **POST** createCommonLabel

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/sellers/\{sellerId}/common-label/\{cargoTrackingNumber}](https://apigw.trendyol.com/integration/sellers/\{sellerId}/common-label/\{cargoTrackingNumber})
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/common-label/\{cargoTrackingNumber}](https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/common-label/\{cargoTrackingNumber})
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
        "format": "ZPL", //required
        "boxQuantity": 5,
        "volumetricHeight": 3.5
}
```

**Örnek Servis Cevapları**

| Status Code |                                Açıklama                               |
| :---------- | :-------------------------------------------------------------------: |
| **200**     |                       Success - No response body                      |
| **400**     | Error - İletmiş olduğunuz cargoTrackingNumber değerini kontrol ediniz |
| **401**     |    Error - Girdiğiniz API bilgilerini kontrol etmeniz gerekmektedir   |