---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Kargo Firmasi Değiştirme - changeCargoProvider

Bu servis paketlerin kargo firmasıni değiştirmek için kullanılır.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Marketplace Entegrasyonu",
    "description": "Trendyol Yurtiçi Pazaryeri Sipariş ve İade Entegrasyon API'si",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
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
      "name": "Sipariş Entegrasyonu",
      "description": "Sipariş paketi yönetimi ve teslimat işlemleri"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/cargo-providers": {
      "put": {
        "tags": [
          "Sipariş Entegrasyonu"
        ],
        "summary": "Paket Kargo Firmasi Değiştirme - changeCargoProvider",
        "description": "Bu servis paketlerin kargo firmasıni değiştirmek için kullanılır.",
        "operationId": "changeCargoProvider",
        "parameters": [
          {
            "name": "sellerId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "packageId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "cargoProvider"
                ],
                "properties": {
                  "cargoProvider": {
                    "type": "string",
                    "description": "Kargo firması kodu",
                    "enum": [
                      "YKMP",
                      "ARASMP",
                      "SURATMP",
                      "HOROZMP",
                      "DHLECOMMP",
                      "PTTMP",
                      "CEVAMP",
                      "TEXMP",
                      "KOLAYGELSINMP",
                      "CEVATEDARIK"
                    ]
                  }
                }
              },
              "example": {
                "cargoProvider": "ARASMP"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
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
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ]
}
```