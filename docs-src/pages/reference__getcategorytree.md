---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kategori Listesi (getCategoryTree)

createProduct servisine yapılacak isteklerde gönderilecek categoryId bilgisi bu servis kullanılarak alınır. En alt seviyedeki kategori ID bilgisi kullanılmalıdır. Kategori ağacı belirli aralıklarla güncellenmektedir, haftalık olarak güncel listeyi almanız önerilir.


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
    "/product/product-categories": {
      "get": {
        "tags": [
          "Categories"
        ],
        "x-module-key": "categories",
        "summary": "Kategori Listesi (getCategoryTree)",
        "description": "createProduct servisine yapılacak isteklerde gönderilecek categoryId bilgisi bu servis kullanılarak alınır. En alt seviyedeki kategori ID bilgisi kullanılmalıdır. Kategori ağacı belirli aralıklarla güncellenmektedir, haftalık olarak güncel listeyi almanız önerilir.\n",
        "operationId": "getCategoryTree",
        "parameters": [
          {
            "name": "name",
            "in": "query",
            "description": "Kategori adı filtresi. Girilen kelimenin geçtiği tüm seviyelerdeki kategoriler döner.",
            "schema": {
              "type": "string"
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
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Category"
                  }
                },
                "example": [
                  {
                    "id": 1162,
                    "name": "Atkı & Bere & Eldiven",
                    "parentId": 368,
                    "subCategories": [
                      {
                        "id": 382,
                        "name": "Atkı",
                        "parentId": 1162,
                        "subCategories": []
                      },
                      {
                        "id": 384,
                        "name": "Bere",
                        "parentId": 1162,
                        "subCategories": []
                      }
                    ]
                  }
                ]
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
      "Category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "parentId": {
            "type": "integer"
          },
          "subCategories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Category"
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