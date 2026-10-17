---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Güncelleme - Onaysız Ürün (updateUnapprovedProducts)

Trendyol mağazanızdaki onaysız ürünleri günceller. Her istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.


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
      "name": "Updates",
      "description": "Ürün güncelleme servisleri (onaylı/onaysız)",
      "x-module-key": "updates"
    }
  ],
  "paths": {
    "/product/sellers/{sellerId}/products/unapproved-bulk-update": {
      "post": {
        "tags": [
          "Updates"
        ],
        "x-module-key": "updates",
        "summary": "Ürün Güncelleme - Onaysız Ürün (updateUnapprovedProducts)",
        "description": "Trendyol mağazanızdaki onaysız ürünleri günceller. Her istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir.\n",
        "operationId": "updateUnapprovedProducts",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UpdateUnapprovedRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "İstek kuyruğa alındı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BatchRequestResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequest"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "500": {
            "$ref": "#/components/responses/InternalServerError"
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
      "BadRequest": {
        "description": "URL içerisinde eksik veya hatalı parametre kullanılmaktadır.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ErrorResponse"
            }
          }
        }
      },
      "Unauthorized": {
        "description": "supplierID, API Key veya API Secure Key bilgilerinden birisi eksik/yanlış."
      },
      "NotFound": {
        "description": "İstek gönderilen URL bilgisi hatalıdır."
      },
      "InternalServerError": {
        "description": "Anlık bir hata yaşanmış olabilir. Lütfen birkaç dakika bekleyiniz."
      }
    },
    "schemas": {
      "ProductImage": {
        "type": "object",
        "required": [
          "url"
        ],
        "properties": {
          "url": {
            "type": "string"
          }
        }
      },
      "ProductAttribute": {
        "type": "object",
        "required": [
          "attributeId"
        ],
        "properties": {
          "attributeId": {
            "type": "integer"
          },
          "attributeValueIds": {
            "type": "array",
            "items": {
              "type": "integer"
            }
          },
          "attributeValue": {
            "type": "string"
          }
        }
      },
      "DeliveryOption": {
        "type": "object",
        "properties": {
          "deliveryDuration": {
            "type": "integer"
          },
          "fastDeliveryType": {
            "type": "string",
            "enum": [
              "SAME_DAY_SHIPPING",
              "FAST_DELIVERY"
            ]
          }
        }
      },
      "UpdateUnapprovedItem": {
        "type": "object",
        "required": [
          "barcode"
        ],
        "properties": {
          "barcode": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "productMainId": {
            "type": "string"
          },
          "brandId": {
            "type": "integer"
          },
          "categoryId": {
            "type": "integer"
          },
          "stockCode": {
            "type": "string"
          },
          "dimensionalWeight": {
            "type": "number"
          },
          "vatRate": {
            "type": "integer"
          },
          "deliveryOption": {
            "$ref": "#/components/schemas/DeliveryOption"
          },
          "locationBasedDelivery": {
            "type": "string",
            "nullable": true,
            "enum": [
              "ENABLED",
              "DISABLED"
            ]
          },
          "lotNumber": {
            "type": "string",
            "nullable": true
          },
          "shipmentAddressId": {
            "type": "integer"
          },
          "returningAddressId": {
            "type": "integer"
          },
          "images": {
            "type": "array",
            "maxItems": 8,
            "items": {
              "$ref": "#/components/schemas/ProductImage"
            }
          },
          "attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ProductAttribute"
            }
          }
        }
      },
      "UpdateUnapprovedRequest": {
        "type": "object",
        "required": [
          "items"
        ],
        "properties": {
          "items": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/UpdateUnapprovedItem"
            }
          }
        }
      },
      "BatchRequestResponse": {
        "type": "object",
        "properties": {
          "batchRequestId": {
            "type": "string"
          }
        }
      },
      "ErrorResponse": {
        "type": "object",
        "properties": {
          "errors": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "message": {
                  "type": "string"
                },
                "errorCode": {
                  "type": "string"
                }
              }
            }
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