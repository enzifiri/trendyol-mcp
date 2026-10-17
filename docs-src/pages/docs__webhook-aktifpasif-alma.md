---
updatedAt: 2026-01-22T11:41:46.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Aktife/Pasife Alma

Bu servis ile pasif durumunda olan webhook methodlarını aftife alabilirsiniz.

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.
  * Basic Authentication için kullanılan sellerId , API KEY ve API SECRET KEY bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" sayfasından alınmalıdır.

### **PUT** activate

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}/activate
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}/activate
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
200 OK
```

### Webhook Pasife Alma

Bu servis aktif durumunda olan webhook methodlarını pasife alabilirsiniz.

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.
  * Basic Authentication için kullanılan sellerId , API KEY ve API SECRET KEY bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" sayfasından alınmalıdır.

### **PUT** deactivate

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}/deactivate
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks/{Id}/deactivate
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
200 OK
```