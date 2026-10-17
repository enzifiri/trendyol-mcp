---
updatedAt: 2026-03-25T14:49:19.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kategori Özellik Değerleri Listesi v2

Ürün Yaratma servisine yapılacak isteklerde gönderilecek **attributes values** bilgileri bu servis kullanılarak alınacaktır.

* Yeni kategorileri özellik değerleri eklenebileceği sebebiyle güncel kategori özellik listesini haftalık olarak almanızı öneririz.

<Callout icon="🚧" theme="warn">
  **İPUCU**

  Ürün kategori ağacı belirli aralıklarla güncellenmektedir. Güncel olmayan bir kategori ağacı kullanmanız durumunda **eksik veya hatalı veri girişi yapabilirsiniz.** Bu sebep ile her işlem öncesinde `en güncel kategori ağacını` kullanmanız gerekmektedir.
</Callout>

### **GET** getCategoryAttributeValues

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/product/categories/\{categoryId}/attributes/\{attributeId}/values](https://apigw.trendyol.com/integration/product/categories/\{categoryId}/attributes/\{attributeId}/values)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/product/categories/\{categoryId}/attributes/\{attributeId}/values](https://stageapigw.trendyol.com/integration/product/categories/\{categoryId}/attributes/\{attributeId}/values)
</NoLinkCallout>

**Örnek Servis Cevabı**

```json
{
    "totalElements": 1,
    "totalPages": 1,
    "page": 0,
    "size": 10,
    "content": [
        {
            "attributeValueId": 4872,
            “attributeValue”: "Tek Ebat"
        },
        {
            "attributeValueId": 4873,
            “attributeValue”: "S"
        }
    ]
}
```

**Filtre Parametreleri**

| Parametre |                                      Açıklama                                      |
| :-------- | :--------------------------------------------------------------------------------: |
| **size**  | Bir sayfada listelenecek maksimum adeti belirtir. Maksimum 1000 değerini alabilir. |
| **page**  |  Sadece belirtilen sayfadaki bilgileri döndürür. Maksimum 1000 değerini alabilir.  |