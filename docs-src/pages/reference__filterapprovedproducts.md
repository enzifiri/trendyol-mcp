---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Filtreleme - Onaylı Ürün (filterApprovedProducts)

Trendyol mağazanızdaki onaylı ürünleri listeler. Content bazlı yapıda döner, her content altında variants dizisi bulunur. nextPageToken 10.000'den fazla content olması halinde kullanılır. page x size maksimum 10.000 değerini alabilir.


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
    "/product/sellers/{sellerId}/products/approved": {
      "get": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Filtreleme - Onaylı Ürün (filterApprovedProducts)",
        "description": "Trendyol mağazanızdaki onaylı ürünleri listeler. Content bazlı yapıda döner, her content altında variants dizisi bulunur. nextPageToken 10.000'den fazla content olması halinde kullanılır. page x size maksimum 10.000 değerini alabilir.\n",
        "operationId": "filterApprovedProducts",
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
                "VARIANT_CREATED_DATE",
                "VARIANT_MODIFIED_DATE",
                "CONTENT_MODIFIED_DATE"
              ]
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
            "description": "Ürün durumu filtresi",
            "schema": {
              "type": "string",
              "enum": [
                "archived",
                "blacklisted",
                "locked",
                "onSale"
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
                  "$ref": "#/components/schemas/ApprovedProductsResponse"
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
      "ApprovedAttributeValue": {
        "type": "object",
        "properties": {
          "attributeValueId": {
            "type": "integer",
            "nullable": true
          },
          "attributeValue": {
            "type": "string"
          }
        }
      },
      "ApprovedAttribute": {
        "type": "object",
        "properties": {
          "attributeId": {
            "type": "integer"
          },
          "attributeName": {
            "type": "string"
          },
          "attributeValues": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ApprovedAttributeValue"
            }
          }
        }
      },
      "VariantAttribute": {
        "type": "object",
        "properties": {
          "attributeId": {
            "type": "integer"
          },
          "attributeName": {
            "type": "string"
          },
          "attributeValueId": {
            "type": "integer"
          },
          "attributeValue": {
            "type": "string"
          }
        }
      },
      "FastDeliveryOption": {
        "type": "object",
        "properties": {
          "deliveryOptionType": {
            "type": "string",
            "enum": [
              "SAME_DAY_SHIPPING",
              "FAST_DELIVERY"
            ]
          },
          "deliveryDailyCutOffHour": {
            "type": "string"
          }
        }
      },
      "VariantDeliveryOptions": {
        "type": "object",
        "properties": {
          "deliveryDuration": {
            "type": "integer"
          },
          "isRushDelivery": {
            "type": "boolean"
          },
          "fastDeliveryOptions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FastDeliveryOption"
            }
          }
        }
      },
      "VariantPrice": {
        "type": "object",
        "properties": {
          "salePrice": {
            "type": "number"
          },
          "listPrice": {
            "type": "number"
          }
        }
      },
      "VariantStock": {
        "type": "object",
        "properties": {
          "lastModifiedDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          }
        }
      },
      "ApprovedVariant": {
        "type": "object",
        "properties": {
          "variantId": {
            "type": "integer"
          },
          "supplierId": {
            "type": "integer"
          },
          "barcode": {
            "type": "string"
          },
          "attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/VariantAttribute"
            }
          },
          "productUrl": {
            "type": "string"
          },
          "onSale": {
            "type": "boolean"
          },
          "deliveryOptions": {
            "$ref": "#/components/schemas/VariantDeliveryOptions"
          },
          "stock": {
            "$ref": "#/components/schemas/VariantStock"
          },
          "price": {
            "$ref": "#/components/schemas/VariantPrice"
          },
          "stockCode": {
            "type": "string"
          },
          "vatRate": {
            "type": "integer"
          },
          "sellerCreatedDate": {
            "type": "integer",
            "format": "int64"
          },
          "sellerModifiedDate": {
            "type": "integer",
            "format": "int64"
          },
          "locked": {
            "type": "boolean"
          },
          "lockReason": {
            "type": "string",
            "nullable": true
          },
          "lockDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "archived": {
            "type": "boolean"
          },
          "archivedDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true
          },
          "docNeeded": {
            "type": "boolean"
          },
          "hasViolation": {
            "type": "boolean"
          },
          "blacklisted": {
            "type": "boolean"
          }
        }
      },
      "ApprovedContent": {
        "type": "object",
        "properties": {
          "contentId": {
            "type": "integer"
          },
          "productMainId": {
            "type": "string"
          },
          "brand": {
            "$ref": "#/components/schemas/BrandInfo"
          },
          "category": {
            "$ref": "#/components/schemas/CategoryInfo"
          },
          "creationDate": {
            "type": "integer",
            "format": "int64"
          },
          "lastModifiedDate": {
            "type": "integer",
            "format": "int64"
          },
          "lastModifiedBy": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ProductImage"
            }
          },
          "attributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ApprovedAttribute"
            }
          },
          "variants": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ApprovedVariant"
            }
          }
        }
      },
      "ApprovedProductsResponse": {
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
              "$ref": "#/components/schemas/ApprovedContent"
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