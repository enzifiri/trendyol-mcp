---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Stok ve Fiyat Güncelleme (updatePriceAndInventory)

Trendyol'a aktarılan ve onaylanan ürünlerin fiyat ve stok bilgilerini günceller. Aynı isteği 15 dakika boyunca tekrarlı olarak atamazsınız. Maksimum 1000 item, ürün başına maksimum 20.000 stok.


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
      "name": "Inventory",
      "description": "Stok ve fiyat güncelleme servisleri",
      "x-module-key": "inventory"
    }
  ],
  "paths": {
    "/inventory/sellers/{sellerId}/products/price-and-inventory": {
      "post": {
        "tags": [
          "Inventory"
        ],
        "x-module-key": "inventory",
        "summary": "Stok ve Fiyat Güncelleme (updatePriceAndInventory)",
        "description": "Trendyol'a aktarılan ve onaylanan ürünlerin fiyat ve stok bilgilerini günceller. Aynı isteği 15 dakika boyunca tekrarlı olarak atamazsınız. Maksimum 1000 item, ürün başına maksimum 20.000 stok.\n",
        "operationId": "updatePriceAndInventory",
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
                "$ref": "#/components/schemas/PriceAndInventoryRequest"
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
                },
                "example": {
                  "batchRequestId": "fa75dfd5-6ce6-4730-a09e-97563500000-1529854840"
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
      "PriceAndInventoryItem": {
        "type": "object",
        "required": [
          "barcode"
        ],
        "properties": {
          "barcode": {
            "type": "string"
          },
          "quantity": {
            "type": "integer"
          },
          "salePrice": {
            "type": "number"
          },
          "listPrice": {
            "type": "number"
          }
        }
      },
      "PriceAndInventoryRequest": {
        "type": "object",
        "required": [
          "items"
        ],
        "properties": {
          "items": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/PriceAndInventoryItem"
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