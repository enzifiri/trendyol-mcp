---
updatedAt: 2026-08-25T10:14:44.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# 1. Servis Limitleri

Servis limitleri ve entegrasyon servisleri hakkında detaylı bilgi. 

<Tabs>
  <Tab title={<span style={{ color: '#000' }}>Ürün Servisleri</span>}>

**14 Eylül 2026 tarihinden itibaren geçerli olacak ürün servis limitleri aşağıdaki gibi olacaktır.**

Rate limitler, tekil endpoint bazlı değil, aşağıdaki servis grupları bazında ortak uygulanır.

Örneğin **Product Integration Write** grubu için dakikada toplam **200 istek** limiti varsa; **Ürün Aktarma**, **Ürün Güncelleme** ve **Ürün Silme** servislerinden aynı dakika içinde toplamda en fazla **200 istek** yapılabilir.
Bu durumda `50 Ürün Aktarma + 100 Ürün Güncelleme + 50 Ürün Silme` sonrasında aynı dakika içinde bu gruba ait yeni bir istek gönderilemez.

## Listeleme Limitleri

| Ürün Listeleme Limiti Seviyeleri |
| :-------------------------------- |
| 50.000 ürün |
| 75.000 ürün |
| 150.000 ürün |
| 500.000 ürün |
| Limitsiz |

## 14 Eylül 2026 Sonrası Geçerli Ürün Servis Limitleri

| Alan | Limit Grubu | Kapsam | Limit 50.000 | Limit 75.000 | Limit 150.000 | Limit 500.000 | Limitsiz |
| :--- | :---------- | :----- | :----------- | :----------- | :------------ | :------------ | :------- |
| Ürün | Product Integration Read | Ürün okuma ve sorgulama servislerinin toplamı | 1000 req/min | 1250 req/min | 1500 req/min | 1750 req/min | 2000 req/min |
| Ürün | Product Integration Write | Ürün yaratma, güncelleme, silme ve diğer yazma servislerinin toplamı | 200 req/min | 300 req/min | 400 req/min | 500 req/min | 600 req/min |
| Ürün | Inventory & Price Write | Stok ve fiyat güncelleme servislerinin toplamı | 350 req/min | 500 req/min | 1000 req/min | 1500 req/min | 2000 req/min |

* Fiyat güncelleme isteği için barkod bazlı 30 req/min limiti bulunmaktadır. Aynı barkod  için dakikada 30'dan fazla fiyat güncelleme isteği atmanız halinde, Batch Result servisinde ilgili barkod için hata dönecektir. 

## Product Integration Read Kapsamındaki Servisler

Aşağıdaki servisler, **Product Integration Read** limiti altında ortak değerlendirilir.

| Servis Grubu | Entegrasyon Servisi |
| :----------- | :------------------ |
| Product Integration Read | Ürün Filtreleme |
| Product Integration Read | Toplu İşlem Kontrolü |
| Product Integration Read | İade ve Sevkiyat Adres Bilgileri |
| Product Integration Read | Marka Listesi |
| Product Integration Read | Kategori Listesi |
| Product Integration Read | Kategori Özellik Listesi |
| Product Integration Read | Kategori Özellik Değerleri Listesi |
| Product Integration Read | Ürün Bilgileri Güncelleme Sonucu Kontrol Servisi |

## Product Integration Write Kapsamındaki Servisler

Aşağıdaki servisler, **Product Integration Write** limiti altında ortak değerlendirilir.

| Servis Grubu | Entegrasyon Servisi |
| :----------- | :------------------ |
| Product Integration Write | Ürün Aktarma |
| Product Integration Write | Ürün Güncelleme |
| Product Integration Write | Ürün Buybox Bilgisi Kontrol Servisi |
| Product Integration Write | Marka Yaratma |
| Product Integration Write | Ürün Arşivleme |
| Product Integration Write | Ürün Kilit Kaldırma |
| Product Integration Write | Ürün Silme |

## Inventory & Price Write Kapsamındaki Servisler

Aşağıdaki servisler, **Inventory & Price Write** limiti altında ortak değerlendirilir.

| Servis Grubu | Entegrasyon Servisi |
| :----------- | :------------------ |
| Inventory & Price Write | Stok ve Fiyat Güncelleme |

## Örnek Kullanım Senaryoları

Aşağıdaki örnekler, rate limitlerin servis grubu bazında ortak uygulandığını göstermek için hazırlanmıştır.

### Örnek 1 — Product Integration Write Limiti

**Limit 50.000** grubundaki bir satıcı için **Product Integration Write** limiti dakikada **200 istek**tir.

Bu satıcı aynı dakika içinde aşağıdaki işlemleri yaparsa:

| Servis | İstek Sayısı |
| :----- | :----------- |
| Ürün Aktarma | 50 |
| Ürün Güncelleme | 100 |
| Ürün Silme | 50 |
| **Toplam** | **200** |

Bu durumda **Product Integration Write** limiti dolmuş olur. Aynı dakika içinde **Ürün Aktarma**, **Ürün Güncelleme**, **Ürün Silme** veya bu gruba dahil başka bir yazma servisine yeni istek gönderilemez.

<br />

Aşağıdaki tablo üzerinden **14 Eylül 2026 tarihine kadar geçerli** ürün servis limitlerini kontrol edebilirsiniz.

