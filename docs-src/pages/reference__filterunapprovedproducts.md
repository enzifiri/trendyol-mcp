---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Onaysız Ürün (filterUnapprovedProducts)

Trendyol mağazanızdaki onaysız (draft) ürünleri listeler. Onay süreci devam eden ve reddedilen ürünleri içerir. nextPageToken 10.000'den fazla onaysız barcode olması halinde kullanılır. page x size maksimum 10.000 değerini alabilir.


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
    "/product/sellers/{sellerId}/products/unapproved": {
      "get": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Filtreleme - Onaysız Ürün (filterUnapprovedProducts)",
        "description": "Trendyol mağazanızdaki onaysız (draft) ürünleri listeler. Onay süreci devam eden ve reddedilen ürünleri içerir. nextPageToken 10.000'den fazla onaysız barcode olması halinde kullanılır. page x size maksimum 10.000 değerini alabilir.\n",
        "operationId": "filterUnapprovedProducts",
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
            "name": "startDate",
            "in": "query",
            "description": "Başlangıç tarihi (timestamp)",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "description": "Bitiş tarihi (timestamp)",
            "schema": {
              "type": "integer",
              "format": "int64"
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
            "name": "dateQueryType",
            "in": "query",
            "description": "Tarih filtresi türü",
            "schema": {
              "type": "string",
              "enum": [
                "CREATED_DATE",
                "LAST_MODIFIED_DATE"
              ]
            }
          },
          {
            "name": "size",
            "in": "query",
            "description": "Sayfa başına adet (max 1000)",
            "schema": {
              "type": "integer",
              "maximum": 1000
            }
          },
          {
            "name": "supplierId",
            "in": "query",
            "description": "Tedarikçi ID",
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
            "name": "brandIds",
            "in": "query",
            "description": "Marka ID listesi",
            "schema": {
              "type": "array",
              "items": {
                "type": "integer"
              }
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Ürün onay durumu",
            "schema": {
              "type": "string",
              "enum": [
                "rejected",
                "pendingApproval"
              ]
            }
          },
          {
            "name": "nextPageToken",
            "in": "query",
            "description": "10.000+ ürün varsa sonraki sayfa tokeni",
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
                  "$ref": "#/components/schemas/UnapprovedProductsResponse"
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
      "BrandInfo": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "CategoryInfo": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "RejectReasonDetail": {
        "type": "object",
        "properties": {
          "rejectReason": {
            "type": "string"
          },
          "rejectReasonDetail": {
            "type": "string"
          }
        }
      },
      "UnapprovedProduct": {
        "type": "object",
        "properties": {
          "supplierId": {
            "type": "integer"
          },
          "productMainId": {
            "type": "string"
          },
          "createDateTime": {
            "type": "integer",
            "format": "int64"
          },
          "lastUpdateDate": {
            "type": "integer",
            "format": "int64"
          },
          "lastPriceChangeDate": {
            "type": "integer",
            "format": "int64"
          },
          "lastStockChangeDate": {
            "type": "integer",
            "format": "int64"
          },
          "brand": {
            "$ref": "#/components/schemas/BrandInfo"
          },
          "category": {
            "$ref": "#/components/schemas/CategoryInfo"
          },
          "barcode": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "quantity": {
            "type": "integer"
          },
          "listPrice": {
            "type": "number"
          },
          "salePrice": {
            "type": "number"
          },
          "vatRate": {
            "type": "integer"
          },
          "dimensionalWeight": {
            "type": "number",
            "nullable": true
          },
          "stockCode": {
            "type": "string"
          },
          "media": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ProductImage"
            }
          },
          "attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ProductAttribute"
            }
          },
          "rejectReasonDetails": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/RejectReasonDetail"
            }
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
          }
        }
      },
      "UnapprovedProductsResponse": {
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
              "$ref": "#/components/schemas/UnapprovedProduct"
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