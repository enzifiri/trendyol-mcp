---
updatedAt: 2026-04-27T11:32:19.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# 2. Authorization

## API Bağlantısının Kurulması (Authorization)

<Callout icon="❗️" theme="error">
  **DİKKAT**

  API bilgileri üzerinden tüm entegrasyon işlemleri gerçekleştirileceğinden, **API key bilgilerinizin** herhangi bir açık platformda (github, gitlab vb.) **paylaşılmaması** önemlidir.
</Callout>

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.

* Basic Authentication için kullanılan **supplierid** , **API KEY** ve **API SECRET KEY** bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" [sayfasından](https://partner.trendyol.com/account/info?tab=integrationInformation) alınmalıdır. Bu bilgiler, yalnızca master user (admin rolü) ile giriş yapılması halinde görünmektedir.

* Authentication bilgileri **PROD** ve **STAGE** ortamlarında değişiklik gösterebilir. Kullanılan endpoint ve ortama göre bilgiler revize edilmelidir.

* **Hatalı authorization yapılması durumunda** status: 401 , "exception": "ClientApiAuthenticationException" mesajı dönecektir.

## Auth ve User-Agent Kullanımı

* Trendyol Partner API'ye yapılacak tüm isteklerde, Auth ve User-Agent bilgileri Header'da bulunmalıdır. User-Agent bilgisi olmayan istekler, 403 hatası alarak engellenecektir.

* Eğer bir aracı firma ile çalışılıyorsa User-Agent bilgisi olarak "Satıcı Id - {'{Entegrasyon Firması İsmi}'}" olarak, entegrasyon yazılımı firmaya aitse "Satıcı Id - SelfIntegration" olarak gönderilmelidir.

* Entegratör firma ismi alfanumerik karakterlerle maksimum 30 karakter uzunluğunda gönderilmelidir.

**Örnek 1 :**

* SatıcıId : 1234
* Entegratör firma ismi : TrendyolSoft
* Gönderilecek user-agent bilgisi : "1234 - TrendyolSoft"

**Örnek 2 :**

* SatıcıId : 4321
* Entegratör firma yok. Yazılım firmaya ait.
* Gönderilecek user-agent bilgisi : "4321 - SelfIntegration"

## Trendyol API Servis İstek Sınırlaması

Trendyol Partner API'ye yapacağınız tüm isteklerde aynı endpointe 10 saniye içerisinde maksimum 50 request atabilirsiniz. 51. requesti denediğiniz an sizlere **"429 status code and it say too.many.requests"** hatası dönecektir.