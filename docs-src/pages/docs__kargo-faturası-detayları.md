---
updatedAt: 2026-07-29T11:54:03.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kargo Faturası Detayları

**Trendyol tarafından satıcılara kesilen kargo faturalarını detayına bu servis üzerinden ulaşabilirsiniz.**

-**Kargo Faturasının seri numarasını nasıl bulurum ?**

Cari Hesap Ekstresi Entegrasyonu üzerinden transactionType='DeductionInvoices' responsundan dönen data içerisinde ki alanlardan transactionType değeri "Kargo Faturası" yada "Kargo Fatura" olan kayıtların "Id" değeri "invoiceSerialNumber" değeridir.

### **GET** cargo-invoice

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/finance/che/sellers/{sellerId}/cargo-invoice/{invoiceSerialNumber}/items
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/finance/che/sellers/{sellerId}/cargo-invoice/{invoiceSerialNumber}/items
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "page": 0,
    "size": 500,
    "totalPages": 1,
    "totalElements": 25,
    "content": [
        {
            "shipmentPackageType": "Gönderi Kargo Bedeli",
            "parcelUniqueId": 7260001151141191,
            "orderNumber": "2111681160",
            "amount": 34.24,
            "desi": 1
        },
        {
            "shipmentPackageType": "İade Kargo Bedeli",
            "parcelUniqueId": 7265609146531138,
            "orderNumber": "2111161312",
            "amount": 34.24,
            "desi": 1
        }
    ]
}
```

<br />

| Field İsmi          | Type             | Açıklama                                                             |
| :------------------ | ---------------- | :------------------------------------------------------------------- |
| shipmentPackageType | string           | Kargo paketi türü (örn. "Gönderi Kargo Bedeli", "İade Kargo Bedeli") |
| parcelUniqueId      | long             | Kargo paketi benzersiz kimliği                                       |
| orderNumber         | string           | Sipariş numarası                                                     |
| amount              | number (decimal) | Kargo bedeli tutarı                                                  |
| desi                | int              | Kargo desi değeri                                                    |

<br />