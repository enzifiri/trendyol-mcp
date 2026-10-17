---
updatedAt: 2026-07-30T12:09:45.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Trendyol Marka Listesi (getBrands)

### Trendyol Marka Bilgileri

[createProduct V2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-v2) servisine yapılacak isteklerde gönderilecek brandId bilgisi bu servis kullanılarak alınacaktır.

* Bir sayfada minumum 1000 adet brand bilgisi alınabilmektedir.
* Marka araması yaparken servise page parametresini kullanarak query oluşturmanız gerekmektedir.

### **GET** getBrands

<NoLinkCallout type="info" title="PROD">
  `https://apigw.trendyol.com/integration/product/brands`
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  `https://stageapigw.trendyol.com/integration/product/brands`
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

<br />

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