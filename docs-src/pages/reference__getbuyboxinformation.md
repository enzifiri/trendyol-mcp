---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Buybox Kontrol Servisi (getBuyboxInformation)

Ürünlerin buybox bilgisini döner: buybox sırası, buybox fiyatı ve birden fazla satıcı olup olmadığı. Maksimum 10 barcode gönderilebilir. Servis limiti 1000 req/min.


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
    "/product/sellers/{sellerId}/products/buybox-information": {
      "post": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Buybox Kontrol Servisi (getBuyboxInformation)",
        "description": "Ürünlerin buybox bilgisini döner: buybox sırası, buybox fiyatı ve birden fazla satıcı olup olmadığı. Maksimum 10 barcode gönderilebilir. Servis limiti 1000 req/min.\n",
        "operationId": "getBuyboxInformation",
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
                "$ref": "#/components/schemas/BuyboxRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Başarılı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BuyboxResponse"
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
      "BuyboxRequest": {
        "type": "object",
        "required": [
          "barcodes"
        ],
        "properties": {
          "barcodes": {
            "type": "array",
            "maxItems": 10,
            "items": {
              "type": "string"
            }
          }
        }
      },
      "BuyboxInfo": {
        "type": "object",
        "properties": {
          "barcode": {
            "type": "string"
          },
          "buyboxOrder": {
            "type": "integer"
          },
          "buyboxPrice": {
            "type": "number"
          },
          "hasMultipleSeller": {
            "type": "boolean"
          }
        }
      },
      "BuyboxResponse": {
        "type": "object",
        "properties": {
          "buyboxInfo": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/BuyboxInfo"
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