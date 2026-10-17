---
updatedAt: 2026-01-22T11:27:44.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Depo Bilgisi Güncelleme

Bu servis sadece Trendyol Express kullanan satıcılarımız için geçerli olacaktır. Bu servis ile Sipariş Paketlerini Çekme servisinden dönen "WarehouseId" alanı güncellenebilecektir.

* Eğer sevkiyat adresi eklenmesi isteniyor ise satıcı paneli üzerinden ekleme yapılabilmektedir.

### **PUT** updateWarehouse

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/warehouse
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/warehouse
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
	“warehouseId”: int
}
```

**Başarılı Servis Cevabı**

```json
"200 OK";
```

**Hatalı Servis Cevabı**

```json
"400 Bad Request"; // paket statusu update etmeye uygun değilse (Created, Invoiced, Picking dışında ise)
```