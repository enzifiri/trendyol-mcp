---
updatedAt: 2026-05-06T19:50:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Hata Kodları

**Marketplace entegrasyonundaki hata kodlarına aşağıdan ulaşabilirsiniz**

| HATA KODU                  | DETAY                                                                                                                                                                                                                     |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 200 OK                     | Yaptığınız istek Trendyol tarafından başarıyla işlendi.                                                                                                                                                                   |
| 201 Created                | Yaptığınız istek yerine getirildi ve yeni bir kaynak oluşturuldu.                                                                                                                                                         |
| 202 Accepted               | Yaptığınız istek kabul edildi ancak henüz işleme koyulmadı.                                                                                                                                                               |
| 204 No Content             | Yaptığınız istek kabul edildi ancak içerik döndürülmeyecek.                                                                                                                                                               |
| 400 Bad Request            | Yaptığınız istek geçerli bir istek değildir, zorunlu alanlar doldurulmamış ya da yapılan isteğin içinde Trendyol'un kabul etmediği değerler mevcut.                                                                       |
| 401 Unauthorized           | Gerekli kimlik doğrulama bilgileri istekte yok veya yanlış, Yetkilendirmeyi tekrar kontrol edin.                                                                                                                          |
| 403 Forbidden              | Sunucu isteğe yanıt vermeyi reddediyor. Hatalı bir endpoint veya servis parametresi ile istek yapılması durumunda genellikle bu durum yaşanır.                                                                            |
| 404 Not Found              | İstenilen kaynak bulunamadı veya olmayan bir yere istek gönderildi.                                                                                                                                                       |
| 405 Method Not Allowed     | Yapılan istek doğru metod ile yapılmadı. GET/POST isteğinizin doğru olduğunu kontrol edin.                                                                                                                                |
| 409 Resource Conflict      | İstekteki çakışma nedeniyle istenen kaynak işlenemedi. Örneğin, istenen kaynak beklenen durumda olmayabilir.                                                                                                              |
| 414 URI Too Long           | Sunucu, sağlanan Tekdüzen Kaynak Tanımlayıcısı (URI) çok uzun olduğundan isteği kabul etmeyi reddediyor.                                                                                                                  |
| 415 Unsupported Media Type | Yük biçimi desteklenmeyen bir format olduğundan sunucu isteği kabul etmeyi reddediyor.                                                                                                                                    |
| 429 Too Many Requests      | Yapılan istek sayısı, Trendyol'un belirlediği sınırı aştığı için talep kabul edilmedi. Trendyol'un API oranı sınırları hakkında daha fazla bilgi edinin.                                                                  |
| 500 Internal Server Error  | Trendyol sisteminde bir hata oluştu. İsteğinizi yeniden deneyin. Sorun devam ederse lütfen tüm hata kodlarını ve işlemlerinizi kaydedin, Trendyol personelinin araştırabilmesi için Çağrı Merkezimiz ile iletişime geçin. |
| 502 Bad Gateway            | Trendyol sisteminde bir hata oluştu. İsteğinizi yeniden deneyin.                                                                                                                                                          |
| 503 Service Unavailable    | Trendyol sisteminde bir hata var ve şu anda kullanılamıyor. Bildirilen hizmet kesintileri için Trendyol bildirimlerinizi kontrol edin.                                                                                    |
| 504 Gateway Timeout        | Yaptığınız istek zamanında tamamlanamadı. Yaptığınız istek çok büyükse, bunu birden fazla küçük isteğe bölmeyi deneyin.                                                                                                   |