---
updatedAt: 2026-08-07T13:33:06.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Stok ve Fiyat Güncelleme (updatePriceAndInventory)

Trendyol ürünlerinin fiyat ve stok bilgilerini güncelleme kılavuzu. Maksimum 1000 SKU güncellenebilir.

Trendyol'a aktarılan ve onaylanan ürünlerin fiyat ve stok bilgileri eş zamana yakın güncellenir. Stok ve fiyat bilgilerini istek içerisinde ayrı ayrı gönderebilirsiniz.

* Stok-fiyat güncelleme işlemlerinde request body içerisinde değişiklik yapmadan aynı isteği tekrar atmanız halinde, sizlere hata mesajı dönecektir. Hata mesajı olarak "**15 dakika boyunca aynı isteği tekrarlı olarak atamazsınız!"** göreceksiniz. Sadece değişen stok-fiyatlarınızı istek atacak şekilde sistemlerinizi düzeltmeniz gerekmektedir.
* Quantity alanında gönderdiğiniz stok, satılabilir stok bilgisidir. Satılabilir stok bilgisi sipariş alındığında ya da tarafınızdan yeniden stok gönderildiğinde güncellenir.
* Stok-fiyat update işlemlerinde maksimum 1000 item(sku) güncellemesi yapabilirsiniz.
* Ürünleriniz için maksimum 20 Bin adet stok ekleyebilirsiniz.
* Sadece stok veya fiyat bilgilerinden biri güncelleneceği zaman diğer alanın gönderilmesi zorunlu değildir.
* listPrice; Ürün liste fiyatı(Satış fiyatı düşük olunca üstü çizilen fiyat) PSF'dir.
* salePrice; Ürün satış fiyatı TSF'dir.

<Callout icon="❗️" theme="error">
  **TOPLU İŞLEM KONTROLÜ**

  Bu method kullanarak yaptığınız işlemlerin durumunu **[getBatchRequestResult](/docs/marketplace/urun-entegrasyonu/toplu-islem-kontrolu)** üzerinden kontrol etmelisiniz.
</Callout>

### **POST** updatePriceAndInventory

<NoLinkCallout type="info" title="PROD">
    https://apigw.trendyol.com/integration/inventory/sellers/{sellerId}/products/price-and-inventory
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
https://stageapigw.trendyol.com/integration/inventory/sellers/{sellerId}/products/price-and-inventory
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "items": [
    {
      "barcode": "8680000000",
      "quantity": 100,
      "salePrice": 112.85,
      "listPrice": 113.85
    }
  ]
}
```

**Örnek Servis Cevabı**

```json
{
    "batchRequestId": "fa75dfd5-6ce6-4730-a09e-97563500000-1529854840"
}
```