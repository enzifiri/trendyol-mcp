---
updatedAt: 2026-06-26T08:39:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Stage Ortamda Müşteri Sorusu Oluşturma

Stage ortamdaki testlerinizi ilerletebilmek için aşağıdaki servis ile ürün sorusu oluşturabilirsiniz.

Belirli bir ürün için yeni bir müşteri sorusu oluşturmak amacıyla bu servisi kullanabilirsiniz.

* Soru metni boş olmamalıdır.
* Oluşturulan soru Trendyol'da yayınlanmadan önce değerlendirilir.

**POST CreateQuestion**

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions](https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "text": "Bu ürünün kumaşı pamuk mu?",
  "contentId": 2397814,
  "userId": 4147346,
  "userFullName": "Test Kullanıcı",
  "showUserName": false,
  "channelId": 1
}
```

**Örnek Servis Yanıtı**

```json
{
  "questionId": 42
}
```

**Field Açıklamaları**

| Field İsmi   | Field Açıklaması                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| sellerId     | Trendyol'da kayıtlı satıcının benzersiz kimlik numarasıdır. Path parametresi olarak gönderilmelidir. |
| text         | Oluşturulacak sorunun metnidir.                                                                      |
| contentId    | Sorunun sorulacağı ürünün içerik ID'sidir.                                                           |
| userId       | Soruyu soran kullanıcının ID'sidir. Servis isteği örneğindeki ID'yi (4147346) girebilirsiniz.        |
| userFullName | Soruyu soran kullanıcının adı soyadıdır.                                                             |
| showUserName | Kullanıcı adının gösterilip gösterilmeyeceğini belirten parametredir.                                |
| channelId    | Kanal ID bilgisidir.                                                                                 |
| questionId   | Oluşturulan sorunun benzersiz kimlik numarasıdır.                                                    |

**Zorunlu Alanlar**

| Field İsmi   | Zorunluluk Bilgisi |
| ------------ | ------------------ |
| sellerId     | Evet               |
| text         | Evet               |
| contentId    | Evet               |
| userId       | Evet               |
| showUserName | Evet               |
| userFullName | Hayır              |
| channelId    | Hayı               |

<br />

**Hata Durumları:**

Soru oluşturma sürecinde aşağıdaki hatalarla karşılaşabilirsiniz:

| Hata Durumu        | Açıklama                       |
| ------------------ | ------------------------------ |
| Boş soru metni     | Lütfen bir soru metni giriniz. |
| contentId eksik    | contentId zorunludur.          |
| userId eksik       | userId zorunludur.             |
| showUserName eksik | showUserName zorunludur.       |
| sellerId eksik     | sellerId zorunludur.           |

**ÖNEMLİ NOTLAR:**

* sellerId path parametresi olarak gönderilmelidir.
* userFullName ve channelId opsiyonel alanlardır.
* channelId için 1 değerini gönderebilirsiniz.