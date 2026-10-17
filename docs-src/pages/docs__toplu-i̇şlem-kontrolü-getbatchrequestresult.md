---
updatedAt: 2026-10-04T10:43:47.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Toplu İşlem Kontrolü (getBatchRequestResult)

createProducts, updatePriceAndInventory, updateProduct, archiveProduct, productDelete, unlockProduct methodları servise yapılan istekler kuyruğa atarak işlendiği için, servise yapılan her başarlı istek sonucunda bir adet **batchRequestId** bilgisi dönülmektedir. Bu method yardımıyla batchRequestId ile alınan işlemlerin sonucunun kontrolü yapılabilir. Servis dönüşündeki "status" alanı kontrol edilerek toplu işlemin tamamlanıp tamamlanmadığı kontrol edilebilir. Eğer toplu işlem sonucunda bir ya da birden fazla item için hata oluşmuş ise failureReasons alanı kontrol edilerek sebebi bulunabilir.

* Ürün Aktarma ve Ürün Güncelleme servisleri, stok ve fiyat güncellemelerinde sizlere dönen batch requesti 4 saat sonrasına kadar görüntüleyebilirsiniz.
* Stok Fiyat güncelleme işlemleri sonrasında sorguladığınız batchId için item bazlı status alanlarını kontrol etmeniz gerekmektedir. Batch status alanı tarafınıza dönmeyecektir.

### **GET** getBatchRequestResult (BatchRequest Sonucu)

<NoLinkCallout type="info" title="PROD">
`https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/batch-requests/{batchRequestId}`
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
`https://stageapigw.trendyol.com/integration/product/sellers/{sellerId}/products/batch-requests/{batchRequestId}`
</NoLinkCallout>

### **Örnek Servis Cevabı - Ürün Yaratma**

```json
{
	"batchRequestId": "76e55c53-e0a4-473c-b4e1-1a008c02a9ab-1736179465",
	"items": [
    {
        "requestItem": {
            "product": {
                "barcode": "11111122222",
                "title": "Test Product Title",
                "productMainId": "11111122222test",
                "brandId": 187803,
                "categoryId": 91266,
                "quantity": 50,
                "stockCode": "STK-test",
                "origin": "AD",
                "dimensionalWeight": 2,
                "description": "Test Product Description",
                "currencyType": "TRY",
                "listPrice": 6,
                "salePrice": 6,
                "vatRate": 20,
                "images": [
                    {
                        "url": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC/20241114/14/03b9f886-194a-3de7-b42a-3bdf76f8181f/1_org_zoom.jpg"
                    }
                ],
                "attributes": [
                    {
                        "attributeId": 293,
                        "attributeValueId": 2904,
                        "customAttributeValue": null
                    },
                    {
                        "attributeId": 47,
                        "attributeValueId": null,
                        "customAttributeValue": "White"
                    },
                    {
                        "attributeId": 17620,
                        "attributeValueId": null,
                        "customAttributeValue": "Metal"
                    },
                    {
                        "attributeId": 294,
                        "attributeValueId": 2878,
                        "customAttributeValue": null
                    },
                    {
                        "attributeId": 296,
                        "attributeValueId": 2873,
                        "customAttributeValue": null
                    },
                    {
                        "attributeId": 295,
                        "attributeValueId": 2893,
                        "customAttributeValue": null
                    }
                ],
                "cargoCompanyId": 10,
                "shipmentAddressId": null,
                "returningAddressId": null
            },
            "barcode": "11111122222"
        },
        "status": "SUCCESS",
        "failureReasons": []
    }
],
"status": "COMPLETED",
"creationDate": 1736154265337,
"lastModification": 1736154266924,
"sourceType": "API",
"itemCount": 1,
"failedItemCount": 0,
"batchRequestType": "ProductV2OnBoarding"
}
```

### **Örnek Servis Cevabı - Ürün Güncelleme**

