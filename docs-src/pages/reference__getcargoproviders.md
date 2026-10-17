---
updatedAt: 2026-08-10T14:48:15.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kargo Firması Filtreleme Servisi (getCargoProviders)

Kullanılabilecek kargo sağlayıcılarını listeler. Dönen code değerleri ürün yaratma ve güncelleme isteklerindeki cargoProviders alanında gönderilebilir. Liste storefront bilgisine göre değişir; storefrontcode header'ı gönderilmezse varsayılan olarak TR kullanılır.


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
      "name": "Lookup",
      "description": "Kargo firması listeleme servisleri",
      "x-module-key": "lookup"
    }
  ],
  "paths": {
    "/product/lookup/cargo-providers": {
      "get": {
        "tags": [
          "Lookup"
        ],
        "x-module-key": "lookup",
        "summary": "Kargo Firması Filtreleme Servisi (getCargoProviders)",
        "description": "Kullanılabilecek kargo sağlayıcılarını listeler. Dönen code değerleri ürün yaratma ve güncelleme isteklerindeki cargoProviders alanında gönderilebilir. Liste storefront bilgisine göre değişir; storefrontcode header'ı gönderilmezse varsayılan olarak TR kullanılır.\n",
        "operationId": "getCargoProviders",
        "parameters": [
          {
            "$ref": "#/components/parameters/storefrontcode"
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
                    "$ref": "#/components/schemas/CargoProvider"
                  }
                },
                "example": [
                  {
                    "code": "KOLAYGELSINMP",
                    "name": "Kolay Gelsin"
                  },
                  {
                    "code": "YKMP",
                    "name": "Yurtiçi Kargo"
                  },
                  {
                    "code": "SURATMP",
                    "name": "Sürat Kargo"
                  }
                ]
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
      "storefrontcode": {
        "name": "storefrontcode",
        "in": "header",
        "required": false,
        "description": "Ülke kodu. Gönderilmezse veya TR gönderildiğinde Türkiye storefront'u kullanılır.",
        "schema": {
          "type": "string"
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
      "CargoProvider": {
        "type": "object",
        "properties": {
          "code": {
            "type": "string",
            "description": "Kargo sağlayıcı kodu. cargoProviders alanına bu değer gönderilir."
          },
          "name": {
            "type": "string",
            "description": "Kargo sağlayıcının görünen adı"
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