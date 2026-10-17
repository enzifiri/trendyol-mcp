---
updatedAt: 2026-09-15T13:33:31.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Trendyol Kategori - Özellik Listesi V1 (getCategoryAttributes)

Trendyol kategori özelliklerini almak için gerekli API bilgileri ve örnekler.

<Callout icon="❗️" theme="error">
  \*\*Aşağıdaki Ürün V1 endpoint servisleri **15 Ekim 2026 itibari ile kullanım dışı olacaktır.** Bu tarihe kadar [Product V2 servis geliştirmelerini](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-ak%C4%B1%C5%9F%C4%B1) yapmanız gerekmektedir.
</Callout>

[createProduct](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts) servisine yapılacak isteklerde gönderilecek **attributes** bilgileri ve bu bilgilere ait detaylar bu servis kullanılarak alınacaktır.

* createProduct yapmak için en alt seviyedeki kategori ID bilgisi kullanılmalıdır. Seçtiğiniz kategorinin alt kategorileri var ise bu kategori bilgisi ile ürün aktarımı yapamazsınız.
* Yeni kategorileri özellikleri eklenebileceği sebebiyle güncel kategori özellik listesini haftalık olarak almanızı öneririz.

<Callout icon="👍" theme="okay">
  **İPUCU**

  Ürün kategori ağacı belirli aralıklarla güncellenmektedir. Güncel olmayan bir kategori ağacı kullanmanız durumunda **eksik veya hatalı veri girişi yapabilirsiniz.** Bu sebep ile her işlem öncesinde **en güncel kategori ağacını** kullanmanız gerekmektedir.
</Callout>

### **GET** getCategoryAttributes

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/product-categories/\{categoryId}/attributes](https://apigw.trendyol.com/integration/product/product-categories/\{categoryId}/attributes)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/product-categories/\{categoryId}/attributes](https://stageapigw.trendyol.com/integration/product/product-categories/\{categoryId}/attributes)
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "id": 411,
    "name": "Casual Ayakkabı",
    "displayName": "Casual Ayakkabı",
    "categoryAttributes": [
        {
        "categoryId": 411,
        "attribute": {
            "id": 14,
            "name": "Materyal"
        },
        "required": false,
        "allowCustom": false,
        "varianter": false,
        "slicer": false,
        "attributeValues": [
            {
            "id": 82,
            "name": "Deri"
            },
            {
            "id": 85,
            "name": "Hakiki Deri"
            },
            {
            "id": 105,
            "name": "Suni Deri"
            },
            {
            "id": 107,
            "name": "Süet"
            },
            {
            "id": 109,
            "name": "Tekstil"
            },
            {
            "id": 685,
            "name": "Rugan"
            },
            {
            "id": 715,
            "name": "Nubuk"
            }
        ]
        },
        {
        "categoryId": 411,
        "attribute": {
            "id": 207,
            "name": "Malzeme Tipi"
        },
        "required": false,
        "allowCustom": false,
        "varianter": false,
        "slicer": false,
        "attributeValues": [
            {
            "id": 2214,
            "name": "Hakiki"
            },
            {
            "id": 2215,
            "name": "Suni"
            }
        ]
    },
}
```

**Filtre Parametreleri**

| Parametre                |                                                  Açıklama                                                 |
| :----------------------- | :-------------------------------------------------------------------------------------------------------: |
| **name**                 |                                   Kategorinin Trendyol sistemindeki Adı                                   |
| **displayName**          |                          Kategorinin Trendyol sistemindeki Adı- Ön yüzde görünen                          |
| **attribute.id**         |                                      Kategorideki özellik ID bilgisi                                      |
| **attribute.name**       |                                          Kategorideki özellik adı                                         |
| **allowCustom**          |             true ise createProduct yapılırken ID yerine freetext-string gönderim yapılmalıdır.            |
| **required**             | true ise createProduct yapılırken ilgili attributes, attributeValues alanında gönderilmesi gerekmektedir. |
| **slicer**               |                      true ise trendyol.com üzerinde ayrı bir ürün kartı oluşturulur.                      |
| **varianter**            |     Trendyol.com'da ürünü görünürken bu özellik bilgisi bir varyant bilgisi olup olmadığını ifade eder    |
| **attributeValues.id**   |                         Kategorideki özelliği için girilebilecek değer ID bilgisi                         |
| **attributeValues.name** |                             Kategorideki özelliği için girilebilecek değer adı                            |