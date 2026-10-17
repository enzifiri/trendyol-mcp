---
updatedAt: 2026-07-13T06:21:20.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# 3. Canlı-Test Ortam Bilgileri

Bilgiler ve yönergeler: Trendyol canlı ve test ortamları için IP yetkilendirmesi ve erişim detayları.

<Callout icon="👍" theme="okay">
  ###

  **İPUCU**

  Satıcı ID ve API Key bilgilerinize Trendyol Satıcı Paneli üzerinden sağ üstte bulunan Mağaza Adınıza > Hesap Bilgilerim menüsüne tıklayarak ulaşabilirsiniz.
</Callout>

Trendyol test ortamına erişim için IP yetkilendirmesi gerekmektedir. Prod ortamında herhangi bir IP yetkilendirmesine gerek yoktur ancak IP'niz bazı nedenlerden dolayı engellenmiş olabilir. Hem test hem de prod ortamında herhangi bir erişim sorunuyla karşılaşmanız durumunda IP adresiniz ile birlikte satıcı paneli üzerinden bildirim oluşturabilirsiniz.

### CANLI ORTAM BİLGİLERİ

Canlı ortamda herhangi bir IP yetkilendirmesine gerek bulunmamaktadır.

<NoLinkCallout icon="📘" theme="info">
  **ENDPOINT**

  [https://apigw.trendyol.com](https://apigw.trendyol.com)
</NoLinkCallout>

<br />

### TEST ORTAMI BİLGİLERİ

Test ortamı hesap ve API bilgileriniz canlı ortam bilgilerinizden tamamen farklıdır.

**1. Adım :** Test ortamına erişebilmek için uygulama sunucularının IP bilgileri Trendyol tarafına bildirilerek erişim tanımı yapılmalıdır.
Birden fazla IP tanımı yapılabilir, tanımlanan IP'ler daha sonra bildirilmesi halinde güncellenebilir. Ağ çıkış adresiniz olan IP adresini iletmeniz gerekmektedir. Statik IP'ler için yetkilendirme sağlanamamaktadır.

* Test ortamı talebi ve IP yetkilendirmesi işlemleri için 0850 258 58 00 numaralı çağrı merkezi üzerinden satıcı bildirimi oluşturmanız gerekmektedir.

* Test ortamında alacağınız 503 hatası IP yetkilendirmesi olmamasından kaynaklıdır.

**2. Adım (IP yetkilendirmesi gerektirmektedir) :** Test ortamı için ortak test hesabını kullanabilir veya özel test hesabı talebinizi Seller Center üzerinden destek ekibine iletebilirsiniz. Özel test hesabı bilgileriniz için test ortamına giriş yapacağınız email adresi, telefon numarası ve şirketinize ait tckn/vkn değerini talebinizin içerisinde iletmeniz yeterli olacaktır.

* Ortak test hesabı bilgileri için 0850 258 58 00 numaralı çağrı merkezi üzerinden satıcı bildirimi oluşturmanız gerekmektedir.

* API bilgilerinize stage partner sayfasınızda her alan "Hesap Bilgilerim" bölümünden ulaşabilirsiniz.

- **TEST ORTAMI PANELİ:** **<https://stagepartner.trendyol.com/account/login>**

<NoLinkCallout icon="📘" theme="info">
  **ENDPOINT**

  [https://stageapigw.trendyol.com](https://stageapigw.trendyol.com)
</NoLinkCallout>

<br />