---
updatedAt: 2026-01-22T11:32:22.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Yaratma

Bu servis ile sipariş paketleriniz için webhook yapısı kurabilirsiniz.

* Servis cevabı olarak dönen ID değeri kurmuş olduğunuz webhook yapısının ID değeridir, ve update, delete işlemlerinde kullanılması gerekmektedir.

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.

  * Basic Authentication için kullanılan sellerId, API KEY ve API SECRET KEY bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" sayfasından alınmalıdır.

* Eğer servisiniz header'da api key bekliyorsa, ilgili alan "x-api-key" olarak gönderilecektir.

### **POST** createWebhook

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks
</NoLinkCallout>

**Giriş Parametreleri**

| Değer              |                          Açıklama                          |    Tip |
| :----------------- | :--------------------------------------------------------: | -----: |
| url                |                 Webhook Servis URL Bilgisi                 | string |
| username           |  Basic Authentication için kullanılacak olan kullanıcı adı | string |
| password           |      Basic Authentication için kullanılacak olan şifre     | string |
| authenticationType | "BASIC\_AUTHENTICATION" ya da "API\_KEY" değerini alabilir | string |
| apiKey             |     Authorization için kullanılacak olan apikey bilgisi    | string |
| subscribedStatuses |      Sipariş bilgisi alınması istenilen statu listesi      |  array |

**"subscribedStatuses" alanı için girebileceğiniz statüler aşağıdaki gibidir:**

Eğer "subscribedStatuses" alanı boş bir şekilde gönderilirse aşağıda belirtilen bütün statuler otomatik olarak atanmaktadır. Aşağıda ki listeye yeni bir statu eklenmesi durumunda eklenen statu aynı şekilde mevcut başvurunuza tanımlanır.

* "CREATED"
* "PICKING"
* "INVOICED"
* "SHIPPED"
* "CANCELLED"
* "DELIVERED"
* "UNDELIVERED"
* "RETURNED"
* "UNSUPPLIED"
* "AWAITING"
* "UNPACKED"
* "AT\_COLLECTION\_POINT"
* "VERIFIED"

**Örnek Servis İsteği**

```json
{
    "url": "https://testwebhook.com",
    "username": "user",
    "password": "password",
    "authenticationType": "API_KEY",
    "apiKey": "123456",
    "subscribedStatuses": ["CREATED", "PICKING"]
 }
```

**Örnek Servis Cevabı**

```json
{
  "id": "string"
}
```