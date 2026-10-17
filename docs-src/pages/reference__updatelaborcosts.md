---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İşçilik Maliyeti Güncelleme - laborCosts

İşçilik maliyeti tutarını beslemek için bu servisi kullanabilirsiniz.

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
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/labor-costs": {
      "put": {
        "tags": [
          "Sipariş Entegrasyonu"
        ],
        "summary": "İşçilik Maliyeti Güncelleme - laborCosts",
        "description": "İşçilik maliyeti tutarını beslemek için bu servisi kullanabilirsiniz.",
        "operationId": "updateLaborCosts",
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
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [
                    "orderLineId",
                    "laborCostPerItem"
                  ],
                  "properties": {
                    "orderLineId": {
                      "type": "integer",
                      "format": "int64"
                    },
                    "laborCostPerItem": {
                      "type": "number",
                      "format": "double",
                      "description": "Tek bir ürün başına işçilik maliyeti"
                    }
                  }
                }
              },
              "example": [
                {
                  "orderLineId": 3653527482,
                  "laborCostPerItem": 32.12
                },
                {
                  "orderLineId": 3653527483,
                  "laborCostPerItem": 78.65
                }
              ]
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