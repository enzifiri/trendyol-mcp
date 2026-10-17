---
updatedAt: 2026-01-22T11:33:46.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Güncelleme

Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını güncelleyebilirsiniz.

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.
  * Basic Authentication için kullanılan sellerId , API KEY ve API SECRET KEY bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" sayfasından alınmalıdır.

### **PUT** getWebhook

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}
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
200 OK
```