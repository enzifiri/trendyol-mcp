---
updatedAt: 2026-09-15T13:32:06.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Trendyol Kategori Listesi (getCategoryTree)

Trendyol kategori bilgileri ve getCategoryTree servisi hakkında detaylı bilgi.

<Callout icon="❗️" theme="error">
  \*\*Aşağıdaki Ürün V1 endpoint servisleri **15 Ekim 2026 itibari ile kullanım dışı olacaktır.** Bu tarihe kadar [Product V2 servis geliştirmelerini](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-ak%C4%B1%C5%9F%C4%B1) yapmanız gerekmektedir.
</Callout>

### Trendyol Kategori Bilgileri

[createProduct V2](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts) servisine yapılacak isteklerde gönderilecek categoryId bilgisi bu servis kullanılarak alınacaktır.

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

<br />

**Filtre Parametresi**

| Parametre |     Açıklama    |
| :-------- | :-------------: |
| **name**  | Kategorinin adı |

Belirli bir anahtar kelimeyle kategorileri filtrelemek istediğinizde name parametresini kullanabilirsiniz.  Girmiş olduğunuz kelimenin geçtiği tüm seviyelerdeki kategori isimleri response'da dönecektir.

<NoLinkCallout icon="📘" theme="info">
  **PROD**

  [https://apigw.trendyol.com/integration/product/product-categories?name=saat](https://apigw.trendyol.com/integration/product/product-categories?name=saat)
</NoLinkCallout>

**Alan Açıklamaları**

| Parametre         |                      Açıklama                     |
| :---------------- | :-----------------------------------------------: |
| **Id**            |    Kategorinin Trendyol sistemindeki ID bilgisi   |
| **ParentId**      | Kategorinin bağlı olduğu bir üst kategori bilgisi |
| **Name**          |                  Kategorinin adı                  |
| **SubCategories** |  Eğer alt kategori yoksa SubCategories:false olur |