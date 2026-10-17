---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Dijital Ürün Teslimati ile Alternatif Teslimat - processAlternativeDelivery

Bu servisi çağırdığınızda, sağladığınız bilgiler müşterilere sms ve e-posta yoluyla otomatik olarak gönderilecektir.

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
      "name": "Alternatif Teslimat ile Gönderim",
      "description": "Alternatif teslimat yöntemleri ve manuel teslimat/iade işlemleri"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/alternative-delivery-digital": {
      "put": {
        "tags": [
          "Alternatif Teslimat ile Gönderim"
        ],
        "summary": "Dijital Ürün Teslimati ile Alternatif Teslimat - processAlternativeDelivery",
        "description": "Bu servisi çağırdığınızda, sağladığınız bilgiler müşterilere sms ve e-posta yoluyla otomatik olarak gönderilecektir.",
        "operationId": "processAlternativeDeliveryDigital",
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
                  "isPhoneNumber",
                  "trackingInfo",
                  "params"
                ],
                "properties": {
                  "isPhoneNumber": {
                    "type": "boolean",
                    "description": "Dijital ürün teslimati için true olmalıdır",
                    "example": true
                  },
                  "trackingInfo": {
                    "type": "string",
                    "description": "Müşteri için iletişim telefon numarası",
                    "example": "5555555555"
                  },
                  "params": {
                    "type": "object",
                    "description": "Dijital kodu içeren ek parametreler",
                    "required": [
                      "digitalCode"
                    ],
                    "properties": {
                      "digitalCode": {
                        "type": "string",
                        "description": "Dijital kod 6-120 karakter arasında olmalıdır",
                        "minLength": 6,
                        "maxLength": 120,
                        "example": "AX4567fasdf"
                      }
                    }
                  }
                }
              },
              "example": {
                "isPhoneNumber": true,
                "trackingInfo": "5555555555",
                "params": {
                  "digitalCode": "AX4567fasdf"
                }
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