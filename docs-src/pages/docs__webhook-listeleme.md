---
updatedAt: 2026-01-22T11:32:59.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Listeleme

Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını listeleyebilirsiniz.

* Entegrasyon servislerine gönderilecek istekler, temel kimlik doğrulama yöntemi olan "basic authentication" ile yetkilendirilmelidir.
  * Basic Authentication için kullanılan sellerId , API KEY ve API SECRET KEY bilgileri satıcı panelinde yer alan "Hesap Bilgilerim" bölümündeki "Entegrasyon Bilgileri" sayfasından alınmalıdır.

### **GET** getWebhook

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/webhook/sellers/{sellerId}/webhooks
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
[
  {
    id: "5297c986-6e09-4615-9f16-0deff65a0890",
    createdDate: 1733317686667,
    lastModifiedDate: 1734010262454,
    url: "https://testwebhook1.com",
    username: "test1",
    authenticationType: "BASIC_AUTHENTICATION",
    status: "PASSIVE",
    subscribedStatuses: [
      "CREATED",
      "CANCELLED",
      "SHIPPED",
      "DELIVERED",
      "UNPACKED",
    ],
  },
  {
    id: "4f9429b9-ef13-4d7c-94cf-9eee3ce7273a",
    createdDate: 1733917501531,
    lastModifiedDate: 1733920106237,
    url: "https://testwebhook2.com",
    username: "test2",
    authenticationType: "API_KEY",
    status: "PASSIVE",
    subscribedStatuses: null,
  },
  {
    id: "2ba10e5d-5176-416b-9770-5d9c85a81a5e",
    createdDate: 1734087820902,
    lastModifiedDate: null,
    url: "https://testwebhook3.com",
    username: "test3",
    authenticationType: "API_KEY",
    status: "ACTIVE",
    subscribedStatuses: ["CREATED", "PICKING"],
  },
];
```

**Response Parametreleri**

| Değer              |                          Açıklama                          |              Tip |
| :----------------- | :--------------------------------------------------------: | ---------------: |
| createdDate        |             Webhook talebinin yaratıldığı tarih            | timestamp GMT +3 |
| id                 |                        Webhook ID si                       |           string |
| lastModifiedDate   |          Webhook talebinin son güncellendiği tarih         | timestamp GMT +3 |
| url                |                 Webhook Servis URL Bilgisi                 |           string |
| username           |  Basic Authentication için kullanılacak olan kullanıcı adı |           string |
| authenticationType | "BASIC\_AUTHENTICATION" ya da "API\_KEY" değerini alabilir |           string |
| status             |             "ACTIVE" ya da "PASSIVE" olabilir.             |           string |
| subscribedStatuses |      Sipariş bilgisi alınması istenilen statu listesi      |            array |