---
updatedAt: 2026-01-22T16:04:44.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Temel Bilgiler v2

Bu servis ile Trendyol mağazanızdaki ürününüzün durumunu listeleyebilirsiniz.

### **GET** filterProducts

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/product/\{barcode}](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/product/\{barcode})
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/product/\{barcode}](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/product/\{barcode})
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "barcode": "smoketest-250049",
    "approved": true,
    "approvedDate": 1763622556000,
    "archived": false,
    "listingId": "a089a30ed1632032913b28099e49d948",
    "contentId": 9511264
}
```