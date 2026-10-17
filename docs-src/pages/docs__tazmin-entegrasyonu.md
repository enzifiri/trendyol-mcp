---
updatedAt: 2026-01-22T11:40:16.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Tazmin Entegrasyonu

Bu servis ile kargo firması TEX olan sipariş paketleriniz için tazmin işlemlerinizi takip edebilirsiniz.

* "startDate" ve "endDate" parametreleri createDate alanına göre DESC sıralanmaktadır.

### **GET** Tazmin Entegrasyonu (tickets)

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/tex/compensation/sellers/{sellerId}/tickets
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/tex/compensation/sellers/{sellerId}/tickets
</NoLinkCallout>

**Servis Parametreleri**

| Parametre | Değer | Açıklama                                                                                                |  Tip |
| :-------- | :---- | :------------------------------------------------------------------------------------------------------ | ---: |
| page      |       | Sadece belirtilen sayfadaki bilgileri döndürür                                                          |  int |
| size      |       | Bir sayfada listelenecek maksimum adeti belirtir. Maksimum 100 değerini alabilir (dafult değeri 10'dur) |  int |
| startDate |       | Belirli bir tarihten sonraki tazmin işlemlerini getirir. Timestamp ve GMT +3 olarak gönderilmelidir.    | long |
| endDate   |       | Belirtilen tarihe kadar olan tazmin işlemlerini getirir. Timestamp ve GMT +3 olarak gönderilmelidir.    | long |

**Örnek Servis Cevabı**

```json
{
    "data": [
        {
            "cargoProvider": "TEX",
            "compensateReason": "Kayıp",
            "createDate": 1000999888777,
            "currentState": "IN_PROGRESS",
            "deliveryNumber": "7332222222222222",
            "itemDetails": [],
            "orderNumber": "11111111111",
            "requestedBy": "TEX",
            "stateMessage": "Tazmin talebiniz inceleniyor",
            "totalItemsAmount": ""
        },
        {
            "cargoProvider": "TEX",
            "compensateReason": "Kayıp",
            "createDate": 2000999888777,
            "currentState": "IN_PROGRESS",
            "deliveryNumber": "7331111111111111",
            "itemDetails": [],
            "orderNumber": "11111111112",
            "requestedBy": "TEX",
            "stateMessage": "Tazmin talebiniz inceleniyor",
            "totalItemsAmount": ""
        }
    ],
    "totalCount": 2
}
```

**CurrentState Değerleri**

| Değer                                             | Açıklama                                                                                                                                                                       |
| :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Empty                                             | Tazmin talebiniz yapılan incelemelere göre reddedilmiştir,                                                                                                                     |
| MarkInCompensation                                | Tazmin talebiniz inceleniyor,                                                                                                                                                  |
| OpenedForRefund                                   | Tazmin talebiniz inceleniyor,                                                                                                                                                  |
| StartCompensationFinanceProgress                  | Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır., |
| StartCompensationInApprovalProgress               | Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır., |
| CompensationApproved                              | Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır., |
| CompensationRejected                              | Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır., |
| FoundAfterCompensationComplete                    | Gönderiniz bulundu, iade edilecektir,                                                                                                                                          |
| NotCompensationCase                               | Tazmin talebiniz yapılan incelemelere göre reddedilmiştir,                                                                                                                     |
| FoundInCompensation                               | Gönderiniz bulundu, iade edilecektir,                                                                                                                                          |
| FoundInvestigationProgress                        | Gönderiniz bulundu, iade edilecektir,                                                                                                                                          |
| MarkCompensationCancel                            | Tazmin talebiniz yapılan incelemelere göre reddedilmiştir,                                                                                                                     |
| CreateCompensationTicket                          | Tazmin talebiniz inceleniyor,                                                                                                                                                  |
| FinalizeCompensation                              | Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır., |
| CloseCompensationTicket                           | Gönderiniz bulundu, iade edilecektir,                                                                                                                                          |
| FoundInvestigationProgressDeliveredToCustomer     | Gönderiniz bulundu, müşteriye teslim edilecektir,                                                                                                                              |
| FoundInCompensationDeliveredToCustomer            | Gönderiniz bulundu, müşteriye teslim edilecektir,                                                                                                                              |
| FoundAfterCompensationCompleteDeliveredToCustomer | Gönderiniz bulundu, müşteriye teslim edilecektir,                                                                                                                              |