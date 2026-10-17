---
updatedAt: 2026-07-01T06:12:17.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Fatura Dosyası Gönderme

* Dosya boyutu 10 MB dan büyük olamaz.
* İleri tarihli fatura eklenemez
* Gönderi paketi başka satıcıya aitse; hata şu şekilde dönecektir; Gönderi paketi, belirtilen satıcıya ait değil.sellerId:
* Faturası oluşmuş bir pakete yüklenmek istediğinde; hata şu şekilde dönecektir; (paketNo)numaralı pakete ait fatura önceden gönderilmiş
* Girilen paket No ile paket yoksa; hata şu şekilde dönecektir; (paketNo) Idli kargo paketi bulunamadı.
* Dosya formatı invalidse; hata şu şekilde dönecektir; Dosya türü (.txt) desteklenmiyor. Desteklenen dosya türleri: application/pdf,image/jpeg,image/png
* File gönderilmeden istek atılırsa; hata şu şekilde dönecektir; Dosya gönderilmedi. Lütfen fatura dosyasını seçip tekrar deneyin.
* Mikro da fatura numarası girilmediğinde; hata şu şekilde dönecektir; Micro export type'lari icin fatura bilgisi zorunludur.
* Mikro da tarih girilmediğinde; hata şu şekilde dönecektir; Micro export type'lari icin fatura bilgisi zorunludur.
* **Trendyol Yurt Dışı Aracıılığı modeli siparişlerinde, E-Arşiv fatura gönderilemez. E-fatura kesilmelidir. E-Arşiv fatura DSM’in gelen kutusuna düşmediği için kontrol/onay sürecine girmez.**

### **POST** TR sellerInvoiceFile

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file](https://apigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file](https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file)
</NoLinkCallout>

**Örnek Servis İsteği**

* Herhangi bir JSON request body bulunmamaktadır.
* Siparişe ait paket numarasını "shipmentPackageId" adı ile "form-data (Text)" olarak eklemeniz gerekmektedir.
* Siparişe ait faturayı "file" adı ile (pdf, jpeg, png) "form-data (file)" olarak eklemeniz gerekmektedir.

### **POST** Mikro sellerInvoiceFile

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file](https://apigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file](https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-file)
</NoLinkCallout>

**Örnek Servis İsteği**

* Herhangi bir JSON request body bulunmamaktadır.
* Siparişe ait paket numarasını "shipmentPackageId" adı ile "form-data (Text)" olarak eklemeniz gerekmektedir.
* Mikro ihracat ve Trendyol Yurt Dışı Aracılığı siparişleri için "invoiceDateTime" ve "invoiceNumber" alanları "form-data (Text)" olarak eklemeniz gerekmektedir.
* Siparişe ait faturayı (pdf, jpeg, png) "form-data (file)" olarak eklemeniz gerekmektedir.