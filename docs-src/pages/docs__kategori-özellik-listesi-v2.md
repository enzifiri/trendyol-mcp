---
updatedAt: 2026-05-05T14:20:10.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kategori Özellik Listesi v2

* createProduct yapmak için en alt seviyedeki kategori ID bilgisi kullanılmalıdır. Seçtiğiniz kategorinin alt kategorileri var ise bu kategori bilgisi ile ürün aktarımı yapamazsınız.
* Yeni kategorileri özellikleri eklenebileceği sebebiyle güncel kategori özellik listesini haftalık olarak almanızı öneririz.

<Callout icon="🚧" theme="warn">
  **İPUCU** Ürün kategori ağacı belirli aralıklarla güncellenmektedir. Güncel olmayan bir kategori ağacı kullanmanız durumunda **eksik veya hatalı veri girişi yapabilirsiniz.** Bu sebep ile her işlem öncesinde `en güncel kategori ağacını` kullanmanız gerekmektedir.
</Callout>

### **GET** getCategoryAttributes

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/categories/\{categoryId}/attributes](https://apigw.trendyol.com/integration/product/categories/\{categoryId}/attributes)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/categories/\{categoryId}/attributes](https://stageapigw.trendyol.com/integration/product/categories/\{categoryId}/attributes)
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "id": 14609,
    "name": "Muay Thai Kaskı",
    "displayName": "Muay Thai Kaskı",
    "categoryAttributes": [
        {
            "allowCustom": false,
            "attribute": {
                "id": 293,
                "name": "Beden"
            },
            "categoryId": 14609,
            "required": true,
            "varianter": true,
            "slicer": false,
            "allowMultipleAttributeValues": false
        },
        {
            "allowCustom": false,
            "attribute": {
                "id": 294,
                "name": "Yaş Grubu"
            },
            "categoryId": 14609,
            "required": false,
            "varianter": false,
            "slicer": false,
            "allowMultipleAttributeValues": false
        },
        {
            "allowCustom": false,
            "attribute": {
                "id": 296,
                "name": "Cinsiyet"
            },
            "categoryId": 14609,
            "required": false,
            "varianter": false,
            "slicer": false,
            "allowMultipleAttributeValues": false
        },
        {
            "allowCustom": false,
            "attribute": {
                "id": 295,
                "name": "Web Color"
            },
            "categoryId": 14609,
            "required": true,
            "varianter": false,
            "slicer": false,
            "allowMultipleAttributeValues": false
        },
        {
            "allowCustom": true,
            "attribute": {
                "id": 47,
                "name": "Renk"
            },
            "categoryId": 14609,
            "required": true,
            "varianter": false,
            "slicer": true,
            "allowMultipleAttributeValues": false
        }
    ]
}
```

**Filtre Parametreleri**

<Table align={["left","center"]}>
  <thead>
    <tr>
      <th>
        Parametre
      </th>

      <th>
        Açıklama
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **required**
      </td>

      <td>
        true veya false alabilir.  
        Eğer true ise sadece zorunlu attribute'ları getirir. Eğer false ise sadece zorunlu olmayan attribute'ları getirir.
      </td>
    </tr>
  </tbody>
</Table>

**Alan Açıklamaları**

| Parametre                        |                                                  Açıklama                                                 |
| :------------------------------- | :-------------------------------------------------------------------------------------------------------: |
| **name**                         |                                   Kategorinin Trendyol sistemindeki Adı                                   |
| **displayName**                  |                           Kategorinin Trendyol sistemindeki Adı- Önyüzde görünen                          |
| **attribute.id**                 |                                      Kategorideki özellik ID bilgisi                                      |
| **attribute.name**               |                                          Kategorideki özellik adı                                         |
| **allowCustom**                  |             true ise createProduct yapılırken ID yerine freetext-string gönderim yapılmalıdır.            |
| **required**                     | true ise createProduct yapılırken ilgili attributes, attributeValues alanında gönderilmesi gerekmektedir. |
| **slicer**                       |                      true ise trendyol.com üzerinde ayrı bir ürün kartı oluşturulur.                      |
| **varianter**                    |     Trendyol.com'da ürünü görünürken bu özellik bilgisi bir varyant bilgisi olup olmadığını ifade eder    |
| **allowMultipleAttributeValues** |                 true olması durumunda, ilgili attribute birden fazla value alabilmektedir.                |