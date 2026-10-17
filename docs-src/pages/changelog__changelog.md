---
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Changelog

<br />

<Tabs>
  <Tab title="Türkiye Marketplace">
    <Tabs>
      <Tab title="Türkiye Marketplace">
        <Accordion title="Menşei (Origin) Bilgisi Tanımlama Süreçlerindeki Değişiklik Hakkında (08.10.2026)" icon="fa-undo">
                              <h6 align="right"> 08.10.2026 </h6>

          Değerli İş Ortağımız,

          "Attribute" (Özellik) altında alınan Menşei bilgisi, stockCode veya barcode gibi bağımsız, standart bir alandan (field) da girilebilmektedir.
          Bu yapı ile alakalı 23 Ekim tarihinde yapmayı planladığımız aşağıdaki geçiş planı, daha ileri bir tarihe ertelenmiştir.

          GEÇERLİ OLMAYAN DUYURU: "23 Ekim 2026 tarihi itibari ile yeni eklenen origin alanı zorunlu (required) hale gelecektir. Attribute altından menşei bilgisi gönderimi opsiyonel olacaktır."

          Bu nedenle yeni bir geçiş tarihi duyurusu yapılana kadar Menşei bilgisi Attribute altından gönderilmesi zorunlu kalacaktır.

          Anlayışınız için teşekkür ederiz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Webhook Servislerinde Yaşanan Geçici Kesinti Hakkında (06.10.2026)" icon="fa-undo">
                        <h6 align="right"> 06.10.2026 </h6>

          Değerli İş Ortağımız,

          Trendyol Entegrasyon Servislerimizde gerçekleştirilen teknik bakım ve güncelleme çalışmaları sırasında, webhook servisimizde geçici bir kesinti yaşanmıştır.

          Ayrıntılar:

          Etkilenen Servis: Webhook modeli

          Tarih ve Zaman Aralığı:  6 Ekim 2026 tarihinde 11:02 - 12:25 zaman aralığı

          Etki: Belirtilen zaman aralığında webhook modelinize sipariş bilgileri düşmemiştir.

          Yapılması Gereken Aksiyon:
          11:02 - 12:25 saatleri arasında yaşanan sorun giderilmiş olup, bu saat aralığında oluşan sipariş verileriniz webhook modelinize de aktarılmıştır, herhangi bir aksiyon almanıza gerek olmayıp, kontrol sağlamak istemeniz durumunda ilgili zaman aralığını kapsayacak şekilde sipariş çekme servisine (getShipmentpackages) istek atabilirsiniz.

          Gösterdiğiniz anlayış ve iş birliği için teşekkür ederiz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Trendyol Entegrasyon Servisi İade Red Sebepleri (getClaimsIssueReasons) Güncellemesi Hakkında (23.09.2026)" icon="fa-undo">
                        <h6 align="right"> 23.09.2026 </h6>

          Değerli İş Ortağımız,

          Trendyol olarak platformumuzdaki iade red nedenlerimizi daha şeffaf, hızlı ve verimli hale getirmek amacıyla çalışmalarımızı sürdürüyoruz.
          Bu kapsamda, İade Servislerimizde (Return API Services) kullanılan İade Red Sebeplerini Çekme (getClaimsIssueReasons) yapısında kapsamlı bir optimizasyona gidilmiştir. Yapılan bu geliştirme, operasyonel süreçlerdeki karmaşıklığı azaltmayı, yanlış sebep seçiminden kaynaklanan ihtilaf ve mağduriyetlerin önüne geçmeyi hedeflemektedir.

          İlgili geliştirmeler 8 Ekim tarihi itibarıyla canlıya alınacaktır.

          Yapılan Güncellemeler ve Teknik Detaylar
          A. Kullanımdan Kaldırılan (Pasife Alınan) Ret Sebepleri İş mantığı (business logic) açısından çakışan ve eskiyip geçerliliğini yitiren aşağıdaki reason_id değerleri 8 Ekim itibarıyla kullanımdan kaldırılacaktır:

          251 – Müşteriden gelen ürün defolu/zarar görmüş
          1701 – Gönderdiğim ürün yanlış değil
          1751 – Gönderdiğim ürün kusurlu değil
          2201 – Gönderdiğim ürün eksik değil
          2001 – Müşteri Kurumsal İade Faturasını Hatalı Kesti
          2151 – Ürünün teknik servise gönderilmesi için müşteriye faturayı göndereceğim
          Önemli: Canlıya geçiş sonrasında pasife alınan bu ret nedenleri ile iletilen API istekleri sistem tarafından hata dönecektir.

          B. Yeni Eklenen Ret Sebepleri Spesifik iade senaryolarını ve özel durumları doğru kapsayabilmek adına sistemimize 3 yeni ret nedeni tanımlanmıştır:

          2077 – Ürün iade edilemeyen "Kişiselleştirilmiş (Özel Üretim)" statüsündedir
          2078 – Gelen üründe herhangi bir kusur yok. Müşteri memnuniyeti için iadeyi kabul etmek istiyorum
          2079 – Ürünü doğru ve sağlam gönderdim. İade edilen ürün eksik, hasarlı veya farklı bir ürün olarak ulaştı

          C. Metni ve Tanımı Güncellenen Ret Sebepleri Aşağıdaki sebeplerin sistemdeki benzersiz kimlikleri (reason_id) aynı kalmış; ancak kullanıcı arayüzlerindeki görünen isimleri ve açıklamaları anlaşılırlığı artırmak adına güncellenmiştir:

          51: Müşteriden gelen ürün kullanılmış ➔ Ürün olağan dışı kullanılmış ve/veya müşteri kaynaklı hasar görmüş
          151: Müşteriden gelen ürünün parçası/aksesuarı eksik ➔ İade edilen ürünün parçası / aksesuarı eksik
          201: Müşteriden gelen ürün yanlış ➔ Satılan üründen tamamen farklı bir ürün (yanlış) iade edildi
          401: Müşteriden gelen ürün adedi eksik ➔ İade edilen ürün veya adedi eksik
          451: Müşteriden gelen ürünü analize göndereceğim ➔ Ürünü analize alacağım
          1651: Müşterinin yolladığı iade paketi elime ulaşmadı ➔ İade paketi tarafıma teslim edilmedi
          1951: Müşteri Kurumsal İade Faturasını Kesmedi ➔ Kurumsal iade faturası iletilmedi veya hatalı
          2051: Hijyenik risk barındıran ürün paketi açılmış ➔ Ürünün koruyucu ambalajı (hijyen bandı, mühür, paket) açılmış

          8 Ekim tarihine kadar sistemlerinizde haritalandırılmış (mapped) ret nedenleri arasına yeni eklenen kodları sistemlerinize dahil etmeniz, pasife alınan ret kodlarını sistemlerinizde kaldırmanızı, ve değişen  (reason_id) açıklamalarınızı güncellemeniz gerekmektedir.

          Link: [https://developers.trendyol.com/docs/i%CC%87ade-red-sebeplerini-%C3%A7ekme-getclaimsissuereasons](https://developers.trendyol.com/docs/i%CC%87ade-red-sebeplerini-%C3%A7ekme-getclaimsissuereasons)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisi ve Webhook Modele paymentMethod alanının eklenmesi (09.09.2026)" icon="fa-undo">
                  <h6 align="right"> 09.09.2026 </h6>

          Değerli İş Ortağımız,

          Müşterilerin sipariş esnasında kullandığı ve faturada belirtilmesi gereken ödeme yöntemi bilgisi, Sipariş Paketlerini Çekme Servisi ve Webhook modelimize "paymentMethod" adıyla eklenmiştir.

          Doğru faturalandırma yapabilmek için entegrasyon servislerinizi bu yeni alanı okuyacak şekilde güncellemenizi rica ederiz.

          Bu Alanın Alabileceği Değerler:
          "Banka Kartı"
          "Kredi Kartı"
          "Alışveriş Kredisi"
          "Cüzdan - Trendpay"
          "Şimdi Al Sonra Öde - Trendpay"
          "-"

          Etkilenen Servisler:

          1. Sipariş Paketlerini Çekme Servisi: [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages)
          2. Sipariş Paketlerini Akış ile Çekme Servisi: [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme)
          3. Webhook Model: [https://developers.trendyol.com/docs/webhook-model](https://developers.trendyol.com/docs/webhook-model)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Servislerinde Yaşanan Geçici Kesinti Hakkında (08.09.2026)" icon="fa-undo">
                  <h6 align="right"> 08.09.2026 </h6>

          Değerli İş Ortağımız,

          Trendyol Entegrasyon Servislerimizde gerçekleştirilen teknik bakım ve güncelleme çalışmaları sırasında, sipariş çekme servisimizde geçici bir kesinti yaşanmıştır.

          Ayrıntılar:
          Etkilenen Servis: Sipariş Paketlerini Çekme Servisleri / Webhook modeli
          Tarih ve Zaman Aralığı: 8 Eylül 14.00-15.34
          Etki: Belirtilen zaman aralığında oluşturulan yeni siparişlerin bazıları servis yanıtlarında dönmemiştir.

          Yapılması Gereken Aksiyon:
          14.00 - 15.34 saatleri arasında sistemde oluşan sipariş verilerinizin eksiksiz şekilde tarafınıza aktarılması ve senkronizasyonun sağlanması adına, ilgili zaman aralığını kapsayacak şekilde sipariş çekme servisine (getShipmentpackages) yeniden istek (retry) atılmasını rica ederiz.

          Olası uyuşmazlıkların önüne geçmek adına sistemlerinizi kontrol etmenizi önemle hatırlatırız. Gösterdiğiniz anlayış ve iş birliği için teşekkür ederiz.

          Anlayışınız için teşekkür eder, iyi çalışmalar dileriz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Servislerinde Yaşanan Geçici Kesinti Hakkında (02.09.2026)" icon="fa-undo">
                  <h6 align="right"> 02.09.2026 </h6>

          Değerli İş Ortağımız,

          Trendyol Entegrasyon Servislerimizde gerçekleştirilen teknik bakım ve güncelleme çalışmaları sırasında, sipariş çekme servisimizde geçici bir kesinti yaşanmıştır.

          Ayrıntılar:

          Etkilenen Servis: Sipariş Çekme Servisleri / Webhook modeli

          Tarih ve Zaman Aralığı: Today (02.09.2026) | 15:29 – 16:01

          Etki: Belirtilen zaman aralığında oluşturulan yeni siparişler servis yanıtlarında dönmemiştir.

          Yapılması Gereken Aksiyon:
          15:29 - 16:01 saatleri arasında sistemde oluşan sipariş verilerinizin eksiksiz şekilde tarafınıza aktarılması ve senkronizasyonun sağlanması adına, ilgili zaman aralığını kapsayacak şekilde sipariş çekme servisine (getShipmentpackages) yeniden istek (retry) atılmasını rica ederiz.

          Olası uyuşmazlıkların önüne geçmek adına sistemlerinizi kontrol etmenizi önemle hatırlatırız. Gösterdiğiniz anlayış ve iş birliği için teşekkür ederiz.

          Anlayışınız için teşekkür eder, iyi çalışmalar dileriz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Menşei (Origin) Bilgisi Tanımlama Süreçlerindeki Değişiklik Hakkında (GEÇERSİZ DUYURU)" icon="fa-undo">
                  <h6 align="right"> 17.08.2026 </h6>

          Değerli İş Ortağımız,

          Trendyol olarak, veri yapılarımızı modernize etmek ve entegrasyon süreçlerinizi daha verimli hale getirmek adına ürün servislerimizde önemli bir güncelleme yapıyoruz.
          Bugüne kadar ürün servislerimizde "Attribute" (Özellik) altında alınan Menşei bilgisini, artık stockCode veya barcode gibi bağımsız, standart bir alan (field) olarak yöneteceğiz.

          **Geçiş Süreci Nasıl İşleyecek?**
          Sizlerin bu değişimden olumsuz etkilenmemesi adına süreci iki aşamalı bir "yumuşak geçiş" (soft transition) modeliyle kurguladık:

          **1. Hibrit Dönem (Geçiş Dönemi):**
          Ürün payload'una origin adında yeni bir alan eklenmiştir.
          Bu dönemde menşei bilgis, ilgili ürün kategorisi için zorunlu bir attribute ise mevcut attributes altından gönderilmesi zorunlu kalmaya devam edecektir. Geçiş dönemi boyunca menşei bilgisi yeni origin alanı üzerinden de opsiyonel olarak gönderilebilecektir.
          **Yeni alan şu an için opsiyonel (optional) statüsündedir. Yeni eklenen origin alanı 23 Ekim 2026 tarihinde zorunlu olacaktır;** bu yüzden entegrasyonlarınızı bu yeni alana göre güncellemenizi önemle rica ederiz. Gönderebileceğiniz Menşei Değerleri Listesine entegrasyon dokumanımız üzerinden ulaşabilirsiniz.

          **2. Tam Geçiş ve Zorunluluk Dönemi:**
          23 Ekim 2026 tarihi itibari ile yeni eklenen origin alanı zorunlu (required) hale gelecektir.
          **23 Ekim 2026 tarihi itibari ile Attribute altından menşei bilgisi gönderimi opsiyonel olacaktır. İlerideki bir tarihte attribute altından menşei alanı kaldırılacak olup, bu tarih paylaşılacaktır.**

          **Veri Taşıma (Migration) Bilgilendirmesi&#xA;**&#x47;eçmişe dönük verileriniz için endişelenmenize gerek bulunmamaktadır. Deadline geldiğinde, attributes içerisinde yer alan tüm mevcut menşei bilgileri, Trendyol ekipleri tarafından otomatik olarak yeni origin alanına taşınacaktır.

          **Entegrasyon dokumanımız üzerinden ilgili servislere eklenen yeni alanı kontrol edebilirsiniz:**
          Ürün Aktarma V1 (createProducts)
          Ürün Bilgisi Güncelleme V1 (updateProduct)
          Toplu İşlem Kontrolü (getBatchRequestResult)
          Ürün Filtreleme V1 (filterProducts)
          Ürün Yaratma v2
          Ürün Güncelleme - Onaysız Ürün v2
          Ürün Güncelleme - Onaylı Ürün v2 (Varyant)
          Toplu İşlem Kontrolü (getBatchRequestResult)
          Ürün Filtreleme - Onaysız Ürün v2
          Ürün Filtreleme - Onaylı Ürün v2

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Ürün Servisleri Teslimat Seçenekleri (deliveryOption) Güncellemesi Hakkında" icon="fa-undo">
            <h6 align="right"> 17.08.2026 </h6>

          Değerli İş Ortağımız,

          Pazaryeri entegrasyon servislerimizin veri yapısını sadeleştirmek amacıyla Ürün Servislerimizde değişikliğe gidiyoruz.

          17 Ağustos 2026 tarihi itibari ile geçerli olacak **teslimat seçenekleri (deliveryOption)** güncellenmesine ilişkin detaylar aşağıda yer almaktadır.

          **Mevcut Durum:**
          Mevcut yapıda, "Bugün Kargoda" veya "En Geç Yarın Kargoda" tanımlamalarının yapılabilmesi için deliveryOption objesi altındaki iki farklı alanın eş zamanlı gönderilmesi gerekmekteydi:

          Bugün Kargoda: deliveryDuration: 1 ve fastDeliveryType: "SAME_DAY_SHIPPING"
          En Geç Yarın Kargoda: deliveryDuration: 1 ve fastDeliveryType: "FAST_DELIVERY"

          **Yeni Durum (17 Ağustos İtibari ile):**
          Yeni yapıyla birlikte fastDeliveryType alanına olan bağımlılık kaldırılmış olup işlemler yalnızca deliveryDuration parametresi üzerinden yönetilecektir. fastDeliveryType alanı için ekstra bir değer gönderilmesine gerek kalmayacaktır.

          Bugün Kargoda: deliveryDuration: 0
          En Geç Yarın Kargoda: deliveryDuration: 1

          **Geçiş Dönemi ve Otomatik Setleme İşlemi:**
          Mevcut ürünlerinizin etkilenmemesi ve entegrasyon süreçlerinizin aksamaması adına otomatik veri aktarımı sağlanacaktır:

          Bugün Kargoda ve En Geç Yarın Kargoda ürünlerinizin entegrasyon sistemlerinizdeki isteklerini yeni parametre yapısına göre güncellemenizi rica ederiz. Eylül ayı sonu itibariyle tüm tanımların bu yapıya uygun şekilde gönderilmesi gerekecektir.
          Daha önceden tanımlanmış "Bugün Kargoda" ve "En Geç Yarın Kargoda" etiketli ürünleriniz için herhangi bir manuel işlem veya güncelleme yapmanıza gerek yoktur.
          Sistemde önceden deliveryDuration: 1 ve fastDeliveryType: "SAME_DAY_SHIPPING" olarak kayıtlı olan tüm ürünler, yeni yapıya geçişle birlikte Eylül sonu itibari ile otomatik olarak deliveryDuration: 0 olarak güncellenecektir.

          **Etkilenen servisler aşağıdaki gibidir:**
          Ürün Aktarma V1: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts)
          Ürün Bilgisi Güncelleme V1: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-bilgisi-g%C3%BCncelleme-updateproduct](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-bilgisi-g%C3%BCncelleme-updateproduct)
          Toplu İşlem Kontrolü V1: [https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult)
          Ürün Filtreleme V1: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-filterproducts](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-filterproducts)
          Ürün Yaratma V2: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-v2)
          Onaysız Ürün Güncelleme V2: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onays%C4%B1z-%C3%BCr%C3%BCn-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onays%C4%B1z-%C3%BCr%C3%BCn-v2)
          Onaylı Ürün Güncelleme - Teslimat Bilgisi Güncelleme V2: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)
          Toplu İşlem Kontrolü V2: [https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1)
          Onaysız Ürün Filtreleme V2: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onays%C4%B1z-%C3%BCr%C3%BCn-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onays%C4%B1z-%C3%BCr%C3%BCn-v2)
          Onaylı Ürün Filtreleme V2: [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Trendyol Luxe Platformu ve API Güncellemeleri Hakkında" icon="fa-undo">
            <h6 align="right"> 31.07.2026 </h6>

          Değerli İş Ortağımız,

          Lüks segmentteki ürünleri daha güçlü ve özelleştirilmiş bir alışveriş deneyimiyle müşterilerle buluşturacak olan Trendyol Luxe Platformu çok yakında yayına giriyor!

          Satıcılarımızın bu yeni platformda ürünlerini sorunsuz bir şekilde listeleyebilmeleri ve sipariş/iade süreçlerini yönetebilmeleri için API servislerimizde bazı teknik geliştirmeler yapılmıştır. Entegrasyon sistemlerinizi bu değişikliklere uygun şekilde güncellemeniz önem taşımaktadır.
          Yapılan geliştirmelerin detayları aşağıda yer almaktadır:

          **1. Ürün Servisleri Geliştirmeleri (Product API)**
          Ürün servislerine satış kanallarını tanımlayabilmeniz için channels desteği eklenmiştir. Geçerli kanal değerleri CORE ve LUXE'dür.

          **Varsayılan Davranış:** İstekte channels alanı gönderilmezse ürün yayında olduğu kanal(lar)daki kayıtlar için isteği kabul eder. Ürün hem CORE hem LUXE kanalda yayında ise ve herhangi bir kanaldaki ürün yayına kapatılmak istenirse, istek sadece yayında olması istenen kanalın değeri ile yapılmalıdır.

          **Kısıtlama:** Bir üründe LUXE kanalının kullanılabilmesi için ilgili markanın Luxe Marka statüsünde olması  ve satıcının da LUXE kategorisi için tanımlanmış olması gerekmektedir.

          **Kapsam:** Bu güncellemeler yalnızca onaylı ürün akışlarını (TR storefront) kapsamaktadır. Onaysız ürün oluşturma/güncelleme endpoint'lerinde channels kapsam dışıdır.

          **Değişen Endpoint'ler ve Kullanım Detayları:**

          **Marka Listesi:**
          [https://developers.trendyol.com/docs/trendyol-marka-listesi-getbrands-1](https://developers.trendyol.com/docs/trendyol-marka-listesi-getbrands-1)
          Yanıta LUXE (boolean) alanı eklenmiştir. Markanın lüks kanal kullanımına uygun olup olmadığını bu alandan kontrol edebilirsiniz ("LUXE": true).

          **Onaylı Ürün Filtreleme v2:**
          [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)
          Yanıt içerisindeki variants\[] dizisine channels alanı eklenmiştir (Örn: "channels": \["CORE", "LUXE"]).

          **Ürün Filtreleme v1:**
          [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-filterproducts](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-filterproducts)
          Yanıt içerisindeki content\[] alanına "channels": \["CORE", "LUXURY"] eklenmiştir.

          **Ürün Güncelleme v1:**
          [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-bilgisi-g%C3%BCncelleme-updateproduct](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-bilgisi-g%C3%BCncelleme-updateproduct)
          İstek body'sinde items\[] altına "channels": \["CORE", "LUXURY"] alanı eklenmiştir.

          **Onaylı Ürün Varyant Güncelleme v2:**<br />[https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)
          İstek body'sinde items\[] altına "channels": \["CORE", "LUXURY"] alanı eklenmiştir.

          **channels Alanı Kuralları:**
          \["CORE"]: Sadece standart platform
          \["LUXE"]: Sadece Trendyol Luxe (Luxe marka kontrolü yapılır)
          \["CORE", "LUXE"]: Her iki kanal
          \[] (Boş array): Geçersizdir, sistem hata döner.
          Alan gönderilmezse mevcut kanal bilgisi değiştirilmez.

          **2. Sipariş ve İade Servisleri Geliştirmeleri (Order-Return API)**
          LUXE kanaldan gelen sipariş ve iadeleri ayırt edebilmeniz için sipariş paketlerini çekme ve iadeleri çekme servisleri ve webhook modele channelId alanı eklenmiştir.
          channelId değeri 25 olan sipariş ve iadeler Trendyol Luxe platformuna aittir. channelId değeri 1 olan sipariş ve iadeler standart CORE kanalına aittir.
          Sistemlerinizde sipariş ayrıştırma ve etiketleme mantıklarını kurgularken bu ID değerini baz alabilirsiniz.

          **Sipariş servisleri:**
          [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages)
          [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme)

          **Webhook model:**
          [https://developers.trendyol.com/docs/webhook-model](https://developers.trendyol.com/docs/webhook-model)

          **İade servisi:**
          [https://developers.trendyol.com/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims](https://developers.trendyol.com/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Yeni Sipariş Entegrasyon Servis Endpointi " icon="fa-undo">
            <h6 align="right"> 30.07.2026 </h6>

          Değerli İş Ortağımız,

          Aşağıdaki order endpoint servisleri 15 Ekim 2026 tarihi itibari ile kullanım dışı olacaktır. 15 Ekim 2026 tarihine kadar aşağıdaki servislere yapılan isteklerde günde 3 kere 10'ar dakika boyunca servisten 426 hata kodu dönecektir.

          [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders)

          Bu tarihe kadar aşağıdaki Order V2 endpoint servislerine geçiş yapmanız gerekmektedir.
          Order V2 endpoint servisleri ile maksimum erişilebilir kayıt sayısı 10.000   (maxQueryWindowResult) ile sınırlandırılacaktır.

          [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders)

          Dokuman linki:

          [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Yeni Ürün Entegrasyon Servisleri Hakkında" icon="fa-undo">
            <h6 align="right"> 21.07.2026 </h6>

          Değerli İş Ortağımız,

          Sizlere daha verimli ve optimize edilmiş bir operasyonel deneyim sunmak amacıyla, ürün entegrasyon servislerimizde önemli bir yapısal güncellemeye gidiyoruz.

          Yapılan Değişikliğin Kapsamı

          Mevcut barkod bazlı yapıdan, daha esnek ve kapsayıcı olan içerik (content) bazlı yapıya geçiş yapıyoruz. Bu değişiklikle birlikte, Seller Center ile entegrasyon servislerimiz arasındaki veri modeli uyumunu tam hale getirerek süreçlerinizi standardize etmeyi hedefliyoruz.

          Geçiş Süreci ve Takvim

          Yeni Servislerin Erişimi: Yeni nesil servislerimiz (v2) Şubat ayından itibaren kullanıma açılmıştır.

          Eski Servislerin Kapatılması: Mevcut (eski) servislerimiz 15 Eylül 2026 tarihine kadar desteklenmeye devam edecektir.

          15 Eylül 2026 tarihine kadar eski servislere yapılan istekler için gün içinde 3 kez 15 dakika boyunca aşağıdaki hata mesajı dönecektir:

          "This endpoint is temporarily unavailable due to a scheduled brownout. Please refer to the current integration documentation to migrate your service to Product v2."

          Aksiyon Beklentisi:

          Entegrasyonlarınızda herhangi bir kesinti yaşamamanız adına, belirtilen tarihe kadar geliştirme süreçlerinizi tamamlayarak yeni servislere geçiş yapmanızı önemle rica ederiz.

          Yeni Eklenen Servis Listesi (v2)

          Aşağıdaki servislerin güncel versiyonlarını dokümantasyonlarımız üzerinden inceleyebilirsiniz:

          [https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-v2-api-endpoint](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-v2-api-endpoint)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisinde Servis Limiti Güncellemesi" icon="fa-undo">
            <h6 align="right"> 2.06.2026 </h6>

          Değerli İş Ortağımız,

          Mevcutta kullanılan getShipmentPackage servisinin limitleri 8 Haziran 2026 itibariyle değiştirilecektir. Servise yapmış olduğunuz isteklerinizde yeni limitlere uygun istekle gelmeniz gerekmektedir aksi takdirde servisten 429 hatası alınacaktır. Mevcut getShipmentPackage servisinin maksimum erişilebilir kayıt sayısı: 10.000 olacaktır.

          Servis Limitleri:

          [https://developers.trendyol.com/docs/1-servis-limitleri#/versions](https://developers.trendyol.com/docs/1-servis-limitleri#/versions)

          Büyük veri tarama ihtiyacı için "getShipmentPackagesStream" servisini kullanabilirsiniz. getShipmentPackagesStream uç noktası (endpoint), sipariş paketlerini imleç tabanlı akış (cursor-based streaming) yöntemiyle çekmenize olanak tanır. Bu uç nokta; büyük veri tarama (full scan), periyodik senkronizasyon (polling/cron) ve tüm siparişlerin dışa aktarılması (export) işlemleri için tasarlanmıştır. Yanıt (response) yapısı aynı kalmakla birlikte, imleç tabanlı sayfalama mekanizmasına geçiş yapılması nedeniyle artık totalElements, totalPages, page gibi sayfalama ile ilgili alanlar dönmeyecektir.

          Bu servisten son 3 aylık siparişlerinizi çekebilirsiniz.

          Detaylara aşağıdaki link aracılığıyla ulaşabilirsiniz:

          [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme#/versions](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-ak%C4%B1%C5%9F-ile-%C3%A7ekme#/versions)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Menşei (Origin) Bilgisi Tanımlama Süreçlerindeki Değişiklik Hakkında (GEÇERSİZ DUYURU)" icon="fa-undo">
            <h6 align="right"> 13.05.2026 </h6>

          **ÖNEMLİ HATIRLATMA: 17 Ağustos 2026 tarihinde bu geliştirme için güncel duyuru paylaşılmıştır. Bu duyurudaki tarihler güncellenmiştir. 17 Ağustos 2026 tarihindeki duyuruyu geçerli kabul ediniz.**

          Değerli İş Ortağımız,

          Trendyol olarak, veri yapılarımızı modernize etmek ve entegrasyon süreçlerinizi daha verimli hale getirmek adına ürün servislerimizde önemli bir güncelleme yapıyoruz.
          Bugüne kadar ürün servislerimizde "Attribute" (Özellik) altında alınan Menşei bilgisini, artık stockCode veya barcode gibi bağımsız, standart bir alan (field) olarak yöneteceğiz.

          **Geçiş Süreci Nasıl İşleyecek?**
          Sizlerin bu değişimden olumsuz etkilenmemesi adına süreci iki aşamalı bir "yumuşak geçiş" (soft transition) modeliyle kurguladık:

          **1. Hibrit Dönem (Geçiş Dönemi):**

          Ürün payload'una origin adında yeni bir alan eklenmiştir.
          Bu dönemde menşei bilgisi hem mevcut attributes altından hem de yeni origin alanı üzerinden gönderilebilecektir.
          Yeni alan şu an için opsiyonel (optional) statüsündedir. origin alanı 30 Haziran 2026 tarihinde zorunlu olacaktır bu yüzden entegrasyonlarınızı bu yeni alana göre güncellemenizi önemle rica ederiz. Gönderebileceğiniz Menşei Değerleri Listesine entegrasyon dokumanımız üzerinden ulaşabilirsiniz.

          **2. Tam Geçiş ve Zorunluluk Dönemi:**

          Belirlenen deadline sonunda origin alanı zorunlu (required) hale gelecektir.
          Attribute altından menşei bilgisi gönderimi kademeli olarak desteğini yitirecektir.

          **Veri Taşıma (Migration) Bilgilendirmesi**

          Geçmişe dönük verileriniz için endişelenmenize gerek yok. Deadline geldiğinde, attributes içerisinde yer alan tüm mevcut menşei bilgileri, Trendyol ekipleri tarafından otomatik olarak yeni origin alanına taşınacaktır.

          **Entegrasyon dokumanımız üzerinden ilgili servislere eklenen yeni alanı kontrol edebilirsiniz:**

          Ürün Aktarma V1 (createProducts)

          Ürün Bilgisi Güncelleme V1 (updateProduct)

          Toplu İşlem Kontrolü (getBatchRequestResult)

          Ürün Filtreleme V1 (filterProducts)

          Ürün Yaratma v2

          Ürün Güncelleme - Onaysız Ürün v2

          Ürün Güncelleme - Onaylı Ürün v2 (Varyant)

          Toplu İşlem Kontrolü (getBatchRequestResult)

          Ürün Filtreleme - Onaysız Ürün v2

          Ürün Filtreleme - Onaylı Ürün v2

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisinde Yaşanan Geçici Gecikme Hakkında" icon="fa-undo">
            <h6 align="right"> 22.04.2026 </h6>

          Değerli İş Ortağımız,

          21 nisan 16:00 - 22 nisan 13:40 aralığında entegrasyondan sipariş paketlerini çekmeye çalışan satıcıların bir kısmı servisten paketleri çekerken hata aldılar. Sorun 22 Nisan 13.41 itibariyle çözülmüştür. Bu aralıktaki siparişlerinizi entegrasyon servisleri üzerinden kontrol etmenizi tavsiye ederiz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Trendyol Yurt Dışı Aracılığı Modeli Hakkında" icon="fa-undo">
            <h6 align="right"> 20.04.2026 </h6>

          Değerli İş Ortağımız,

          Değişen ülke gümrük ve vergi politikaları sebebiyle, satıcılarımızın kârlılığını ve satış hacmini koruyarak yurt dışı satış operasyonuna devam edebilmesi adına **Romanya’da Trendyol Yurt Dışı Aracılığı modelini** hayata geçiriyoruz.

          Yeni iş modelimiz **ilk aşamada sadece Romanya** için geçerli olacaktır.
          Bu model kapsamında, müşterilerden sipariş geldikçe, sipariş bazında satıcılardan **Trendyol’a fatura kesilmesi beklenecek** ve **siparişlerin gümrük işlemleri ve ihracat süreçleri Trendyol tarafından gerçekleştirilecektir**.
          Bu modelde Türkiye Pazaryeri ürün listesinde olan **ürünlerin, Trendyol Satıcı Paneli'nden Trendyol Yurt Dışı Aracılığı'na açılması gerekmektedir.**

          **Entegrasyon servislerindeki değişiklikler aşağıdaki gibi olacaktır:**

          1. **Sipariş paketlerini çekme servisi ve webhook modele "is4P" field'ı eklenmiştir**; ""Trendyol Yurt Dışı Aracılığı"" için olan siparişler için **"is4P" alanı true olarak** dönecektir. Bu alanın ilgili servislere eklenmesi ve kontrol edilmesi gerekmektedir. "Trendyol Yurt Dışı Aracılığı" için olan siparişler için **fatura adresi ""DSM Grup Danışmanlık""ın bilgileri** ile dönecektir. **Fatura, "DSM Grup Danışmanlık"ın bilgileri ile oluşturulmalıdır.**
          2. **AB Ürün Etiketi & Kargo Etiketi isimli yeni bir servis** kullanılacak olup, Trendyol Yurt Dışı Aracılığı siparişleri için bu servisten AB ürün etiketi alınması gerekmektedir.

          - **Trendyol öder modeli** ile çalışan satıcıların **TEX veya Aras kargo gönderileri için Kargo Etiketi ve AB Ürün Etiketini beraber dönecektir**.

          - **Satıcı öder modeli** ile çalışan satıcılar ve **Trendyol öder ile çalışan satıcıların TEX veya Aras harici gönderileri için servisten yalnızca AB Ürün Etiketi dönecektir**.

          - Yeni servis, stage ortamda kullanıma hazırdır,  production ortam geliştirmeleri bu hafta içinde tamamlanacak olup, duyurusu ayrıca yapılacaktır.

          3. **İade edilen siparişleri çekme servisinde** **customerFirstName** ve **customerLastName** sabit şekilde **""DSM Grup Danışmanlık""ın bilgileri** ile dönecektir.

          Bölge gereklilikleri ve kısıtları göz önünde bulundurularak yapılan değerlendirmeler sonucu uygun bulunan satıcılarımıza, **yeni model 12 Mayıs 2026 itibari ile açılmaya başlayacaktır**. Belirtilen tarihe kadar geliştirme süreçlerinizi tamamlayarak yeni servislere geçiş yapmanızı önemle rica ederiz.

          Trendyol Yurt Dışı Aracılığı İş Modeli ile ilgili detaylar ve etkilenen servisleri aşağıda bulabilirsiniz:

          1. [https://developers.trendyol.com/docs/pazaryeri-i%CC%87%C5%9F-modelleri-1](https://developers.trendyol.com/docs/pazaryeri-i%CC%87%C5%9F-modelleri-1)

          2. [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages)

          3. [https://developers.trendyol.com/docs/webhook-model](https://developers.trendyol.com/docs/webhook-model)

          4. [https://developers.trendyol.com/docs/ab-%C3%BCr%C3%BCn-etiketi-ile-birlikte-ortak-etiket-barkodun-al%C4%B1nmas%C4%B1](https://developers.trendyol.com/docs/ab-%C3%BCr%C3%BCn-etiketi-ile-birlikte-ortak-etiket-barkodun-al%C4%B1nmas%C4%B1)

          5. [https://developers.trendyol.com/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims](https://developers.trendyol.com/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Yeni Ürün Video Ekleme Servisi Hakkında" icon="fa-undo">
            <h6 align="right"> 08.04.2026 </h6>

          Değerli İş Ortağımız,

          Entegrasyon servislerimize, ürünlerinize video ekleyebileceğiniz yeni bir servis ekledik.
          Entegrasyon servisleri üzerinden ürünlerinize video içerik ekleyebilirsiniz.

          - **Video Yükleme Servisi** ile ürünlerinize video ekleyebilirsiniz
          - **Video Listeleme Servisi** ile yüklenen videoların onay durumlarını takip edebilir ve listeleybilirsiniz

          [https://developers.trendyol.com/docs/seller-integration-video-api](https://developers.trendyol.com/docs/seller-integration-video-api)

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Ürün Süreçleri Altyapı Çalışması" icon="fa-undo">
            <h6 align="right"> 06.04.2026 </h6>

          Değerli İş Ortağımız,

          Altyapı geçişi nedeniyle yeni ürün yaratma, onaysız ürün güncelleme, onaysız ürün silme akışlarındaki tüm işlemler gecikmeli olarak yansıtılacaktır. Bir veri kaybı olması beklenmiyor fakat işlemler geç yansıyacağından ekranda ve response'larda işlem tamamlanmamış gibi görünecek.

          Operasyonun başlangıç tarihi: 7 Nisan 23:00

          Operasyonunun bitiş tarihi: 8 Nisan 03.00

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Trendyol Sipariş Paketlerini Çekme Entegrasyon Servisi Hakkında" icon="fa-undo">
          <h6 align="right"> 02.04.2026 </h6>

          Değerli İş Ortağımız

          Sipariş paketlerini çekme servisi ve webhook modelinin response'larına yeni alanlar ve var olan bazı alanların yeni isimlendirilmiş halleri geçtiğimiz aylarda eklenmişti. Ek olarak bazı alanlar kaldırılmıştı. İsimlendirme değişikliği yapılan alanların eski halleri 2 Nisan 2026'da stage ortamdan 6 Nisan 2026'da da production ortamın response'undan kaldırılacaktır. Herhangi bir problemle karşılaşmamak için gerekli düzenlemeleri yapmanızı ivedilikle rica ederiz.

          **Yeni eklenen alanlar:**

          - “cancelledBy”:

          - “cancelReason”:

          - “cancelReasonCode”:

          - "lineTotalDiscount" ("lineSellerDiscount"+ "lineTyDiscount")

          - "packageTotalDiscount": ("packageSellerDiscount"+ "packageTyDiscount")

            **İsimlendirme değişikliği yapılan alanlar / Fields where naming changes were made:**

          - "merchantSku": > "stockCode"

          - "merchantId": > "sellerId"

          - root/"id": > "shipmentPackageId"

          - line/"id": > "lineId"

          - line/"amount": > "lineGrossAmount"

          - line/"discount": > "lineSellerDiscount":

          - line/"tyDiscount": > "lineTyDiscount"

          - line/ "lineItemDiscount": > "lineItemSellerDiscount"

          - line/"price": > "lineUnitPrice"

          - root/"grossAmount": > "packageGrossAmount"

          - "totalDiscount": > "packageSellerDiscount"

          - "totalTyDiscount": > "packageTyDiscount"

          - "totalPrice": > "packageTotalPrice"

          - "productCode": > "contentId"

          - "vatBaseAmount": > "vatRate"

            **Kaldıralacak alanlar:**

          - "sku":

          - "scheduledDeliveryStoreId":

          - "agreedDeliveryDateExtendible":

          - "extendedAgreedDeliveryDate":

          - "agreedDeliveryExtensionEndDate":

          - "agreedDeliveryExtensionStartDate":

          - "groupDeal":

            **Entegrasyon servisimize aşağıdan ulaşabilirsiniz;**

          [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages#/versions](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages#/versions)

          [https://developers.trendyol.com/update/docs/webhook-model#/versions](https://developers.trendyol.com/update/docs/webhook-model#/versions)

          Saygılarımızla,

          Trendyol Ekibi
        </Accordion>

        <Accordion title="Stok Fiyat Servisi Güncellemelerinde Yaşanan Geçici Gecikme Hakkında " icon="fa-undo">
            <h6 align="right"> 18.03.2026 </h6>

          Değerli İş Ortağımız,

          Stok-fiyat servisine yapılan güncelleme isteklerinde geçici bir gecikme yaşanmaktadır. Teknik ekibimiz durumun en kısa sürede normale dönmesi için çalışmalarını sürdürmektedir. Bu durumun geçici bir süreç olduğunu belirtir, anlayışınız için teşekkür ederiz.

          Sorunun başlandığı tarih 19 Mart 21:15

          Sorunun çözüldüğü tarih 19 Mart 23:42

          Saygılarımızla,

          Trendyol

          Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Finans Servislerinde Platform Hizmet Bedeli Kayıtlarının Filtrelenebilmesi" icon="fa-undo">
            <h6 align="right"> 18.03.2026 </h6>

          Değerli İş Ortağımız,

          **Cari Hesap Ekstresi Entegrasyonu Servislerimizde** otherfinancials servisinde Platform Hizmet Bedeli faturalarının filtrelenebilmesi için "transactionSubType" olarak yeni bir filtre parametresi eklenmiştir.
          Platform hizmet bedeli kayıtlarını filtrelemek için "PlatformServiceFee" değeri kullanılabilir. Bu parametreyi kullanmak için transactionType=DeductionInvoices ya da transactionTypes içinde DeductionInvoices olacak şekilde istek yapılmalıdır.

          İlgili servis ve parametre detaylarına aşağıdan ulaşabilirsiniz:

          [https://developers.trendyol.com/docs/cari-hesap-ekstresi-entegrasyonu](https://developers.trendyol.com/docs/cari-hesap-ekstresi-entegrasyonu)

          Saygılarımızla,

          Trendyol

          Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Soru & Cevap Entegrasyonu Servis Limitleri" icon="fa-undo">
            <h6 align="right"> 17.03.2026 </h6>

          Değerli İş Ortağımız,

          **Soru & Cevap Entegrasyonu Servislerimize** sistem sağlığı açısından **27 Mart 2026** tarihi itibari ile **servis limiti eklenecektir.** Aşağıdaki servis limitlerini dikkate alarak istek yapabilirsiniz:

          - **Müşteri Sorularını Çekme Servisi:** 1000 req/min
          - **Müşteri Sorularını Cevaplama Servisi:** 500 req/min

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketleri Servislerine Yeni Alan Eklenmesi ve Dijital Ürün Gönderimi Hakkında" icon="fa-undo">
            <h6 align="right"> 16.03.2026 </h6>

          Değerli İş Ortağımız,

          Sipariş paketlerini çekme servisimizde ve Webhook modelimizde, lines objesi altına "businessUnit" isimli yeni bir alan eklenmiştir. Bu alanda "Digital Goods" değerini alan siparişleriniz için entegrasyon süreçlerinizde aşağıdaki maddeleri dikkate almanızı rica ederiz:

          **Müşteri Bilgileri:** businessUnit alanı "Digital Goods" olan siparişlerde, müşteri telefon numarası bilgisi "null" olarak dönecektir.

          **Dijital Kod Gönderimi:** Alternatif Teslimat ile Gönderim servisi üzerinden ilettiğiniz dijital kod, Trendyol tarafından doğrudan müşteriye ulaştırılacaktır.

          **Dijital Ürün Olmayan Gönderilerde Hata Mesajı**: businessUnit alanı "Digital Goods" olmayan bir sipariş paketi için Alternatif Teslimat le Gönderim servisi üzerinden dijital kod gönderimi yapılmak istendiği durumda; sistem tarafından "digital.good.business.unit.not.valid" hatası dönecektir.

          **Etkilenen servisler:**

          - Sipariş Paketlerini Çekme Servisi

          - Webhook Model

          - Alternatif Teslimat İle Dijital Ürün Gönderimi

          Süreçlerinizde aksama yaşanmaması adına gerekli güncellemeleri yapmanızı önemle rica ederiz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketleri Statü Güncellemelerinde Yaşanan Geçici Gecikme Hakkında" icon="fa-undo">
            <h6 align="right"> 09.03.2026 </h6>

          Değerli İş Ortağımız,

          Sipariş paketlerinin statü güncellemelerinde geçici bir gecikme yaşanmaktadır. Teknik ekibimiz durumun en kısa sürede normale dönmesi için çalışmalarını sürdürmektedir. Bu durumun geçici bir süreç olduğunu belirtir, anlayışınız için teşekkür ederiz.

          \*\*Sorun 10 Mart 11:30 itibariyle çözülmüştür

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisi Hakkında" icon="fa-undo">
            <h6 align="right"> 05.03.2026 </h6>

          Değerli İş Ortağımız,

          Sizlere daha hızlı, stabil ve kesintisiz bir altyapı sunabilmek adına sistem performansımızı sürekli olarak iyileştiriyoruz. Bu kapsamda, Sipariş Paketlerini Çekme servisimizde önemli bir güncelleme yapacağımızı bildirmek isteriz.
          Sistem kaynaklarımızı daha verimli kullanarak API yanıt sürelerimizi hızlandırmak amacıyla, geçmişe dönük sipariş verisi sorgulama limitlerimizi güncelliyoruz. Daha önce 3 aylık geçmiş sipariş verilerini çekmenize olanak tanıyan servisimiz, **5 Mart 2026** itibarıyla **maksimum 1 aylık (30 gün)** veriyi kapsayacak şekilde optimize edilecektir.

          **Bu değişiklik sizin için ne anlama geliyor?**

          **5 Mart 2026** gününden itibaren servis üzerinden yalnızca son 1 aya ait sipariş paketlerinizi çekebileceksiniz.
          Eğer 1 aydan daha eski (son 3 aya ait) sipariş verilerinize ihtiyacınız varsa, Trendyol Satıcı Paneli üzerinden siparişlerinize ulaşabilirsiniz
          Entegrasyonlarınızda, otomatik görevlerinizde veya raporlama süreçlerinizde hata almamak adına sistemlerinizi maksimum 1 aylık sorgu yapacak şekilde güncellemenizi rica ederiz.

          Bu sürecin işleyişinize olan etkisini en aza indirmek için gereken düzenlemeleri zamanında yapmanızı önemle rica ederiz. Anlayışınız ve iş birliğiniz için teşekkür ederiz.
          Herhangi bir sorunuz veya teknik desteğe ihtiyacınız olursa, bizimle her zaman iletişime geçebilirsiniz.

          Saygılarımızla,

          Trendyol Entegrasyon Ekibi
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisi Hakkında" icon="fa-undo">
            <h6 align="right"> 25.02.2026 </h6>

          Değerli İş Ortağımız,

          Sipariş paketlerini çekme servisi ve webhook modelinin response'larına Teslimat Numarası alanı eklenmiştir.

          Yeni eklenen alan: shipmentNumber

          Entegrasyon servisimize aşağıdan ulaşabilirsiniz;

          [https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages](https://developers.trendyol.com/docs/sipari%C5%9F-paketlerini-%C3%A7ekme-getshipmentpackages)

          İş birliğiniz için teşekkür eder, iyi çalışmalar dileriz.

          Saygılarımızla,

          Trendyol Ekibi
        </Accordion>

        <Accordion title="Yeni Ürün Entegrasyon Servisleri Hakkında" icon="fa-undo">
            <h6 align="right"> 10.02.2026 </h6>

          Değerli İş Ortağımız,

          Sizlere daha verimli ve optimize edilmiş bir operasyonel deneyim sunmak amacıyla, ürün entegrasyon servislerimizde önemli bir yapısal güncellemeye gidiyoruz.

          **Yapılan Değişikliğin Kapsamı:**
          Mevcut barkod bazlı yapıdan, daha esnek ve kapsayıcı olan içerik (content) bazlı yapıya geçiş yapıyoruz. Bu değişiklikle birlikte, Seller Center ile entegrasyon servislerimiz arasındaki veri modeli uyumunu tam hale getirerek süreçlerinizi standardize etmeyi hedefliyoruz.

          **Geçiş Süreci ve Takvim:**
          **Yeni Servislerin Erişimi:** Yeni nesil servislerimiz (v2) bugünden itibaren kullanıma açılmıştır.

          **Eski Servislerin Kapatılması:**
          Mevcut (eski) servislerimiz 10 Ağustos 2026 tarihine kadar desteklenmeye devam edecektir.

          **Aksiyon Beklentisi:**
          Entegrasyonlarınızda herhangi bir kesinti yaşamamanız adına, belirtilen tarihe kadar geliştirme süreçlerinizi tamamlayarak yeni servislere geçiş yapmanızı önemle rica ederiz.

          **Yeni Eklenen Servis Listesi (v2:)**
          Aşağıdaki servislerin güncel versiyonlarını dokümantasyonlarımız üzerinden inceleyebilirsiniz:

          - Ürün Yaratma v2
          - Ürün Filtreleme - Temel Bilgiler v2
          - Ürün Filtreleme - Onaysız Ürün v2
          - Ürün Filtreleme - Onaylı Ürün v2
          - Ürün Güncelleme - Onaysız Ürün v2
          - Ürün Güncelleme - Onaylı Ürün Content Güncelleme v2
          - Ürün Güncelleme - Onaylı Ürün Varyant Güncelleme v2
          - Ürün Güncelleme - Onaylı Ürün Teslimat Bilgisi Güncelleme v2
          - Kategori Özellik Listesi v2
          - Kategori Özellik Değerleri Listesi v2

          İş birliğiniz için teşekkür eder, iyi çalışmalar dileriz.

          Saygılarımızla,
          Trendyol Ekibi
        </Accordion>

        <Accordion title="Muhasebe ve Finans Entegrasyon Servisleri Hakkında" icon="fa-undo">
            <h6 align="right"> 30.12.2025 </h6>

          Cari hesap ekstresi entegrasyonu kapsamındaki settlements ve otherfinancials servislerimize iki yeni filtre parametresi eklenmiştir:

          1. transactionTypes: Tek bir istekte birden fazla işlem türüne ait muhasebe kayıtlarını listeleyebilirsiniz.
          2. paymentDate: Muhasebe kayıtlarını, "ödemeye girebileceği en erken tarih" filtresiyle sorgulayabilirsiniz.

          Entegrasyon servisimize aşağıdan ulaşabilirsiniz:

          [https://developers.trendyol.com/docs/cari-hesap-ekstresi-entegrasyonu](https://developers.trendyol.com/docs/cari-hesap-ekstresi-entegrasyonu)
        </Accordion>

        <Accordion title="Trendyol Sipariş Paketlerini Çekme Servisi Hakkında" icon="fa-info-circle">
            <h6 align="right"> 08.12.2025 </h6>

          Sipariş paketlerini çekme servisi ve webhook modelinin response'larına yeni alanlar ve var olan bazı alanların yeni isimlendirilmiş halleri eklenmiştir. Ek olarak bazı alanlar kaldırılmıştır. İsimlendirme değişikliği yapılan alanların eski halleri 1 ay sonra response'dan kaldırılacaktır. Herhangi bir problemle karşılaşmamak için gerekli düzenlemeleri yapmanızı ivedilikle rica ederiz.

          Newly added fields:

          - "cancelledBy":
          - "cancelReason":
          - "cancelReasonCode":
          - "lineTotalDiscount" ("lineSellerDiscount"+ "lineTyDiscount")
          - "packageTotalDiscount": ("packageSellerDiscount"+ "packageTyDiscount")

          Fields where naming changes were made:

          - "merchantSku": > "stockCode"
          - "merchantId": > "sellerId"
          - root/"id": > "shipmentPackageId"
          - line/"id": > "lineId"
          - line/"amount": > "lineGrossAmount"
          - line/"discount": > "lineSellerDiscount":
          - line/"tyDiscount": > "lineTyDiscount"
          - line/ "lineItemDiscount": > "lineItemSellerDiscount"
          - line/"price": > "lineUnitPrice"
          - root/"grossAmount": > "packageGrossAmount"
          - "totalDiscount": > "packageSellerDiscount"
          - "totalTyDiscount": > "packageTyDiscount"
          - "totalPrice": > "packageTotalPrice"
          - "productCode": > "contentId"
          - "vatBaseAmount": > "vatRate"

          Fields to remove:

          - "sku":
          - "scheduledDeliveryStoreId":
          - "agreedDeliveryDateExtendible":
          - "extendedAgreedDeliveryDate":
          - "agreedDeliveryExtensionEndDate":
          - "agreedDeliveryExtensionStartDate":
          - "groupDeal":
        </Accordion>

        <Accordion title="Trendyol İade Paketlerini Çekme Servisi Hakkında" icon="fa-undo">
            <h6 align="right"> 08.12.2025 </h6>

          İade paketlerini çekme servisine var olan bazı alanların yeni isimlendirilmiş halleri eklenmiştir. İsimlendirme değişikliği yapılan alanların eski halleri 2 ay sonra response'dan kaldırılacaktır. Herhangi bir problemle karşılaşmamak için gerekli düzenlemeleri yapmanızı ivedilikle rica ederiz.

          Fields where naming changes were made:

          - content/"id": > "claimId"
          - "vatBaseAmount": > "vatRate"
        </Accordion>

        <Accordion title="Trendyol Sipariş Paketlerini Çekme Servisi Hakkında" icon="fa-exclamation-triangle">
            <h6 align="right"> 29.08.2025 </h6>

          Sipariş paketlerini çekme servisimiz üzerinde yaşanan bir incident sebebi ile, servisi birden fazla parametre ve "Cancelled" statusu ile birlikte kullanıyorsanız, (örneğin Cancelled ve Created statulerini aynı anda çekmeye çalışıyorsanız) "shipmentPackageStatus" alanı servis responsunda yer almamıştır. Buradaki sorun 28 Ağustos 2025 tarihinde başlamış olup, 29 Ağustos 2025 Saat 13.00 itibari ile çözülmüştür. Bu doğrultuda ilgili aralıktaki siparişlerinizi kontrol etmenizi rica ederiz.
        </Accordion>

        <Accordion title="Yeni Servis Geliştirmesi" icon="fa-plus-circle">
            <h6 align="right"> 31.07.2025 </h6>

          Değerli geri bildirimlerinize doğrudan yanıt olarak geliştirilen yeni bir özelliğin lansmanını duyurmaktan mutluluk duyuyoruz. Ürün Arşivleme API hizmeti artık yayında ve kullanılabilir. Bu hizmet, Trendyol sisteminde ürünlerinizi arşivlemek veya arşivden çıkarmak için kullanılır. Hem tekli hem de çoklu ürün arşivleme işlemlerini destekler.
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme ve Webhook Servisleri Response'ına Eklenen Yeni Alanlar Hk." icon="fa-code-branch">
            <h6 align="right"> 24.06.2025 </h6>

          Trendyol OMS modeline (getShipmentPackages ve Webhook servislerine) yeni "createdBy" ve "originPackageIds" alanları eklenmiştir.

          "createdBy" alanı paketin nasıl oluştuğunu belirtiyor:

          - order-creation: gelen siparişte direkt paketin yaratıldığı,
          - cancel: kısmi iptal sonrası paketin yaratıldığı,
          - split: paket bölmeye istinaden paketin yaratıldığı,
          - transfer: paketin muadil ürün süreci sonrasında yaratıldığı

          "originPackageIds" alanı cancel veya split sonrası dolu geliyor, bu işlemler sonrası ilk paketin packageid'sini veriyor.
        </Accordion>

        <Accordion title="Base URL Değişikliği Hakkında" icon="fa-network-wired">
            <h6 align="right"> 26.05.2025 </h6>

          Değerli İş Ortağımız, Servis standartlarımızı sağlamak ve servislerimizin performansını arttırmak amacı ile entegrasyon servislerimizde base url değişikliği gerçekleştirilmiştir. Eski servisler 26 Mayıs sonu itibari ile kapatılmaya başlanmıştır. Eğer servis URL'lerinde düzenleme yapmadıysanız isteklerinizde hata ile karşılaşacaksınız. Süreçlerinizin aksamaması için en kısa süre içerisinde yeni servis endpointlerimizi servis bazlı kontrol etmenizi rica ederiz. [https://developers.trendyol.com](https://developers.trendyol.com)
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme ve Webhook Servisleri Response'ına Eklenen Yeni Alanlar Hk." icon="fa-map-marker-alt">
            <h6 align="right"> 22.05.2025 </h6>

          Trendyol OMS modeline (getShipmentPackages ve Webhook servislerine) yeni "latitude", "longitude" ve "cargoDeci" alanları 22.05.2025 tarihinde eklenmiştir. Detaylar için dökümanımızı kontrol edebilirsiniz.
        </Accordion>

        <Accordion title="Stock&Price Güncelleme Servisinin BatchRequestResult Response'u" icon="fa-sync-alt">
            <h6 align="right"> 09.05.2025 </h6>

          Stock\&Price Güncelleme Servisinin BatchRequestResult Response'unda güncelleme olmuştur. Yeni Response modeline Toplu İşlem Kontrolü sayfası üzerinden ulaşabilirsiniz.
        </Accordion>

        <Accordion title="Trendyol Aras Kargo Tedarikçi Öder Modeli Hakkında" icon="fa-shipping-fast">
            <h6 align="right"> 08.05.2025 </h6>

          12 Mayıs Pazartesi tarihi itibariyle Aras Kargo ile olan satıcı öder entegrasyonunda değişikliğe gitmekteyiz. Bu değişiklik ile birlikte, Kargo Takip Kodu Bildirme (updateTrackingNumber) servisimiz kullanıma kapatılacak olup, paketlerinizi sipariş paketlerini çekme servisimiz (getShipmentPackages) üzerinden dönen “cargoTrackingNumber” ile kargo firmasına teslim etmeniz gerekmektedir. 30 Haziran 2025 itibarıyla entegrasyon yapılarınızda değişikliğe gitmeniz gerekmektedir.
        </Accordion>

        <Accordion title="Trendyol Web Color Attribute Hakkında" icon="fa-palette">
            <h6 align="right"> 08.05.2025 </h6>

          Web color 348 attribute'u 5 Mayıs Pazartesi günü zorunlu hale getirilmişti. Kampanya döneminde sorun yaşanmaması adına bu attribute kampanya sonuna kadar optional olacak şekilde değiştirilmiştir. Kampanya sonrasında yeniden zorunlu hale getirilecektir. Ürün yükleme süreçlerinde sorun yaşamamanız adına kategori ağacını güncellemenizi rica ederiz.
        </Accordion>

        <Accordion title="Trendyol Entegrasyon Servisleri 'productCategoryId' ve 'laborCost' Alanları Hakkında" icon="fa-tag">
            <h6 align="right"> 11.04.2025 </h6>

          Sipariş paketlerini çekme servisimize ve webhook modelimize "productCategoryId" ve "laborCost" alanı eklenmiştir. Bu alanlar sipariş paketlerini çekme servisi içerisine "lines" alanı altına eklenecektir. Entegrasyon servisimize döküman üzerinden ulaşabilirsiniz.
        </Accordion>

        <Accordion title="Trendyol - API Health Check Hakkında" icon="fa-heartbeat">
            <h6 align="right"> 09.04.2025 </h6>

          Entegrasyon servislerimizin durumunu gerçek zamanlı takip edebileceğiniz API Health Check sayfamızı kullanıma sunduk. Servislerin çalışma durumunu ve genel sağlık durumunu takip edebilirsiniz. Adres: [https://developers.trendyol.com/api-status](https://developers.trendyol.com/api-status)
        </Accordion>

        <Accordion title="Trendyol - Tazmin Entegrasyon Servisi Hakkında" icon="fa-file-invoice-dollar">
            <h6 align="right"> 04.04.2025 </h6>

          Teslimat Entegrasyonu başlığı altına Tazmin Entegrasyon Servisi eklenmiştir. Bu servis ile kargo firması TEX olan sipariş paketleriniz için tazmin işlemlerinizi takip edebilirsiniz.
        </Accordion>

        <Accordion title="Trendyol - Ürün Denetim Yönetmeliği Yeni Eklenen Ürün Özellikleri Hakkında" icon="fa-gavel">
            <h6 align="right"> 28.03.2025 </h6>

          1 Nisan 2025 tarihinde yürürlüğe girecek olan yönetmelik kapsamında satışa sunduğunuz ürünlerin ilanlarında üretici bilgisi, ithalatçı bilgisi, kullanım talimatı ve CE uygunluk sembolü gibi bilgilerin eksiksiz olması gerekmektedir. İlgili özelliklere aşağıdaki attributeId değerleri ile erişilebilir:

          - attributeID: 1198 -> "Üretici Bilgisi"
          - attributeID: 1216 -> "İthalatçı/ Yetkili Temsilci"
          - attributeID: 1116 -> "Kullanım Talimatı/Uyarıları"
          - attributeID: 1210 -> "CE Uygunluk Sembolu"
        </Accordion>

        <Accordion title="Trendyol Muhasebe Ve Finans Entegrasyonu Hakkında" icon="fa-calculator">
            <h6 align="right"> 21.03.2025 </h6>

          Cari Hesap Ekstresi Entegrasyonu settlements ve otherFinancials servislerimize shipmentPackageId alanı eklenmiştir. Entegrasyon dökümanımız üzerinden kontrol edebilirsiniz.
        </Accordion>

        <Accordion title="Trendyol - 'identityNumber' Alanı Hakkında" icon="fa-id-card">
            <h6 align="right"> 18.03.2025 </h6>

          Sipariş paketlerini çekme servisimize ve webhook modelimize "identityNumber" alanı eklenecektir. İlgili alan “string” data tipinde olup, 21 Mart tarihinde eklenmesi planlanmaktadır. Bu alanın eklenmesi ile birlikte, "tcIdentityNumber" alanı 5 Mayıs itibari ile kaldırılacaktır.
        </Accordion>

        <Accordion title="Trendyol - Sipariş Faturaları Hakkında" icon="fa-file-pdf">
            <h6 align="right"> 17.03.2025 </h6>

          Sipariş faturalarının HTML formatında yüklenmesi sorunlara yol açabilmektedir. Faturalarınızı HTML harici formatlarda (PDF, JPEG, PNG, link) yüklemenizi öneririz. Güvenlik ve erişilebilirlik adına ilgili geliştirmeleri en kısa sürede yapmanızı beklemekteyiz.
        </Accordion>

        <Accordion title="Trendyol - İade Servisine Eklenen Statu Hk." icon="fa-shield-alt">
            <h6 align="right"> 14.03.2025 </h6>

          7 Nisan 2025 tarihi itibari ile, İade paketlerini çekme servisimize “WaitingFraudCheck” statusü eklenecektir. Fraud kontrolüne giren iadeler maksimum 9 saat içerisinde çözümlenecek olup, başarılı olanlar “Accepted”, sorunlu olanlar “Rejected” statusune geçecektir.
        </Accordion>

        <Accordion title="Ürün Denetim Yönetmeliği Yeni Eklenen Ürün Özellikleri Hakkında" icon="fa-balance-scale">
            <h6 align="right"> 05.03.2025 </h6>

          1 Nisan 2025 tarihinde yürürlüğe girecek yönetmelik hatırlatmasıdır. Güvenli ürün kapsamında ürün özelliklerinin eksiksiz doldurulması kritik önem taşımaktadır. Yönetmelik kapsamındaki yaptırımlar arasında satışın durdurulması ve para cezaları bulunmaktadır.
        </Accordion>

        <Accordion title="Trendyol Stage Ortam Entegrasyon Servisleri Hakkında" icon="fa-vial">
            <h6 align="right"> 03.03.2025 </h6>

          Entegrasyon servislerimizde 03.03.2025 ile 17.03.2025 tarihleri arasında Trendyol içi testler yapılacağı için servislerimize atacağınız isteklerinizde hata alabilirsiniz.
        </Accordion>

        <Accordion title="Trendyol - Ramazan Kampanyası İçin Ürün Stok ve Fiyatlarınızı Kontrol Ediniz" icon="fa-calendar-check">
            <h6 align="right"> 27.02.2025 </h6>

          Ramazan ayı büyük indirim dönemi öncesinde ürünlerinizin fiyat ve stok durumunu kontrol etmeniz, satış performansınızı ve satıcı puanınızı korumanız açısından önem arz etmektedir.
        </Accordion>

        <Accordion title="Trendyol - Listeleme Limitleri Bazlı Servis Limitleri Hakkında" icon="fa-list-ol">
            <h6 align="right"> 27.02.2025 </h6>

          Entegrasyon servislerimizde uyguladığımız limitler, listeleme limitleri baz alınarak güncellenecektir. İlk fazda sipariş servislerimiz ile uygulama başlamıştır. Limit detaylarına entegrasyon dokümanımızdan ulaşabilirsiniz.
        </Accordion>

        <Accordion title="Base URL Değişikliği Hakkında" icon="fa-link">
            <h6 align="right"> 26.02.2025 </h6>

          Servis performansını arttırmak amacı ile base url değişikliği gerçekleştirilmektedir. Eski servisler 26 Mayıs itibari ile kapatılacak olup, yeni endpointler için entegrasyon dökümanımızı kontrol etmenizi rica ederiz.
        </Accordion>

        <Accordion title="Base URL Değişikliği Hakkında" icon="fa-server">
            <h6 align="right"> 25.02.2025 </h6>

          Eski servisler Nisan ayı itibari ile kapatılacaktır. Ürün, Sipariş, Ortak Etiket, İade, Soru Cevap, Muhasebe ve Webhook servislerinin tamamı yeni base url üzerinde canlıya alınmıştır.
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme ve Webhook Response Modelimiz Hk." icon="fa-map-marked-alt">
            <h6 align="right"> 11.02.2025 </h6>

          Trendyol OMS modeline yeni adres alanları eklenmiştir. CEE bölgesi için "countyId" ve "countyName", GULF bölgesi için "shortAddress" ve "stateName" alanları dolu gelecektir.
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme ve Webhook Response Modelimiz Hk." icon="fa-globe">
            <h6 align="right"> 31.01.2025 </h6>

          OMS modelimize yeni adres alanları (countyId, countyName, shortAddress, stateName) eklenmiştir. "shipmentAddress" ve "invoiceAddress" altından kontrol edilebilir.
        </Accordion>

        <Accordion title="Trendyol İade İşlemlerinde Teknik Çalışma" icon="fa-tools">
            <h6 align="right"> 07.01.2025 </h6>

          08.01.2025 05.00-05.30 arasında claim servisleri üzerinde teknik çalışma yapılacaktır. Bu sürede iade işlemleri yapılamayacaktır.
        </Accordion>

        <Accordion title="Ürün Oluşturma - Güncelleme Sorunları" icon="fa-exclamation-circle">
            <h6 align="right"> 02.01.2025 </h6>

          Yeni katalog yapısına geçiş süreci nedeniyle anlık hatalar ve yansıma gecikmeleri yaşanabilir.
        </Accordion>

        <Accordion title="Trendyol Kategori Listesi ve Kategori - Özellik Listesi Servisleri Hakkında" icon="fa-stream">
            <h6 align="right"> 02.01.2025 </h6>

          02.01.2025 tarihinde yaşanan geçici sistem hatası nedeniyle 500 hataları alınmış olabilir. Sorun üzerinde çalışılmaktadır.
        </Accordion>

        <Accordion title="Test Siparişi Endpoint'i Hakkında" icon="fa-vials">
            <h6 align="right"> 27.12.2024 </h6>

          Test Siparişi Oluşturma servisimizin endpoint'i değişmiştir. Yeni endpoint: [https://stageapi.trendyol.com/integration/order/orders/core](https://stageapi.trendyol.com/integration/order/orders/core)
        </Accordion>

        <Accordion title="Sendeo Kargo Firması Değişikliği Hakkında" icon="fa-truck-loading">
            <h6 align="right"> 27.12.2024 </h6>

          30 Aralık itibariyle Sendeo yerine Kolay Gelsin kargo firmasının kullanılması gerekmektedir.
        </Accordion>

        <Accordion title="Cari Hesap Ekstresi Entegrasyonu Hakkında" icon="fa-file-invoice">
            <h6 align="right"> 27.12.2024 </h6>

          otherfinancials endpoint'i için yeni "transactionType=Stoppage" eklenmiştir. Bu tip ile E-ticaret Stopaj kalemleri listelenebilecektir.
        </Accordion>

        <Accordion title="Trendyol İşçilik Bedeli Bildirimi Servisi Hakkında" icon="fa-cut">
            <h6 align="right"> 25.12.2024 </h6>

          1 Ocak 2025 itibarıyla yapılacak ödemelerden %1 stopaj yapılacaktır. Bu kapsamda ürün bedeli ile işçilik bedelinin ayrıştırılması gerekmektedir. İşçilik bedelleri line bazlı bildirilmelidir.
        </Accordion>

        <Accordion title="Ürün Yükleme Hatası Hakkında" icon="fa-bug">
            <h6 align="right"> 23.12.2024 </h6>

          Bazı kategorilerde aynı özelliğin birden fazla görünmesi sorunu üzerinde çalışılmaktadır.
        </Accordion>

        <Accordion title="Test Siparişi Servisi Hakkında" icon="fa-flask">
            <h6 align="right"> 23.12.2024 </h6>

          "lines" altına "discountPercentage" alanı eklenmiştir. Bu alan ile ürün bazlı indirimler simule edilebilecektir.
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisi Hakkında" icon="fa-history">
            <h6 align="right"> 18.12.2024 </h6>

          17-18 Aralık tarihlerinde yaşanan geçici 500 hatası sorunu çözülmüştür. Bu tarihler arasındaki siparişlerinizi kontrol etmeniz rica olunur.
        </Accordion>

        <Accordion title="Trendyol - Webhook Servisleri Güncellemesi Hakkında" icon="fa-project-diagram">
            <h6 align="right"> 13.12.2024 </h6>

          Webhook Retry Modeli, Statu Modeli (subscribedStatuses), Authorization Model (API_KEY) ve Aktif/Pasif servisleri eklenmiştir.
        </Accordion>

        <Accordion title="Trendyol - WebColor Attribute Hk." icon="fa-paint-brush">
            <h6 align="right"> 09.12.2024 </h6>

          15 Ocak'tan sonra Web Color (348) attribute'u zorunlu olacaktır. Bu alan gönderilmezse sistem ürün yaratma hatası verecektir.
        </Accordion>

        <Accordion title="Mikro İhracat Siparişlerinizin Fatura Numaraları Hakkında" icon="fa-file-signature">
            <h6 align="right"> 08.03.2024 </h6>

          Azerbaycan ve GULF ülkeleri için fatura üzerindeki numara ile sistemdeki numara aynı olmalıdır. Kontroller 1 Nisan 2024'ten itibaren geçerli olacaktır.
        </Accordion>

        <Accordion title="MENA Bölgesi Siparişleri İçin Yeni Ülkeler" icon="fa-globe-asia">
            <h6 align="right"> 20.12.2023 </h6>

          Bahreyn, Umman ve Kuveyt ülkeleri eklendi. Adres alanı id değerleri için dökümanı kontrol ediniz.
        </Accordion>

        <Accordion title="MENA Bölgesi Siparişleri Hakkında" icon="fa-map">
            <h6 align="right"> 21.11.2023 </h6>

          Suudi Arabistan ve BAE'den sonra Katar da ülke listesine eklendi.
        </Accordion>

        <Accordion title="Sipariş Paketlerini Çekme Servisine MENSEI Bilgisi Eklenmesi" icon="fa-flag">
            <h6 align="right"> 19.10.2023 </h6>

          Mikro ihracat siparişleri için "productOrigin" datası üzerinden menşei bilgisi iletilmelidir.
        </Accordion>

        <Accordion title="Fatura Linki Silme" icon="fa-trash-alt">
            <h6 align="right"> 25.08.2023 </h6>

          Hatalı beslenen faturalar bu servis üzerinden silinip tekrar beslenebilir.
        </Accordion>

        <Accordion title="İade Test Siparişlerini WaitingInAction Statüsüne Çekme" icon="fa-step-forward">
            <h6 align="right"> 21.08.2023 </h6>

          Stage ortamında iade statüsünü waitinginaction'a çekmek için ilgili servis kullanılabilir.
        </Accordion>

        <Accordion title="Kargo Faturası Detayları Servis Geliştirmesi Hk." icon="fa-file-invoice-dollar">
            <h6 align="right"> 11.08.2023 </h6>

          Trendyol tarafından kesilen kargo faturalarının detaylarına DeductionInvoices responsundan ulaşabilirsiniz.
        </Accordion>

        <Accordion title="Mikro İhracat Paketleri İçin Fatura Gönderimi Güncellemesi" icon="fa-file-export">
            <h6 align="right"> 27.07.2023 </h6>

          4 Ağustos 2023 itibarıyla Mikro ihracat paketleri için “invoiceNumber” ve “invoiceDateTime” alanları zorunlu hale gelmiştir.
        </Accordion>

        <Accordion title="Mikro İhracat Siparişleri İçin Geçiş Tarihi Hk." icon="fa-exchange-alt">
            <h6 align="right"> 12.07.2023 </h6>

          14.07.2023'ten itibaren Azerbaycan siparişlerinde countryCode "AZ" olarak dönecektir. "micro" alanı True ise sipariş mikro ihracat siparişidir.
        </Accordion>

        <Accordion title="Mikro İhracat Siparişleri İçin Fatura Gönderimleri Hk." icon="fa-upload">
            <h6 align="right"> 11.07.2023 </h6>

          12.07.2023 itibarıyla mikro ihracat faturaları panelden veya link servisi ile yüklenmelidir. “invoiceNumber” ve “invoiceDateTime” alanları zorunludur.
        </Accordion>

        <Accordion title="KDV Oranları Hakkında" icon="fa-percent">
            <h6 align="right"> 07.07.2023 </h6>

          10 Temmuz 2023 itibarıyla KDV oranları %10 ve %20 olarak güncellenmiştir. Eski oranlarla yapılan istekler hata alacaktır.
        </Accordion>

        <Accordion title="Azerbaycan Siparişleri İçin Geçiş Tarihi Hk." icon="fa-clock">
            <h6 align="right"> 03.07.2023 </h6>

          Azerbaycan siparişleri için son geçiş tarihi uzatılmıştır. Yeni tarih netleştiğinde bilgi verilecektir.
        </Accordion>

        <Accordion title="Mikro İhracat Paketleri İçin Fatura Linki Gönderme Hatırlatması" icon="fa-envelope-open-text">
            <h6 align="right"> 15.06.2023 </h6>

          sendInvoiceLink servisine eklenen “invoiceNumber” ve “invoiceDateTime” alanlarının mikro ihracat için zorunlu olduğu hatırlatılır.
        </Accordion>

        <Accordion title="Azerbaycan Siparişleri Hk." icon="fa-map-pin">
            <h6 align="right"> 15.06.2023 </h6>

          03.07.2023'ten itibaren Azerbaycan adresleri için countryCode "AZ" olarak dönecektir.
        </Accordion>

        <Accordion title="Test Siparişlerinde Statü Güncelleme" icon="fa-check-double">
            <h6 align="right"> 12.06.2023 </h6>

          Stage ortamında sipariş statülerini Shipped, Delivered vb. olarak güncellemek için ilgili servis kullanılabilir.
        </Accordion>

        <Accordion title="Güncel Kargo Fiyatları Listesi" icon="fa-truck">
            <h6 align="right"> 29.05.2023 </h6>

          Güncel liste Trendyol Kargo Şirketleri Listesi dökümanı üzerinden indirilebilir.
        </Accordion>

        <Accordion title="Fatura Linki Gönderme (sendInvoiceLink) Servis Geliştirmesi Hk." icon="fa-link">
            <h6 align="right"> 16.05.2023 </h6>

          Azerbaycan İhracat projesi ile yeni alanlar eklenmiştir. Örnek JSON isteği dökümanda mevcuttur.
        </Accordion>
      </Tab>

      <Tab title="Turkey Marketplace">
        <Accordion title="Regarding Changes in the Origin Information Definition Processes  (08.10.2026)" icon="fa-undo">
                        <h6 align="right"> 08.10.2026 </h6>

          Dear Business Partner,

          The "Origin" information, currently received under "Attributes", can now also be entered through a custom field (similar to stockCode or barcode).

          The transition plan regarding this structure, originally scheduled for October 23rd as detailed below, has been postponed to a later date.

          "As of October 23, 2026, the newly added 'origin' field will become mandatory (required). Submitting the origin information under 'Attributes' will become optional."

          Therefore, until a new transition date is announced, it remains mandatory to submit the Origin information under the "Attributes" section.

          Thank you for your understanding.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Regarding the Temporary Interruption in Webhook Services (06.10.2026)" icon="fa-undo">
                        <h6 align="right"> 06.10.2026 </h6>

          Dear Business Partner,

          During the technical maintenance and update operations performed on our Trendyol Integration Services, a temporary interruption occurred in our webhook service.

          Details:

          Affected Service: Webhook model

          Date and Time Range: 6th of October 2026 during 11:02 - 12:25

          Impact: Order information was not delivered to your webhook model during the specified time frame.

          Action Required:
          The issue experienced between 11:02 and 12:25 has been resolved, and your order data generated during this time frame has been transferred to your webhook model. No action is required on your part. However, should you wish to verify, you may send a request to the order retrieval service (getShipmentpackages) covering the relevant time frame.

          Thank you for your understanding and cooperation.

          We appreciate your understanding and wish you a productive day.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Trendyol Integration Reject Returned Orders Services (getClaimsIssueReasons) Update (23.09.2026)" icon="fa-undo">
                        <h6 align="right"> 23.09.2026 </h6>

          Dear Business Partner,

          At Trendyol, we continuously strive to make our return rejection reasons more transparent, fast, and efficient across our platform.
          In line with this goal, we have introduced a comprehensive optimization in the Get Claim Issue Reasons (getClaimsIssueReasons) structure used within our Return API Services. This enhancement aims to reduce operational complexity and prevent disputes and grievances resulting from incorrect reason selections.
          The relevant enhancements will go live as of October 8.

          Updates & Technical Details
          A. Deprecated (Deactivated) Rejection Reasons The following reason_id values that overlap in business logic or have become obsolete will be deactivated as of October 8:
          251 – Product received from customer is defective/damaged
          1701 – The item I sent is not incorrect
          1751 – The item I sent is not defective
          2201 – The item I sent is not missing
          2151 – I will send the invoice/warranty document for the customer to get support from technical service
          Important: Following the go-live, any API requests pointing to these deprecated rejection reasons will return error messages from the system.

          B. Newly Added Rejection Reasons Three new rejection reasons have been defined in our system to accurately cover specific return scenarios and special cases:
          2077 – The product has the non-returnable status of “Personalized (Custom-made)”
          2078 - The received product has no defect. I want to accept the return for customer satisfaction
          2079 – I sent the correct product in good condition. The returned product arrived missing, damaged, or as a different product

          C. Updated Reason Descriptions & Titles The unique identifiers (reason_id) for the following reasons remain unchanged; however, their UI display titles and descriptions have been updated to enhance clarity:
          51:  The product was used abnormally and/or damaged by the customer
          151: The returned product is missing a part/accessory
          201: A completely different product (wrong product) was returned from the one sold
          401: The returned product or item quantity is missing
          451: I’ll send the product for analysis
          1651: The return package was not delivered to me
          1951:  The corporate return invoice was not submitted or is incorrect
          2051: The product’s protective packaging (hygiene seal, seal, package) has been opened

          By October 8, you are required to incorporate the newly added codes into your systems among the mapped rejection reasons, remove the deactivated rejection codes from your systems, and update your modified (reason_id) descriptions accordingly.

          Link: [https://developers.trendyol.com/v2.0/docs/claim-issue-reasons-getclaimsissuereasons](https://developers.trendyol.com/v2.0/docs/claim-issue-reasons-getclaimsissuereasons)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Regarding the paymentMethod Field Addition to the Get Shipment Packages Service and Webhook Model (09.09.2026)" icon="fa-undo">
                  <h6 align="right"> 09.09.2026 </h6>

          Dear Business Partner,

          The customer's payment method, which must be indicated on the invoice, has now been added to our Get Shipment Packages Service and Webhook model response under the "paymentMethod" field.

          To ensure accurate invoicing, please update your integration services to read this new field.

          Possible Values for This Field:
          "Banka Kartı"
          "Kredi Kartı"
          "Alışveriş Kredisi"
          "Cüzdan - Trendpay"
          "Şimdi Al Sonra Öde - Trendpay"
          "-"

          Related Services:

          1. Get Shipment Packages Service: [https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages](https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages)
          2. 2.Get Shipment Packages with Cursor: [https://developers.trendyol.com/v2.0/docs/getshipmentpackagesstream](https://developers.trendyol.com/v2.0/docs/getshipmentpackagesstream)
          3. Webhook Model: [https://developers.trendyol.com/v2.0/docs/webhook-model](https://developers.trendyol.com/v2.0/docs/webhook-model)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion
          title="Regarding the Temporary Interruption in Order Services
(08.09.2026)"
          icon="fa-undo"
        >
                  <h6 align="right"> 08.09.2026 </h6>

          Dear Business Partner,

          During the technical maintenance and update operations performed on our Trendyol Integration Services, a temporary disruption occurred in our GET shipment packages service.

          Details:

          Affected Service: Get Shipment Packages Services / Webhook Model
          Date & Time Frame: September 8, 14:00 – 15:34
          Impact: Some of the new orders created within the specified time interval were not returned in the service responses.
          Action Required: To ensure that your order data generated between 14:00 and 15:34 is fully transferred to your end and properly synchronized, please re-send a request (retry) to the get shipment packages service covering this specific time frame.
          We kindly remind you to verify your systems to prevent any potential discrepancies.

          Thank you for your understanding and cooperation.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion
          title="Regarding the Temporary Interruption in Order Services
(02.09.2026)"
          icon="fa-undo"
        >
                  <h6 align="right"> 02.09.2026 </h6>

          Dear Business Partner,

          Due to a temporary technical issue experienced in our Order Management Services today between 15:29 and 16:01 (GMT+3), new orders created within this time frame were not returned by the system.

          The underlying issue has been resolved, and the service is fully operational. To ensure complete data synchronization and prevent any order processing discrepancies on your side, please follow the required action below.

          Required Action:

          Please re-issue a request (retry) to the Order Fetching Service (Get Orders) filtered specifically for today's time window between 15:29 and 16:01 (GMT+3) to fetch all missed order data into your systems.

          Thank you for your understanding and cooperation.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Update on Country of Origin (Origin) Field Definition Processes (INVALID ANNOUNCEMENT)" icon="fa-undo">
                  <h6 align="right"> 17.08.2026 </h6>

          Dear Business Partner,

          As Trendyol, we are making an important update to our product services to modernize our data structures and make your integration processes more efficient.

          The Origin information, which has been collected under "Attribute" in our product services until now, will now be managed as an independent, standard field, just like stockCode or barcode.

          **How Will the Transition Process Work?**
          To ensure you are not negatively impacted by this change, we have designed the process with a two-stage "soft transition" model:

          **1. Hybrid Period (Transition Period):**

          A new field named origin has been added to the product payload.

          During this period, if the origin information is a mandatory attribute for the relevant product category, it will continue to be mandatory to send it under the existing attributes.

          Throughout the transition period, the origin information can also be sent optionally via the new origin field.

          **The new field is currently in "optional" status. The new origin field will become mandatory on October 23, 2026;** therefore, we strongly request that you update your integrations according to this new field. You can access the List of Origin Values you can send via our integration documentation.

          **2. Full Transition and Mandatory Period:**

          As of October 23, 2026, the newly added origin field will become mandatory (required).

          **Sending origin information under attributes will be optional starting from October 23, 2026. In the future, the origin field under attributes will be removed, the exact date for this change will be announced later.**

          **Data Migration Notice**
          There is no need to worry about your historical data. When the deadline arrives, all existing origin information located within attributes will be automatically migrated to the new origin field by Trendyol teams.

          **You can check the new field added to the relevant services via our integration documentation:**

          Product Creation V1 (createProducts):       [https://developers.trendyol.com/v2.0/docs/product-create-createproducts](https://developers.trendyol.com/v2.0/docs/product-create-createproducts)
          Update Product V1 (updateProduct): [https://developers.trendyol.com/v2.0/docs/product-update-updateproducts](https://developers.trendyol.com/v2.0/docs/product-update-updateproducts)
          Batch Request Status V1 (getBatchRequestResult): [https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult](https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult)
          Product Filtering V1 (filterProducts): [https://developers.trendyol.com/v2.0/docs/product-filter-filterproducts](https://developers.trendyol.com/v2.0/docs/product-filter-filterproducts)
          Product Creation V2: [https://developers.trendyol.com/v2.0/docs/product-create-v2](https://developers.trendyol.com/v2.0/docs/product-create-v2)
          Update Product - Unapproved V2: [https://developers.trendyol.com/v2.0/docs/product-update-unapproved-product-v2](https://developers.trendyol.com/v2.0/docs/product-update-unapproved-product-v2)
          Update Product - Approved V2 (Variant): [https://developers.trendyol.com/v2.0/docs/product-update-approved-product-v2](https://developers.trendyol.com/v2.0/docs/product-update-approved-product-v2)
          Product Filtering - Unapproved V2: [https://developers.trendyol.com/v2.0/docs/product-filtering-unapproved-products-v2](https://developers.trendyol.com/v2.0/docs/product-filtering-unapproved-products-v2)
          Product Filtering - Approved V2: [https://developers.trendyol.com/v2.0/docs/product-filtering-approved-products-v2](https://developers.trendyol.com/v2.0/docs/product-filtering-approved-products-v2)
          Batch Request Status V2 (getBatchRequestResult): [https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult-1](https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult-1)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Update on Product Services Delivery Options (deliveryOption)">
                  <h6 align="right"> 17.08.2026 </h6>

          Dear Business Partner,

          To simplify our data structure, we are updating the payload requirements within our Product Services.

          This update will take effect on August 17, 2026. Please find the technical details and transition plan outlined below.

          **Current Status in Product Services:**
          In the current setup, defining "Same Day Shipping" or "Ship by Next Day" requires sending two separate fields under the deliveryOption object simultaneously:

          Same Day Shipping: deliveryDuration: 1 and fastDeliveryType: "SAME_DAY_SHIPPING"
          Ship by Next Day: deliveryDuration: 1 and fastDeliveryType: "FAST_DELIVERY"

          **New Implementation (Effective August 17, 2026) in Product Services:**
          With the new structure, dependency on the fastDeliveryType field has been removed. Delivery definitions will now be managed solely through the deliveryDuration parameter, meaning no additional values are required for fastDeliveryType.

          Same Day Shipping: deliveryDuration: 0
          Ship by Next Day: deliveryDuration: 1

          **Transition Period & Automatic Data Mapping:**
          Please update your integration system requests for "Same Day Shipping" and "Ship by Next Day" products according to the new parameter structure. All parameter definitions must be sent in compliance with this new structure by the end of September.
          **Important Notes:**
          No Action Needed for Existing Products: You do not need to perform any manual updates for products previously tagged with  "Same Day Shipping" and "Ship by Next Day".
          Automatic Migration: Products currently registered in the system with deliveryDuration: 1 and fastDeliveryType: "SAME_DAY_SHIPPING" will be automatically updated to deliveryDuration: 0 by the end of September.

          **Please find related endpoint services as below:**<br />Product Create V1: [https://developers.trendyol.com/v2.0/docs/product-create-createproducts](https://developers.trendyol.com/v2.0/docs/product-create-createproducts)
          Product Update V1: [https://developers.trendyol.com/v2.0/docs/product-update-updateproducts](https://developers.trendyol.com/v2.0/docs/product-update-updateproducts)
          Check Batchrequest Result V1: [https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult](https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult)
          Product Filter V1: [https://developers.trendyol.com/v2.0/docs/product-filter-filterproducts](https://developers.trendyol.com/v2.0/docs/product-filter-filterproducts)
          Product Create V2: [https://developers.trendyol.com/v2.0/docs/product-create-v2](https://developers.trendyol.com/v2.0/docs/product-create-v2)
          Unapproved Product Update V2: [https://developers.trendyol.com/v2.0/docs/product-update-unapproved-product-v2](https://developers.trendyol.com/v2.0/docs/product-update-unapproved-product-v2)
          Approved Product Update V2 - Delivery Information Update: [https://developers.trendyol.com/v2.0/docs/product-update-approved-product-v2](https://developers.trendyol.com/v2.0/docs/product-update-approved-product-v2)
          Check Batchrequest Result V2: [https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult-1](https://developers.trendyol.com/v2.0/docs/check-batchrequest-result-getbatchrequestresult-1)
          Unapproved Product Filter V2: [https://developers.trendyol.com/v2.0/docs/product-filtering-unapproved-products-v2](https://developers.trendyol.com/v2.0/docs/product-filtering-unapproved-products-v2)
          Approved Product Filter V2: [https://developers.trendyol.com/v2.0/docs/product-filtering-approved-products-v2](https://developers.trendyol.com/v2.0/docs/product-filtering-approved-products-v2)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Trendyol Luxe Platformu and API Developments">
            <h6 align="right"> 31.07.2026 </h6>

          Dear Business Partner,

          Trendyol Luxe Platform, which will bring luxe segment products to customers through a stronger and more personalized shopping experience, is going live very soon!

          To ensure our sellers can seamlessly list their products and manage order/return processes on this new platform, we have implemented several technical enhancements to our API services. It is highly important that you update your integration systems accordingly to accommodate these changes.

          The details of the enhancements are as follows:

          **1. Product API Services**
          "channels" field has been added to the Product services to allow you to define sales channels. Valid channel values are CORE and LUXE.

          **Default Behavior:** If the channels field is omitted in the request, the system accepts the request for the channel(s) where the product is currently live. If a product is live in both the CORE and LUXE channels and you want to unpublish it from one, the request must be made containing only the value of the channel where it should remain published.

          **Restriction:** To use the LUXE channel for a product, the respective brand must have the "Luxe Brand" status, and the seller must be authorized for the LUXE category.

          **Scope:** These updates apply only to approved product flows (TR storefront). The channels field is out of scope for unapproved products.

          **Updated Endpoints and Usage Details:**
          **Brand List (GetBrands):**
          [https://developers.trendyol.com/v2.0/docs/trendyol-brand-list-getbrands-1](https://developers.trendyol.com/v2.0/docs/trendyol-brand-list-getbrands-1)
          A LUXE (boolean) field has been added to the response. You can check if the brand is eligible for the luxe channel via this field ("LUXE": true).

          **Approved Products Filtering v2:**
          [https://developers.trendyol.com/v2.0/docs/product-filtering-approved-products-v2](https://developers.trendyol.com/v2.0/docs/product-filtering-approved-products-v2)
          The channels field has been added to the variants\[] array in the response (e.g., "channels": \["CORE", "LUXE"]).

          **Products Filtering v1:**
          [https://developers.trendyol.com/v2.0/docs/product-filter-filterproducts](https://developers.trendyol.com/v2.0/docs/product-filter-filterproducts)
          The channels field has been added to the content\[] array in the response (e.g., "channels": \["CORE", "LUXE"]).

          **Product Update v1:**
          [https://developers.trendyol.com/v2.0/docs/product-update-updateproducts](https://developers.trendyol.com/v2.0/docs/product-update-updateproducts)
          The "channels": \["CORE", "LUXE"] field has been added under items\[] in the request body.

          **Update Approved Product - Variant Update v2:**
          [https://developers.trendyol.com/v2.0/docs/product-update-approved-product-v2](https://developers.trendyol.com/v2.0/docs/product-update-approved-product-v2)
          The "channels": \["CORE", "LUXE"] field has been added under items\[] in the request body.

          **channels Field Rules:**
          \["CORE"]: Standard platform only.

          \["LUXE"]: Trendyol Luxe only (Only Luxe brand validation is done).

          \["CORE", "LUXE"]: Both channels.

          \[] (Empty array): Invalid; the system will return an error.

          If the field is not sent, the current channel information remains unchanged.

          **2. Order and Return API Services**
          To help you distinguish orders and returns originating from the LUXE channel, a channelId field has been added to the get shipment packages services, get returned order service and webhook models.

          Orders and returns with a channelId value of 25 belong to the Trendyol Luxe platform, channelId value of 1 belongs to the standard CORE channel. You can base your order parsing and label logic on this ID value within your systems.

          \*\*Order Services:
          [https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages](https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages)
          [https://developers.trendyol.com/v2.0/docs/getshipmentpackagesstream](https://developers.trendyol.com/v2.0/docs/getshipmentpackagesstream)

          **Webhook Model:**
          [https://developers.trendyol.com/v2.0/docs/webhook-model](https://developers.trendyol.com/v2.0/docs/webhook-model)

          **Returned Order Services:**
          [https://developers.trendyol.com/v2.0/docs/getting-returned-orders-getclaims](https://developers.trendyol.com/v2.0/docs/getting-returned-orders-getclaims)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About New Order Integration Endpoint">
            <h6 align="right"> 30.07.2026 </h6>

          Dear Business Partner,

          The following endpoint services will be deprecated as of October 15, 2026.      Until October 15, 2026, requests to the following services will return error code 426 three times a day for 10 minutes each time.

          [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders)

          You must migrate to below Order V2 endpoint services by this date. With V2 order endpoint services maximum accessible record count will be limited to 10,000 (maxQueryWindowResult).

          [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders)

          Document link:

          [https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages](https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Product Services Rate Limit Changes">
            <h6 align="right"> 06.07.2026 </h6>

          Dear Business Partner,

          To ensure system health, new rate limits based on seller product listing limits will be applied to our Product Integration Services, starting from September 14, 2026. You can access the new limit details for the relevant services via the link below:

          [https://developers.trendyol.com/v2.0/docs/1-service-limitations](https://developers.trendyol.com/v2.0/docs/1-service-limitations)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Creating Customer Questions Service in Stage Environment" icon="fa-undo">
            <h6 align="right"> 26.06.2026 </h6>

          Dear Business Partner,

          Creating Customer Questions Service was developed in stage environment. You can create your own product questions in order to progress your tests for Question\&Answer Services.

          [https://developers.trendyol.com/v2.0/docs/creating-customer-questions-in-stage-environment](https://developers.trendyol.com/v2.0/docs/creating-customer-questions-in-stage-environment)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Get Shipment Packages Service New Rate Limits" icon="fa-undo">
            <h6 align="right"> 02.06.2026 </h6>

          Dear Business Partner,

          The limits for the current getShipmentPackage service will be updated as of June 8 , 2026. Your requests to this service must comply with the new limits; otherwise, you will receive a 429 error. Current getShipmentPackages will be limited to 10,000 total records.

          Service Limitations:

          [https://developers.trendyol.com/v2.0/docs/1-service-limitations#/versions](https://developers.trendyol.com/v2.0/docs/1-service-limitations#/versions)

          In order to provide large data scanning ability yu can use the "getShipmentPackagesStream"  service. The getShipmentPackagesStream endpoint allows you to fetch order packages using cursor-based streaming. This endpoint is designed for large-scale data scanning (full scan), periodic synchronization (polling/cron), and exporting all orders; while the response structure remains the same, pagination-related fields such as totalElements, totalPages, page will no longer be returned due to the switch to a cursor-based pagination mechanism.

          Data from the last 3 months is accessible through this endpoint.

          You can reach the details below the link:

          [https://developers.trendyol.com/v2.0/docs/marketplace-business-models#/versions](https://developers.trendyol.com/v2.0/docs/marketplace-business-models#/versions)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Update on Country of Origin (Origin) Field Definition Processes (INVALID ANNOUNCEMENT)" icon="fa-undo">
            <h6 align="right">13.05.2026 </h6>

          **IMPORTANT NOTICE: An updated announcement regarding this development was shared on August 17, 2026. The dates in this announcement have been updated. Please consider the announcement dated August 17, 2026 as valid.**

          Dear Business Partner,

          At Trendyol, we are implementing a significant update to our product services to modernize our data structures and enhance the efficiency of your integration processes.

          Moving forward, the "Origin" (Country of Origin) information—which was previously managed under the "Attribute" section—will now be handled as an independent, standard field, similar to stockCode or barcode.

          **How Will the Transition Process Work?**

          To ensure a seamless experience, we have designed a two-phase ""soft transition"" model:

          **1. Hybrid Period (Transition Phase):**

          A new field named origin has been added to the product payload.

          During this period, origin information can be sent via both the existing attributes section and the new origin field.

          Currently, the new field is optional. However, the origin field will become mandatory on June 30, 2026. 			Therefore, we strongly recommend updating your integrations to support this new field as soon as possible.

          You can access the List of Origin Values through our integration documentation.

          **2. Full Transition and Mandatory Period:**

          Following the deadline, the origin field will become required.

          Support for sending origin information via the attributes section will be gradually phased out.

          **Data Migration Information**

          There is no need for concern regarding your historical data. Once the deadline is reached, all existing origin information within the attributes section will be automatically migrated to the new origin field by the Trendyol team.

          **You can review the newly added field in the relevant services via our integration documentation:**

          Product Creation V1 (createProducts)

          Update Product V1 (updateProduct)

          Batch Request Status (getBatchRequestResult)

          Product Filtering V1 (filterProducts)

          Product Creation V2

          Update Product - Unapproved V2

          Update Product - Approved V2 (Variant)

          Product Filtering - Unapproved V2

          Product Filtering - Approved V2

          Sincerely,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Regarding the Temporary Delay in the getShipment Package Service" icon="fa-undo">
            <h6 align="right">22.04.2026 </h6>

          Dear Business Partner,

          Between April 21st, 16:00 and April 22nd, 13:40, some sellers attempting to retrieve order packages from the integration service encountered errors. This issue was resolved as of April 22nd, 13:41. We recommend checking your orders from this period through the integration services.

          Sincerely,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About New Video Upload Service" icon="fa-undo">
            <h6 align="right"> 08.04.2026 </h6>

          Dear Business Partner,

          We have added a new integration service that allows you to add video content to your products. You can now manage your product videos directly through our integration services.

          - **Video Upload Service**: Used to add video content to your products.
          - **Video Listing Service**: Used to list the approval status and list your uploaded videos

          [https://developers.trendyol.com/v2.0/update/docs/video](https://developers.trendyol.com/v2.0/update/docs/video)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Infrastructure Maintenance for Product Processes" icon="fa-undo">
            <h6 align="right"> 06.04.2026 </h6>

          Dear Business Partner,

          Due to an infrastructure migration, all operations in the flows for creating new products, updating unapproved products, and deleting unapproved products will be reflected with a delay. No data loss is expected; however, since the processing will be delayed, operations may appear incomplete on the dashboard and in API responses.

          Operation Start Date: April 7, 23:00

          Operation End Date: April 8, 03:00

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Trendyol getShipmentPackage / Webhook Model " icon="fa-undo">
          <h6 align="right"> 02.04.2026 </h6>

          Dear Business Partner

          New fields and renamed versions of existing fields have been added to the response for the order package pull service and webhook model. Additionally, some fields have been removed. The old versions of the renamed fields will be removed at 2 April 2026 in the stage environment response and 6 April 2026 in the production environment response. We kindly request that you make the necessary adjustments immediately to avoid any further issues.

          **Newly added fields:**

          - “cancelledBy”:

          - “cancelReason”:

          - “cancelReasonCode”:

          - "lineTotalDiscount" ("lineSellerDiscount"+ "lineTyDiscount")

          - "packageTotalDiscount": ("packageSellerDiscount"+ "packageTyDiscount")

            **Fields where naming changes were made:**

          - "merchantSku": > "stockCode"

          - "merchantId": > "sellerId"

          - root/"id": > "shipmentPackageId"

          - line/"id": > "lineId"

          - line/"amount": > "lineGrossAmount"

          - line/"discount": > "lineSellerDiscount":

          - line/"tyDiscount": > "lineTyDiscount"

          - line/ "lineItemDiscount": > "lineItemSellerDiscount"

          - line/"price": > "lineUnitPrice"

          - root/"grossAmount": > "packageGrossAmount"

          - "totalDiscount": > "packageSellerDiscount"

          - "totalTyDiscount": > "packageTyDiscount"

          - "totalPrice": > "packageTotalPrice"

          - "productCode": > "contentId"

          - "vatBaseAmount": > "vatRate"

            **Fields to remove:**

          - "sku":

          - "scheduledDeliveryStoreId":

          - "agreedDeliveryDateExtendible":

          - "extendedAgreedDeliveryDate":

          - "agreedDeliveryExtensionEndDate":

          - "agreedDeliveryExtensionStartDate":

          - "groupDeal":

            **You can access our integration service below;**

          [https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages#/versions](https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages#/versions)

          [https://developers.trendyol.com/v2.0/update/docs/webhook-model#/versions](https://developers.trendyol.com/v2.0/update/docs/webhook-model#/versions)

          Best regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Temporary Delay in Stock-Price Update Service" icon="fa-undo">
            <h6 align="right"> 18.03.2026 </h6>

          Dear Business Partner,

          There is a temporary delay in updating requests to the stock-price service. Our technical team is working to resolve the issue as soon as possible. Please note that this is a temporary situation and thank you for your understanding.

          Date the problem started: March 19th, 21:15

          Date the problem was solved: March 19 Mart 23:42

          Sincerely,

          Trendyol

          Integration Team
        </Accordion>

        <Accordion title="New Filter Parameter at Current Account Statement Services for Filtering of Platform Service Fee" icon="fa-undo">
            <h6 align="right"> 18.03.2026 </h6>

          Dear Business Partner,

          A new filter parameter, "transactionSubType", has been added to the otherfinancials service to enable filtering of Platform Service Fee invoices.

          "PlatformServiceFee" can be used as value. To utilize this parameter, the request must include transactionType=DeductionInvoices or have DeductionInvoices within the transactionTypes.

          Please find detailed endpoint and parameter information in below link:

          [https://developers.trendyol.com/v2.0/docs/current-account-statement-integration](https://developers.trendyol.com/v2.0/docs/current-account-statement-integration)

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="Questions & Answers Services Rate Limits" icon="fa-undo">
            <h6 align="right"> 17.03.2026 </h6>

          Dear Business Partner,

          To ensure system stability and maintain high service quality, **rate limits** will be added **starting from 27th March 2026** for our **Question & Answer Integration Services.** Please ensure your requests are made within the following limits:

          - **Getting Customer Questions:** 1000 req/min
          - **Answering Customer Questions Service:** 500 req/min

          We kindly ask you to adjust your integration logic to comply with these limits to avoid any service interruptions.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About New Field in Order Services and Alternative Delivery for Digital Goods " icon="fa-undo">
            <h6 align="right"> 16.03.2026 </h6>

          Dear Business Partner,

          We have added a new field named "businessUnit" under the lines object in our Get Shipment Packages Service and Webhook model. For orders where this field is set to "Digital Goods", please take the following updates into account for your integration processes:

          **Customer Information**: For orders with the businessUnit set as "Digital Goods," the customer phone number will be returned as "null".

          **Digital Code:** Digital code sent via the "Shipping with Alternative Delivery" service will be delivered directly to the customer by Trendyol.

          **Error Message for Non-Digital Good Shipments:** If an attempt is made to send a digital code via the "Shipping with Alternative Delivery" service for orders where the businessUnit is not "Digital Goods," the system will return a "digital.good.business.unit.not.valid" error.

          **Related services:**

          - Get Shipment Packages

          - Webhook Model

          - Digital Product Delivery with Alternative Delivery

          Thank you for your cooperation.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Temporary Delay in Get Shipment Packages Service" icon="fa-undo">
            <h6 align="right"> 09.03.2026 </h6>

          Dear Business Partner,

          We are currently experiencing a temporary delay in order package status updates. Our technical team is working to resolve the issue as quickly as possible. Please be advised that this is a temporary situation. Thank you for your patience and understanding.

          \*\*The issue was resolved as of March 10th, 11:30 AM.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Get Shipment Packages Service" icon="fa-undo">
            <h6 align="right"> 05.03.2026 </h6>

          Dear Business Partner,

          In our continuous effort to provide you with a faster, more stable, and seamless platform experience, we are consistently optimizing our system performance. As part of these improvements, we would like to inform you of an upcoming update to our getShipmentPackages Service.
          To optimize system resources and significantly improve API response times, we are updating the time limit for historical order data retrieval. The service, which previously allowed you to fetch orders from the past 3 months, will be updated to support a maximum retrieval **period of 1 month (30 days)**, effective **5 March 2026**.

          **What does this mean for you?**

          Starting **5 March 2026**, you will only be able to fetch order packages from the last 1 month via this service.
          If you require order data older than 1 month (up to the previous 3-month limit), we strongly advise you to check Trendyol Seller Center.
          Please ensure that you update your integrations, automated tasks, and reporting processes to query a maximum of 1 month's data to avoid any errors.

          We kindly ask you to make the necessary adjustments in a timely manner to minimize any disruption to your operations. We appreciate your understanding and cooperation as we work to enhance our infrastructure.

          If you have any questions or require technical support, please do not hesitate to reach out to our team.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Get Shipment Packages Service" icon="fa-undo">
            <h6 align="right"> 25.02.2026 </h6>

          Dear Business Partner,

          Shipment Number field has been added to the response for the get shipment packages service and webhook model.

          Newly added field: shipmentNumber

          You can access our integration service below;

          [https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages](https://developers.trendyol.com/v2.0/docs/get-order-packages-getshipmentpackages)

          Best regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About New Product Integration Service" icon="fa-undo">
            <h6 align="right"> 10.02.2026 </h6>

          Dear Business Partner,

          We are reaching out to inform you about a significant structural update to our product integration 						services aimed at providing a more efficient and optimized operational experience.

          **Scope of the Update:**
          We are transitioning from our current barcode-based structure to a content-based structure. This update 			ensures that our integration services are fully aligned with the Seller Center data model, providing a 				more standardized and seamless workflow for your operations.

          **Migration Timeline:**
          **Availability of New Services:** Our next-generation services (v2) are available for use as of today.

          **Deprecation of Legacy Services:** Existing legacy services will remain active until August 10, 2026.

          **Action Required:**
          To avoid any service interruptions, we kindly request that you complete your development and migrate to 			the new v2 services before the specified deadline.

          **Newly Released Services (v2):**
          You can access and review the updated versions of the following services via our API documentation for 				Turkey Marketplace below:

          - Product Create v2
          - Product Filter Base Information v2
          - Product Filtering - Unapproved Products v2
          - Product Filtering - Approved Products v2
          - Product Update - Unapproved Product v2
          - Product Update - Approved Product v2
          - Category Attribute List v2
          - Category Attribute Values List v2

          Thank you for your cooperation.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Account and Finance Integration Services" icon="fa-undo">
            <h6 align="right"> 30.12.2025 </h6>

          We have added two new filter parameters to our settlements and otherfinancials services under the Current Account Statement integration:

          transactionTypes: You can now list accounting records for multiple transaction types in a single request.
          paymentDate: You can filter accounting records based on the earliest possible payment date.

          You can access our integration service below:

          [https://developers.trendyol.com/v2.0/docs/current-account-statement-integration](https://developers.trendyol.com/v2.0/docs/current-account-statement-integration)
        </Accordion>

        <Accordion title="About getShipmentPackage Service" icon="fa-info-circle">
            <h6 align="right"> 08.12.2025 </h6>

          New fields and renamed versions of existing fields have been added to the response for the order package pull service and webhook model. Additionally, some fields have been removed. The old versions of the renamed fields will be removed from the response after one months. We kindly request that you make the necessary adjustments immediately to avoid any further issues.

          Newly added fields:

          - "cancelledBy":
          - "cancelReason":
          - "cancelReasonCode":
          - "lineTotalDiscount" ("lineSellerDiscount"+ "lineTyDiscount")
          - "packageTotalDiscount": ("packageSellerDiscount"+ "packageTyDiscount")

          Fields where naming changes were made:

          - "merchantSku": > "stockCode"
          - "merchantId": > "sellerId"
          - root/"id": > "shipmentPackageId"
          - line/"id": > "lineId"
          - line/"amount": > "lineGrossAmount"
          - line/"discount": > "lineSellerDiscount":
          - line/"tyDiscount": > "lineTyDiscount"
          - line/ "lineItemDiscount": > "lineItemSellerDiscount"
          - line/"price": > "lineUnitPrice"
          - root/"grossAmount": > "packageGrossAmount"
          - "totalDiscount": > "packageSellerDiscount"
          - "totalTyDiscount": > "packageTyDiscount"
          - "totalPrice": > "packageTotalPrice"
          - "productCode": > "contentId"
          - "vatBaseAmount": > "vatRate"

          Fields to remove:

          - "sku":
          - "scheduledDeliveryStoreId":
          - "agreedDeliveryDateExtendible":
          - "extendedAgreedDeliveryDate":
          - "agreedDeliveryExtensionEndDate":
          - "agreedDeliveryExtensionStartDate":
          - "groupDeal":
        </Accordion>

        <Accordion title="About getClaim Service" icon="fa-info-circle">
            <h6 align="right"> 08.12.2025 </h6>

          Some existing fields in the getclaims package service have been renamed. The old versions of the renamed fields will be removed from the response after two months. We kindly request that you make the necessary adjustments immediately to avoid any further issues.

          Fields where naming changes were made:

          - content/"id": > "claimId"
          - "vatBaseAmount": > "vatRate"
        </Accordion>

        <Accordion title="About Trendyol Problem on getShipmentPackage Service" icon="fa-info-circle">
            <h6 align="right"> 29.08.2025 </h6>

          Due to an incident with our getShipmentPackage service, if you are using the service with multiple parameters and a "Cancelled" status (for example, if you are trying to get both Cancelled and Created statuses), the "shipmentPackageStatus" field is not included in the service response. This issue began on August 28, 2025, and was resolved as of 1:00 PM on August 29, 2025. We kindly ask you to check your orders within the relevant timeframe.
        </Accordion>

        <Accordion title="New Service Announcement" icon="fa-info-circle">
            <h6 align="right"> 31.07.2025 </h6>

          We are excited to announce the launch of a new feature developed directly in response to your valuable feedback. The Product Archive API service is now live and available. This service is used to archive or unarchive your products in the Trendyol system. It supports both single and multiple product archiving operations.
        </Accordion>

        <Accordion title="New Fields Added to Webhook Services Response and GetShipmentPackages Service Response." icon="fa-info-circle">
            <h6 align="right"> 24.06.2025 </h6>

          New "createdBy" and "originPackageIds" fields have been added to the Trendyol OMS model (getShipmentPackages and Webhook services).

          The "createdBy" field indicates how the package was created:

          - **order-creation**: the package was created directly in the incoming order
          - **cancel**: the package was created after partial cancellation
          - **split**: the package was created based on the package split
          - **transfer**: orders that are directed to another seller by Trendyol because the seller who received the order does not have the product

          The "originPackageIds" field is filled after cancellation or split, after these operations it gives the packageid of the first package.
        </Accordion>

        <Accordion title="APIGW Base Url Changing" icon="fa-info-circle">
            <h6 align="right"> 26.05.2025 </h6>

          Dear Business Partner, In order to provide our service standards and increase the performance of our services, a base URL change has been made in our integration services. Old services have started to be closed as of the end of May 26. If you have not made any changes to the service URLs, you will encounter errors in your requests. In order to prevent any disruptions to your processes, we kindly ask you to check our new service endpoints as soon as possible, based on our service, through our integration document.
          [https://developers.trendyol.com/en/docs/category/5-trendyol-marketplace-integration](https://developers.trendyol.com/en/docs/category/5-trendyol-marketplace-integration)
          Best regards, Trendyol Team
        </Accordion>

        <Accordion title="New Fields Added to Webhook Services Response and GetShipmentPackages Service Response." icon="fa-info-circle">
            <h6 align="right"> 22.05.2025 </h6>

          New "latitude", "longitude" and "cargoDeci" fields were added to the Trendyol OMS model (getShipmentPackages and Webhook services) on 22.05.2025. You can access the details from the getShipmentpackages service document.
        </Accordion>

        <Accordion title="About BatchRequestResult Response" icon="fa-info-circle">
            <h6 align="right"> 09.05.2025 </h6>

          There has been an update in the BatchRequestResult Response of the Stock\&Price Update Service. You can access the new Response model via the Check Batchrequest Result page.
        </Accordion>

        <Accordion title="About Aras Cargo Supplier Pays Model" icon="fa-info-circle">
            <h6 align="right"> 08.05.2025 </h6>

          As Trendyol, in order to provide a better service to our sellers, we are making changes to the seller-pays integration with Aras Cargo as of Monday, May 12. With this change, our Cargo Tracking Code Notification (updateTrackingNumber) service will be closed and you must deliver your packages to the cargo company with the “cargoTrackingNumber” returned via our order packages picking service (getShipmentPackages).
          As of June 30, 2025; In order for sellers to switch to the new integration model, you must make changes to your integration structures and not report cargo tracking codes via the Cargo Tracking Number service.
        </Accordion>

        <Accordion title="About Trendyol Web Color Attribute" icon="fa-info-circle">
            <h6 align="right"> 08.05.2025 </h6>

          The web color 348 attribute was made mandatory on Monday, May 5. In order to avoid problems during the campaign period, this attribute has been changed to be optional until the end of the campaign. It will be made mandatory again after the campaign. We kindly ask you to update the category tree so that you do not experience problems during the product upload process.
        </Accordion>

        <Accordion title="Adding 'productCategoryId' and 'laborCost' to the Trendyol Integration Service" icon="fa-info-circle">
            <h6 align="right"> 11.04.2025 </h6>

          Dear Business Partner, The "productCategoryId" and "laborCost" fields has been added to our getShipmentpackages and webhook service. These fields will be added under the "lines" field in the order packages pull service.
          You can reach our integration service below;
          [https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/get-order-packages](https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/get-order-packages)
          Best regards, Trendyol Team
        </Accordion>

        <Accordion title="About Trendyol - API Health Check" icon="fa-info-circle">
            <h6 align="right"> 09.04.2025 </h6>

          In order to ensure the uninterrupted and smooth operation of our integration services, we are pleased to announce that we have launched our API Health Check page. With this page, you can follow the status of our integration services in real time and be informed immediately in case of any problems or errors.

          What Can You Do with the API Health Check Page?

          - You can check the operating status of the services (working/not working).
          - You can follow the general health status of the services.
          - You can reach our API Health Check page at [https://developers.trendyol.com/api-status](https://developers.trendyol.com/api-status).
        </Accordion>

        <Accordion title="About the Trendyol - Compensation Integration Service" icon="fa-info-circle">
            <h6 align="right"> 04.04.2025 </h6>

          The Compensation Integration has been added under the Delivery Integration heading. With this service, you can track your Compensation transactions for your order packages whose cargo company is TEX.
          Document link: [https://developers.trendyol.com/en/docs/trendyol-marketplace/delivery-integration/compensation-integration](https://developers.trendyol.com/en/docs/trendyol-marketplace/delivery-integration/compensation-integration)
        </Accordion>

        <Accordion title="About the New Product Features Added to the Product Control Regulation" icon="fa-info-circle">
            <h6 align="right"> 28.03.2025 </h6>

          According to legal regulations in Türkiye, new attributes has been added to our categories. You can check the attributes below; The relevant features are accessible from our category feature pull service with the following attributeId values:

          - attributeID: 1198 -> "Manufacturer Information"
          - attributeID: 1216 -> "Importer/Authorized Representative/Performance Service Provider"
          - attributeID: 1116 -> "Usage Instructions/Warnings"
          - attributeID: 1210 -> "CE Conformity Symbol"

          The property values that must include visuals (Visuals activated as of March 13):

          - attributeID: 134 -> Energy Class
          - attributeID: 1148 -> Product Information Form
          - attributeID: 1244 -> Package Image (front)
          - attributeID: 1245 -> Package Image (back)
          - attributeID: 1214 -> Energy and Nutritional Values
        </Accordion>

        <Accordion title="Trendyol - About Trendyol Accounting and Finance Integration" icon="fa-info-circle">
            <h6 align="right"> 21.03.2025 </h6>

          The shipmentPackageId field has been added to our Current Account Statement Integration settlements and otherFinancials services. You can check it through our integration document below:
          [https://developers.trendyol.com/docs/category/4-muhasebe-ve-finans-entegrasyonu](https://developers.trendyol.com/docs/category/4-muhasebe-ve-finans-entegrasyonu)
        </Accordion>

        <Accordion title="Trendyol - “identityNumber” Field" icon="fa-info-circle">
            <h6 align="right"> 18.03.2025 </h6>

          The "identityNumber" field will be added to our get shipment package service and webhook model under the "content" field on March 21. With the addition of the relevant field, the "tcIdentityNumber" field will be removed as of May 5.

          **NOTE:** For orders Romania to Romania (March 21 - April 9), this field will be set as 0. Starting April 9, the real CNP value will be returned in the identityNumber field.
          [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-getShipmentPackages](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-getShipmentPackages)
        </Accordion>

        <Accordion title="Regarding the Status Added to the Return Service." icon="fa-info-circle">
            <h6 align="right"> 14.03.2025 </h6>

          As of April 7, 2025, the “WaitingFraudCheck” status will be added to our Getting Returned Orders service. Returns that enter fraud control will be resolved within a maximum of 9 hours. Returns whose fraud control is successful will move to “Accepted”, otherwise “Rejected”.
          [https://developers.trendyol.com/en/docs/trendyol-marketplace/returned-orders-integration/getting-returned-orders](https://developers.trendyol.com/en/docs/trendyol-marketplace/returned-orders-integration/getting-returned-orders)
        </Accordion>

        <Accordion title="About the New Product Features Added to the Product Control Regulation" icon="fa-info-circle">
            <h6 align="right"> 05.03.2025 </h6>

          According to legal regulations in Türkiye, new attributes has been added to our categories (Manufacturer Info, Importer Info, Usage Instructions, CE Symbol, etc.). Visual links must be added to properties such as Energy Class and Product Information Form.
        </Accordion>

        <Accordion title="About Trendyol Stage Environment Integration Services" icon="fa-info-circle">
            <h6 align="right"> 27.02.2025 </h6>

          Since Trendyol internal tests will be conducted between 03.03.2025 and 17.03.2025, you may receive errors in your requests to our stage services. We plan to complete the tests as soon as possible.
        </Accordion>

        <Accordion title="About Service Limits Based on Listing Limits" icon="fa-info-circle">
            <h6 align="right"> 27.02.2025 </h6>

          The limits applied in our integration services will be updated based on listing limits (50k, 75k, 150k, 350k, or Unlimited).
          [https://developers.trendyol.com/en/docs/service-limitations](https://developers.trendyol.com/en/docs/service-limitations)
        </Accordion>

        <Accordion title="APIGW Base Url Changing" icon="fa-info-circle">
            <h6 align="right"> 26.02.2025 </h6>

          In order to ensure our service standards, the base URL is being changed. The old services will be closed as of May 26. Please check new service endpoints: [https://developers.trendyol.com/en](https://developers.trendyol.com/en)
        </Accordion>

        <Accordion title="APIGW Base Url Changing (Status Update)" icon="fa-info-circle">
            <h6 align="right"> 25.02.2025 </h6>

          Base URL change is ongoing. Status of live services:

          - Product, Order, Common Label, Return (with sellerId), Q\&A, Accounting, and Webhook services are all live.
        </Accordion>

        <Accordion title="About getShipmentPackages and webhook responses" icon="fa-info-circle">
            <h6 align="right"> 11.02.2025 </h6>

          New address fields added (countyId, countyName, shortAddress, stateName). For TR Marketplace, "countyId" is 0, others are empty.
        </Accordion>

        <Accordion title="APIGW Base Url Changing" icon="fa-info-circle">
            <h6 align="right"> 04.02.2025 </h6>

          Base URL change details and live dates for specific services (Invoice Link, Barcode Request, Q\&A services) were announced for February and March 2025.
        </Accordion>

        <Accordion title="About getShipmentPackages and webhook responses" icon="fa-info-circle">
            <h6 align="right"> 31.01.2025 </h6>

          New address fields added under "shipmentAddress" and "invoiceAddress" for CEE and Gulf regions.
        </Accordion>

        <Accordion title="Create a Test Order Service Update" icon="fa-info-circle">
            <h6 align="right"> 27.12.2024 </h6>

          New endpoint: [https://stageapi.trendyol.com/integration/order/orders/core](https://stageapi.trendyol.com/integration/order/orders/core)
        </Accordion>

        <Accordion title="Cargo Provider Update" icon="fa-info-circle">
            <h6 align="right"> 27.12.2024 </h6>

          Sendeo cargo company will not be used as of December 30. Kolay Gelsin cargo company should be used instead.
        </Accordion>

        <Accordion title="Current Account Statement Integration Service Update" icon="fa-info-circle">
            <h6 align="right"> 27.12.2024 </h6>

          New transactionType=Stoppage added for GET otherfinancials endpoint to list E-commerce Withholding items.
        </Accordion>

        <Accordion title="Update Labor Cost" icon="fa-info-circle">
            <h6 align="right"> 25.12.2024 </h6>

          **NOTE: Türkiye Marketplace Only.** As of Jan 1, 2025, product price and labor cost must be separated in specific categories due to tax law changes.
          [https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/update-labor-cost](https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/update-labor-cost)
        </Accordion>

        <Accordion title="getShipmentPackages Service Error" icon="fa-info-circle">
            <h6 align="right"> 24.12.2024 </h6>

          A temporary system error (500) occurred between 10:56 and 11:01 on 24.12.2024. The issue is resolved.
        </Accordion>

        <Accordion title="Product Creation Errors" icon="fa-info-circle">
            <h6 align="right"> 23.12.2024 </h6>

          Issue detected with duplicate attributes appearing in some categories during product creation. Teams are working on a resolution.
        </Accordion>

        <Accordion title="Create a Test Order Service Update" icon="fa-info-circle">
            <h6 align="right"> 23.12.2024 </h6>

          "DiscountPercentage" field has been added under "lines" in the test order creation service.
        </Accordion>

        <Accordion title="Trendyol- getShipmentPackage Service Update" icon="fa-info-circle">
            <h6 align="right"> 18.12.2024 </h6>

          A temporary 500 error issue occurred between 17.12.2024 and 18.12.2024. The problem is resolved.
        </Accordion>

        <Accordion title="Trendyol - Webhook Services Updates" icon="fa-info-circle">
            <h6 align="right"> 13.12.2024 </h6>

          New features: Webhook Retry Model, Webhook Status Model, Webhook Authorization (API_KEY), and Webhook Active/Passive Model.
        </Accordion>

        <Accordion title="Trendyol- WebColor Attribute Update" icon="fa-info-circle">
            <h6 align="right"> 09.12.2024 </h6>

          Web Color (348) attribute will be mandatory for product creation for Turkey after January 15th.
        </Accordion>

        <Accordion title="About Adding MENSEI Information to the Get Order Packages Service" icon="fa-info-circle">
            <h6 align="right"> 19.10.2023 </h6>

          Origin information ("productOrigin") added under "lines" field for micro export order invoices.
        </Accordion>

        <Accordion title="Deleting e-Archive Invoice Link" icon="fa-info-circle">
            <h6 align="right"> 25.08.2023 </h6>

          Incorrect invoices can be deleted and re-sent.
          [https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/delete-invoice-link](https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/delete-invoice-link)
        </Accordion>

        <Accordion title="Return Test Orders to WaitingInAction Status (on stage environment)" icon="fa-info-circle">
            <h6 align="right"> 21.08.2023 </h6>

          New service for notifying return status in stage environment.
          [https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/test-order-statu-updates](https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/test-order-statu-updates)
        </Accordion>

        <Accordion title="About Cargo Invoice Details Services" icon="fa-info-circle">
            <h6 align="right"> 10.08.2023 </h6>

          Access details of cargo invoices issued by Trendyol.
          [https://developers.trendyol.com/en/docs/trendyol-accounting-integration/cargo-invoice-details](https://developers.trendyol.com/en/docs/trendyol-accounting-integration/cargo-invoice-details)
        </Accordion>

        <Accordion title="About Invoice Link Sending Service Update for Micro Export Packages." icon="fa-info-circle">
            <h6 align="right"> 27.07.2023 </h6>

          “invoiceNumber” and “invoiceDateTime” fields required for microexport as of 4 August 2023.
        </Accordion>

        <Accordion title="About Azerbaijan Orders." icon="fa-info-circle">
            <h6 align="right"> 12.07.2023 </h6>

          Azerbaijan countryCode "AZ" implementation details and micro export order identification ("micro": True).
        </Accordion>

        <Accordion title="About Invoice Sending for Micro Export Orders." icon="fa-info-circle">
            <h6 align="right"> 11.07.2023 </h6>

          Micro export invoices must be sent via seller panel or invoice link service instead of encrypted email.
        </Accordion>

        <Accordion title="About VAT Rates." icon="fa-info-circle">
            <h6 align="right"> 07.07.2023 </h6>

          VAT rates changed from 8%/18% to 10%/20% as of July 10, 2023.
        </Accordion>

        <Accordion title="About Invoice Link Sending Service Improvement Reminder for Micro Export Packages." icon="fa-info-circle">
            <h6 align="right"> 15.06.2023 </h6>

          Reminder for “invoiceNumber” and “invoiceDateTime” mandatory fields in SendInvoiceLink service.
        </Accordion>

        <Accordion title="About Azerbaijan Orders." icon="fa-info-circle">
            <h6 align="right"> 15.06.2023 </h6>

          Timeline for Azerbaijan billing address and countryCode ("AZ") changes.
        </Accordion>

        <Accordion title="About Test Orders Statu Updates (on stage environment)" icon="fa-info-circle">
            <h6 align="right"> 12.06.2023 </h6>

          Testing statuses: "Shipped", "AtCollectionPoint", "Delivered", "UnDelivered" and "Returned".
        </Accordion>

        <Accordion title="About Sending Invoice Link (sendInvoiceLink) Service Improvement." icon="fa-info-circle">
            <h6 align="right"> 16.05.2023 </h6>

          New fields added for Azerbaijan Export project.
          Sample JSON included in documentation.
        </Accordion>
      </Tab>

      <Tab title="International Marketplace">
        <Accordion title="About Mandatory Package Dimensions for Romania Large Parcel Deliveries with KLG (08.10.2026)" icon="fa-undo">
                              <h6 align="right"> 08.10.2026 </h6>

          Dear Business Partner,

          Starting October 19, 2026, we are introducin&#x67;**&#x20;KLG as our new shipping partner for large package deliveries** in Romania (TY Pays model).

          To ensure your integration remains complian&#x74;**, it is now mandatory to submit the following metrics for all large packages shipped via KLG:**

          - Deci
          - Box Quantity
          - Width, Length, and Height

          **How to submit this data:&#xA;**&#x59;ou can send the required metrics using the Notify Deci and Box Quantity Information service.

          **API Documentation & Service Details:** [https://developers.trendyol.com/v3.0/docs/13-notify-deci-and-box-quantity-information](https://developers.trendyol.com/v3.0/docs/13-notify-deci-and-box-quantity-information)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Regarding the Temporary Interruption in Webhook Services (06.10.2026)" icon="fa-undo">
                        <h6 align="right"> 06.10.2026 </h6>

          Dear Business Partner,

          During the technical maintenance and update operations performed on our Trendyol Integration Services, a temporary interruption occurred in our webhook service.

          Details:

          Affected Service: Webhook model

          Date and Time Range: 6th of October 2026 during 11:02 - 12:25

          Impact: Order information was not delivered to your webhook model during the specified time frame.

          Action Required:
          The issue experienced between 11:02 and 12:25 has been resolved, and your order data generated during this time frame has been transferred to your webhook model. No action is required on your part. However, should you wish to verify, you may send a request to the order retrieval service (getShipmentpackages) covering the relevant time frame.

          Thank you for your understanding and cooperation.

          We appreciate your understanding and wish you a productive day.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About New Customer Question Integration Services (24.09.2026)" icon="fa-undo">
                  <h6 align="right"> 24.09.2026 </h6>

          Dear Business Partner,

          We are excited to announce the release of our new Customer Question Integration Services.

          You can now fetch customer questions and submit your answers directly through integration service.

          Service details:

          Getting Customer Questions: [https://developers.trendyol.com/v3.0/docs/getting-customer-questions](https://developers.trendyol.com/v3.0/docs/getting-customer-questions)
          Answering Csutomer Questions: [https://developers.trendyol.com/v3.0/docs/answering-customer-questions](https://developers.trendyol.com/v3.0/docs/answering-customer-questions)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Trendyol Integration Reject Returned Orders Services (getClaimsIssueReasons) Update (23.09.2026)" icon="fa-undo">
                        <h6 align="right"> 23.09.2026 </h6>

          Dear Business Partner,

          At Trendyol, we continuously strive to make our return rejection reasons more transparent, fast, and efficient across our platform.
          In line with this goal, we have introduced a comprehensive optimization in the Get Claim Issue Reasons (getClaimsIssueReasons) structure used within our Return API Services. This enhancement aims to reduce operational complexity and prevent disputes and grievances resulting from incorrect reason selections.
          The relevant enhancements will go live as of October 8.

          Updates & Technical Details
          A. Deprecated (Deactivated) Rejection Reasons The following reason_id values that overlap in business logic or have become obsolete will be deactivated as of October 8:
          251 – Product received from customer is defective/damaged
          1701 – The item I sent is not incorrect
          1751 – The item I sent is not defective
          2201 – The item I sent is not missing
          2151 – I will send the invoice/warranty document for the customer to get support from technical service
          Important: Following the go-live, any API requests pointing to these deprecated rejection reasons will return error messages from the system.

          B. Newly Added Rejection Reasons Three new rejection reasons have been defined in our system to accurately cover specific return scenarios and special cases:
          2078 – The received product has no defect. I want to accept the return for customer satisfaction
          2079 – I sent the correct product in good condition. The returned product arrived missing, damaged, or as a different product

          C. Updated Reason Descriptions & Titles The unique identifiers (reason_id) for the following reasons remain unchanged; however, their UI display titles and descriptions have been updated to enhance clarity:
          51:  The product was used abnormally and/or damaged by the customer
          151: The returned product is missing a part/accessory
          201: A completely different product (wrong product) was returned from the one sold
          401: The returned product or item quantity is missing
          451: I'll send the product for analysis (CEE only)
          1651: The return package was not delivered to me
          2051: The product's protective packaging (hygiene seal, seal, package) has been opened (CEE only)

          By October 8, you are required to incorporate the newly added codes into your systems among the mapped rejection reasons, remove the deactivated rejection codes from your systems, and update your modified (reason_id) descriptions accordingly.

          Link: [https://developers.trendyol.com/v3.0/docs/6-claim-issue-reasons-1](https://developers.trendyol.com/v3.0/docs/6-claim-issue-reasons-1)
          Link: [https://developers.trendyol.com/v3.0/docs/6-claim-issue-reasons](https://developers.trendyol.com/v3.0/docs/6-claim-issue-reasons)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion
          title="Regarding the Temporary Interruption in Order Services
(08.09.2026)"
          icon="fa-undo"
        >
                  <h6 align="right"> 08.09.2026 </h6>

          Dear Business Partner,

          During the technical maintenance and update operations performed on our Trendyol Integration Services, a temporary disruption occurred in our GET shipment packages service.

          Details:

          Affected Service: Get Shipment Packages Services / Webhook Model
          Date & Time Frame: September 8, 14:00 – 15:34
          Impact: Some of the new orders created within the specified time interval were not returned in the service responses.
          Action Required: To ensure that your order data generated between 14:00 and 15:34 is fully transferred to your end and properly synchronized, please re-send a request (retry) to the get shipment packages service covering this specific time frame.
          We kindly remind you to verify your systems to prevent any potential discrepancies.

          Thank you for your understanding and cooperation.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion
          title="Regarding the Temporary Interruption in Order Services
(02.09.2026)"
          icon="fa-undo"
        >
                  <h6 align="right"> 02.09.2026 </h6>

          Dear Business Partner,

          Due to a temporary technical issue experienced in our Order Management Services today between 15:29 and 16:01 (GMT+3), new orders created within this time frame were not returned by the system.

          The underlying issue has been resolved, and the service is fully operational. To ensure complete data synchronization and prevent any order processing discrepancies on your side, please follow the required action below.

          Required Action:

          Please re-issue a request (retry) to the Order Fetching Service (Get Orders) filtered specifically for today's time window between 15:29 and 16:01 (GMT+3) to fetch all missed order data into your systems.

          Thank you for your understanding and cooperation.

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Update on Product/Order and Services Delivery Options Updates (deliveryOption)" icon="fa-undo">
                        <h6 align="right"> 01.09.2026 </h6>

          Dear Business Partner,

          In order to define product basis new delivery options we would like to inform about changes in Product and Order Services.

          This update will take effect on September 7, 2026. Please find the technical details and transition plan outlined below.

          **New Implementation (Effective September 7, 2026) in Product Services**:
          With the new structure delivery definitions will be managed through the deliveryDuration parameter.

          In order to define “Same Day Shipping”: You can add deliveryDuration: 0
          In order to define “Ship by Next Day”: You can add deliveryDuration: 1

          **Current Status in Order Services:**
          In the current setup fastDeliveryType field (shipment package basis) and fastDeliveryOptions (product basis) fields only returns null.

          **New Implementation (Effective September 7, 2026) in Order Services:**
          With the new structure, fastDeliveryType field returns SameDayShipping, FastDelivery, or null. If a package contains products with different fast delivery types, the highest priority applies (SameDayShipping > FastDelivery > null).
          And fastDeliveryOptions field returns SameDayShipping, FastDelivery or null based on the delivery option defined for that specific product.

          **Please find related endpoint services as below:**

          Product Create V1: [https://developers.trendyol.com/v3.0/docs/2-product-create](https://developers.trendyol.com/v3.0/docs/2-product-create)

          Product Update V1: [https://developers.trendyol.com/v3.0/docs/3-product-update](https://developers.trendyol.com/v3.0/docs/3-product-update)

          Check Batchrequest Result V1: [https://developers.trendyol.com/v3.0/docs/8-check-batchrequest-result](https://developers.trendyol.com/v3.0/docs/8-check-batchrequest-result)

          Product Filter V1: [https://developers.trendyol.com/v3.0/docs/4-product-filter](https://developers.trendyol.com/v3.0/docs/4-product-filter)

          Product Create V2: [https://developers.trendyol.com/v3.0/docs/product-create-v2](https://developers.trendyol.com/v3.0/docs/product-create-v2)

          Unapproved Product Update V2: [https://developers.trendyol.com/v3.0/docs/product-update-unapproved-product-v2](https://developers.trendyol.com/v3.0/docs/product-update-unapproved-product-v2)

          Approved Product Update V2 - Delivery Information Update: [https://developers.trendyol.com/v3.0/docs/product-update-approved-product-v2](https://developers.trendyol.com/v3.0/docs/product-update-approved-product-v2)

          Check Batchrequest Result V2: [https://developers.trendyol.com/v3.0/docs/check-batchrequest-result](https://developers.trendyol.com/v3.0/docs/check-batchrequest-result)

          Unapproved Product Filter V2: [https://developers.trendyol.com/v3.0/docs/product-filter-unapproved-product-v2](https://developers.trendyol.com/v3.0/docs/product-filter-unapproved-product-v2)

          Approved Product Filter V2: [https://developers.trendyol.com/v3.0/docs/product-filter-approved-product-v2](https://developers.trendyol.com/v3.0/docs/product-filter-approved-product-v2)

          Get Shipment Packages: [https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages](https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages)

          Get Shipment Packages with Cursor: [https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream](https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream)

          Webhook Model: [https://developers.trendyol.com/v3.0/docs/1-webhook-model](https://developers.trendyol.com/v3.0/docs/1-webhook-model)

          Best regards,
          Trendyol Team
        </Accordion>

        <Accordion title="Update on Financial Settlement Data" icon="fa-undo">
                  <h6 align="right"> 28.08.2026 </h6>

          Dear Business Partner,

          We would like to inform you about a recent technical issue; financial settlement data and current account statement records were incorrectly displayed between 5 August and 27 August 2026. This has now been resolved and your data has been updated to reflect your up-to-date information.
          To ensure your records reflect the most up-to-date information, please retrieve your financial settlement data, past payment reports and Current Account Statement reports for the period starting from 5 August 2026.

          If you have any questions, please do not hesitate to contact us via Live Support.

          Best regards,
          Trendyol Team
        </Accordion>

        <Accordion title="New Cargo Carier in UAE and KSA" icon="fa-undo">
            <h6 align="right"> 13.08.2026 </h6>

          Dear Business Partner,

          We will add new cargo carier for both "Trendyol Pays" and "Seller Pays" to our platform for Saudi Arabia and United Arab Emirates starting from 28th of August 2026.
          You can add this carrier company code as "Logistiq H\&B" to your platform as well.

          [https://developers.trendyol.com/v3.0/docs/8-carrier-companies](https://developers.trendyol.com/v3.0/docs/8-carrier-companies)

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="Box Now Delivery Model for CEE Region" icon="fa-undo">
          <h6 align="right"> 31.07.2026 </h6>

          Dear Business Partner,

          We will add new delivery company as BoxNow to “TY Pays” model for below for Greece to Greece orders.
          Go live date is 21st August 2026. You need to add this carrier company code as BOXNOW to your platform and add new fields to order and returned order services.
          This cargo provider will be providing locker to locker delivery option.

          New fields added to get shipment packages service and webhook model:

          In case an order package to be dropped to BoxNow locker instead of cargo provider picking, below 2 fields in the response body to be used to progress:

          1. “sellerDeliveryMethod”: “LOCKER”<br />In case it is LOCKER, package needs to be dropped to the BoxNow locker.Otherwise returns WAREHOUSE or null

          2. “sellerOtpCode”: “2342345”
             In case sellerDeliveryMethod is LOCKER, this field returns PIN code to open BoxNow compartment .Otherwise returns null

          New fields added to the get returned order service:

          In case a returned order package to be taken from BoxNow locker, below 3 fields in the response body to be used to progress:

          1. “sellerDeliveryMethod”: “LOCKER”
             In case it is LOCKER, package needs to be taken from the BoxNow locker.Otherwise returns WAREHOUSE or null

          2. “sellerOtpCode”: “2342345”
             In case sellerDeliveryMethod is LOCKER, this field returns PIN code to open BoxNow compartment .Otherwise returns null

          3. “sellerCollectionPointDetails”: collectionPointId
             In case sellerDeliveryMethod is LOCKER, this field returns locker point that you need to take returned order package from. It returns value when “claimItemStatus” is waitingInAction. You can check correspondence of the id via BoxNow website

          New fields added for rejected return orders:

          If the seller rejects a return, the package must be dropped off at any BoxNow locker to be shipped back to the customer. You can use the following two fields under the rejectedPackageInfo array to proceed:

          1. “sellerDeliveryMethod”: “LOCKER”
             In case it is LOCKER, package needs to be dropped to the BoxNow locker.Otherwise returns WAREHOUSE or null

          2. “sellerOtpCode”: “2342345”
             In case sellerDeliveryMethod is LOCKER, this field returns PIN code to open BoxNow compartment .Otherwise returns null

          Document link:

          Carier Companies:
          [https://developers.trendyol.com/v3.0/docs/8-carrier-companies](https://developers.trendyol.com/v3.0/docs/8-carrier-companies)

          Orders:
          [https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages](https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages)

          [https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream](https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream)

          [https://developers.trendyol.com/v3.0/docs/1-webhook-model](https://developers.trendyol.com/v3.0/docs/1-webhook-model)

          Returns:
          [https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders](https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders)

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About New Order Integration Endpoint" icon="fa-undo">
            <h6 align="right"> 30.07.2026 </h6>

          Dear Business Partner,

          The following endpoint services will be deprecated as of October 15, 2026. Until October 15, 2026, requests to the following services will return error code 426 three times a day for 10 minutes each time.

          [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/orders)

          You must migrate to below Order V2 endpoint services by this date. With V2 order endpoint services maximum accessible record count will be limited to 10,000 (maxQueryWindowResult).

          [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/v2/orders)

          Document link:

          [https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages](https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages)

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Current Account Statement (CHE) Integration Service Changes" icon="fa-undo">
            <h6 align="right"> 06.07.2026 </h6> 

          Hello,

          The id and paymentOrderId values returned by the Current Account Statement (CHE<br />services will be updated.

          We will complete this change by 3 August 2026. After that date, the new id and<br />paymentOrderId values will be valid.

          Matching or filtering with previously stored id / paymentOrderId values will no
          longer work.

          For this reason, we kindly ask you to re-fetch your settlements and
          otherfinancials data by date range after 3 August 2026.

          There will be no change to the endpoints. You can continue using the following<br />addresses:

          The startDate, endDate, transactionType, page, and size parameters will continue<br />to work the same way.

          The storeFrontCode header will also remain mandatory.
          The date range rule is unchanged: a maximum of 15 days per request.

          What we kindly ask from you after 3 August 2026:

          1. Not using old id / paymentOrderId values as keys
          2. Re-fetching otherfinancials and settlements reports for the relevant period by    date range
          3. Updating your own records with the new id and paymentOrderId values returned in<br />the response
          4. Cleaning up old id / paymentOrderId records

          Please note: re-fetching with an old paymentOrderId is not recommended.
          The correct approach is to re-fetch the reports using startDate, endDate, and
          transactionType.

          If you have any questions, please reach out to us through the Integration support<br />channels.
          Sharing a sample sellerId and an old/new paymentOrderId would also be helpful if<br />needed.

          Thank you,
          Trendyol Integration
        </Accordion>

        <Accordion title="About Product Services Rate Limit Changes" icon="fa-undo">
            <h6 align="right"> 06.07.2026 </h6>

          Dear Business Partner,

          To ensure system health, new rate limits based on seller product listing limits will be applied to our Product Integration Services, starting from September 14, 2026. You can access the new limit details for the relevant services via the link below:

          [https://developers.trendyol.com/v3.0/docs/6-service-limitations](https://developers.trendyol.com/v3.0/docs/6-service-limitations)
        </Accordion>

        <Accordion title="About Saudi Arabia New Cargo Company" icon="fa-undo">
            <h6 align="right"> 30.06.2026 </h6>

          Dear Business Partner,

          We are adding a new cargo provider code for Saudi Arabia orders. Please ensure you have taken the necessary actions:

          New Carrier Code: A new cargo company code, Joy Express, will be added to both "TY Pays" and "Seller Pays" model within the first week of July.
          You must add JoyExpress to your platform as a valid cargo company code.

          Document link:

          [https://developers.trendyol.com/v3.0/docs/8-carrier-companies](https://developers.trendyol.com/v3.0/docs/8-carrier-companies)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Country Based Webhook Creation and Filtering" icon="fa-undo">
            <h6 align="right"> 29.06.2026 </h6>

          Dear Business Partner,

          We have added a new optional field, "countryCodes" to our Webhook Create and Webhook Filter services.

          This field allows you to manage orders by specific countries. If this field is not added in the request body, you will continue to receive orders from all active countries. Your existing webhooks will not be affected by this change. However, if you wish to separate your webhooks by country, you can create new ones using this field.

          Service details are provided below:

          - Webhook Create

          - Webhook Filter

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Get Shipment Packages Service New Rate Limits" icon="fa-undo">
            <h6 align="right"> 02.06.2026 </h6>

          Dear Business Partner,

          The limits for the current getShipmentPackage service will be updated as of June 8 , 2026. Your requests to this service must comply with the new limits; otherwise, you will receive a 429 error. Current getShipmentPackages will be limited to 10,000 total records.

          Service Limitations:

          [https://developers.trendyol.com/v3.0/docs/6-service-limitations#/versions](https://developers.trendyol.com/v3.0/docs/6-service-limitations#/versions)

          In order to provide large data scanning ability yu can use the "getShipmentPackagesStream"  service. The getShipmentPackagesStream endpoint allows you to fetch order packages using cursor-based streaming. This endpoint is designed for large-scale data scanning (full scan), periodic synchronization (polling/cron), and exporting all orders; while the response structure remains the same, pagination-related fields such as totalElements, totalPages, page will no longer be returned due to the switch to a cursor-based pagination mechanism.

          Data from the last 3 months is accessible through this endpoint.

          You can reach the details below the link:

          [https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream#/versions](https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream#/versions)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About Update on Country of Origin (Origin) Field Definition Processes" icon="fa-undo">
            <h6 align="right"> 13.05.2026 </h6>

          Dear Business Partner,

          We are implementing a significant update to our product services to modernize our data structures and enhance the efficiency of your integration processes.

          Moving forward, the "Origin" (Country of Origin) information—which was previously managed under the "Attribute" section—will now be handled as an independent, standard field, similar to stockCode or barcode.

          **How Will the Transition Process Work?**

          To ensure a seamless experience, we have designed a two-phase ""soft transition"" model.

          **1. Hybrid Period (Transition Phase):**

          A new field named origin has been added to the product payload.

          During this period, origin information can be sent via both the existing attributes section and the new origin field.

          Currently, the new field is optional.

          You can access the List of Origin Values through our integration documentation.

          **2. Full Transition:**

          Support for sending origin information via the attributes section will be gradually phased out starting from 30th of June 2026. Only new field will be remaining for country of origin information of the product.

          **Data Migration Information**

          There is no need for concern regarding your historical data. Once the full transition deadline is reached, all existing origin information within the attributes section will be automatically migrated to the new origin field by the Trendyol team.

          **You can review the newly added field in the relevant services via our integration documentation:**

          Product Creation V1 (createProducts)

          Update Product V1 (updateProduct)

          Batch Request Status (getBatchRequestResult)

          Product Filtering V1 (filterProducts)

          Product Creation V2

          Update Product - Unapproved V2

          Update Product - Approved V2 (Variant)

          Product Filtering - Unapproved V2

          Product Filtering - Approved V2

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About SGR Price Definitions in Product Listings for Romania" icon="fa-undo">
            <h6 align="right">29.04.2026 </h6>

          Dear Business Partner,

          To improve the product listing processes on our platform and ensure full compliance with legal regulations, it is needed to fill **"SGR Price"** field for the **related categories starting from 11th of May 2026 for Romania.**

          SGR (Deposit-Return System) amounts must be calculated and entered based on the unit count of the product you are offering.

          You can find the **calculation method** and **related categories** for SGR price as in below link:

          [https://developers.trendyol.com/v3.0/docs/list-of-categories-requiring-sgr-definition](https://developers.trendyol.com/v3.0/docs/list-of-categories-requiring-sgr-definition)

          **New fields** have been added to the **product, order and returned order services**:

          - "sgrPrice" field is added to the Product Create, Product Filter, Product Update, Check Batch Request Result Services
          - "lineSgrFee" and "totalSgrFee" are added to the get shipmentPackages service and webhook model
          - "totalSgrFee" is added to the get Returned Order Service

          **Please review our service-based integration documentation for new fields:**

          **Product V1 Services (will be closed mid August 2026):**

          - [https://developers.trendyol.com/v3.0/docs/2-product-create](https://developers.trendyol.com/v3.0/docs/2-product-create)
          - [https://developers.trendyol.com/v3.0/docs/3-product-update](https://developers.trendyol.com/v3.0/docs/3-product-update)
          - [https://developers.trendyol.com/v3.0/docs/4-product-filter](https://developers.trendyol.com/v3.0/docs/4-product-filter)
          - [https://developers.trendyol.com/v3.0/docs/8-check-batchrequest-result](https://developers.trendyol.com/v3.0/docs/8-check-batchrequest-result)

          **Product V2 Services:**

          - [https://developers.trendyol.com/v3.0/docs/product-create-v2](https://developers.trendyol.com/v3.0/docs/product-create-v2)
          - [https://developers.trendyol.com/v3.0/docs/product-update-unapproved-product-v2](https://developers.trendyol.com/v3.0/docs/product-update-unapproved-product-v2)
          - [https://developers.trendyol.com/v3.0/docs/product-update-approved-product-v2](https://developers.trendyol.com/v3.0/docs/product-update-approved-product-v2)
          - [https://developers.trendyol.com/v3.0/docs/product-filter-unapproved-product-v2](https://developers.trendyol.com/v3.0/docs/product-filter-unapproved-product-v2)
          - [https://developers.trendyol.com/v3.0/docs/product-filter-approved-product-v2](https://developers.trendyol.com/v3.0/docs/product-filter-approved-product-v2)
          - [https://developers.trendyol.com/v3.0/docs/check-batchrequest-result](https://developers.trendyol.com/v3.0/docs/check-batchrequest-result)

          **Get Shipment Packages Service:**

          - [https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages](https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages)
          - [https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream](https://developers.trendyol.com/v3.0/docs/get-shipment-packages-stream)

          **Webhook Model:**

          - [https://developers.trendyol.com/v3.0/docs/1-webhook-model](https://developers.trendyol.com/v3.0/docs/1-webhook-model)

          **Get Returned Order Service:**

          - [https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders](https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders)

          Sincerely,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Regarding the Temporary Delay in the getShipment Package Service" icon="fa-undo">
            <h6 align="right">22.04.2026 </h6>

          Dear Business Partner,

          Between April 21st, 16:00 and April 22nd, 13:40, some sellers attempting to retrieve order packages from the integration service encountered errors. This issue was resolved as of April 22nd, 13:41. We recommend checking your orders from this period through the integration services.

          Sincerely,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About New Video Upload Service" icon="fa-undo">
            <h6 align="right"> 08.04.2026 </h6>

          Dear Business Partner,

          We have added a new integration service that allows you to add video content to your products. You can now manage your product videos directly through our integration services.

          - **Video Upload Service**: Used to add video content to your products.
          - **Video Listing Service**: Used to list the approval status and list your uploaded videos

          [https://developers.trendyol.com/v3.0/update/docs/video-upload-filtering-services](https://developers.trendyol.com/v3.0/update/docs/video-upload-filtering-services)

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="Infrastructure Maintenance for Product Processes" icon="fa-undo">
            <h6 align="right"> 06.04.2026 </h6>

          Dear Business Partner,

          Due to an infrastructure migration, all operations in the flows for creating new products, updating unapproved products, and deleting unapproved products will be reflected with a delay. No data loss is expected; however, since the processing will be delayed, operations may appear incomplete on the dashboard and in API responses.

          Operation Start Date: April 7, 23:00
          Operation End Date: April 8, 03:00

          Best regards,

          Trendyol Integration Team
        </Accordion>

        <Accordion title="About New Field in Getting Returned Order Service" icon="fa-undo">
            <h6 align="right"> 06.04.2026 </h6>

          Dear Business Partner,

          We are introducing a new field, **"dontShipBack"**, to the **Getting Returned Orders service** response starting **from April 13, 2026**.
          This field indicates whether a returned package needs to be sent back to the customer. Please follow the logic below:

          If **"dontShipBack": true**: You do not need to ship the package back to the customer.

          If **"dontShipBack": false**: You must ship the package back to the customer only if your rejection request has been approved by Trendyol.

          You can continue to track the status of your rejection requests via the Get Returned Order service on "claimItemStatus" status.

          Please ensure your integration is updated by April 13, 2026 to align with this new return flow.

          CEE Region Returned Order Service: [https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders](https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders)

          Gulf Region Retrned Order Service: [https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders-1](https://developers.trendyol.com/v3.0/docs/2-getting-returned-orders-1)

          Thank you for your cooperation.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Trendyol getShipmentPackage / Webhook Model" icon="fa-info-circle">
          <h6 align="right"> 02.04.2026 </h6>

          Dear Business Partner

          New fields and renamed versions of existing fields have been added to the response for the order package pull service and webhook model. Additionally, some fields have been removed. The old versions of the renamed fields will be removed at 2 April 2026 in the stage environment response and 6 April 2026 in the production environment response. We kindly request that you make the necessary adjustments immediately to avoid any further issues.

          **Newly added fields:**

          - “cancelledBy”:
          - “cancelReason”:
          - “cancelReasonCode”:
          - "lineTotalDiscount" ("lineSellerDiscount"+ "lineTyDiscount")
          - "packageTotalDiscount": ("packageSellerDiscount"+ "packageTyDiscount")

          **Fields where naming changes were made:**

          - "merchantSku": > "stockCode"
          - "merchantId": > "sellerId"
          - root/"id": > "shipmentPackageId"
          - line/"id": > "lineId"
          - line/"amount": > "lineGrossAmount"
          - line/"discount": > "lineSellerDiscount":
          - line/"tyDiscount": > "lineTyDiscount"
          - line/ "lineItemDiscount": > "lineItemSellerDiscount"
          - line/"price": > "lineUnitPrice"
          - root/"grossAmount": > "packageGrossAmount"
          - "totalDiscount": > "packageSellerDiscount"
          - "totalTyDiscount": > "packageTyDiscount"
          - "totalPrice": > "packageTotalPrice"
          - "productCode": > "contentId"
          - "vatBaseAmount": > "vatRate"

          **Fields to remove:**

          - "sku":
          - "scheduledDeliveryStoreId":
          - "agreedDeliveryDateExtendible":
          - "extendedAgreedDeliveryDate":
          - "agreedDeliveryExtensionEndDate":
          - "agreedDeliveryExtensionStartDate":
          - "groupDeal":

            **You can access our integration service below;**

          [https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages#/versions](https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages#/versions)

          [https://developers.trendyol.com/v3.0/update/docs/1-webhook-model#/versions](https://developers.trendyol.com/v3.0/update/docs/1-webhook-model#/versions)

          Best regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Order Status Delay for Trendyol Pays Model in CEE" icon="fa-info-circle">
            <h6 align="right"> 27.03.2026 </h6>

          Dear Business Partner,

          Order status updates may be delayed due to the system error for Trendyol Pays model in CEE region. Our technical team is working on it and will take action as soon as possible. If you believe an exemption is necessary, you can contact us via Seller Support in Seller Panel.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About New Field in Order Services" icon="fa-undo">
            <h6 align="right"> 16.03.2026 </h6>

          Dear Business Partner,

          We have added a new field named "businessUnit" under the lines object in our Get Shipment Packages Service and Webhook model. This field is provided for informational purposes, allowing you to track which business unit your products belong to. If you wish to monitor the business unit classification of your orders, you may now utilize this field in your integrations.

          **Related services:**

          - Get Shipment Packages

          - Webhook Model

          Thank you for your cooperation.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About New RO to RO TY Pays Cargo Company Code" icon="fa-undo">
            <h6 align="right"> 12.03.2026 </h6>

          Dear Business Partner,

          We are adding a new cargo provider code for Romania to Romania (RO to RO) orders. Please ensure you have taken the necessary actions:

          New Carrier Code: A new cargo company code, FANEX, has been added to "TY Pays" model. You must add FANEX to your platform as a valid cargo company code.

          Document link:

          [https://developers.trendyol.com/v3.0/docs/8-carrier-companies](https://developers.trendyol.com/v3.0/docs/8-carrier-companies)

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Temporary Delay in Get Shipment Packages Service" icon="fa-undo">
            <h6 align="right"> 09.03.2026 </h6>

          Dear Business Partner,

          We are currently experiencing a temporary delay in order package status updates. Our technical team is working to resolve the issue as quickly as possible. Please be advised that this is a temporary situation. Thank you for your patience and understanding.

          \*\*The issue was resolved as of March 10th, 11:30 AM.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Get Shipment Packages Service" icon="fa-undo">
            <h6 align="right"> 05.03.2026 </h6>

          Dear Business Partner,

          In our continuous effort to provide you with a faster, more stable, and seamless platform experience, we are consistently optimizing our system performance. As part of these improvements, we would like to inform you of an upcoming update to our getShipmentPackages Service.
          To optimize system resources and significantly improve API response times, we are updating the time limit for historical order data retrieval. The service, which previously allowed you to fetch orders from the past 3 months, will be updated to support a maximum retrieval **period of 1 month (30 days)**, effective **5 March 2026**.

          **What does this mean for you?**

          Starting **5 March 2026**, you will only be able to fetch order packages from the last 1 month via this service.
          If you require order data older than 1 month (up to the previous 3-month limit), we strongly advise you to check Trendyol Seller Center.
          Please ensure that you update your integrations, automated tasks, and reporting processes to query a maximum of 1 month's data to avoid any errors.

          We kindly ask you to make the necessary adjustments in a timely manner to minimize any disruption to your operations. We appreciate your understanding and cooperation as we work to enhance our infrastructure.

          If you have any questions or require technical support, please do not hesitate to reach out to our team.

          Best regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Local Language Support in Product V2 Services" icon="fa-undo">
            <h6 align="right"> 27.02.2026 </h6>

          Dear Business Partner,

          We are reaching out to inform you about Romanian and Arabic language support has been added to our Product V2 services.

          You can add the "Accept-Language" as Header Parameter in order to specify your preferred language as below:

          - RO is used for listing in the Romanian language on the RO storefront
          - AR is used for listing in the Arabic language on the SA and AE storefronts
          - EN is used for listing in the English language on all International storefronts

          Related Services (v2)

          You can access and review the updated versions of the following services via our API documentation for International Marketplace below:

          - Product Create v2
          - Product Filtering - Approved Products v2
          - Product Update - Unapproved Product v2
          - Product Update - Approved Product - Content Update v2
          - Category List
          - Category Attribute List v2
          - Category Attribute Values List v2

          Best regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Get Shipment Packages Service" icon="fa-undo">
            <h6 align="right"> 25.02.2026 </h6>

          Dear Business Partner,

          Shipment Number field has been added to the response for the get shipment packages service and webhook model.

          Newly added field: shipmentNumber

          You can access our integration service below;

          [https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages](https://developers.trendyol.com/v3.0/docs/2-get-shipment-packages)

          Best regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About Greece New Cargo Company" icon="fa-undo">
            <h6 align="right"> 17.02.2026 </h6>

          Dear Business Partner,
          We will add new delivery company to ""TY Pays"" model for Greece to Greece orders.
          ACS (Carrier Company) to our TY Pays model in GR to GR. You need to add this carrier companies to your 				platform as well.

          Tests in production environment will start **on 11th March 2026** and **go live date is 6th of April.**

          Document link:
          [https://developers.trendyol.com/v3.0/docs/8-carrier-companies](https://developers.trendyol.com/v3.0/docs/8-carrier-companies)

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About New Product Integration Service" icon="fa-undo">
            <h6 align="right"> 10.02.2026 </h6>

          Dear Business Partner,

          We are reaching out to inform you about a significant structural update to our product integration 						services aimed at providing a more efficient and optimized operational experience.

          **Scope of the Update:**
          We are transitioning from our current barcode-based structure to a content-based structure. This update 			ensures that our integration services are fully aligned with the Seller Center data model, providing a 				more standardized and seamless workflow for your operations.

          **Migration Timeline:**
          **Availability of New Services:** Our next-generation services (v2) are available for use as of today.

          **Deprecation of Legacy Services:** Existing legacy services will remain active until August 10, 2026.

          **Action Required:**
          To avoid any service interruptions, we kindly request that you complete your development and migrate to 			the new v2 services before the specified deadline.

          **Newly Released Services (v2):**
          You can access and review the updated versions of the following services via our API documentation for 				International Marketplace below:

          - Product Create v2
          - Product Filter Base Information v2
          - Product Filtering - Unapproved Products v2
          - Product Filtering - Approved Products v2
          - Product Update - Unapproved Product v2
          - Product Update - Approved Product v2
          - Category Attribute List v2
          - Category Attribute Values List v2

          Thank you for your cooperation.

          Best Regards,

          Trendyol Team
        </Accordion>

        <Accordion title="About EU Cross Country Product Transfer" icon="fa-info-circle">
          <h6 align="right"> 10.02.2025 </h6>

          If you are working with an integrator company, please ensure they are fully informed about the countries where you perform product transfers.

          1. Storefront Code Usage:
             You must provide the related storeFrontCode as Header parameter for the target country in your integration requests.

          2. Price Synchronization Logic:
             Your price updates via API will behave differently based on the “Price Sync” setting selected during the transfer in the seller panel:
             - Sync Enabled: Price update requests for the target country will be ignored (invalid). Prices will be automatically updated based on the source country.
             - Sync Disabled: Price information in the target country may appear as null. To go live, you must manually send a price update request specifically for that target country.

          3. Stock Synchronization Logic:
             Your stock updates via API will behave differently based on the “Stock Sync” setting selected during the transfer in the seller panel:
             - Sync Enabled: Stock update requests for the target country will be ignored (invalid). Stock levels will be directly reflected from the source country and stocks will be synchronized between countries.
             - Sync Disabled: You must manually send a stock update request for the target country to ensure correct availability.

          4. When Product Synchronization is Disabled:
             When product sync is disabled in the seller panel, the stock and price sync features are automatically disabled as well, which closes cross-border operations.
        </Accordion>

        <Accordion title="About getShipmentPackage Service" icon="fa-info-circle">
            <h6 align="right"> 08.12.2025 </h6>

          New fields and renamed versions of existing fields have been added to the response for the order package pull service and webhook model. Additionally, some fields have been removed. The old versions of the renamed fields will be removed from the response after one months. We kindly request that you make the necessary adjustments immediately to avoid any further issues.

          Newly added fields:

          - “cancelledBy”:
          - “cancelReason”:
          - “cancelReasonCode”:
          - "lineTotalDiscount" ("lineSellerDiscount"+ "lineTyDiscount")
          - "packageTotalDiscount": ("packageSellerDiscount"+ "packageTyDiscount")

          Fields where naming changes were made:

          - "merchantSku": > "stockCode"
          - "merchantId": > "sellerId"
          - root/"id": > "shipmentPackageId"
          - line/"id": > "lineId"
          - line/"amount": > "lineGrossAmount"
          - line/"discount": > "lineSellerDiscount":
          - line/"tyDiscount": > "lineTyDiscount"
          - line/ "lineItemDiscount": > "lineItemSellerDiscount"
          - line/"price": > "lineUnitPrice"
          - root/"grossAmount": > "packageGrossAmount"
          - "totalDiscount": > "packageSellerDiscount"
          - "totalTyDiscount": > "packageTyDiscount"
          - "totalPrice": > "packageTotalPrice"
          - "productCode": > "contentId"
          - "vatBaseAmount": > "vatRate"

          Fields to remove:

          - "sku":
          - "scheduledDeliveryStoreId":
          - "agreedDeliveryDateExtendible":
          - "extendedAgreedDeliveryDate":
          - "agreedDeliveryExtensionEndDate":
          - "agreedDeliveryExtensionStartDate":
          - "groupDeal":
        </Accordion>

        <Accordion title="About getClaim Service" icon="fa-info-circle">
            <h6 align="right"> 08.12.2025 </h6>

          Some existing fields in the getclaims package service have been renamed. The old versions of the renamed fields will be removed from the response after two months. We kindly request that you make the necessary adjustments immediately to avoid any further issues.

          Fields where naming changes were made:

          - content/"id": > "claimId"
          - "vatBaseAmount": > "vatRate"
        </Accordion>

        <Accordion title="Current Account Statement Integration – Transition to RON Currency" icon="fa-info-circle">
            <h6 align="right"> 29.08.2025 </h6>

          As part of our ongoing improvements to financial operations, based on your feedback, we will be switching payouts for Romania-based sellers from EUR to RON (Romanian Leu) effective September 4th, 2025. Accordingly, the Current Account Statement API will also return values in RON instead of EUR.

          All financial APIs will return monetary values in RON instead of EUR starting from September 1th, 2025.

          Historical Data: Past records (before September 1st) will still be available in the system, but will be displayed in RON using the ECB conversion rate of the corresponding date.
        </Accordion>

        <Accordion title="About Trendyol Problem on getShipmentPackage Service" icon="fa-info-circle">
            <h6 align="right"> 29.08.2025 </h6>

          Due to an incident with our getShipmentPackage service, if you are using the service with multiple parameters and a "Cancelled" status (for example, if you are trying to get both Cancelled and Created statuses), the "shipmentPackageStatus" field is not included in the service response. This issue began on August 28, 2025, and was resolved as of 1:00 PM on August 29, 2025. We kindly ask you to check your orders within the relevant timeframe.
        </Accordion>

        <Accordion title="Alternative Delivery For GULF region New Service" icon="fa-info-circle">
            <h6 align="right"> 19.08.2025 </h6>

          We have added a new service to our Alternative Delivery model. From now on, you'll be able to use the Alternative Delivery model with the cargo link. You can find details in our document.
        </Accordion>

        <Accordion title="New Service Announcement" icon="fa-info-circle">
            <h6 align="right"> 31.07.2025 </h6>

          We are excited to announce the launch of a new feature developed directly in response to your valuable feedback. The Product Archive API service is now live and available.
          This service is used to archive or unarchive your products in the Trendyol system. It supports both single and multiple product archiving operations.
        </Accordion>

        <Accordion title="vatRate changes on Romania" icon="fa-info-circle">
            <h6 align="right"> 31.07.2025 </h6>

          According to legal rules in Romania, VAT rates will change as of August 1 as follows.

          Standard VAT rate will increase from 19% to 21%
          Reduced VAT rates will increase from 5% and 9% to 11%
        </Accordion>

        <Accordion title="New Optional Fields Added to Product Create Service" icon="fa-info-circle">
            <h6 align="right"> 07.07.2025 </h6>

          "shipmentAddressId" and "returningAddressId" fields have been added to the Trendyol Product Create Service.
        </Accordion>

        <Accordion title="New Fields Added to Webhook Services Response and GetShipmentPackages Service Response." icon="fa-info-circle">
            <h6 align="right"> 24.06.2025 </h6>

          New "createdBy" and "originPackageIds" fields have been added to the Trendyol OMS model (getShipmentPackages and Webhook services).

          The "createdBy" field indicates how the package was created:

          - order-creation: the package was created directly in the incoming order,
          - cancel: the package was created after partial cancellation,
          - split: the package was created based on the package split,
          - transfer: orders that are directed to another seller by Trendyol because the seller who received the order does not have the product.

          The "originPackageIds" field is filled after cancellation or split, after these operations it gives the packageid of the first package.
        </Accordion>

        <Accordion title="Trendyol Accounting and Finance Integration API Service" icon="fa-info-circle">
            <h6 align="right"> 19.06.2025 </h6>

          We are excited to announce the launch of a new feature developed directly in response to your valuable feedback. The Accounting and Finance Integration Service is now live and available International marketplace sellers.
        </Accordion>

        <Accordion title="Trendyol Cargo Provider Change API Service" icon="fa-info-circle">
            <h6 align="right"> 19.06.2025 </h6>

          We're excited to announce that as of today, provider change development for our Gulf 3P local sellers has gone live!
          The development will only permit TY Pays to TY Pays changes. The available partners will vary depending on the package's country and whether it's prepaid or COD. You can check the cargo companies that you can change according to the region.
        </Accordion>

        <Accordion title="New Fields Added to Webhook Services Response and GetShipmentPackages Service Response." icon="fa-info-circle">
            <h6 align="right"> 22.05.2025 </h6>

          New "latitude","longitude" and "cargoDeci" fields were added to the Trendyol OMS model (getShipmentPackages and Webhook services) on 22.05.2025.You can access the details from the getShipmentpackages service document.
        </Accordion>

        <Accordion title="About Return and Shipping Address Information Service" icon="fa-info-circle">
            <h6 align="right"> 20.05.2025 </h6>

          We would like to inform you new integration services which is called Return and Shipping Address Information (getSuppliersAddresses). You can get your address information from using this service. You can reach the details in the documentation.
        </Accordion>

        <Accordion title="About BatchRequestResult Response" icon="fa-info-circle">
            <h6 align="right"> 09.05.2025 </h6>

          There has been an update in the BatchRequestResult Response of the Stock\&Price Update Service. You can access the new Response model via the Check Batchrequest Result page.
        </Accordion>

        <Accordion title="Trendyol- Romania Return Model Updates" icon="fa-info-circle">
            <h6 align="right"> 15.04.2025 </h6>

          For Romania, (storeFrontCode RO), we are updating our returns integration services. With our new return services, we are developing structures where our sellers can approve or reject the returns that customers placed. We aim to put these developments live during the week of May 15. We kindly request you to make the necessary developments in this direction.

          Note: Once the return is delivered to the seller's warehouse, the seller will have 2 business days to approve or reject the return. During this time, return status will be in "waitingInAction”. If no action is taken within 2 business days, the return will be automatically approved by the system.

          If this development is not implemented, sellers will not be able to approve or reject returns, and all returns will be automatically approved after the 2 business days have passed. That is why it is critical to follow the deadlines.
        </Accordion>

        <Accordion title="Trendyol -About Apı Health Check" icon="fa-info-circle">
            <h6 align="right"> 15.04.2025 </h6>

          In order to ensure the uninterrupted and smooth operation of our integration services, we are pleased to announce that we have launched our API Health Check page. With this page, you can follow the status of our integration services in real time and be informed immediately in case of any problems or errors.
          What Can You Do with the API Health Check Page?
          You can check the operating status of the services (working/not working).
          You can follow the general health status of the services.
        </Accordion>

        <Accordion title="Trendyol - About Return Reasons" icon="fa-info-circle">
            <h6 align="right"> 14.04.2025 </h6>

          Dear Business Partner,
          For the return reason "Undelivered International Shipment" there are two ID could be set. You can check it below;
          Id: 2015 Description: Undelivered International Shipment
          Id: 2019 Description: Undelivered International Shipment
        </Accordion>

        <Accordion title="Error in Check Batchrequest Result status field" icon="fa-info-circle">
            <h6 align="right"> 11.04.2025 </h6>

          Dear Business Partner,
          There is a situation where the "status": "COMPLETED" field is not returned in the service response in the Check Batchrequest Result service. Our teams are investigating and we will resolve the issue within the day.
          Best regards,
          Trendyol Team
        </Accordion>

        <Accordion title="Adding &#x22;productCategoryId&#x22; Line to the Trendyol Integration Service" icon="fa-info-circle">
            <h6 align="right"> 11.04.2025 </h6>

          Dear Business Partner,
          The "productCategoryId" field has been added to our getShipmentpackages and webhook service.
          These fields will be added under the "lines" field in the order packages pull service.
          You can reach our integration service below;
          [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-getShipmentPackages](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-getShipmentPackages)
          Best regards,
          Trendyol Team
        </Accordion>

        <Accordion title="District Information for GULF Countries Service" icon="fa-info-circle">
            <h6 align="right"> 03.04.2025 </h6>

          District Information for GULF Countries service for Gulf region cities has been added under our Address Information service. You can access district information through this service.

          [https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/address-information](https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/address-information)
        </Accordion>

        <Accordion title="About ​​data type for “cargoTrackingNumber” Field on getClaim service." icon="fa-info-circle">
            <h6 align="right"> 25.03.2025 </h6>

          “cargoSenderNumber” field is going to be added to our getClaims service as of 28 March. With this development, if the tracking number that cargo companies generate, involves not only numeric characters, cargo tracking numbers will be shared in this field.
        </Accordion>

        <Accordion title="Trendyol - About ​​”identityNumber” Field." icon="fa-info-circle">
            <h6 align="right"> 18.03.2025 </h6>

          The "identityNumber" field will be added to our get shipment package service and webhook model.

          The “identityNumber” field is in the "string" data type and is planned to be added on March 21. The "identityNumber" field will be added under the "content" field on get shipment package service.
          With the addition of the relevant field, the "tcIdentityNumber" field will be removed as of May 5.

          NOTE: For the orders Romania to Romania, From March 21, 2025 to April 9, 2025 this field will be set as 0 for 13 characters. Starting from April 9, a new field called CNP will be added to the address page on Trendyol.com and the real CNP value will be returned in the identityNumber field.

          You can reach our integration service below;
          [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-getShipmentPackages](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-getShipmentPackages)
        </Accordion>

        <Accordion title="Adding New Fields for Getting Returned Orders Service" icon="fa-info-circle">
            <h6 align="right"> 14.03.2025 </h6>

          We have added customer phone number and shipmentAddress information for rejected packages to the response of Getting Returned Orders service.

          [https://developers.trendyol.com/int/docs/international-marketplace/international-return-flow-gulf/int-getClaims](https://developers.trendyol.com/int/docs/international-marketplace/international-return-flow-gulf/int-getClaims)

          It can be seen as shipmentAddress under rejectedPackageInfo field where rejected return information is located. The phone number will be available in the response for 4 days after the return is rejected. The shipmentAddress will always be in the response.
        </Accordion>

        <Accordion title="About Customer Cancellation (GULF Region)" icon="fa-info-circle">
            <h6 align="right"> 11.03.2025 </h6>

          As of April, we will be allowing our customers to make any cancellation operations (partial and fully cancellation)

          With this change until the package is shipped, customers will be allowed to make cancellation after the payment. (order placed)

          You can check the status as “Cancelled” in getShipmentPackages. You can check our integration documentation here.

          If customers prefer to make a partial cancellation (let's say there are 2 items in a package and after payment, the customer decided to cancel one of them), in this case the whole package will be in “Cancelled” status and under the same orderNumber there will be a new package generated accordingly.

          NOTE1:
          All the operations such as updating packages as “Picking” and “Invoiced” should be managed for the new package.

          NOTE2:
          If the seller works with the Seller Pays Cargo Model, a new cargo sender number should be sent to Trendyol for the new package generated by Trendyol, with Update Tracking Number service. (Documentation)
          If the seller works with TY Pays Cargo Model, a new cargoTrackingNumber from getShipmentPackage service for the new package generated by Trendyol should be used to deliver the package to the customer. (Documentation)
        </Accordion>

        <Accordion title="About Trendyol Stage Environment Integration Services" icon="fa-info-circle">
            <h6 align="right"> 03.03.2025 </h6>

          Since Trendyol internal tests will be conducted in our integration services between 03.03.2025 and 17.03.2025, you may receive errors in your requests to our services. We plan to complete the tests as soon as possible.
        </Accordion>

        <Accordion title="Trendyol - GULF Region Ramadan Campaign" icon="fa-info-circle">
            <h6 align="right"> 27.02.2025 </h6>

          Ramadan is approaching and as we prepare for the big discount period, it is even more important to check the price and stock status of your products. These checks will allow you to deliver complete and correct products to our customers at the right prices.

          Managing your stock and prices correctly during this period when you will receive high orders, such as the Ramadan Campaign, will increase your sales and seller ratings and help you avoid possible penalty processes due to errors.

          Therefore, we recommend that you make the necessary checks now to be fully prepared for the campaign period in order to maximize your sales performance and increase the satisfaction of your customers.
        </Accordion>

        <Accordion title="Romania Trendyol Pays Cargo Model" icon="fa-info-circle">
            <h6 align="right"> 27.02.2025 </h6>

          We will add new delivery model called "TY Pays" to our platform for Romania on 3rd week of March.

          Please note that, if you are working in CEE region you are required to make this additional development for Trendyol Pays Model.
          FanCourier (Carrier Company) to our TY Pays model in Romania. You need to add this carrier company to your platform as well.

          Note: All shipments from Romania to Romania will only be returned via the Ty Pays model. When the package delivered to the seller's warehouse, return will be automatically approved by the system.

          If you are using Trendyol Pays Model:
          "cargoTrackingNumber" which Trendyol provides on getShipmentPackage service, should be used to deliver the package.

          Label can be obtained by using Getting Common Label (getCommonLabel) service.

          A Package cannot be updated as "Shipped" or "Delivered" by the Seller. Trendyol follows the package status directly from cargo carrier company. If seller wants to follow it, getShipmentPackage service can be used.

          Additional Pre-Notification,
          In April, we will be adding the dispute process to our return flow where the sellers can accept or reject to start a dispute process for the returns. You can check our GULF model for details. It will be same in the CEE region as well.
        </Accordion>

        <Accordion title="Trendyol - Incident on Stock and Price Service" icon="fa-info-circle">
            <h6 align="right"> 27.02.2025 </h6>

          There was an incident that occurred on update stock and price services, starting from Feb 26, 2025, 11:06 am GMT and ends with Feb 27, 2025, 06:40 am GMT.

          Please check your stocks and prices in order not to having any issue if you had used stock and price update service on that time period.
        </Accordion>

        <Accordion title="TY Pays Model in CEE Region" icon="fa-info-circle">
            <h6 align="right"> 26.02.2025 </h6>

          We will add new delivery model called "TY Pays" to our platform for Romania on 3rd week of March.

          FanCourier (Carrier Company) to our TY Pays model in Romania. You need to add this carrier companies to your platform as well.

          Note: All shipments from Romania to Romania will only be returned via the Ty Pays model.

          If you are using Trendyol Pays Model:

          "cargoTrackingNumber" which Trendyol provides on getShipmentPackage service, should be used to deliver the package.
          Label can be obtained by using Getting Common Label (getCommonLabel) service.
          A Package cannot be updated as "Shipped" or "Delivered" by the Seller. Trendyol follows the package status directly from cargo carrier company. If seller wants to follow it, getShipmentPackage service can be used.
        </Accordion>

        <Accordion title="About Delete Invoice Link Service" icon="fa-info-circle">
            <h6 align="right"> 26.02.2025 </h6>

          We added a new service called "Delete Invoice Link" to our integration services. With this service, Invoices that were updated incorrectly before, can be deleted through this service and send again through the send invoice link service.

          You can reach the details below the link
          [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-delete-invoice-link](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-delete-invoice-link)
        </Accordion>

        <Accordion title="APIGW Base Url Changing" icon="fa-info-circle">
            <h6 align="right"> 25.02.2025 </h6>

          In order to ensure our service standards and increase the performance of our services, the base URL is being changed in our integration services. The old services will be closed end of May 26. We kindly ask you to provide the necessary updates as soon as possible.

          We kindly ask you to check our service-based integration document for our new service endpoints.
          NOTE: Below you can see the information about whether the new service endpoints are active or not, based on service.

          [https://developers.trendyol.com/int/docs/category/8-international-marketplace](https://developers.trendyol.com/int/docs/category/8-international-marketplace)

          Product Integration
          All services have been live.

          Order Integration
          All services have been live.

          Common Label Integration
          All services have been live.

          Return Integration
          All services have been live.
          The sellerId value has been added to our return approve and rejection service endpoints.

          Webhook
          All services have been live.
        </Accordion>

        <Accordion title="Adding New Carrier Companies to Trendyol" icon="fa-info-circle">
            <h6 align="right"> 20.02.2025 </h6>

          We added new carrier companies to our platform. You need to add these carrier companies to your platform as well.

          GLS to our seller pays model in Romania.
          ZID LOGISTICS to our seller pays model in KSA.
          SWFTBOX to our seller pays model in AE.

          You can find the updated Carrier Companies from the documentation below.
          [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-carrier-companies](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-carrier-companies)
        </Accordion>

        <Accordion title="About Slovakia vatRates Change" icon="fa-info-circle">
            <h6 align="right"> 17.02.2025 </h6>

          According to the legal regulations, in Slovakia the vatRates has been changed. You can find the updated vatRates below;

          Slovakia -> 0,19 and 23

          You can check the integration documentation here. [https://developers.trendyol.com/int/docs/storeFrontCode](https://developers.trendyol.com/int/docs/storeFrontCode)
        </Accordion>

        <Accordion title="Adding new Line for getShipment Package and Webhook Service Response" icon="fa-info-circle">
            <h6 align="right"> 14.02.2025 </h6>

          Dear Business Partner,

          New address fields will be added to the Trendyol OMS model (getShipmentPackages and Webhook services) on 20.02.2025. You can check the new fields under the "shipmentAddress" and "invoiceAddress" fields.

          These two fields have been added as an option for our sellers who have problems with address characters.
          "addressLine1": "xxx",
          "addressLine2": "xxx"
          Best regards
          Trendyol Team
        </Accordion>

        <Accordion title="Trendyol - Alternative Delivery For GULF region" icon="fa-info-circle">
            <h6 align="right"> 12.02.2025 </h6>

          Alternative delivery options enable sellers to deliver the orders created by the customer to the customer with their own courier options and update the package status as "Delivered" or "Returned" to Trendyol via the related services.

          You can deliver your packages with an Alternative Delivery (ADEL) option as of Today. Our integration services are ready. For details please check our integration services here: [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-alternative-delivery](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-alternative-delivery)

          NOTE: You must apply Trendyol Team to be able to use this service, as alternative delivery works with ADEL permissions based on the seller.
        </Accordion>

        <Accordion title="getShipmentPackages & Webhook Response Model" icon="fa-info-circle">
            <h6 align="right"> 11.02.2025 </h6>

          New address fields were added to the Trendyol OMS model on 07.02.2025 (getShipmentPackages and Webhook services). You can check the new fields under the "shipmentAddress" and "invoiceAddress" fields.

          For TR Marketplace, "countyId" is 0, other fields are empty.
          -"countyId" -> eligible for the CEE region
          -"countyName" -> eligible for the CEE region
          -"shortAddress" -> eligible for the Gulf region
          -"stateName" -> eligible for the Gulf region

          Best regards,
          Trendyol Team
        </Accordion>

        <Accordion title="APIGW Base Url Changing" icon="fa-info-circle">
            <h6 align="right"> 04.02.2025 </h6>

          In order to ensure our service standards and increase the performance of our services, the base URL is being changed in our integration services. The old services will be closed as of April, and the exact date will be shared as soon as possible. We kindly ask you to provide the necessary updates as soon as possible.

          We kindly ask you to check our service-based integration document for our new service endpoints.
          NOTE: Below you can see the information about whether the new service endpoints are active or not, based on service.

          Product Integration
          All other services under Product Integration have been live.

          Order Integration
          The new endpoints for the "Send Customer Invoice Link" Service will be live on February 21, 2025.
          All other services under Order Integration have been live.

          Common Label Integration
          New endpoints for the "Getting Common Label" Service will be live on February 10, 2025.

          Return Integration
          All services have been live.
          The sellerId value has been added to our return approve and rejection service endpoints.

          Webhook
          All services have been live.
        </Accordion>

        <Accordion title="About getShipmentPackages and webhook responses" icon="fa-info-circle">
            <h6 align="right"> 31.01.2025 </h6>

          There are new address fields added to our OMS model. (Get Shipment Packages and Webhook) You can check the new fields under "shipmentAddress" and "invoiceAddress"

          Added fields as follows;

          - "countyId" -> eligible for the cee region
          - "countyName" -> eligible for the cee region
          - "shortAddress" -> eligible for the gulf region
          - "stateName" -> eligible for the gulf region
        </Accordion>

        <Accordion title="Create a Test Order Service Update" icon="fa-info-circle">
            <h6 align="right"> 27.12.2024 </h6>

          The endpoint of our Create a Test Order services has changed. You can access our current endpoint via our integration document.

          [https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-create-test-order](https://developers.trendyol.com/int/docs/international-marketplace/international-order-v2/int-create-test-order)

          New endpoint:

          For Gulf: [https://stageapi.trendyol.com/integration/order/orders/local-gulf](https://stageapi.trendyol.com/integration/order/orders/local-gulf)

          For Europe: [https://stageapi.trendyol.com/integration/orders/eu](https://stageapi.trendyol.com/integration/orders/eu)
        </Accordion>

        <Accordion title="getShipmentPackages Service Error" icon="fa-info-circle">
            <h6 align="right"> 24.12.2024 </h6>

          There was a temporary system error in our order packages pulling service (getShipmentPackages) that started on 24.12.2024 at 10:56 and was resolved on 24.12.2024 at 11:01. You may have received a 500 error in the requests you sent to our service between these dates.
          The problem has been resolved and we do not expect it to happen again, we kindly ask you to check your orders between these dates.
        </Accordion>

        <Accordion title="Product Create Error" icon="fa-info-circle">
            <h6 align="right"> 23.12.2024 </h6>

          During the product create process, we noticed that the same attribute appeared more than once in some categories. Our teams are working hard to resolve this issue as soon as possible.
          Thank you for your understanding.
        </Accordion>

        <Accordion title="Create a Test Order Service Update" icon="fa-info-circle">
            <h6 align="right"> 23.12.2024 </h6>

          "DiscountPercentage" field has been added under "lines" in our test order creation service. With this field, you will be able to simulate the discounts you have created based on the product.
          You can check the details in our integration document:

          [https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/creating-test-order](https://developers.trendyol.com/en/docs/trendyol-marketplace/order-integration/creating-test-order)
        </Accordion>

        <Accordion title="Trendyol - Webhook Services Updates" icon="fa-info-circle">
            <h6 align="right"> 13.12.2024 </h6>

          You can access the changes made to our webhook services and our new features below.

          **Webhook Retry Model:**

          In case of an error in webhook services, the system will automatically take action and deactivate the relevant webhook request. In this context, we will be sending two e-mails to our sellers.

          **Webhook Status Model:**

          In the requests made to our webhook services, we were collecting applications from you without receiving any status and sending you the Created, Cancelled, Unpacked, Shipped and Delivered statuses as a result of successful requests.

          **Webhook Authorization Model:**

          We have added not only "Basic Authentication" to our webhook services, but also the "API_KEY" method. In this context, the "authenticationType" field has been added to our webhook creation service.

          **Webhook Active/Passive Model:**

          Two new services have been added to our webhook services. With these services, you can make your webhook applications passive or active. (Applications that are automatically passive due to an error should be activated by correcting the error through this service.)
        </Accordion>

        <Accordion title="About Create Claim Services" icon="fa-info-circle">
            <h6 align="right"> 08.09.2023 </h6>

          There has been a request body chance on create claim services. Please check our documentation for details.
        </Accordion>

        <Accordion title="About Product Integration and Order Integration Services" icon="fa-info-circle">
            <h6 align="right"> 04.09.2023 </h6>

          Product Integration and Order Integration Services has been deprecated. Starting from September 4 you should use Product Integration v2 and Order Integration v2 services.
        </Accordion>

        <Accordion title="About Product Integration v2" icon="fa-info-circle">
            <h6 align="right"> 09.06.2023 </h6>

          Product Integration v2 services will be live in August.
        </Accordion>

        <Accordion title="About Order Integration v2 and Returned Order Integration v2" icon="fa-info-circle">
            <h6 align="right"> 05.06.2023 </h6>

          Order Integration v2 and Returned Order Integration v2 services will be live in August.
        </Accordion>

        <Accordion title="About Service Changes" icon="fa-info-circle">
            <h6 align="right"> 10.05.2023 </h6>

          There will be changes in our integration services in August. Change details and date information will be added soon. Most of the service changes will be on the order integration side.
        </Accordion>
      </Tab>
    </Tabs>
  </Tab>
</Tabs>