---
updatedAt: 2026-01-22T11:08:17.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Statü Bildirimi (updatePackage)

Siparişe ait paketi sadece 2 paket statüsü ile güncelleyebilirsiniz. Bu statüler haricindekiler sistem tarafından otomatik olarak pakete aktarılmaktadır. Aşağıda statülerle ilgili detaylı bilgiye ulaşabilirsiniz.

* Statü beslemelerini yaparken önce "Picking" sonra "Invoiced" statü beslemesi yapmanız gerekmektedir.

### **PUT** updatePackage (Toplanmaya Başlandı Bildirimi - Picking)

Picking statüsü beslediğiniz an Trendyol panelinde "Sipariş İşleme Alınmıştır" ifadesi gözükecektir. Bu statü ile kendi tarafınızda siparişlerinize ait durumu kontrol edebilirsiniz.

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
    "lines": [
        {
        "lineId": {lineId}, // long gönderilmelidir.
        "quantity": 3 // int gönderilmelidir.
        }
    ],
    "params": {},
    "status": "Picking"
}
```

### **PUT** updatePackage (Fatura Kesme Bildirimi - Invoiced)

Invoiced statüsü beslediğiniz an Trendyol panelinde "Sipariş İşleme Alınmıştır" ifadesi gözükecektir. Bu statü ile kendi tarafınızda siparişlerinize ait durumu kontrol edebilirsiniz.

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
    "lines": [
        {
        "lineId": {lineId}, // long gönderilmelidir.
        "quantity": 3 // int gönderilmelidir.
    }
    ],
    "params": {
        "invoiceNumber": "EME2018000025208"
    },
    "status": "Invoiced"
}
```