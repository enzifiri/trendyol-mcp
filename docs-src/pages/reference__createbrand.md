---
updatedAt: 2026-08-10T14:48:15.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Marka Yaratma Servisi (createBrand)

Trendyol Marka Listesi'nde bulunmayan markaların yaratılması için kullanılır. İstek JSON body ile değil form-data ile gönderilir. Marka ismi "name" alanı ile text olarak, marka görselleri "images" alanı ile file olarak iletilmelidir. Minimum 1, maksimum 3 görsel gönderilebilir.


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
    "/product/sellers/{sellerId}/brands": {
      "post": {
        "tags": [
          "Brands"
        ],
        "x-module-key": "brands",
        "summary": "Marka Yaratma Servisi (createBrand)",
        "description": "Trendyol Marka Listesi'nde bulunmayan markaların yaratılması için kullanılır. İstek JSON body ile değil form-data ile gönderilir. Marka ismi \"name\" alanı ile text olarak, marka görselleri \"images\" alanı ile file olarak iletilmelidir. Minimum 1, maksimum 3 görsel gönderilebilir.\n",
        "operationId": "createBrand",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "storeFrontCode",
            "in": "header",
            "required": true,
            "description": "Markanın yaratılacağı ülke kodu (Türkiye için TR)",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "$ref": "#/components/schemas/CreateBrandRequest"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Marka yaratıldı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateBrandResponse"
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
      "InternalServerError": {
        "description": "Anlık bir hata yaşanmış olabilir. Lütfen birkaç dakika bekleyiniz."
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
      "CreateBrandRequest": {
        "type": "object",
        "required": [
          "name",
          "images"
        ],
        "properties": {
          "name": {
            "type": "string",
            "description": "Yaratılacak markanın ismi"
          },
          "images": {
            "type": "array",
            "minItems": 1,
            "maxItems": 3,
            "description": "Markaya ait görseller",
            "items": {
              "type": "string",
              "format": "binary"
            }
          }
        }
      },
      "CreateBrandResponse": {
        "type": "object",
        "properties": {
          "brandId": {
            "type": "integer",
            "format": "int64"
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