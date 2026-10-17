---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kategori Özellik Listesi (getCategoryAttributes)

Ürün Yaratma servisine yapılacak isteklerde gönderilecek attributes bilgileri bu servis kullanılarak alınır. allowMultipleAttributeValues alanı ile çoklu değer desteği kontrol edilir. En alt seviyedeki kategori ID kullanılmalıdır.


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
      "name": "Categories",
      "description": "Kategori, özellik ve özellik değerleri servisleri",
      "x-module-key": "categories"
    }
  ],
  "paths": {
    "/product/categories/{categoryId}/attributes": {
      "get": {
        "tags": [
          "Categories"
        ],
        "x-module-key": "categories",
        "summary": "Kategori Özellik Listesi (getCategoryAttributes)",
        "description": "Ürün Yaratma servisine yapılacak isteklerde gönderilecek attributes bilgileri bu servis kullanılarak alınır. allowMultipleAttributeValues alanı ile çoklu değer desteği kontrol edilir. En alt seviyedeki kategori ID kullanılmalıdır.\n",
        "operationId": "getCategoryAttributes",
        "parameters": [
          {
            "name": "categoryId",
            "in": "path",
            "required": true,
            "description": "Trendyol kategori ID",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "required",
            "in": "query",
            "description": "true gönderildiğinde yalnızca zorunlu özellikler, false gönderildiğinde yalnızca zorunlu olmayan özellikler döner. Gönderilmezse tüm özellikler döner.",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "$ref": "#/components/parameters/storefrontcode"
          },
          {
            "$ref": "#/components/parameters/acceptLanguage"
          }
        ],
        "responses": {
          "200": {
            "description": "Başarılı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CategoryAttributesResponse"
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
      "storefrontcode": {
        "name": "storefrontcode",
        "in": "header",
        "required": false,
        "description": "Ülke kodu. Gönderilmezse veya TR gönderildiğinde Türkiye storefront'u kullanılır.",
        "schema": {
          "type": "string"
        }
      },
      "acceptLanguage": {
        "name": "Accept-Language",
        "in": "header",
        "required": false,
        "description": "Servis cevabının döneceği dil. TR storefront'unda cevap her zaman Türkçe döner. Diğer storefront'larda tr, en, ro, ar, el değerleri desteklenir; gönderilmediğinde veya desteklenmeyen bir değer gönderildiğinde en kullanılır.",
        "schema": {
          "type": "string"
        }
      }
    },
    "responses": {
      "Unauthorized": {
        "description": "supplierID, API Key veya API Secure Key bilgilerinden birisi eksik/yanlış."
      }
    },
    "schemas": {
      "CategoryAttribute": {
        "type": "object",
        "properties": {
          "allowCustom": {
            "type": "boolean"
          },
          "attribute": {
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
          "categoryId": {
            "type": "integer"
          },
          "required": {
            "type": "boolean"
          },
          "varianter": {
            "type": "boolean"
          },
          "slicer": {
            "type": "boolean"
          },
          "allowMultipleAttributeValues": {
            "type": "boolean"
          }
        }
      },
      "CategoryAttributesResponse": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "displayName": {
            "type": "string"
          },
          "categoryAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CategoryAttribute"
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