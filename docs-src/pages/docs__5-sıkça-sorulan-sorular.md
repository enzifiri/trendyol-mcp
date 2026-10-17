---
updatedAt: 2026-04-09T07:39:19.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# 4. Sıkça Sorulan Sorular

<Accordion title="Sipariş paketleri webhook modelim pasif statüye geçtiğinde ne yapmalıyım?" icon="fa-question-circle">
  <h6 align="right"> 09.04.2026 </h6>
  Webhook servislerinde 13 kez hata alınması durumunda, sistem otomatik olarak aksiyon alacak olup ilgili webhook isteğini pasife alacaktır, bu kapsamda satıcılarımıza iki adet mail iletiyor olacağız.

  1.Mailde hata alınan webhook ID ile ilgili bilgileri paylaşıyor olup, bu servise istek atmaya devam edeceğimiz süreyi sizinle paylaşıyor olacağız.
  2.Mailde ise ilgili sürenin sonuna geldiğimizi ve hata alınan webhook ID nin pasife alındığını sizlere bildirmiş olacağız.
  Pasife alınan webhooklarınızı servisinizdeki sorunu giderdikten sonra Webhook aktife alma servisinden aktife alabilirsiniz.
</Accordion>

<Accordion title="Siparişlerimi servise istek atarak çekmek yerine webhook modeli ile takip edebilir miyim?" icon="fa-question-circle">
  <h6 align="right"> 09.04.2026 </h6>
  Webhook ( web kancaları ) ile birlikte , belirli bir olay ve ya işlem gerçekleştiğinde başka bir uygulamayı otomatik olarak bilgilendirilebilmektedir.
  Siparişlerinizi çekmek için kullandığınız getshipmentpackage servisini kullanarak veri almak yerine , webhook ile (web kancaları ile) ,olayın meydana geldiği zaman tetiklenen, sizin paylaştığınız özel bir URL’ye istek gönderen bir mekanizma kullanılmaktadır. Model ile ilgili detaylara, Webhook (Sipariş Paketleri) sekmesinden ulaşabilirsiniz.
</Accordion>

<Accordion title="Siparişlerimin mikro ihracat siparişi olduğunu nasıl anlayabilirim?" icon="fa-question-circle">
  <h6 align="right"> 31.12.2025 </h6>
  Sipariş paketlerini çekme servisi ile dönen sipariş içerisindeki "micro" alanı True ise ilgili sipariş mikro ihracat siparişi anlamına gelmektedir. Micro alanı countryCode alanından bağımsız bir alandır. Ülke bilgisi farklılık gösterebilir. Micro alanın True ya da False değer alması ile countryCode alanını eşleştirmemenizi rica ederiz.
</Accordion>

<Accordion title="Mikro ihracat siparişleri için faturalarda KDV oranı ne şekilde olmalıdır?" icon="fa-file-invoice-dollar">
  <h6 align="right"> 31.12.2025 </h6>
  Mikro İhracat kapsamında, firmanız tarafından gerçek kişilere düzenlenecek E-Arşiv fatura formatında "KDV Oranı” kısmı yer almakta olup, 3065 sayılı KDV Kanunu’nun 11/1-a maddesi uyarınca mal ihracatları KDV’den muaf olduğundan faturadaki oran kısmının %0 olarak gözükmesi gerekecektir. Buna ek olarak, firmanızca düzenlenecek olan e-arşiv faturada fatura tipini “İstisna” seçerek 301- 11/1-a Mal İhracatı kodu ile faturanızı düzenleyebilirsiniz.
</Accordion>

<Accordion title="Mikro ihracat siparişleri için faturaları hangi yöntemle aktarabilirim?" icon="fa-upload">
  <h6 align="right"> 31.12.2025 </h6>
  Mikro ihracat siparişleriniz için fatura gönderimlerinizi satıcı panelinde "Sipariş & Kargo -> Kargo Aşamasındaki Siparişleriniz için Fatura İşlemleri -> Fatura Yükle" butonu ile mikro ihracat faturalarını yükleyerek ya da fatura linki gönderme servisimizi kullanarak yapmanız gerekmektedir. Fatura linki gönderme servisimizde “invoiceNumber” ve “invoiceDateTime” alanları mikro ihracat paketleri için zorunlu ancak diğer paket türleri için opsiyonel alanlardır.
</Accordion>

<Accordion title="API bilgilerime nasıl erişebilirim?" icon="fa-key">
  <h6 align="right"> 31.12.2025 </h6>
  API Key bilgilerinizi Trendyol Satıcı Paneli üzerinden sağ üstte bulunan Mağaza Adınıza > Hesap Bilgilerim > Entegrasyon Bilgileri menüsüne tıklayarak erişebilirsiniz.
