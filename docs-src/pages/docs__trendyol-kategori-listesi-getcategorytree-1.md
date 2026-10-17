---
updatedAt: 2026-04-28T11:08:16.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Trendyol Kategori Listesi (getCategoryTree)

Trendyol kategori bilgileri ve getCategoryTree servisi hakkında detaylı bilgi.

### Trendyol Kategori Bilgileri

[createProduct V2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-v2) servisine yapılacak isteklerde gönderilecek categoryId bilgisi bu servis kullanılarak alınacaktır.

* createProduct yapmak için en alt seviyedeki kategori ID bilgisi kullanılmalıdır. Seçtiğiniz kategorinin alt kategorileri var ise bu kategori bilgisi ile ürün aktarımı yapamazsınız.
* Yeni kategoriler eklenebileceği sebebiyle güncel kategori listesini haftalık olarak almanızı öneririz.

<Callout icon="👍" theme="okay">
  **İPUCU**

  Ürün kategori ağacı belirli aralıklarla güncellenmektedir. Güncel olmayan bir kategori ağacı kullanmanız durumunda **eksik veya hatalı veri girişi yapabilirsiniz.** Bu sebep ile her işlem öncesinde **en güncel kategori ağacını** kullanmanız gerekmektedir.
</Callout>

### **GET** getCategoryTree

<NoLinkCallout icon="📘" theme="info">
  **PROD**

  [https://apigw.trendyol.com/integration/product/product-categories](https://apigw.trendyol.com/integration/product/product-categories)
</NoLinkCallout>

<NoLinkCallout icon="📘" theme="info">
  **STAGE**

  <a class="disabled-link">[https://stageapigw.trendyol.com/integration/product/product-categories](https://stageapigw.trendyol.com/integration/product/product-categories)</a>
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
              {
                    "id": 1162,
                    "name": "Atkı & Bere & Eldiven",
                    "parentId": 368,
                    "subCategories": [
                        {
                            "id": 382,
                            "name": "Atkı",
                            "parentId": 1162,
                            "subCategories": []
                        },
                        {
                            "id": 1805,
                            "name": "Atkı & Bere & Eldiven Set",
                            "parentId": 1162,
                            "subCategories": []
                        },
                        {
                            "id": 384,
                            "name": "Bere",
                            "parentId": 1162,
                            "subCategories": []
                        },
                        {
                            "id": 962,
                            "name": "Boyunluk",
                            "parentId": 1162,
                            "subCategories": []
                        },
                        {
                            "id": 385,
                            "name": "Eldiven",
                            "parentId": 1162,
                            "subCategories": []
                        }
                    ]
                }
            ...
            ..
```

**Filtre Parametresi**

| Parametre |     Açıklama    |
| :-------- | :-------------: |
| **name**  | Kategorinin adı |

Belirli bir anahtar kelimeyle kategorileri filtrelemek istediğinizde name parametresini kullanabilirsiniz.  Girmiş olduğunuz kelimenin geçtiği tüm seviyelerdeki kategori isimleri response'da dönecektir.

<NoLinkCallout icon="📘" theme="info">
  **PROD**

  [https://apigw.trendyol.com/integration/product/product-categories?name=saat](https://apigw.trendyol.com/integration/product/product-categories?name=saat)
</NoLinkCallout>

<br />

**Alan Açıklamaları**

| Parametre         |                      Açıklama                     |
| :---------------- | :-----------------------------------------------: |
| **Id**            |    Kategorinin Trendyol sistemindeki ID bilgisi   |
| **ParentId**      | Kategorinin bağlı olduğu bir üst kategori bilgisi |
| **Name**          |                  Kategorinin adı                  |
| **SubCategories** |  Eğer alt kategori yoksa SubCategories:false olur |