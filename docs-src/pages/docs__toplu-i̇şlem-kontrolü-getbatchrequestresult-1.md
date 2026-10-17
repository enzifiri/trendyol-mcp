---
updatedAt: 2026-08-14T10:42:42.000Z
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
    "batchRequestId": "string",
    "status": "IN_PROGRESS | COMPLETED",
    "creationDate": 0,
    "lastModification": 0,
    "sourceType": "API",
    "itemCount": 0,
    "failedItemCount": 0,
    "batchRequestType": "ProductV2OnBoarding",
    "items": [
        {
            "requestItem": {
                "barcode": "string",
                "product": {
                    "barcode": "string",
                    "title": "string",
                    "productMainId": "string",
                    "brandId": 0,
                    "categoryId": 0,
                    "quantity": 0,
                    "stockCode": "string",
                    "origin": "AD",
                    "dimensionalWeight": 0.0,
                    "specialConsumptionTax": 0.0,
                    "description": "string",
                    "currencyType": "string",
                    "listPrice": 0.0,
                    "salePrice": 0.0,
                    "vatRate": 0,
                    "images": [
                        {
                            "url": "string"
                        }
                    ],
                    "attributes": [
                        {
                            "attributeId": 0,
                            "attributeValueId": 0,
                            "customAttributeValue": "string"
                        }
                    ],
                    "cargoCompanyId": 0,
                    "shipmentAddressId": 0,
                    "returningAddressId": 0,
                    "lotNumber": "string"
                }
            },
            "status": "SUCCESS | FAILED",
            "failureReasons": [
                "string"
            ]
        }
    ]
}
```

### **Örnek Servis Cevabı - Onaysız Ürün Güncelleme**

```json
{
    "batchRequestId": "string",
    "status": "IN_PROGRESS | COMPLETED",
    "creationDate": 0,
    "lastModification": 0,
    "sourceType": "API",
    "itemCount": 0,
    "failedItemCount": 0,
    "batchRequestType": "ProductV2Update",
    "items": [
        {
            "requestItem": {
                "barcode": "string",
                "product": {
                    "barcode": "string",
                    "title": "string",
                    "productMainId": "string",
                    "brandId": 0,
                    "categoryId": 0,
                    "stockCode": "string",
                    "origin": "AD",
                    "dimensionalWeight": 0.0,
                    "specialConsumptionTax": 0.0,
                    "description": "string",
                    "vatRate": 0,
                    "images": [
                        {
                            "url": "string"
                        }
                    ],
                    "attributes": [
                        {
                            "attributeId": 0,
                            "attributeValueId": 0,
                            "customAttributeValue": "string"
                        }
                    ],
                    "cargoCompanyId": 0,
                    "shipmentAddressId": 0,
                    "returningAddressId": 0,
                    "deliveryDuration": 0,
                    "deliveryOption": {
                        "deliveryDuration": 0,
                        "fastDeliveryType": "string"
                    },
                    "contentId": 0,
                    "locationBasedDelivery": "ENABLED|DISABLED|null",
                    "lotNumber": "string"
                }
            },
            "status": "SUCCESS | FAILED",
            "failureReasons": [
                "string"
            ]
        }
    ]
}
```

### **Örnek Servis Cevabı - Onaylı Ürün Content Güncelleme**

```json
{
    "batchRequestId": "string",
    "status": "IN_PROGRESS | COMPLETED",
    "creationDate": 0,
    "lastModification": 0,
    "sourceType": "API",
    "itemCount": 0,
    "failedItemCount": 0,
    "batchRequestType": "ApprovedProductContentUpdate",
    "items": [
        {
            "requestItem": {
                "supplierId": 99999999,
                "updateRequest": {
                    "contentId": 0,
                    "categoryId": 0,
                    "brandId": 0,
                    "title": "string",
                    "description": "string",
                    "images": [
                        {
                            "url": "string"
                        }
                    ],
                    "attributes": [
                        {
                            "attributeId": 0,
                            "attributeValueId": 0,
                            "customAttributeValue": "string"
                        }
                    ]
                }
            },
            "status": "SUCCESS | FAILED",
            "failureReasons": [
                "string"
            ]
        }
    ]
}
```

### **Örnek Servis Cevabı - Onaylı Ürün Varyant Güncelleme**

```json
{
    "batchRequestId": "string",
    "status": "IN_PROGRESS | COMPLETED",
    "creationDate": 0,
    "lastModification": 0,
    "sourceType": "API",
    "itemCount": 0,
    "failedItemCount": 0,
    "batchRequestType": "ApprovedProductVariantUpdate",
    "items": [
        {
            "requestItem": {
                "supplierId": 99999999,
                "updateRequest": {
                    "barcode": "string",
                    "stockCode": "string",
                    "origin": "AD",
                    "vatRate": 0,
                    "shipmentAddressId": 0,
                    "returningAddressId": 0,
                    "dimensionalWeight": 0.0,
                    "lotNumber": "string",
                    "locationBasedDelivery": "string",
                    "specialConsumptionTax": 0.0
                }
            },
            "status": "SUCCESS | FAILED",
            "failureReasons": [
                "string"
            ]
        }
    ]
}
```

### **Örnek Servis Cevabı - Onaylı Ürün Teslimat Bilgisi Güncelleme**

```json
{
    "batchRequestId": "string",
    "status": "IN_PROGRESS | COMPLETED",
    "creationDate": 0,
    "lastModification": 0,
    "sourceType": "API",
    "itemCount": 0,
    "failedItemCount": 0,
    "batchRequestType": "ProductDeliveryOptionUpdate",
    "items": [
        {
            "requestItem": {
                "supplierId": 99999999,
                "barcode": "string",
                "storeFrontCode": "TR",
                "storeFrontId": 1,
                "request": {
                    "barcode": "string",
                    "deliveryOption": {
                        "deliveryDuration": 0,
                        "fastDeliveryType": "string"
                    }
                }
            },
            "status": "IN_PROGRESS | SUCCESS | FAILED",
            "failureReasons": [
                "string"
            ]
        }
    ]
}
```

### **Örnek Servis Cevabı - Stock & Price Güncelleme**

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

### **Örnek Servis Cevabı - Ürün Kilit Kaldırma**

```json
{
    "batchRequestId": "string",
    "status": "IN_PROGRESS | COMPLETED",
    "creationDate": 0,
    "lastModification": 0,
    "sourceType": "API",
    "itemCount": 0,
    "failedItemCount": 0,
    "batchRequestType": "ProductUnlockUpdate",
    "items": [
        {
            "requestItem": {
                "barcode": "string"
            },
            "status": "IN_PROGRESS | SUCCESS | FAILED",
            "failureReasons": [
                "string"
            ]
        }
    ]
}
```