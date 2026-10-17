---
updatedAt: 2026-01-22T11:29:30.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Test Siparişlerinde Statü Güncellemeleri

Test senaryolarınızı gerçekleştirmek adına stage ortamda vermiş olduğunuz siparişler için statüleri aşağıdaki servis aracılığıyla "Shipped", "AtCollectionPoint", "Delivered", "UnDelivered" ve "Returned" olarak güncelleyebilirsiniz.

* Bu servis sadece stage ortamı için kullanılmaktadır.
* Header içinde SellerID gönderilmelidir. Değeri ise kullanmış olduğunuz test satıcısının satıcıId si olmalıdır.
* Header içerisinde göndermiş olduğunuz satıcıId ile basic authentication yapmanız gerekmektedir.
* Statüler sıralı ilerlemektedir. Örneğin "Delivered" olan bir paket "AtCollectionPoint" ve "Shipped" statüsüne geri çekilemez.

| Status            | Açıklama                                                       |
| :---------------- | :------------------------------------------------------------- |
| Shipped           | Paket kargoya verildi                                          |
| AtCollectionPoint | Paket kargo firmasının dağıtım noktasına ulaştı                |
| Delivered         | Paket teslimat noktasına ulaştı                                |
| UnDelivered       | Paket teslim edilemedi (kargonun dağıtım merkezine geri döndü) |
| Returned          | Paket geri gönderildi                                          |

### **Method PUT**

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/test/order/sellers/{sellerId}/shipment-packages/{packageId}/status
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
    "lines": [
        {
            "lineId": 4944785,
            "quantity": 1
        }
    ],
    "params": {
    },
    "status": "Delivered"
}
```

**Başarılı Servis Cevabı**

```json
"200 OK";
```

## İade Test Siparişlerini WaitingInAction Statüsüne Çekme

Test senaryolarınızı gerçekleştirmek adına stage ortamda vermiş olduğunuz siparişler için yaratmış olduğunuz iade talepleri sonrasında iade statüsünü waitinginaction'a çekmek için aşağıdaki servisi kullanabilirsiniz.

* Bu servis sadece stage ortamı için kullanılmaktadır.

### **Method PUT**

<Callout icon="📘" theme="info">
  **STAGE**

  <a class="disabled-link">[https://stageapigw.trendyol.com/integration/test/order/sellers/{'{'}sellerId{'}'}/claims/waiting-in-action](https://stageapigw.trendyol.com/integration/test/order/sellers/{'{'}sellerId{'}'}/claims/waiting-in-action)</a>
</Callout>

**Örnek Servis İsteği**

```json
{
    "shipmentPackageId": 56526451 // getClaims servisinden dönen "orderShipmentPackageId" değerine karşılık gelmektedir,
}
```

**Başarılı Servis Cevabı**

```json
"200 OK";
```