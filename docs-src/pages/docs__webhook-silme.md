---
updatedAt: 2026-01-22T11:34:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Silme

Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını silebilirsiniz.

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.
  * Basic Authentication için kullanılan sellerId , API KEY ve API SECRET KEY bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" sayfasından alınmalıdır.

### **DELETE** deleteWebhook

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
200 OK
```