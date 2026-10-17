---
updatedAt: 2026-01-22T06:58:44.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Kilit Kaldırma Servisi

Bu servis üzerinden Trendyol'daki kilitli ürünlerinizin kilidini kaldırabilirsiniz. Satışa çıkardığınız ancak;

-Düşük ya da yüksek fiyatlandırma

-Kritik fiyat hatası

-Tedarik edememe sebepleriyle satışı durdurulan ürünlerinizin kilitlerini kendiniz açabilirsiniz.

### **PUT** Ürün Kilit Kaldırma Servisi

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unlock](https://apigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unlock)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unlock](https://stageapigw.trendyol.com/integration/product/sellers/\{sellerId}/products/unlock)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "items": [
    {
      "barcode": "barcode1"
    },
    {
      "barcode": "barcode2"
    }
  ]
}
```

### Servis Cevapları

| Status Code | Açıklama                                                                                                                                                                                                                                                          |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | Gönderilen istek başarılı olmuştur. Tarafınıza dönen batchRequestId ile [Toplu İşlem Kontrolü Servisine](https://integration-documentation-udwy.readme.io/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult) giderek işlem sonucunu görebilirsiniz. |
| **400**     | URL içerisinde eksik veya hatalı parametre kullanılmaktadır. Dokümanı tekrar inceleyiniz.                                                                                                                                                                         |
| **401**     | İstek gönderirken kullandığınız supplierID, API Key, API Secure Key bilgilerinden birisi eksik ya da yanlıştır. Mağazanız için doğru bilgilere [Trendyol Satıcı Paneli](https://partner.trendyol.com/account/info) üzerinden ulaşabilirsiniz.                     |
| **404**     | İstek gönderilen url bilgisi hatalıdır. Dokümanı tekrar inceleyiniz.                                                                                                                                                                                              |
| **500**     | Anlık bir hata yaşanmış olabilir. Bir kaç dakika bekleyerek durumun düzelmemesi durumunda kullanılan endpoint, gönderilen istek ve cevap ile beraber "API Entegrasyon Destek Talebi" başlığından talep oluşturunuz.                                               |

### Örnek Hata Cevapları

**Geçersiz Barkod Hatası:**

```json
{
  "errors": [
    {
      "key": "invalid.barcode",
      "message": "Barkod formatı geçersiz",
      "errorCode": "400"
    }
  ]
}
```

**Ürün Bulunamadı Hatası:**

```json
{
  "errors": [
    {
      "key": "product.not.found",
      "message": "Ürün sistemde bulunamadı",
      "errorCode": "404"
    }
  ]
}
```