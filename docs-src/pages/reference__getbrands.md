---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Marka Listesi (getBrands)

createProduct servisine yapılacak isteklerde gönderilecek brandId bilgisi bu servis kullanılarak alınır. Bir sayfada minimum 1000 adet brand bilgisi alınabilmektedir.


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
      "name": "Brands",
      "description": "Marka listeleme servisleri",
      "x-module-key": "brands"
    }
  ],
  "paths": {
    "/product/brands": {
      "get": {
        "tags": [
          "Brands"
        ],
        "x-module-key": "brands",
        "summary": "Marka Listesi (getBrands)",
        "description": "createProduct servisine yapılacak isteklerde gönderilecek brandId bilgisi bu servis kullanılarak alınır. Bir sayfada minimum 1000 adet brand bilgisi alınabilmektedir.\n",
        "operationId": "getBrands",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "Hangi sayfadaki markaların getirileceği bilgisi",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "size",
            "in": "query",
            "description": "Bir servis cevabında yer alacak marka sayısı",
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Başarılı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BrandsResponse"
                },
                "example": {
                  "brands": [
                    {
                      "id": 10,
                      "name": "TrendyolMilla"
                    },
                    {
                      "id": 19,
                      "name": "Milla"
                    },
                    {
                      "id": 20,
                      "name": "Trendyol"
                    }
                  ]
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
    "responses": {
      "Unauthorized": {
        "description": "supplierID, API Key veya API Secure Key bilgilerinden birisi eksik/yanlış."
      }
    },
    "schemas": {
      "Brand": {
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
      "BrandsResponse": {
        "type": "object",
        "properties": {
          "brands": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Brand"
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