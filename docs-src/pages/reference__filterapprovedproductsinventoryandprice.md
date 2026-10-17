---
updatedAt: 2026-08-10T14:48:15.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Onaylı Ürün Stok ve Fiyat (filterApprovedProductsInventoryAndPrice)

Onaylı ürünlerin yalnızca stok ve fiyat bilgilerini döner. nextPageToken 10.000'den fazla onaylı content olması halinde kullanılır. page x size maksimum 10.000 değerini alabilir. stockLastModifiedDate alanı yalnızca ürüne stok güncellemesi yapılmışsa değer döner, aksi halde null döner.


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
    "/product/sellers/{sellerId}/products/approved/inventory-and-price": {
      "get": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Filtreleme - Onaylı Ürün Stok ve Fiyat (filterApprovedProductsInventoryAndPrice)",
        "description": "Onaylı ürünlerin yalnızca stok ve fiyat bilgilerini döner. nextPageToken 10.000'den fazla onaylı content olması halinde kullanılır. page x size maksimum 10.000 değerini alabilir. stockLastModifiedDate alanı yalnızca ürüne stok güncellemesi yapılmışsa değer döner, aksi halde null döner.\n",
        "operationId": "filterApprovedProductsInventoryAndPrice",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "barcode",
            "in": "query",
            "description": "Tekil barkod sorgusu",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "barcodes",
            "in": "query",
            "description": "Çoklu barkod sorgusu (max 50 barcode)",
            "schema": {
              "type": "array",
              "maxItems": 50,
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "contentId",
            "in": "query",
            "description": "Tekil content ID sorgusu",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "stockCode",
            "in": "query",
            "description": "Stok kodu",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "productMainId",
            "in": "query",
            "description": "Ana ürün kodu",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Ürün durumu filtresi",
            "schema": {
              "type": "string",
              "enum": [
                "archived",
                "blacklisted",
                "locked",
                "onSale",
                "notOnSale"
              ]
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "Sayfa numarası",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "size",
            "in": "query",
            "description": "Sayfa başına adet (max 100)",
            "schema": {
              "type": "integer",
              "maximum": 100
            }
          },
          {
            "name": "orderByDirection",
            "in": "query",
            "description": "sellerCreatedDate alanına göre sıralama yönü. asc eskiden yeniye, desc yeniden eskiye sıralar.",
            "schema": {
              "type": "string",
              "enum": [
                "asc",
                "desc"
              ]
            }
          },
          {
            "name": "nextPageToken",
            "in": "query",
            "description": "10.000+ content varsa sonraki sayfa tokeni",
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
                  "$ref": "#/components/schemas/InventoryAndPriceResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequest"
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
      }
    },
    "schemas": {
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
      },
      "InventoryAndPriceVariant": {
        "type": "object",
        "properties": {
          "variantId": {
            "type": "integer",
            "format": "int64"
          },
          "barcode": {
            "type": "string"
          },
          "salePrice": {
            "type": "number"
          },
          "listPrice": {
            "type": "number"
          },
          "quantity": {
            "type": "integer"
          },
          "stockCode": {
            "type": "string"
          },
          "stockLastModifiedDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Ürüne stok güncellemesi yapılmamışsa null döner"
          }
        }
      },
      "InventoryAndPriceContent": {
        "type": "object",
        "properties": {
          "contentId": {
            "type": "integer",
            "format": "int64"
          },
          "productMainId": {
            "type": "string"
          },
          "variants": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryAndPriceVariant"
            }
          }
        }
      },
      "InventoryAndPriceResponse": {
        "type": "object",
        "properties": {
          "totalElements": {
            "type": "integer"
          },
          "totalPages": {
            "type": "integer"
          },
          "page": {
            "type": "integer"
          },
          "size": {
            "type": "integer"
          },
          "nextPageToken": {
            "type": "string"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryAndPriceContent"
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