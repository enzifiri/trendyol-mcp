---
updatedAt: 2026-03-31T06:20:51.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Müşteri Sorularını Cevaplama

[Trendyol Müşteri Sorularını Çekme Servisi](https://integration-documentation-udwy.readme.io/docs/m%C3%BC%C5%9Fteri-sorular%C4%B1n%C4%B1-%C3%A7ekme) üzerinden çekmiş olduğunuz sorulara bu servis aracılığı ile cevap verebilirsiniz.

* Cevap mesajı minimum 10, maksimum 2000 karakter aralığında olmalıdır.
* Cevaplar yasaklı kelime kontrolünden geçirilir. Yasaklı kelime içeren cevaplar reddedilir.

### **POST** createAnswer

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id}/answers](https://apigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id}/answers)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id}/answers](https://stageapigw.trendyol.com/integration/qna/sellers/\{sellerId}/questions/\{id}/answers)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "text": "string"
}
```

**Örnek Servis Cevabı**

```json
{
  "answerId": 0
}
```

**Field Açıklamaları:**

| Field İsmi | Açıklama                                                               |
| :--------- | :--------------------------------------------------------------------- |
| id         | Ürün sorusunun id'sidir. Ürün sorularını çekme servisinden alınabilir. |
| text       | Cevap metnidir                                                         |
| sellerId   | İlgili tedarikçinin id bilgisidir..                                    |

**Hata Durumları:**

Cevaplama işlemi sırasında aşağıdaki hata durumları ile karşılaşabilirsiniz:

| Hata Durumu                   | Açıklama                                                                        |
| :---------------------------- | :------------------------------------------------------------------------------ |
| Soru daha önce cevaplanmış    | Bu soru daha önce cevaplandı. Cevaplanmış sorular tekrar cevaplanamaz.          |
| Süre limiti aşılmış           | Belirtilen süre içinde cevap vermediğiniz için soru kapatılmıştır.              |
| Yasaklı kelime limiti aşılmış | Cevabınızda yasaklı kelime kullanma limitini aştığınız için soru kapatılmıştır. |
| Cevap çok kısa                | Cevabınız 10 karakterden uzun olmalıdır.                                        |
| Cevap çok uzun                | Cevabınız 2000 karakterden uzun olamaz.                                         |
| Cevap boş                     | Bir cevap giriniz.                                                              |

**Hangi Statüdeki Sorular Cevaplanabilir?**

| Statü                | Cevaplanabilir mi? | Açıklama                                                                                   |
| :------------------- | :----------------- | :----------------------------------------------------------------------------------------- |
| WAITING\_FOR\_ANSWER | Evet               | Sadece bu statüdeki sorular cevaplanabilir.                                                |
| ANSWERED             | Hayır              | Soru cevaplanmış.                                                                          |
| REPORTED             | Hayır              | Soru raporlanmış, admin değerlendirmesi bekleniyor.                                        |
| REJECTED             | Hayır              | Soru reddedilmiş ve kapatılmış.                                                            |
| UNANSWERED           | Hayır              | 3 iş günü içinde yanıtlanmama veya yasaklı kelime limitinin aşılması nedeniyle kapatılmış. |

<br />

<Callout icon="📘" theme="info">
  **ÖNEMLİ NOTLAR:**

  * Cevap verdikten sonra cevabınız yasaklı kelime kontrolünden geçirilir.
  * Yasaklı kelime tespit edilirse cevabınız reddedilir ve soru tekrar **WAITING_FOR_ANSWER** statüsüne döner.
  * Belirli sayıda yasaklı kelime içeren cevap verirseniz, soru **UNANSWERED** statüsüne geçer ve bir daha cevaplayamazsınız.
</Callout>