---
updatedAt: 2026-09-04T11:17:15.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade ve Sevkiyat Adres Bilgileri (getSuppliersAddresses)

İade ve sevkiyat adres bilgilerini almak için kullanılan getSuppliersAddresses servisi hakkında bilgi.

[createProduct V2](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts) servisine yapılacak isteklerde gönderilecek sipariş ve sevkiyat kargo firma bilgileri ve bu bilgilere ait ID değerleri bu servis kullanılarak alınacaktır.

* **"SATICI BAŞVURU SÜRECİM"** tam olarak tamamlanmadı ise bu servisi kullanmamanız gerekir.

### **GET** getSuppliersAddresses

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/sellers/{sellerId}/addresses
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/sellers/{sellerId}/addresses
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "supplierAddresses": [
        {
            "id": 1,
            "addressType": "Shipment",
            "country": "Country-0",
            "city": "Kocaeli",
            "cityCode": 0,
            "district": "Gebze",
            "districtId": 0,
            "postCode": "post-code-0",
            "address": "Address-0",
            "isReturningAddress": false,
            "fullAddress": "John Doe's House",
            "isShipmentAddress": true,
            "isInvoiceAddress": false,
            "isDefault": true
        },
        {
            "id": 2,
            "addressType": "Invoice",
            "country": "Country-2",
            "city": "Ankara",
            "cityCode": 0,
            "district": "Mamak",
            "districtId": 0,
            "postCode": "post-code-2",
            "address": "Address-2",
            "isReturningAddress": false,
            "fullAddress": "John Doe's House",
            "isShipmentAddress": false,
            "isInvoiceAddress": true,
            "isDefault": true
        },
        {
            "id": 3,
            "addressType": "Returning",
            "country": "Country-3",
            "city": "Bursa",
            "cityCode": 0,
            "district": "Teleferik",
            "districtId": 0,
            "postCode": "post-code-3",
            "address": "Address-3",
            "isReturningAddress": true,
            "fullAddress": "John Doe's House",
            "isShipmentAddress": false,
            "isInvoiceAddress": false,
            "isDefault": true
        },
        {
            "id": 4,
            "addressType": "Returning",
            "country": "Country-4",
            "city": "İzmir",
            "cityCode": 0,
            "district": "Bornova",
            "districtId": 0,
            "postCode": "post-code-4",
            "address": "Address-4",
            "isReturningAddress": true,
            "fullAddress": "John Doe's House",
            "isShipmentAddress": false,
            "isInvoiceAddress": false,
            "isDefault": false
        }
    ],
    "defaultShipmentAddress": {
        "id": 0,
        "addressType": "Shipment",
        "country": "Country-0",
        "city": "Kocaeli",
        "cityCode": 0,
        "district": "Gebze",
        "districtId": 0,
        "postCode": "post-code-0",
        "address": "Address-0",
        "isReturningAddress": false,
        "fullAddress": "John Doe's House",
        "isShipmentAddress": true,
        "isInvoiceAddress": false,
        "isDefault": true
    },
    "defaultInvoiceAddress": {
        "id": 2,
        "addressType": "Invoice",
        "country": "Country-2",
        "city": "Ankara",
        "cityCode": 0,
        "district": "Mamak",
        "districtId": 0,
        "postCode": "post-code-2",
        "address": "Address-2",
        "isReturningAddress": false,
        "fullAddress": "John Doe's House",
        "isShipmentAddress": false,
        "isInvoiceAddress": true,
        "isDefault": true
    },
    "defaultReturningAddress": {
        "present": true
    }
}
```