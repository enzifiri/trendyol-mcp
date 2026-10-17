---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Temel Bilgiler (getProductBase)

Trendyol mağazanızdaki ürününüzün temel durum bilgisini döner.

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
    "/product/sellers/{sellerId}/product/{barcode}": {
      "get": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Filtreleme - Temel Bilgiler (getProductBase)",
        "description": "Trendyol mağazanızdaki ürününüzün temel durum bilgisini döner.",
        "operationId": "getProductBase",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "barcode",
            "in": "path",
            "required": true,
            "description": "Ürün barkodu",
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
                  "$ref": "#/components/schemas/ProductBaseResponse"
                },
                "example": {
                  "barcode": "smoketest-250049",
                  "approved": true,
                  "approvedDate": 1763622556000,
                  "archived": false,
                  "listingId": "a089a30ed1632032913b28099e49d948",
                  "contentId": 9511264
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
      "ProductBaseResponse": {
        "type": "object",
        "properties": {
          "barcode": {
            "type": "string"
          },
          "approved": {
            "type": "boolean"
          },
          "approvedDate": {
            "type": "integer",
            "format": "int64"
          },
          "archived": {
            "type": "boolean"
          },
          "listingId": {
            "type": "string"
          },
          "contentId": {
            "type": "integer"
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