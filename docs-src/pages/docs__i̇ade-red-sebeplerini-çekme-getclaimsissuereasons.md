---
updatedAt: 2026-09-22T10:52:12.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Red Sebeplerini Çekme (getClaimsIssueReasons)

[createClaimIssue](https://integration-documentation-udwy.readme.io/docs/i%CC%87ade-sipari%C5%9Flerinde-ret-talebi-olu%C5%9Fturma-createclaimissue) servisine yapılacak olan isteklerde gönderilecek claimIssueReasonId değerine bu servisi kullanarak ulaşabilirsiniz.

* 1651 numaralı talep nedeni için, iade WaitingInAction statusune geçtikten ilk 24 saat içinde bu reason seçilemez.
* Bu servisten dönen iade sebepleri Türkiye ve Global pazar yerleri için ortak olarak dönmektedir. Türkiye pazaryerinde geçerli olan iade sebeplerine aşağıdaki "Örnek Servis Cevabı" kısmından ulaşabilirsiniz.

### **GET** getClaimsIssueReasons

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/claim-issue-reasons
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
https://stageapigw.trendyol.com/integration/order/claim-issue-reasons
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
[
    {
        "id": 51,
        "name": "Ürün olağan dışı kullanılmış ve/veya müşteri kaynaklı hasar görmüş"
    },
    {
        "id": 401,
        "name": "İade edilen ürün veya adedi eksik"
    },
    {
        "id": 151,
        "name": "İade edilen ürünün parçası / aksesuarı eksik"
    },
    {
        "id": 201,
        "name": "Satılan üründen tamamen farklı bir ürün (yanlış) iade edildi"
    },
    {
        "id": 451,
        "name": "Ürünü analize alacağım"
    },
    {
        "id": 2051,
        "name": "Ürünün koruyucu ambalajı (hijyen bandı, mühür, paket) açılmış"
    },
    {
        "id": 1951,
        "name": "Kurumsal iade faturası iletilmedi veya hatalı"
    },
    {
        "id": 1651,
        "name": "İade paketi tarafıma teslim edilmedi"
    },
    {
        "id": 2077,
        "name": "Ürün iade edilemeyen 'Kişiselleştirilmiş (Özel Üretim)' statüsündedir"
    },
    {
        "id": 2078,
        "name": "Gelen üründe herhangi bir kusur yok. Müşteri memnuniyeti için iadeyi kabul etmek istiyorum"
    },
    {
        "id": 2079,
        "name": "Ürünü doğru ve sağlam gönderdim. İade edilen ürün eksik, hasarlı veya farklı bir ürün olarak ulaştı"
    },
    {
        "id": 2101,
        "name": "Sipariş sorusundan gelen değişim talebi (müşterinin talebi yoksa kullanılmamalı)"
    },
    {
        "id": 1801,
        "name": "Üretim kaynaklı sorun bulunmadı"
    },
    {
        "id": 1851,
        "name": "Ürün değişimi yapıldı"
    },
    {
        "id": 1901,
        "name": "Ürün tamiratı gerçekleştirildi"
]
```