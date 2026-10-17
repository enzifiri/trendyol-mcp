---
updatedAt: 2026-01-22T11:12:44.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Desi ve Koli Bilgisi Bildirimi (updateBoxInfo)

Bu servis ile Horoz ve CEVA Lojistik firmalarına ait sipariş paketleriniz için desi ve koli bilgisi besleyebilirsiniz.

* Horoz ve CEVA Lojistik için "boxQuantity" ve "deci" değerleri zorunludur.

### **PUT** updateBoxInfo

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/box-info
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/box-info
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "boxQuantity": 4,
  "deci": 4.4
}
```