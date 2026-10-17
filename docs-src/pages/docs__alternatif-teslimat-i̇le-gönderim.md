---
updatedAt: 2026-10-13T07:29:48.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Alternatif Teslimat İle Gönderim

Oluşturularan sipariş paketinin müşteriye teslim etmek için alternatif gönderim seçeneklerinin kullanıldığı ve bu işlemleri Trendyol'a aşağıdaki servisler ile iletebilirsiniz.\*

### **PUT** processAlternativeDelivery (Kargo Linki ile Gönderim)

Sipariş paketini gönderdikten sonra elinizde olan kargo takip linki ile besleme yapabilirsiniz. Bu isteği başarılı bir şekilde ilettikten sonra sipariş otomatik olarak "Shipped" (Taşıma Durumunda) statüsüne geçecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
"isPhoneNumber": false,
"trackingInfo": "http://tex....", //Kargo firmasının takip linki paylaşılmalıdır.
"params": {}
}
```

### **PUT** processAlternativeDelivery (Telefon Numarası ile Gönderim)

Sipariş paketini gönderdikten sonra siparişin durumu ile alakalı müşterilerin bilgi alabileceği bir telefon numarası ile besleme yapabilirsiniz. Bu isteği başarılı bir şekilde ilettikten sonra sipariş otomatik olarak "Shipped" (Taşıma Durumunda) statüsüne geçecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
"isPhoneNumber": true,
"trackingInfo": "5555555555",
"params":{},
"boxQuantity": 1,
"deci": 1.4
}
```

**Data Tipleri**

| Alan          | Data Tipi | Açıklama                               | Zorunluluk |
| :------------ | :-------- | :------------------------------------- | :--------- |
| isPhoneNumber | bool      | her zaman "true" olmalıdır             | Zorunlu    |
| trackingInfo  | string    | Teslim edecek kişinin telefon numarası | Zorunlu    |
| params        | map       | Her zaman boş olmalıdır                | Zorunlu    |
| boxQuantity   | int       | Kutu Sayısı                            | Opsiyonel  |
| deci          | float64   | Paketin Desi miktarı                   | Opsiyonel  |

**Örnek Servis Cevapları**

200 cevabını aldıktan sonra sipariş paketlerini çekme servisinden güncel cargoTrackingNumber değerine ulaşabilir ve bu değer ile müşteri siparişi teslim aldıktan sonra bu değeri bize iletebilirsiniz.

```json
"200 OK";
```

### **PUT** manualDeliver - Kargo Takip Numarası (Alternatif Teslimat ile Gönderilmiş Paketi Teslim Etme)

Bu servise istek yapıldıktan sonra müşteriden teslimat onayı beklenir. Müşteri onay verdiğinde veya 3 iş günü içinde dönüş yapmadığında, sipariş statüsü otomatik olarak "Delivered" olur.

Bu isteği yaparken bir JSON body ihtiyacı yoktur. İsteği attıktan sonra size 200 OK cevabı dönecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-deliver/\{cargoTrackingNumber}](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-deliver/\{cargoTrackingNumber})
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-deliver/\{cargoTrackingNumber}](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-deliver/\{cargoTrackingNumber})
</NoLinkCallout>

### **PUT** manualDeliver - Paket Numarası (Alternatif Teslimat ile Gönderilmiş Paketi Teslim Etme)

Bu servise istek yapıldıktan sonra müşteriden teslimat onayı beklenir. Müşteri onay verdiğinde veya 3 iş günü içinde dönüş yapmadığında, sipariş statüsü otomatik olarak "Delivered" olur.

Bu isteği yaparken bir JSON body ihtiyacı yoktur. İsteği attıktan sonra size 200 OK cevabı dönecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-deliver](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-deliver)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-deliver](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-deliver)
</NoLinkCallout>

### Alternatif Teslimat İle İade Gerçekleştirme

### **PUT** manualReturn - Kargo Takip Numarası (Alternatif Teslimat ile Gönderilmiş Paketin Iade Edilmesi)

Bu servisi, tarafınızdan "shipped" statüsüne geçirilip müşteriye teslim edilemediği durumda deponuza geri dönen ve bu sebeple "delivered" statüsüne geçirilemeyen siparişler için kullanabilirsiniz.
Bu isteği yaparken bir JSON body ihtiyacı yoktur. İsteği attıktan sonra size 200 OK cevabı dönecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-return/\{cargoTrackingNumber}](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-return/\{cargoTrackingNumber})
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-return/\{cargoTrackingNumber}](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/manual-return/\{cargoTrackingNumber})
</NoLinkCallout>

### **PUT** manualReturn - Paket Numarası (Alternatif Teslimat ile Gönderilmiş Paketin İade Edilmesi)

Bu servisi, tarafınızdan "shipped" statüsüne geçirilip müşteriye teslim edilemediği durumda deponuza geri dönen ve bu sebeple "delivered" statüsüne geçirilemeyen siparişler için kullanabilirsiniz.
Bu isteği yaparken bir JSON body ihtiyacı yoktur. İsteği attıktan sonra size 200 OK cevabı dönecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-return](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-return)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-return](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/manual-return)
</NoLinkCallout>

### Alternatif Teslimat İle Dijital Ürün Gönderimi

### **PUT** processAlternativeDelivery (Dijital Ürün Teslimatı)

Bu servisi çağırdığınız zaman verdiğiniz bilgiler müşterilere otomatik olarak sms ve e-mail olarak iletilecektir.

* digitalCode alanı 6-120 karakter arasında olmalıdır.
* Sipariş paketleri çekme servisi ya da webhook modelde businessUnit alanı "Digital Goods" olmayan bir sipariş paketi için dijital kod gönderimi yapılmak istendiği durumda; sistem tarafından "digital.good.business.unit.not.valid" hatası dönecektir.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery](https://apigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId}/shipment-packages/\{packageId}/alternative-delivery)
</NoLinkCallout>

**Örnek Servis İsteği**

Dijital ürünler için var olan bu serviste siparişin teslim edildi bilgisi Trendyol tarafından otomatik iletilecektir.

```json
{
"isPhoneNumber": true,
"trackingInfo": "5555555555",
"params":
{
    "digitalCode": "AX4567fasdf"
}
}
```