| Alan | Entegrasyon Servisi | Rate Limitation |
| :--- | :------------------ | :-------------- |
| Ürün | Ürün Aktarma | 1000 req/min |
| Ürün | Ürün Güncelleme | 1000 req/min |
| Ürün | Stok ve Fiyat Güncelleme | NO LIMIT |
| Ürün | Toplu İşlem Kontrolü | 1000 req/min |
| Ürün | Ürün Filtreleme | 2000 req/min |
| Ürün | Ürün Silme | 100 req/min |
| Ürün | İade ve Sevkiyat Adres Bilgileri | 1 req/hour |
| Ürün | TY Marka Listesi | 50 req/min |
| Ürün | TY Marka İsme Göre Filtreleme | 50 req/min |
| Ürün | TY Kategori Listesi | 50 req/min |
| Ürün | TY Kategori - Özellik Listesi | 50 req/min |
| Ürün | Ürün Buybox Kontrol Servisi | 1000 req/min |
| Ürün | Ürün Filtreleme Onaylı Ürün V2 Stok ve Fiyat | 2000 req/min |
| Ürün | Ürün Bilgileri Güncelleme Sonucu Kontrol Servisi | 100 req/min |

  </Tab>

  <Tab title={<span style={{ color: '#000' }}>Sipariş Servisleri</span>}>

**Sipariş servislerimize ait ürün listeleme limitleri baz alınarak belirlenen mevcut servis limitleri aşağıdaki gibidir.**

**Listeleme limitlerine aşağıdan ulaşabilirsiniz**

* Listeleme limitleri 50000 ürün olan satıcılarımız -> Limit 50000
* Listeleme limitleri 75000 ürün olan satıcılarımız -> Limit 75000
* Listeleme limitleri 150000 ürün olan satıcılarımız -> Limit 150000
* Listeleme limitleri 500000 ürün olan satıcılarımız -> Limit 500000
* Listeleme limitleri olmayan satıcılarımız (Sınırsız) -> Limit Limitsiz

| Alan | Entegrasyon Servisi | Limit 50000 | Limit 75000 | Limit 150000 | Limit 500000 | Limitsiz |
| :--- | :------------------ | :---------- | :---------- | :----------- | :----------- | :------- |
| Sipariş | Sipariş Paketlerini Çekme | 30 req/min | 40 req/min | 50 req/min | 100 req/min | 100 req/min |
| Sipariş | Kargo Takip Kodu Bildirme | 300 req/min | 300 req/min | 500 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Paket Statü Bildirimi | 300 req/min | 300 req/min | 500 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Tedarik Edememe Bildirimi | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Sipariş Paketlerini Bölme /split | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Sipariş Paketlerini Bölme /multi-split | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Sipariş Paketlerini Bölme /quantity-split | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Sipariş Paketlerini Bölme /split-packages | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Desi ve Koli Bilgisi Bildirimi | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Alternatif Teslimat İle Gönderim | 300 req/min | 300 req/min | 500 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Alternatif Teslimat İle Gönderim - Teslim edildi | 1000 req/min | 1000 req/min | 1500 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Alternatif Teslimat İle Gönderim - İade | 1000 req/min | 1000 req/min | 1500 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Yetkili Servis İle Gönderim | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Paket Kargo Firması Değiştirme | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Depo Bilgisi Güncelleme | 300 req/min | 300 req/min | 500 req/min | NO LIMIT | NO LIMIT |
| Sipariş | Ek Tedarik Süresi Tanımlama | 100 req/min | 100 req/min | 200 req/min | NO LIMIT | NO LIMIT |
| Sipariş | İşçilik Bedeli Tutarı Gönderme | - | - | - | - | - |

  </Tab>

  <Tab title={<span style={{ color: '#000' }}>Ortak Etiket Servisleri</span>}>

Aşağıdaki tablo üzerinden ortak etiket servislerimizin limitlerini kontrol edebilirsiniz.

| Alan | Entegrasyon Servisi | Rate Limitation |
| :--- | :------------------ | :-------------- |
| Ortak Etiket | Barkod Talebi | 100 req/min |
| Ortak Etiket | Oluşan Barkodun Alınması | 100 req/min |

  </Tab>

  <Tab title={<span style={{ color: '#000' }}>İade Servisleri</span>}>

Aşağıdaki tablo üzerinden iade servislerimizin limitlerini kontrol edebilirsiniz.

| Alan | Entegrasyon Servisi | Rate Limitation |
| :--- | :------------------ | :-------------- |
| İade | İadesi Oluşturulan Siparişleri Çekme | 1000 req/min |
| İade | İade Siparişleri Onaylama | 5 req/min |
| İade | İade Siparişlerinde Ret Talebi Oluşturma | 5 req/min |
| İade | İade Audit Bilgilerini Çekme | 1000 req/min |

  </Tab>

  <Tab title={<span style={{ color: '#000' }}>Muhasebe ve Finans Servisleri</span>}>

Aşağıdaki tablo üzerinden muhasebe ve finans servislerimizin limitlerini kontrol edebilirsiniz.

| Alan | Entegrasyon Servisi | Rate Limitation |
| :--- | :------------------ | :-------------- |
| Finans | Cari Hesap Ekstresi Entegrasyonu | 100 req/min |
| Finans | Kargo Faturası Detayları | 100 req/min |

  </Tab>

  <Tab title={<span style={{ color: '#000' }}>Soru & Cevap Servisleri</span>}>

Aşağıdaki tablo üzerinden müşteri soru & cevap servislerimizin limitlerini kontrol edebilirsiniz.

| Alan | Entegrasyon Servisi | Rate Limitation |
| :--- | :------------------ | :-------------- |
| Soru & Cevap | Müşteri Sorularını Çekme | 1000 req/min |
| Soru & Cevap | Müşteri Sorularını Cevaplama | 500 req/min |

  </Tab>
</Tabs>