---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Yaratma V2 (createProducts)

Ürünleri Trendyol sistemine yükler. Attribute yapısında attributeValueIds (array) veya attributeValue (string) kullanılır. Her istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir. listPrice, salePrice'tan küçük olamaz. İşlem asenkrondur ve dönen batchRequestId ile sonuç kontrol edilmelidir.

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
      "name": "Products",
      "description": "Ürün yaratma, filtreleme, silme, arşivleme, buybox ve kilit kaldırma servisleri",
      "x-module-key": "products"
    }
  ],
  "paths": {
    "/product/sellers/{sellerId}/v2/products": {
      "post": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Yaratma V2 (createProducts)",
        "description": "Ürünleri Trendyol sistemine yükler. Attribute yapısında attributeValueIds (array) veya attributeValue (string) kullanılır. Her istek içerisinde gönderilebilecek maksimum item sayısı 1.000'dir. listPrice, salePrice'tan küçük olamaz. İşlem asenkrondur ve dönen batchRequestId ile sonuç kontrol edilmelidir.",
        "operationId": "createProducts",
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
                "$ref": "#/components/schemas/CreateProductsRequest"
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
      "CreateProductItem": {
        "type": "object",
        "required": [
          "barcode",
          "title",
          "productMainId",
          "brandId",
          "categoryId",
          "quantity",
          "stockCode",
          "dimensionalWeight",
          "description",
          "listPrice",
          "salePrice",
          "images",
          "vatRate",
          "attributes"
        ],
        "properties": {
          "barcode": {
            "type": "string",
            "maxLength": 40
          },
          "title": {
            "type": "string",
            "maxLength": 100
          },
          "productMainId": {
            "type": "string",
            "maxLength": 40
          },
          "brandId": {
            "type": "integer"
          },
          "categoryId": {
            "type": "integer"
          },
          "quantity": {
            "type": "integer"
          },
          "stockCode": {
            "type": "string",
            "maxLength": 100
          },
          "dimensionalWeight": {
            "type": "number"
          },
          "description": {
            "type": "string",
            "maxLength": 30000
          },
          "listPrice": {
            "type": "number"
          },
          "salePrice": {
            "type": "number"
          },
          "deliveryOption": {
            "$ref": "#/components/schemas/DeliveryOption"
          },
          "images": {
            "type": "array",
            "maxItems": 8,
            "items": {
              "$ref": "#/components/schemas/ProductImage"
            }
          },
          "vatRate": {
            "type": "integer"
          },
          "lotNumber": {
            "type": "string",
            "maxLength": 100,
            "nullable": true
          },
          "shipmentAddressId": {
            "type": "integer"
          },
          "returningAddressId": {
            "type": "integer"
          },
          "attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ProductAttribute"
            }
          }
        }
      },
      "CreateProductsRequest": {
        "type": "object",
        "required": [
          "items"
        ],
        "properties": {
          "items": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/CreateProductItem"
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