---
updatedAt: 2026-10-04T10:43:47.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Fatura Linki Gönderme (sendInvoiceLink)

* **“invoiceNumber”** ve **“invoiceDateTime”** alanları **Mikro İhracat** ve **Trendyol Yurt Dışı Aracılığı** paketleri için **zorunlu** ancak diğer paket türleri için opsiyoneldir.

* **Trendyol Yurt Dışı Aracıılığı modeli siparişlerinde, E-Arşiv fatura gönderilemez. E-fatura kesilmelidir. E-Arşiv fatura DSM’in gelen kutusuna düşmediği için kontrol/onay sürecine girmez.**

* Azerbaycan ve GULF ülkelerinin sipariş faturaları için entegrasyondan yapacağınız yüklemelerde, fatura üzerinde yazılı olan fatura numarası ile sistem üzerinden ileteceğiniz fatura numarası aynı olmalıdır. Örneğin; fatura üzerinde ABC2024000000001 yazılı ise, entegrasyondan üzerinden de bu numara iletilmelidir.

  * “invoiceDateTime” -> long data tipinde 0'dan büyük, 10 haneli(saniye) veya 13 haneli(milisaniye) olmalıdır.

  * “invoiceNumber” -> string

* Fatura numarasının geçerli olabilmesi için aşağıdaki koşullara uyması gerekmektedir.

  * İlk üç hane; alfa numeric olmalı. (Harf veya rakam)
  * Dört, beş altı ve yedinci hane; bir yıla eşit olmalı. 2020'den 2099'a kadar olabilir.
  * Sekizinci haneden itibaren(son dokuz hane) numeric olmalı.

  \[3 digit(alphanumeric)]\[13 digit(numeric)]) Örnek invoiceNumber değerlerini aşağıdan inceleyebilirsiniz.

  * FRY2024567890123 -> Geçerli
  * FR12024567890123 -> Geçerli
  * F1Y2024567890123 -> Geçerli
  * 1RY2024567890123 -> Geçerli
  * 12Y2024567890123 -> Geçerli
  * 1232024567890123 -> Geçerli
  * F232024567890123 -> Geçerli
  * FRY12345 -> Geçerli Değil

<Callout icon="❗️" theme="error">
  **YASAL ZORUNLULUK**

  Bu servis ile gönderilen fatura bağlantılarının hukuki zorunluluk gereği 10 yıl boyunca erişilebilir durumda olması gereklidir.
</Callout>

Tedarikçi tarafından kendi sisteminde yaratılmış e-Arşiv ya da e-Fatura bilgisinin LİNK detayını Trendyol sistemine transfer etmek için bu method kullanılacaktır.

* Eğer ilgili siparişe ait fatura gönderimini siparişteki kriptolu mail adresine **PDF** ekleyerek gönderim **yapamıyorsanız** bu servisi kullanmanız gerekmektedir.
* Bu servisin tetiklenmesi ile birlikte ilgili sipariş paketi için Trendyol müşterilerine e-Fatura linki kontrol edilerek gönderilir.
* Kriptolu mail adresleri müşteri bazlı sabit değildir, her sipariş için unique mail üretilmektedir.

### **POST** sendInvoiceLink

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-links](https://apigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-links)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-links](https://stageapigw.trendyol.com/integration/sellers/\{sellerId}/seller-invoice-links)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "invoiceLink": "https://developers.trendyolefaturam.com/invoice-example.pdf",
  "shipmentPackageId": 435346,
  "invoiceDateTime": 1678788898,
  "invoiceNumber": "TY4874324"
}
```

**Örnek Servis Cevabı**

```json
"HTTP 201";
```

**Data Types**

| Field             | Data Type |
| :---------------- | :-------- |
| invoiceLink       | String    |
| shipmentPackageId | long      |
| invoiceDateTime   | long      |
| invoiceNumber     | String    |

**"HTTP 409" Hatası**

409 hatasının iki sebebi bulunmaktadır.

* Gönderilen ShipmentPackageId'ye ait bir fatura zaten beslenmiş olabilir.
* Gönderilen link daha önce başka bir ShipmentPackageId'ye zaten beslenmiş olabilir.