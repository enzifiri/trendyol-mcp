---
updatedAt: 2026-01-22T11:39:34.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ortak Etiket Oluşan Barkodun Alınması (getCommonLabel)

Bu servis ile createCommonLabel servisinden talep edilen barkodu alabilirsiniz.

* Tarafınıza çoklu koliler için birden fazla etiket dönecektir. Tek koli olması durumunda tek ZPL dönecektir.

### **GET** getCommonLabel

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/sellers/{sellerId}/common-label/{cargoTrackingNumber}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/sellers/{sellerId}/common-label/{cargoTrackingNumber}
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "data": [
        {
            "label": "^XA.......^XZ",
            "format": "ZPL"
        }
    ]
}
```

**Servis Hata Mesajları**

| Status Code |                                Açıklama                               |
| :---------- | :-------------------------------------------------------------------: |
| **400**     | Error - İletmiş olduğunuz cargoTrackingNumber değerini kontrol ediniz |
| **401**     |    Error - Girdiğiniz API bilgilerini kontrol etmeniz gerekmektedir   |