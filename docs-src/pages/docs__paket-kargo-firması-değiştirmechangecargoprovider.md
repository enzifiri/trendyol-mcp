---
updatedAt: 2026-09-15T06:33:30.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Kargo Firması Değiştirme(changeCargoProvider)

Bu metod sipariş paketlerinin kargo firmalarının değiştirilmesi için kullanılmaktadır.

* Bu işlem bir paket için 5 dakika içerisinde yalnızca 1 kere yapılabilir.
* Kargo değişiminden sonra ilgili paketi [**sipariş servisimizden**](https://integration-documentation-udwy.readme.io/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages) tekrar çekerek kontrol etmeniz gerekmektedir.
* Kargo firması TEX olarak gönderilen güncelleme istekleri satıcının TEX kotasının dolduğu durumlarda geçersiz olacaktır.

### **PUT** changeCargoProvider (Paket Kargo Firması Değiştirme)

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/cargo-providers
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/cargo-providers
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "cargoProvider": "string"
}
```

**cargoProvider değeri için kullanılabilecek değerler aşağıdaki gibidir :**

* “YKMP”
* “ARASMP”
* “SURATMP”
* “HOROZMP”
* “DHLECOMMP”
* “PTTMP”
* “CEVAMP”
* “TEXMP”
* "KOLAYGELSINMP"