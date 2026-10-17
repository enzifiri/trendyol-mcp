---
updatedAt: 2026-02-03T10:29:04.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Fatura Linki Silme - deleteInvoiceLink

Daha önce hatalı beslenen faturalar bu servis üzerinden silinip, fatura linki gönderme servisi ile tekrar beslenebilmektedir.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Fatura Entegrasyonu (Invoice Integration)",
    "description": "Trendyol Satıcı Fatura Entegrasyon API'si - E-Fatura ve E-Arşiv fatura yönetimi için entegrasyon servisleri",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://apigw.trendyol.com/integration",
      "description": "Canlı Ortam (PROD)"
    },
    {
      "url": "https://stageapigw.trendyol.com/integration",
      "description": "Test Ortamı (STAGE)"
    }
  ],
  "tags": [
    {
      "name": "Fatura Linki Yönetimi",
      "description": "Fatura linki gönderme ve silme işlemleri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/seller-invoice-links/delete": {
      "post": {
        "tags": [
          "Fatura Linki Yönetimi"
        ],
        "summary": "Fatura Linki Silme - deleteInvoiceLink",
        "description": "Daha önce hatalı beslenen faturalar bu servis üzerinden silinip, fatura linki gönderme servisi ile tekrar beslenebilmektedir.\n\n### Kullanım\n- serviceSourceId: shipmentPackageId değerini gösterir\n- channelId: Her zaman 1 olarak gönderilmelidir\n- customerId: Sipariş paketleri çekme servisinden kontrol edilmelidir\n",
        "operationId": "deleteInvoiceLink",
        "parameters": [
          {
            "name": "sellerId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Satıcı ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InvoiceLinkDeleteRequest"
              },
              "example": {
                "serviceSourceId": 88787,
                "channelId": 1,
                "customerId": 888888888
              }
            }
          }
        },
        "responses": {
          "202": {
            "description": "Accepted - Fatura linki silme isteği kabul edildi"
          },
          "400": {
            "description": "Bad Request - Geçersiz istek parametreleri",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized - Kimlik doğrulama hatası",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "404": {
            "description": "Not Found - Belirtilen fatura linki bulunamadı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
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
      },
      "apiKeyAuth": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "description": "Bearer token kimlik doğrulama"
      }
    },
    "schemas": {
      "InvoiceLinkDeleteRequest": {
        "type": "object",
        "required": [
          "serviceSourceId",
          "channelId",
          "customerId"
        ],
        "properties": {
          "serviceSourceId": {
            "type": "integer",
            "format": "int64",
            "description": "Sipariş paket ID (shipmentPackageId)",
            "example": 88787
          },
          "channelId": {
            "type": "integer",
            "description": "Kanal ID - Her zaman 1 olarak gönderilmelidir",
            "enum": [
              1
            ],
            "default": 1,
            "example": 1
          },
          "customerId": {
            "type": "integer",
            "format": "int64",
            "description": "Müşteri ID - Sipariş paketleri çekme servisinden alınmalıdır",
            "example": 167878
          }
        }
      },
      "Error": {
        "type": "object",
        "properties": {
          "error": {
            "type": "string",
            "description": "Hata kodu veya tipi",
            "example": "CONFLICT"
          },
          "message": {
            "type": "string",
            "description": "Hata mesajı detayı",
            "example": "Gönderilen ShipmentPackageId'ye ait bir fatura zaten beslenmiş"
          },
          "timestamp": {
            "type": "integer",
            "format": "int64",
            "description": "Hata zamanı (Unix timestamp)"
          },
          "path": {
            "type": "string",
            "description": "Hatanın oluştuğu endpoint"
          },
          "status": {
            "type": "integer",
            "description": "HTTP status kodu"
          }
        }
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    },
    {
      "apiKeyAuth": []
    }
  ]
}
```