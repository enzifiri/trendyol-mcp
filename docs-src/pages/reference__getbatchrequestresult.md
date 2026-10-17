---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Toplu İşlem Kontrolü (getBatchRequestResult)

batchRequestId ile alınan işlemlerin sonuç kontrolü yapılır. status alanı kontrol edilerek toplu işlemin tamamlanıp tamamlanmadığı kontrol edilir. Batch request sonuçları 4 saat sonrasına kadar görüntülenebilir.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-owner-team": "spm-core",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Marketplace - Ürün Entegrasyonu API",
    "description": "Trendyol Marketplace ürün entegrasyonu API servisleri. Ürün yaratma (V2), filtreleme, güncelleme, silme, arşivleme, stok-fiyat güncelleme, buybox, kilit kaldırma ve toplu işlem kontrolü servislerini kapsar.\n",
    "version": "2.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "x-domain-key": "marketplace-product",
  "servers": [
    {
      "url": "https://apigw.trendyol.com/integration",
      "description": "Canlı Ortam"
    },
    {
      "url": "https://stageapigw.trendyol.com/integration",
      "description": "Test Ortamı"
    }
  ],
  "tags": [
    {
      "name": "BatchRequests",
      "description": "Toplu işlem kontrolü servisleri",
      "x-module-key": "batch_requests"
    }
  ],
  "paths": {
    "/product/sellers/{sellerId}/products/batch-requests/{batchRequestId}": {
      "get": {
        "tags": [
          "BatchRequests"
        ],
        "x-module-key": "batch_requests",
        "summary": "Toplu İşlem Kontrolü (getBatchRequestResult)",
        "description": "batchRequestId ile alınan işlemlerin sonuç kontrolü yapılır. status alanı kontrol edilerek toplu işlemin tamamlanıp tamamlanmadığı kontrol edilir. Batch request sonuçları 4 saat sonrasına kadar görüntülenebilir.\n",
        "operationId": "getBatchRequestResult",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "batchRequestId",
            "in": "path",
            "required": true,
            "description": "Toplu işlem ID bilgisi",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Başarılı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BatchRequestResult"
                }
              }
            }
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          }
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "basicAuth": {
        "type": "http",
        "scheme": "basic",
        "description": "Basic Auth ile Satıcı API Key ve API Secret"
      }
    },
    "parameters": {
      "sellerId": {
        "name": "sellerId",
        "in": "path",
        "required": true,
        "description": "Satıcı ID",
        "schema": {
          "type": "integer",
          "format": "int64"
        }
      }
    },
    "responses": {
      "Unauthorized": {
        "description": "supplierID, API Key veya API Secure Key bilgilerinden birisi eksik/yanlış."
      }
    },
    "schemas": {
      "BatchRequestResult": {
        "type": "object",
        "properties": {
          "batchRequestId": {
            "type": "string"
          },
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "requestItem": {
                  "type": "object"
                },
                "status": {
                  "type": "string",
                  "enum": [
                    "SUCCESS",
                    "FAILED"
                  ]
                },
                "failureReasons": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "status": {
            "type": "string",
            "enum": [
              "COMPLETED",
              "IN_PROGRESS"
            ]
          },
          "creationDate": {
            "type": "integer",
            "format": "int64"
          },
          "lastModification": {
            "type": "integer",
            "format": "int64"
          },
          "sourceType": {
            "type": "string",
            "enum": [
              "API",
              "WEB"
            ]
          },
          "itemCount": {
            "type": "integer"
          },
          "failedItemCount": {
            "type": "integer"
          },
          "batchRequestType": {
            "type": "string",
            "enum": [
              "ProductV2OnBoarding",
              "ProductV2Update",
              "ProductInventoryUpdate",
              "ProductArchiveUpdate",
              "ProductDeletion"
            ]
          }
        }
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ]
}
```