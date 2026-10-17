---
updatedAt: 2026-07-03T07:18:02.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Video Oluşturma / Listeleme Servisi

Entegrasyon servisleri aracılığıyla satıcıların/entegratörlerin ürünler için video içeriği oluşturması ve videoların alınması için bu servisi kullanabilirsiniz.

* Bir satıcı aynı productContentId için sadece 1 aktif (silinmemiş ve reddedilmemiş) video oluşturabilir.
* isApproved: true olana kadar video son kullanıcıya gösterilmez.
* Tüm config değerleri (dosya boyutu limiti, süre limitleri, timeout) dinamik olarak yönetilir ve değiştirilebilir.
* Video başarıyla indirilip (SUCCESS) optimize edildikten sonra otomatik olarak aynı productContentId'ye sahip eski videolardan bu ürün ilişkisi kaldırılır.

<br />

<Callout icon="❗️" theme="error">
  **TOPLU İŞLEM KONTROLÜ**

  Video oluşturma işlemi sonrasında response içerisinde yer alan videoId ile videolarınızın işleminin durumunu Videoları Listeleme / Sorgulama servisi üzerinden kontrol etmeniz gerekmektedir.
</Callout>

<br />

### **1. POST** Video Oluşturma

Video içeriği oluşturma işlemini başlatır. Video, verilen URL'den indirilir ve arka planda işlenir. 200 req/min rate limit belirlenmiştir.

<NoLinkCallout type="info" title="PROD">
  <code>{`https://apigw.trendyol.com/integration/video/sellers/{sellerId}/videos`}</code>
</NoLinkCallout>

<br />

**Request Body**

| Alan              | Tip    | Zorunlu | Açıklama                                                                                                            |
| :---------------- | :----- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| title             | string | Evet    | Video başlığı. 3-50 karakter arası olmalıdır.                                                                       |
| description       | string | Hayır   | Video açıklaması. En fazla 500 karakter olabilir.                                                                   |
| videoUrl          | string | Evet    | İndirilecek video dosyasının URL'i. http\:// veya https\:// ile başlamalıdır. Geçerli bir URL formatında olmalıdır. |
| productContentIds | string | Evet    | Bir content id'ye yalnızca 1 video yüklenebilir, aynı video maksimum 100 content id'ye yüklenebilir.                |
| videoContentType  | string | Hayır   | Video içerik tipi. Gönderilmezse PRODUCT\_PROMOTION olarak atanır.                                                  |

<br />

**Geçerli** **videoContentType** değerleri:

| Değer                           | Açıklama                   |
| :------------------------------ | :------------------------- |
| PRODUCT\_PROMOTION              | Ürün Tanıtımı (varsayılan) |
| ASSEMBLY\_AND\_INSTALLATION     | Montaj & Kurulum           |
| PACKAGING                       | Operasyon (Paketleme)      |
| STORE\_PROMOTION                | Mağaza Tanıtım             |
| ADVERTISEMENT                   | Reklam                     |
| PRODUCT\_USAGE\_AND\_EXPERIENCE | Ürün Kullanımı & Deneyimi  |

<br />

### **Örnek Servis İsteği - Video Oluşturma**

```json
{
    "title": "Ürün Tanıtım Videosu",
    "description": "Yeni sezon ürün tanıtımı",
    "videoUrl": "https://cdn.example.com/video.mp4",
    "productContentIds": ["123456", "789012"],
    "videoContentType": "PRODUCT_PROMOTION"
  }
```

<br />

### **Başarılı Response (200)**

Video içeriği oluşturulur ve videoId döner. Videonun indirilmesi ve işlenmesi arka planda devam eder.

```json
{
  "videoId": "627b8a1b-7bad-4eaf-9abb-99a9958540c2"
}
```

| Alan    | Tip    | Açıklama                                                                               |
| :------ | :----- | :------------------------------------------------------------------------------------- |
| videoId | string | Oluşturulan video içeriğin UUID'si. Bu ID ile GET endpoint'inden durum sorgulanabilir. |

<br />

### **Hata Kodları**

İstek validasyonlarından kaynaklanan hatalar. HTTP Status: 400

| Kod                                             | Mesaj                                                                                     |
| :---------------------------------------------- | :---------------------------------------------------------------------------------------- |
| seller.integration.title.required               | Başlık zorunludur.                                                                        |
| seller.integration.title.length                 | Başlık 3 ile 50 karakter arasında olmalıdır.                                              |
| seller.integration.description.length           | Açıklama en fazla 500 karakter olmalıdır.                                                 |
| seller.integration.video.url.required           | Video URL zorunludur.                                                                     |
| seller.integration.video.url.invalid            | Video URL http\:// veya https\:// ile başlamalıdır.                                       |
| seller.integration.product.content.ids.required | En az bir ürün içerik ID'si gereklidir.                                                   |
| seller.integration.product.content.ids.max      | Ürün içerik ID listesi en fazla 100 eleman içerebilir.                                    |
| seller.integration.body.required                | Zorunlu alanlar eksik.                                                                    |
| seller.integration.invalid.status               | Geçersiz sellerIntegrationStatus değeri. Geçerli değerler: IN\_PROGRESS, SUCCESS, FAILED. |
| seller.integration.invalid.store.front.code     | Geçersiz storeFrontCode değeri.                                                           |

