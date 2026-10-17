---
updatedAt: 2026-08-14T10:42:42.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Müşteri Sorularını Çekme

Trendyol üzerinden müşterilerin iş ortaklarımıza sormuş olduğu soruların tümünü bu servis aracılığı ile çekebilirsiniz.

### **GET** questionsFilter

Herhangi bir tarih parametresi vermeden aşağıdaki endpoint ile istek atmanız halinde son bir hafta içerisindeki sorularınız sizlere gösterilecektir. startDate ve endDate parametrelerini eklemeniz halinde verilebilecek maksimum aralık iki hafta olacaktır.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/filter](https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/filter)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/filter](https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/filter)
</NoLinkCallout>

**Önerilen Endpoint**

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/filter?startDate=\{startDate}\&endDate=\{endDate}\&status=WAITING\_FOR\_ANSWER](https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/filter?startDate=\{startDate}\&endDate=\{endDate}\&status=WAITING_FOR_ANSWER)
</NoLinkCallout>

**Servis Parametreleri**

* **supplierId** zorunlu alan olarak istekte gönderilmelidir

| Parametre        | Parametre Değer                                                | Açıklama                                                                                      | Tip    |
| :--------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| barcode          |                                                                | Belirli barcode değerine ait olan sorular için kullanılabilir.                                | string |
| page             |                                                                | Sadece belirtilen sayfadaki bilgileri döndürür                                                | int    |
| size             | Varsayılan: 20, Maksimum: 50                                   | Bir sayfada listelenecek maksimum adeti belirtir.                                             | int    |
| supplierId       |                                                                | İlgili tedarikçinin ID bilgisi gönderilmelidir                                                | long   |
| endDate          |                                                                | Belirtilen tarihe kadar olan soruları getirir. Timestamp(millisecond) olarak gönderilmelidir. | long   |
| startDate        |                                                                | Belirtilen tarihten sonraki soruları getirir. Timestamp(millisecond) olarak gönderilmelidir.  | long   |
| status           | WAITING\_FOR\_ANSWER, ANSWERED, REPORTED, REJECTED, UNANSWERED | Soruların statülerine göre bilgilerini getirir.                                               | string |
| orderByField     | LastModifiedDate                                               | Son güncellenme tarihini baz alır.                                                            | string |
| orderByField     | CreatedDate                                                    | Sorunun oluşma tarihini baz alır                                                              | string |
| orderByDirection | ASC                                                            | Eskiden yeniye doğru sıralar.                                                                 | string |
| orderByDirection | DESC                                                           | Yeniden eskiye doğru sıralar.                                                                 | string |

<br />

| Status               | Açıklama                                               |
| :------------------- | :----------------------------------------------------- |
| WAITING\_FOR\_ANSWER | Müşteri sorusu satıcı tarafından cevaplanmayı bekliyor |
| ANSWERED             | Soru cevaplanmış ve yayınlanmış                        |
| REPORTED             | Satıcı tarafından raporlanmış soru                     |
| REJECTED             | Satıcının cevabı reddedilmiş                           |
| UNANSWERED           | Cevaplanmamış soru (cevaplama süresi dolmuş)           |

<br />

### Örnek Servis Cevabı

```json
{
  "content": [
    {
      "answer": {
        "creationDate": 0, //Cevabın verildiği tarih
        "hasPrivateInfo": true,
        "id": 0,
        "reason": "string",
        "text": "string"
      },
      "answeredDateMessage": "string",
      "creationDate": 0,
      "customerId": 888888888,
      "id": 0, //Sorunun id'si
      "imageUrl": "string",
      "productName": "string",
      "public": true,
      "reason": "string",
      "rejectedAnswer": {
        "creationDate": 0, //En son red edilen cevabın oluşturulma tarihi
        "id": 0,
        "reason": "string",
        "text": "string"
      },
      "rejectedDate": 0,
      "reportReason": "string",
      "reportedDate": 0,
      "showUserName": true,
      "status": "string",
      "text": "string",
      "userName": "string",
      "webUrl": "string",
    }
  ],
  "page": 10,
  "size": 2,
  "totalElements": 864,
  "totalPages": 432
}
```

### **GET** questionsFilterById

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id}](https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id})
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id}](https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id})
</NoLinkCallout>

Yukarıdaki servisten dönen sorunun id değeri ile soruları tekil olarak çekip işlem yapabilirsiniz.

| Field İsmi          | Açıklama                                                                                                    |
| :------------------ | :---------------------------------------------------------------------------------------------------------- |
| id                  | Sorunun benzersiz kimlik numarasıdır.                                                                       |
| text                | Müşterinin sorduğu soru metnidir.                                                                           |
| customerId          | Müşterinin trendyol.com üzerinde kayıtlı id değeridir.                                                      |
| userName            | Müşterinin adıdır. (showUserName false ise boş döner)                                                       |
| showUserName        | Müşterinin adının trendyol.com üzerinden görünüp görünmediğini ileten parametredir.                         |
| status              | Sorunun statüsüdür.                                                                                         |
| creationDate        | Müşterinin trendyol.com üzerinde soruyu sorduğu tarih. (timestamp millisecond)                              |
| public              | Sorunun trendyol.com'da gösterilip gösterilmeyeceğini gösteren değerdir.                                    |
| reason              | Eğer soru reddedilmiş ise red sebebidir.                                                                    |
| reportReason        | Satıcının soruyu raporlarken yazdığı açıklamadır. Bu işlem sadece Trendyol Satıcı Panelinden yapılmaktadır. |
| reportedDate        | Satıcının soruyu raporladığı tarihtir. (timestamp millisecond)                                              |
| rejectedDate        | Sorunun reddedilme tarihidir. (timestamp millisecond)                                                       |
| answeredDateMessage | Sorunun cevaplanma süresi mesajıdır.                                                                        |
| imageUrl            | Sorusu sorulan ürünün görsel linki değeridir.                                                               |
| productName         | Sorusu sorulan ürünün isim değeridir.                                                                       |
| productMainId       | Ürünün model kodudur.                                                                                       |
| webUrl              | Ürünün web sayfası linkidir.                                                                                |
| answer              | Sorunun aktif cevabıdır. (varsa)                                                                            |
| rejectedAnswer      | Sorunun en son reddedilmiş cevabının detaylarıdır.                                                          |

<br />

**Answer Object Alanları**

| Field İsmi     | Açıklama                                                   |
| :------------- | :--------------------------------------------------------- |
| id             | Cevabın benzersiz kimlik numarasıdır.                      |
| text           | Cevap metnidir.                                            |
| creationDate   | Cevabın verildiği tarihtir. (timestamp millisecond)        |
| hasPrivateInfo | Cevabın özel bilgi içerip içermediğidir.                   |
| reason         | Cevabın reddedilme sebebidir. (sadece rejectedAnswer için) |

<br />

<Callout icon="❗️">
  Tarih Aralığı Sınırlaması startDate ve endDate parametreleri kullanıldığında, maksimum tarih aralığı 2 hafta ile sınırlıdır. Bu süreyi aşan isteklerde endDate otomatik olarak startDate + 2 hafta şeklinde ayarlanır.
</Callout>

<Callout icon="📘" theme="info">
  Sayfalama Sayfalama 0'dan başlar. İlk sayfa için page=0 kullanılmalıdır. Maksimum sayfa boyutu 50'dir.
</Callout>