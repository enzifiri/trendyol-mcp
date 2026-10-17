---
updatedAt: 2026-01-22T11:42:50.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Siparişleri Onaylama (approveClaimLineItems)

Trendyol Paneli üzerinden iade siparişleri onaylama işlemini, artık Trendyol API servisini kullanarakta yapabilirsiniz. Ekran görüntüsünü aşağıda görebilirsiniz.

Trendyol sisteminde iadesi oluşarak deponuza ulaşan iade siparişleri bu method yardımıyla onaylayabilirsiniz.

* Sadece "WaitingInAction" statüsündeki siparişleri onaylayabilirsiniz.
* "claimId" ve "claimLineItemIdList" değerine [**İadesi Oluşturulan Siparişleri Çekme**](https://integration-documentation-udwy.readme.io/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims) servisimizi kullanarak bu değere ulaşabilirsiniz.
* İadesi onaylanan siparişler, belirli kurallar çerçevesinde fraud kontrolüne girebilmekte olup, İadesi onaylanan siparişler, “Accepted” Statüsüne geçmeden önce “WaitingFraudCheck” statüsünde görüntülenecektir.

### **PUT** approveClaimLineItems

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/claims/{claimId}/items/approve
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/claims/{claimId}/items/approve
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "claimLineItemIdList": [
   "f9da2317-876b-4b86-b8f7-0535c3b65731"
  ],
  "params": {}
}
```

**Örnek Servis Cevabı**

```json
"HTTP 200";
```