<br />

### **2. GET** Videoları Listeleme / Sorgulama

Satıcının entegrasyon videolarını listeler. Opsiyonel filtrelerle belirli bir video ID veya status'e göre sorgulama yapılabilir. 1000 req/min rate limit belirlenmiştir.

<br />

<NoLinkCallout type="info" title="PROD">
  <code>{`https://apigw.trendyol.com/integration/video/sellers/{sellerId}/videos`}</code>
</NoLinkCallout>

**Query Parametreleri**

| Parametre               | Tip    | Zorunlu | Varsayılan | Açıklama                             |
| :---------------------- | :----- | :------ | :--------- | :----------------------------------- |
| id                      | string | Hayır   | -          | Belirli bir video ID ile sorgulama   |
| sellerIntegrationStatus | string | Hayır   | -          | Entegrasyon durumuna göre filtreleme |
| page                    | number | Hayır   | 0          | Sayfa numarası (0'dan başlar)        |
| size                    | number | Hayır   | 10         | Sayfa başına kayıt sayısı            |

<br />

**Geçerli sellerIntegrationStatus değerleri**:

| Değer        | Açıklama                            |
| :----------- | :---------------------------------- |
| IN\_PROGRESS | Video indiriliyor veya işleniyor    |
| SUCCESS      | Video başarıyla indirildi           |
| FAILED       | Video indirme işlemi başarısız oldu |

<br />

### **Örnek Servis Cevabı - Video Listeleme**

```json
{
  "meta": {
    "page": 0,
    "total": 2,
    "totalPage": 1,
    "size": 10
  },
  "data": [
    {
      "id": "627b8a1b-7bad-4eaf-9abb-99a9958540c2",
      "title": "Ürün Tanıtım Videosu",
      "description": "Yeni sezon ürün tanıtımı",
      "status": "SUCCESS",
      "videoUrl": "https://cdn.example.com/video.mp4",
      "productContentIds": ["123456"],
      "optimizedVideoUrl": "https://video-content.dsmcdn.com/.../video_hd.mp4",
      "isApproved": true
    },
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "title": "Montaj Videosu",
      "description": "",
      "status": "FAILED",
      "videoUrl": "https://cdn.example.com/montaj.avi",
      "productContentIds": ["789012"],
      "errorCode": "video.content.api.seller.integration.video.format.invalid",
      "isApproved": false
    }
  ]
}
```

<br />

**Response Alanları**

| Alan              | Tip           | Açıklama                                                                                   |
| :---------------- | :------------ | :----------------------------------------------------------------------------------------- |
| id                | string        | Video içerik ID (UUID)                                                                     |
| title             | string        | Video başlığı                                                                              |
| description       | string        | Video açıklaması                                                                           |
| status            | string        | Entegrasyon durumu: IN\_PROGRESS, SUCCESS, FAILED                                          |
| videoUrl          | string        | Verilen orijinal video URL'i                                                               |
| productContentIds | string\[]     | İlişkilendirilen ürün içerik ID'leri                                                       |
| errorCode         | string        | Hata durumunda hata kodu (sadece FAILED durumunda)                                         |
| optimizedVideoUrl | string \ null | Optimize edilmiş video URL'i (sadece SUCCESS ve işleme tamamlandıysa)                      |
| isApproved        | boolean       | Videonun onay durumu. true ise video yayında, false ise henüz onaylanmamış veya işleniyor. |

<br />

**status ve isApproved ilişkisi:**

| status       | isApproved | Anlam                                                  |
| :----------- | :--------- | :----------------------------------------------------- |
| IN\_PROGRESS | false      | Video indiriliyor veya işleniyor                       |
| SUCCESS      | false      | Video indirildi, optimizasyon/onay süreci devam ediyor |
| SUCCESS      | true       | Video tamamen hazır ve yayında                         |
| FAILED       | false      | Video işleme başarısız oldu                            |

<br />

## **Video Dosyası Gereksinimleri**

| Kural                 | Değer                 |
| :-------------------- | :-------------------- |
| Desteklenen formatlar | .mp4, .mov            |
| Maksimum dosya boyutu | 500 MB                |
| Minimum süre          | 8 saniye              |
| Maksimum süre         | 120 saniye (2 dakika) |

Video dosyası uzantısı ve içeriği (magic bytes) kontrol edilir. Uzantı .mp4 olan bir dosyanın gerçek içeriği de MP4 formatında olmalıdır.

<br />

### **Hata Kodları**

Video indirme ve işleme sürecinde oluşan hatalar. errorCode alanında döner.

| Kod                                       | Mesaj                                                              |
| :---------------------------------------- | :----------------------------------------------------------------- |
| seller.integration.video.url.invalid      | Video URL is invalid or empty.                                     |
| seller.integration.video.format.invalid   | Video format is invalid. Only .mp4 and .mov formats are supported. |
| seller.integration.video.size.exceeded    | Video size exceeds the maximum allowed limit.                      |
| seller.integration.video.download.timeout | Video download timed out.                                          |
| seller.integration.video.download.failed  | Video download failed.                                             |
| seller.integration.video.duration.invalid | Video duration must be between 8 and 120 seconds.                  |