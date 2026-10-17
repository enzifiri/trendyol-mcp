---
updatedAt: 2026-08-14T10:42:42.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Talebi Oluşturma (createClaim)

İade kodu olmadan gelen sipariş paketleri için iade talebi oluşturmak için bu servisi kullanabilirsiniz. Bu servisle bir paket oluşturduktan sonra,İade Edilen Siparişleri Alma servisi ile iade paketlerini alabilirsiniz.

* Oluşturacağınız iade talebi **"Created"** statüsünde oluşturulacaktır. **"createClaim"** servisini sadece **"Approved"** iade talepleriniz için kullanabilirsiniz.

### **POST** createClaim

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/claims/create
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/claims/create
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "claimItems": [
    {
      "barcode": "string",
      "customerNote": "string",
      "quantity": 0,
      "reasonId": 401
    }
  ],
  "customerId": 888888888,
  "excludeListing": true,
  "forcePackageCreation": true,
  "orderNumber": "string",
  "shipmentCompanyId": 4
}
```

**Örnek Servis Cevabı**

```json
{
    "claimId": "string",
    "cargoTrackingNumber": 733xxxxxxx,
    "claimItemIds": [
        "string"
    ]
}
```

| Parametre         | Açıklama                                                                                                                               |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| barcode           | Siparişteki ürünün barkod bilgisidir.                                                                                                  |
| customerNote      | Müşterilerin yazdığı alandır. İsterseniz bu alanı "İade kodu olmadan iade" gibi bir metinle besleyebilirsiniz.                         |
| quantity          | İade talebi oluşturmak istediğiniz ürünün adet bilgisidir.                                                                             |
| reasonId          | trendyol.com'da müşterilerin seçtiği iade nedenleridir. Bu id değerini şimdilik 401 id değeriyle "vazgeçtim" olarak besleyebilirsiniz. |
| customerId        | Trendyol üzerinden sipariş alan müşterinin id değeridir.                                                                               |
| orderNumber       | Siparişin numarası.                                                                                                                    |
| shipmentCompanyId | Çalıştığınız kargo firmasının id değerini kullanabilirsiniz.                                                                           |