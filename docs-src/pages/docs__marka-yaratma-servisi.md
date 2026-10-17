---
updatedAt: 2026-06-09T13:04:52.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Marka Yaratma Servisi

Bu Entegrasyon servisi aracılığıyla Trendyol Marka Listesi'nde olmayan markaları yaratabilirsiniz.

### **POST** BrandCreate

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/brands](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/brands)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/brands](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/brands)
</NoLinkCallout>

**Örnek Servis İsteği**

* Herhangi bir JSON request body bulunmamaktadır.
* Markaya ait marka ismini  "name" adı ile "form-data (Text)" olarak eklemeniz gerekmektedir.
* Markaya ait görselleri "images" adı ile "form-data (file)" olarak eklemeniz gerekmektedir. Minimum 1 maksimum 3 images iletebilirsiniz.