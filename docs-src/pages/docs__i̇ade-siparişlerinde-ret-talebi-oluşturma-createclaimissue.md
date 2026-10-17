---
updatedAt: 2026-10-14T10:33:56.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Siparişlerinde Ret Talebi Oluşturma (createClaimIssue)

Trendyol Paneli üzerinden iade siparişlerine ret talebi oluşturma işlemini, artık Trendyol API servisini kullanarakta yapabilirsiniz. Ekran görüntüsünü aşağıda görebilirsiniz.

Trendyol sisteminde iadesi oluşarak deponuza ulaşan iade siparişleri bu method yardımıyla ret talebi oluşturabilirsiniz.

* Sadece "WaitingInAction" statüsündeki siparişleri için Ret Talebi oluşturabilirsiniz.

* İadeye ait ekleri (jpeg/jpg, png, pdf, tiff, doc, docx, mp4, quicktime vb.) "form-data (file)" olarak dosya adı files olacak şekilde dosya başına 5 MB limitine uyacak şekilde eklemeniz gerekmektedir.

* "claimId" ve "claimLineItemIdList" değerine [**İadesi Oluşturulan Siparişleri Çekme**](https://integration-documentation-udwy.readme.io/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims) servisimizi kullanarak bu değerlere ulaşabilirsiniz ve sadece "WaitingInAction" statüsündeki iade siparişlerine ret talebi oluşturabilirsiniz.

* "claimIssueReasonId" değerine İade Red Sebeplerini Çekme servisimizi kullanarak ilgili ID değerlerine ulaşabilirsiniz.

* "description" değerini freetext olarak maksimum 500 karakter olarak yazabilirsiniz.

* Aşağıda ki iade sebepleri için file yüklemenize gerek bulunmamaktadır. Bu iki iade sebebi dışında bütün sebepler için file yüklemek zorunludur.
  * 1651: “Müşterinin yolladığı iade paketi elime ulaşmadı”
  * 451: “Müşteriden gelen ürünü analize göndereceğim”
  * 2101: "Sipariş sorusundan gelen değişim talebi (müşterinin talebi yoksa kullanılmamalı)"

### **POST** createClaimIssue

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/claims/{claimId}/issue?claimIssueReasonId={claimIssueReasonId}&claimItemIdList={claimItemIdList}&description={test}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/claims/{claimId}/issue?claimIssueReasonId={claimIssueReasonId}&claimItemIdList={claimItemIdList}&description={test}
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
"HTTP 200";
```