</Accordion>

<Accordion title="Test ortamına nasıl erişebilirim?" icon="fa-flask">
  <h6 align="right"> 31.12.2025 </h6>
  Test ortamına erişim IP yetkilendirmesi ile gerçekleşmektedir. IP yetkilendirmesi talep etmek için satıcı paneli üzerinden bildirim oluşturmanız gerekmektedir.
</Accordion>

<Accordion title="Kod desteği vermekte misiniz?" icon="fa-code">
  <h6 align="right"> 31.12.2025 </h6>
  Hayır, Kod desteği sağlamamaktayız.
</Accordion>

<Accordion title="Test siparişi oluşturabilir miyim?" icon="fa-shopping-cart">
  <h6 align="right"> 31.12.2025 </h6>
  Test Siparişi oluşturmak için, test ortamımızı kullanabilirsiniz. Test siparişi oluşturmak için Test Siparişi Oluşturma servis dökümanımızı incelemenizi rica ederiz.
  [Test Siparişi Oluşturma Servis Dökümanı](/docs/marketplace/siparis-entegrasyonu/test-siparisi-olusturma)
</Accordion>

<Accordion title="Ürün Yaratma, Ürün Güncelleme, Stok-Fiyat Güncelleme işlemleri sonrası ne yapmam gerekiyor?" icon="fa-sync-alt">
  <h6 align="right"> 31.12.2025 </h6>
  Ürün Yaratma, Ürün Güncelleme, Stok Fiyat Güncelleme işlemleri sonrasında response içerisinde sizlere dönen batchId ile yapmış olduğunuz işlem sonucunu toplu işlem kontrolu servisimizi kullanarak kontrol etmeniz gerekmektedir. Response içerisinde batchId dönmesi yapmış olduğunuz işlemin başarılı sonuçlandığı anlamına gelmemektedir.
  [Toplu İşlem Kontrolü Servis Dökümanı](/docs/marketplace/urun-entegrasyonu/toplu-islem-kontrolu)
</Accordion>

<Accordion title="Güncel kategori listesini nasıl çekebilirim?" icon="fa-list-ul">
  <h6 align="right"> 31.12.2025 </h6>
  Güncel kategori bilgilerini Trendyol Kategori Listesi servisi üzerinden çekebilirsiniz.
  [Trendyol Kategori Listesi Servis Dökümanı](/docs/marketplace/urun-entegrasyonu/trendyol-kategori-listesi)
</Accordion>

<Accordion title="Güncel kategori-özellik listesini nasıl çekebilirim?" icon="fa-tags">
  <h6 align="right"> 31.12.2025 </h6>
  Güncel kategori-özellik bilgilerini Trendyol Kategori - Özellik Listesi servisi üzerinden çekebilirsiniz.
  [Trendyol Kategori - Özellik Listesi Servis Dökümanı](/docs/marketplace/urun-entegrasyonu/trendyol-kategori-ozellik-listesi)
</Accordion>

<Accordion title="Güncel marka listesini nasıl çekebilirim?" icon="fa-copyright">
  <h6 align="right"> 31.12.2025 </h6>
  Güncel marka bilgilerini Trendyol Kategori - Özellik Listesi servisi üzerinden çekebilirsiniz.
  [Trendyol Marka Listesi Servis Dökümanı](/docs/marketplace/urun-entegrasyonu/trendyol-marka-listesi)
</Accordion>

<Accordion title="Varyantlı ürün aktarımını nasıl yapabilirim?" icon="fa-layer-group">
  <h6 align="right"> 31.12.2025 </h6>
  Ürünlerinizi varyantlı bir şekilde aktarmak için ürün aktarma servisimizde bulunan payloadda productMainId değeri aynı olacak şekilde, ilgili kategorieye ait varyantlanabilir attribute alanını değiştirerek farklı barkod ve farklı stok kodu ile yaratmanız gerekmektedir.
  [Ürün Aktarma Servis Dökümanı](/docs/marketplace/urun-entegrasyonu/trendyol-marka-listesi)
</Accordion>

<Accordion title="Fatura linki besleme servisinde 409 hatası alıyorum. Ne yapabilirim?" icon="fa-exclamation-triangle">
  <h6 align="right"> 31.12.2025 </h6>
  409 hatasının iki sebebi bulunmaktadır:

  1. Gönderilen ShipmentPackageId'ye ait bir fatura zaten beslenmiş olabilir.
  2. Gönderilen link daha önce başka bir ShipmentPackageId'ye zaten beslenmiş olabilir.
     Gerekli kontrolleri sağlamanızı rica ederiz.
     [Fatura Linki Gönderme Servis Dökümanı](/docs/marketplace/siparis-entegrasyonu/fatura-linki-gonderme)
</Accordion>