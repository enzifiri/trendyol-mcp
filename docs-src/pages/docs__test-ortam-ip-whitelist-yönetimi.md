---
updatedAt: 2026-08-18T12:26:45.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Test Ortam IP Whitelist Yönetimi

Bu servisler ile STAGE ortamına erişim için satıcı hesabınıza ait IP whitelist kayıtlarını listeleyebilir, yeni IPv4<br />adresi ekleyebilir ve mevcut bir IP kaydını silebilirsiniz. Whitelist’te tanımlı IP’ler üzerinden stage<br />entegrasyon erişimi yönetilir.

###

### Servis Kuralları

* Bu servis stage ortamına erişim için IP yetkilendirmesi sağlamak amacıyla kullanılır.
* Tüm endpoint’ler Basic Authentication ile çağrılmalıdır.
* Path’teki sellerId, satıcı panelindeki satıcı ID bilgisidir ve zorunludur.
* Yalnızca IPv4 adresleri desteklenir (örn. 203.0.113.10). IPv6 kabul edilmez.
* Whitelist’e maksimum 7 adet IP eklenebilir.
* Günlük en fazla 7 adet IP oluşturma (ekleme) isteği gönderilebilir.
* Eklenen IP’ler için sistem bir son geçerlilik tarihi (expiresAt) üretir; süre dolunca kayıt geçersiz olur.
* İşlem veya tanımlı IP sayısı limiti aşıldığında 429 döner. <br />

### 1-IP Whitelist Listeleme

<br />Satıcıya ait, stage ortam erişimi için tanımlı aktif IP whitelist kayıtlarını listeler.

• Query parametresi yoktur; satıcıya ait tüm whitelist kayıtları döner.
• Her kayıt için IP adresi ve son geçerlilik tarihi (expiresAt) döner.
• Kayıt yoksa ips boş dizi olarak dönebilir.
• Whitelist’te aynı anda en fazla 7 IP bulunabilir

### GET ip-whitelists

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/ip-whitelists`
</NoLinkCallout>

<br />

### Servis Parametresi

| Parametre |                Açıklama               |  Tip | Zorunlu |
| :-------- | :-----------------------------------: | ---: | ------- |
| sellerId  | Canlı Ortamdaki  satıcının ID bilgisi | long | Evet    |

<br />

### **Örnek Servis Cevabı**

```json
{
"sellerId": "123456",
"ips": [
{
"ip": "203.0.113.10",
"expiresAt": "2026-08-16T08:19:53.084130217Z"
}
]
}
```

<br />

### Alan Açıklamaları (Response)

| Parametre        |                      Açıklama                     |    Tip | Zorunlu                |
| :--------------- | :-----------------------------------------------: | -----: | ---------------------- |
| sellerId         |       Canlı Ortamdaki  satıcının ID bilgisi       | string | Evet                   |
| ips              |   Whitelist’teki IP kayıtları listesi (maks. 7)   |  array | Zorunlu (boş olabilir) |
| ips\[].ip        |          Whitelist’te tanımlı IPv4 adresi         | string | Evet                   |
| ips\[].expiresAt | IP kaydının son geçerlilik tarihi (ISO-8601, UTC) | string | Evet                   |

<br />

### Hata Senaryoları

| HTTP |                 Key                |                                Mesaj | **Açıklama**                             |
| :--- | :--------------------------------: | -----------------------------------: | ---------------------------------------- |
| 401  |                  -                 |                         Unauthorized | Basic Auth bilgisi eksik/hatalı          |
| 429  |     ip.whitelist.limit.exceeded    |          İşlem veya IP limit aşıldı. | Rate limit veya IP sayısı limiti aşıldı  |
| 500  | ip.whitelist.unexpected.server.err | Beklenmeyen bir sunucu hatası oluştu | Beklenmeyen sunucu hatası                |
| 502  |  ip.whitelist.network.unreachable  |            Ağ servisine erişilemiyor | Downstream ağ<br />servisine ulaşılamadı |

<br />

### 2-IP Whitelist Ekleme

Stage ortamına erişim için satıcı whitelist’ine yeni bir IPv4 adresi ekler.

<br />

### Servis Kuralları

* Request body’de yalnızca ip alanı gönderilir.
* IP zorunludur ve geçerli bir IPv4 olmalıdır.
* Whitelist’te maksimum 7 adet IP tutulabilir; bu limit aşıldığında istek reddedilir.
* Günlük en fazla 7 adet IP oluşturma isteği gönderilebilir; günlük limit aşıldığında istek reddedilir.
* Aynı IP zaten aktifse 409 döner.
* Güvenlik kontrolü başarısız olursa 422 döner.
* Limit aşımında (maks. 7 IP veya günlük 7 ekleme) 429 döner.
* Başarılı işlemde HTTP 201 ve eklenen kaydın expiresAt bilgisi döner.

### POST ip-whitelists

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/ip-whitelists`
</NoLinkCallout>

