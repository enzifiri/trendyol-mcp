---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Siparişleri Onaylama - approveClaimLineItems

Trendyol sisteminde deponuza iade edilen iade siparişlerini bu metod ile onaylayabilirsiniz.

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
      "name": "İade Entegrasyonu",
      "description": "İade işlemleri ve yönetimi"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/claims/{claimId}/items/approve": {
      "put": {
        "tags": [
          "İade Entegrasyonu"
        ],
        "summary": "İade Siparişleri Onaylama - approveClaimLineItems",
        "description": "Trendyol sisteminde deponuza iade edilen iade siparişlerini bu metod ile onaylayabilirsiniz.",
        "operationId": "approveClaimLineItems",
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
            "name": "claimId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "İade ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "claimLineItemIdList"
                ],
                "properties": {
                  "claimLineItemIdList": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Onaylanacak iade satır kalemi ID'leri dizisi"
                  },
                  "params": {
                    "type": "object",
                    "description": "Ek parametreler",
                    "additionalProperties": {
                      "type": "string"
                    }
                  }
                }
              },
              "example": {
                "claimLineItemIdList": [
                  "f9da2317-876b-4b86-b8f7-0535c3b65731"
                ],
                "params": {}
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