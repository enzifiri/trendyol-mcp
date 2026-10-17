---
updatedAt: 2026-01-27T12:07:35.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kargo Linki ile Gönderim - processAlternativeDelivery

Sipariş paketini gönderdikten sonra, sahip olduğunuz kargo takip linki veya telefon numarası ile besleyebilirsiniz. Bu isteği başarıyla gönderdikten sonra sipariş otomatik olarak Shipped statüsüne geçecektir.

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
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/alternative-delivery": {
      "put": {
        "tags": [
          "Alternatif Teslimat ile Gönderim"
        ],
        "summary": "Kargo Linki ile Gönderim - processAlternativeDelivery",
        "description": "Sipariş paketini gönderdikten sonra, sahip olduğunuz kargo takip linki veya telefon numarası ile besleyebilirsiniz. Bu isteği başarıyla gönderdikten sonra sipariş otomatik olarak Shipped statüsüne geçecektir.",
        "operationId": "processAlternativeDelivery",
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
                    "description": "False ise trackingInfo kargo takip linki olmalıdır. True ise trackingInfo telefon numarası olmalıdır.",
                    "example": false
                  },
                  "trackingInfo": {
                    "type": "string",
                    "description": "Kargo takip linki (isPhoneNumber false ise) veya telefon numarası (isPhoneNumber true ise)",
                    "example": "http://tex...."
                  },
                  "params": {
                    "type": "object",
                    "description": "Ek parametreler",
                    "additionalProperties": {
                      "type": "string"
                    },
                    "example": {}
                  },
                  "boxQuantity": {
                    "type": "integer",
                    "description": "Paketin miktari (opsiyonel)",
                    "example": 1
                  },
                  "deci": {
                    "type": "number",
                    "format": "float",
                    "description": "Paketin desisi (opsiyonel)",
                    "example": 1.4
                  }
                }
              },
              "example": {
                "isPhoneNumber": false,
                "trackingInfo": "http://tex....",
                "params": {},
                "boxQuantity": 1,
                "deci": 1.4
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