### Servis Parametresi

| Parametre |                Açıklama               |  Tip | Zorunlu |
| :-------- | :-----------------------------------: | ---: | ------- |
| sellerId  | Canlı Ortamdaki  satıcının ID bilgisi | long | Evet    |

<br />

### **Örnek Servis İsteği**

```json
{
  "ip": "1.1.1.1"
}
```

### Alan Açıklamaları (Request)

| Parametre |              Açıklama             |    Tip | Zorunlu |
| :-------- | :-------------------------------: | -----: | ------- |
| ip        | Whitelist’e eklenecek IPv4 adresi | string | Zorunlu |

<br />

### **Örnek Servis Cevabı&#x20;**&#x48;TTP 201

```json
{
  "sellerId": "123456",
  "ip": "203.0.113.10",
  "expiresAt": "2026-08-16T08:19:53.084130217Z"
}
```

### Alan Açıklamaları (Response)

| Parametre |                      Açıklama                     |    Tip | Zorunlu                |
| :-------- | :-----------------------------------------------: | -----: | ---------------------- |
| sellerId  |       Canlı Ortamdaki  satıcının ID bilgisi       | string | Evet                   |
| ip        |                Eklenen IPv4 adresi                | string | Zorunlu (boş olabilir) |
| expiresAt | IP kaydının son geçerlilik tarihi (ISO-8601, UTC) | string | Evet                   |

### Hata Senaryoları

| HTTP |                 Key                |                                        Mesaj | **Açıklama**                             |
| :--- | :--------------------------------: | -------------------------------------------: | ---------------------------------------- |
| 400  |      ip.whitelist.ip.required      |                        IP adresi zorunludur. | ip alanı boş/gönderilmemiş               |
| 400  |   ip.whitelist.ip.must.be.string   |          IP adresi metin (string) olmalıdır. | ip tipi string değil                     |
| 400  |       ip.whitelist.ip.invalid      | IP adresi geçerli bir IPv4 adresi olmalıdır. | Geçersiz IPv4 / IPv6 gönderilmiş         |
| 401  |                  -                 |                                 Unauthorized | Basic Auth bilgisi eksik/hatalı          |
| 409  |     ip.whitelist.already.active    |                    Bu IP adresi zaten aktif. | Aynı IP zaten whitelist’te               |
| 422  | ip.whitelist.security.check.failed |                 Güvenlik kontrolü başarısız. | IP güvenlik kontrolünden geçemedi        |
| 429  |     ip.whitelist.limit.exceeded    |                  İşlem veya IP limit aşıldı. | Rate limit veya IP sayısı limiti aşıldı  |
| 500  | ip.whitelist.unexpected.server.err |         Beklenmeyen bir sunucu hatası oluştu | Beklenmeyen sunucu hatası                |
| 502  |  ip.whitelist.network.unreachable  |                    Ağ servisine erişilemiyor | Downstream ağ<br />servisine ulaşılamadı |

<br />

### 3- IP Whitelist Silme

Satıcı whitelist’inden belirtilen IPv4 adresini siler; stage erişim yetkisi ilgili IP için kaldırılır.

* Silinecek IP path parametresi olarak gönderilir.
* Başarılı silmede HTTP 204 döner; response body yoktur.
* Silinmek istenen IP bulunamazsa 404 döner.
* Limit aşımında 429 döner.
* Silinen IP, maksimum 7 IP kotasında yer açar; günlük oluşturma limiti (7/gün) silme ile sıfırlanmaz.

### DELETE  ip-whitelist

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/ip-whitelists`/(ip)
</NoLinkCallout>

### Servis Parametresi

| Parametre |              Açıklama              |    Tip | Zorunlu |
| :-------- | :--------------------------------: | -----: | ------- |
| sellerId  | İlgili satıcının ID bilgisi (path) |   long | Evet    |
| ip        |    Silinecek IPv4 adresi (path)    | string | Evet    |

<br />

### Hata Senaryoları

| HTTP |                 Key                |                                  Mesaj | **Açıklama**                             |
| :--- | :--------------------------------: | -------------------------------------: | ---------------------------------------- |
| 401  |                  -                 |                           Unauthorized | Basic Auth bilgisi eksik/hatalı          |
| 404  |       ip.whitelist.not.found       | Silinmek istenen IP adresi bulunamadı. | IP whitelist’te yok                      |
| 429  |     ip.whitelist.limit.exceeded    |            İşlem veya IP limit aşıldı. | Rate limit veya IP sayısı limiti aşıldı  |
| 500  | ip.whitelist.unexpected.server.err |   Beklenmeyen bir sunucu hatası oluştu | Beklenmeyen sunucu hatası                |
| 502  |  ip.whitelist.network.unreachable  |              Ağ servisine erişilemiyor | Downstream ağ<br />servisine ulaşılamadı |

<br />

<br />