```json
{
	"batchRequestId": "abfdc055-239d-44ed-a601-627116169390-1736413589",
	"items": [
    {
        "requestItem": {
            "product": {
                "barcode": "11111122222",
                "title": "Test Product Title Updated",
                "productMainId": "11111122222test",
                "brandId": 187803,
                "categoryId": 91266,
                "stockCode": "STK-test",
                "origin": "AD",
                "dimensionalWeight": 2,
                "description": "Test Product Description Updated",
                "vatRate": 20,
                "images": [
                    {
                        "url": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC/20241114/14/03b9f886-194a-3de7-b42a-3bdf76f8181f/1_org_zoom.jpg"
                    }
                ],
                "attributes": [
                    {
                        "attributeId": 293,
                        "attributeValueId": 2904,
                        "customAttributeValue": null
                    },
                    {
                        "attributeId": 47,
                        "attributeValueId": null,
                        "customAttributeValue": "White"
                    },
                    {
                        "attributeId": 17620,
                        "attributeValueId": null,
                        "customAttributeValue": "Metal"
                    },
                    {
                        "attributeId": 294,
                        "attributeValueId": 2878,
                        "customAttributeValue": null
                    },
                    {
                        "attributeId": 296,
                        "attributeValueId": 2873,
                        "customAttributeValue": null
                    },
                    {
                        "attributeId": 295,
                        "attributeValueId": 2893,
                        "customAttributeValue": null
                    }
                ],
                "cargoCompanyId": 10,
                "shipmentAddressId": null,
                "returningAddressId": null,
                "deliveryDuration": null,
                "deliveryOption": null,
                "contentId": null
            },
            "barcode": "11111122222"
        },
        "status": "SUCCESS",
        "failureReasons": []
    }
],
"status": "COMPLETED",
"creationDate": 1736154389249,
"lastModification": 1736154390806,
"sourceType": "API",
"itemCount": 1,
"failedItemCount": 0,
"batchRequestType": "ProductV2Update"
}
```

### **Örnek Servis Cevabı - Stock Fiyat Güncelleme**

```json
{
    "batchRequestId": "c57e3453-2c00-11f0-aa3a-be9298facace-1746718627",
    "items": [
        {
            "requestItem": {
                "updateRequestDate": "2025-05-08T11:37:07.950+00:00",
                "quantity": 100,
                "salePrice": 100,
                "barcode": "11111111111",
                "listPrice": 100
            },
            "status": "SUCCESS",
            "failureReasons": []
        }
    ],
    "creationDate": 1746704227943,
    "lastModification": 1746704227943,
    "sourceType": "API",
    "itemCount": 1,
    "failedItemCount": 0,
    "batchRequestType": "ProductInventoryUpdate"
}
```

### **Örnek Servis Cevabı - Ürün Arşivleme**

```json
{
  "batchRequestId": "8e12d3fe-2d72-4ed0-b1e5-a4e4d7290bd5-1754145895",
  "items": [
    {
      "requestItem": {
        "archived": true,
        "supplierId": 99999999,
        "barcode": "smoketest-379996"
      },
      "status": "SUCCESS",
      "failureReasons": [],
      "batchRequestLogId": "1ebea453-6ed2-4638-8977-1713bb34845d"
    }
  ],
  "status": "COMPLETED",
  "creationDate": 1753886695467,
  "lastModification": 1753886695467,
  "sourceType": "WEB",
  "itemCount": 1,
  "failedItemCount": 0,
  "batchRequestType": "ProductArchiveUpdate",
  "notes": null
}
```

### **Örnek Servis Cevabı - Ürün Silme**

```json
{
  "batchRequestId": "8e0fbad0-ea9d-4fca-ac8c-1837062ea6bf-1757328512",
  "items": [
    {
      "requestItem": {
        "barcode": "PMPGJ8X734OVJ69R88"
      },
      "status": "SUCCESS",
      "failureReasons": []
    }
  ],
  "status": "COMPLETED",
  "creationDate": 1757314112508,
  "lastModification": 1757314114851,
  "sourceType": "API",
  "itemCount": 1,
  "failedItemCount": 0,
  "batchRequestType": "ProductDeletion"
}
```