---
updatedAt: 2026-07-30T12:08:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Trendyol Marka Listesi (getBrands)

Trendyol marka bilgilerini almak için kullanılan API detayları.

### Trendyol Marka Bilgileri

[createProduct V2](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts) servisine yapılacak isteklerde gönderilecek brandId bilgisi bu servis kullanılarak alınacaktır.

* Bir sayfada minumum 1000 adet brand bilgisi alınabilmektedir.
* Marka araması yaparken servise page parametresini kullanarak query oluşturmanız gerekmektedir.

### **GET** getBrands

<NoLinkCallout theme="info">
  **PROD**

  [https://apigw.trendyol.com/integration/product/brands](https://apigw.trendyol.com/integration/product/brands)
</NoLinkCallout>

<NoLinkCallout theme="info">
  **STAGE**

  [https://stageapigw.trendyol.com/integration/product/brands](https://stageapigw.trendyol.com/integration/product/brands)
</NoLinkCallout>

**Filtre Parametreleri**

| Parametre |                              Açıklama                              |
| :-------- | :----------------------------------------------------------------: |
| **page**  | Servis cevabınında hangi sayfadaki markaların getirileceği bilgisi |
| **size**  |            Bir servis cevabında yer alacak Marka sayısı            |

**Örnek Servis Cevabı**

```json
{
  "brands": [
    {
      "id": 10,
      "name": "TrendyolMilla",
      "luxe": false
    },
    {
      "id": 19,
      "name": "Milla",
      "luxe": true
    },
    {
      "id": 20,
      "name": "Trendyol",
      "luxe": false
    }
    ]
}
```

### **GET** getBrandsName

* BÜYÜK / küçük harf ayrımına dikkat etmelisiniz.

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/brands/by-name?name=\{brand-name}](https://apigw.trendyol.com/integration/product/brands/by-name?name=\{brand-name})
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/brands/by-name?name=\{brand-name}](https://stageapigw.trendyol.com/integration/product/brands/by-name?name=\{brand-name})
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
[
  {
    "id": 40,
    "name": "TRENDYOLMİLLA",
    "luxe": false
  },
];
```

<br />