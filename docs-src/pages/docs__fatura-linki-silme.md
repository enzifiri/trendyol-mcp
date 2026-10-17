---
updatedAt: 2026-08-14T10:42:42.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Fatura Linki Silme

Daha önce hatalı beslenen faturalar bu servis üzerinden silinip, fatura linki gönderme servisi ile tekrar beslenebilmektedir.

### **METHOD: POST**

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/sellers/{sellerId}/seller-invoice-links/delete
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/sellers/{sellerId}/seller-invoice-links/delete
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "serviceSourceId": 88787, // shipmentPackageId
  "channelId": 1, // her zaman 1 olarak gönderilmelidir.
  "customerId": 888888888 // sipariş paketleri çekme servisinden kontrol edilmelidir.
}
```

**Örnek Servis Cevabı**

```json
"HTTP 202";
```