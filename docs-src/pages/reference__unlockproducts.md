---
updatedAt: 2026-06-09T08:58:38.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Kilit Kaldırma Servisi (unlockProducts)

Kilitli ürünlerin kilidini kaldırır. Düşük/yüksek fiyatlandırma, kritik fiyat hatası veya tedarik edememe sebepleriyle satışı durdurulan ürünlerin kilitleri bu servis ile açılabilir.


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
    "/product/sellers/{sellerId}/products/unlock": {
      "put": {
        "tags": [
          "Products"
        ],
        "x-module-key": "products",
        "summary": "Ürün Kilit Kaldırma Servisi (unlockProducts)",
        "description": "Kilitli ürünlerin kilidini kaldırır. Düşük/yüksek fiyatlandırma, kritik fiyat hatası veya tedarik edememe sebepleriyle satışı durdurulan ürünlerin kilitleri bu servis ile açılabilir.\n",
        "operationId": "unlockProducts",
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
                "$ref": "#/components/schemas/UnlockProductsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "İstek kuyruğa alındı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BatchRequestResponse"
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
          "404": {
            "$ref": "#/components/responses/NotFound"
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
      "NotFound": {
        "description": "İstek gönderilen URL bilgisi hatalıdır."
      },
      "InternalServerError": {
        "description": "Anlık bir hata yaşanmış olabilir. Lütfen birkaç dakika bekleyiniz."
      }
    },
    "schemas": {
      "UnlockProductItem": {
        "type": "object",
        "required": [
          "barcode"
        ],
        "properties": {
          "barcode": {
            "type": "string"
          }
        }
      },
      "UnlockProductsRequest": {
        "type": "object",
        "required": [
          "items"
        ],
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UnlockProductItem"
            }
          }
        }
      },
      "BatchRequestResponse": {
        "type": "object",
        "properties": {
          "batchRequestId": {
            "type": "string"
          }
        }
      },
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