---
updatedAt: 2026-07-27T13:19:46.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Garanti Belgesi Gönderimi

Bu servis, siparişinizdeki ürünlere ait garanti belgelerinin gönderilmesini sağlar.

Aşağıdaki endpoint üzerinden ilgili siparişteki ürünle ilişkilendirilir

Başarılı işlem sonucunda istek gönderilen ürün için müşteri uygulamasında sipariş detay ekranlarında "Garanti Belgesini Gör" butonu aktif olur. Müşteri bu butona tıklayarak gönderdiğiniz garanti belgesi PDF'ine erişebilir.

Şu an için Satıcı Paneli veya entegrasyon servisleri üzerinden gönderdiğiniz Garanti Belgesinin detaylarını göremezsiniz.&#x20;

### **POST** Warranty Documents Service

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/sellers/\{sellerId}/warranty-documents](https://apigw.trendyol.com/integration/sellers/\{sellerId}/warranty-documents)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/sellers/{sellerId}/warranty-documents
</NoLinkCallout>

**Örnek Servis İsteği**

* Herhangi bir JSON request body bulunmamaktadır.
* Siparişe ait paket numarasını "shipmentPackageId" adı ile "form-data (Text)" olarak eklemeniz gerekmektedir. Bu bilgi zorunludur.
* Siparişin içinde garanti belgesi göndereceğiniz ürüne ait lineId'yi "form-data (Text)" olarak eklemeniz gerekmektedir. Bu bilgiye sipariş paketlerini çekme servisinden ulaşabilirsiniz. Bu bilgiler zorunludur.
* Garanti belgesini "file" adı ile (pdf formatında) "form-data (file)" olarak eklemeniz gerekmektedir. Bu bilgi zorunludur.

<br />

<br />