---
updatedAt: 2026-09-04T11:17:32.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Audit Bilgilerini Çekme

Trendyol sisteminde iadesi oluşan siparişlerin süreç ve statü geçiş durumlarını tarih, işlem yapılan platform ve işlem yapan kişi bazında bu servis üzerinden kontrol edebilirsiniz.

* Entegrasyon ile işlem yapılırsa; executorApp: "SellerIntegrationApi" şekilde görünür.
* Satıcı panelinden işlem yapılırsa; executorApp: "Seller Center Orders BFF" şekilde görünür.
* Bu logların dısındakiler sizler tarafından işlem yapılmamıs anlamına gelmektedir. executeruserda işlem yaparken ilettiğiniz kullanıcı bilgileri dönülür.

### **GET** getClaimAudits

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/claims/items/{claimItemsId}/audit
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/claims/items/{claimItemsId}/audit
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
[
  {
    claimId: "6101ceca-1743-4d4e-bad2-d476c22542ca",
    claimItemId: "f369b0a2-1461-4c9c-b3cc-12824d65e5e6",
    previousStatus: "",
    newStatus: "Created",
    userInfoDocument: {
      executorId: "328e8073-d898-11eb-b199-d6f52af37563",
      executorApp: "Seller Center Orders BFF",
      executorUser: 6666666
    },
    date: 1624943376430,
  },
  {
    claimId: "6101ceca-1743-4d4e-bad2-d476c22542ca",
    claimItemId: "f369b0a2-1461-4c9c-b3cc-12824d65e5e6",
    previousStatus: "WaitingInAction", //İadenin bir önceki statüsü
    newStatus: "Accepted", //İadenin yeni statüsü
    userInfoDocument: {
      executorId: "41038394-d898-11eb-9b23-caa176587e6c",
      executorApp: "SellerIntegrationApi", //İşlemin hangi platformdan yapıldığı gösterir
      executorUser: 6666666
    },
    date: 1624943400249, //Statü geçiş tarihi
  },
  {
    claimId: "6101ceca-1743-4d4e-bad2-d476c22542ca",
    claimItemId: "f369b0a2-1461-4c9c-b3cc-12824d65e5e6",
    previousStatus: "Created",
    newStatus: "WaitingInAction",
    userInfoDocument: {
      executorId: "328e8073-d898-11eb-b199-d6f52af37563",
      executorApp: "Seller Center Orders BFF",
      executorUser: 6666666
    },
    date: 1624943381690,
  },
];
```