---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Tedarik Edememe Bildirimi - updatePackage

Sipariş Paketindeki bir veya daha fazla ürünü iptal etmek için bu metodu kullanabilirsiniz.

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
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/items/unsupplied": {
      "put": {
        "tags": [
          "Sipariş Entegrasyonu"
        ],
        "summary": "Tedarik Edememe Bildirimi - updatePackage",
        "description": "Sipariş Paketindeki bir veya daha fazla ürünü iptal etmek için bu metodu kullanabilirsiniz.",
        "operationId": "cancelOrderPackageItem",
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
                  "lines",
                  "reasonId"
                ],
                "properties": {
                  "lines": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "lineId",
                        "quantity"
                      ],
                      "properties": {
                        "lineId": {
                          "type": "integer",
                          "format": "int64",
                          "description": "İptal edilecek sipariş satır ID"
                        },
                        "quantity": {
                          "type": "integer",
                          "description": "İptal edilecek miktar"
                        }
                      }
                    }
                  },
                  "reasonId": {
                    "type": "integer",
                    "description": "İptal nedeni ID",
                    "enum": [
                      500,
                      501,
                      502,
                      504,
                      505,
                      506
                    ]
                  }
                }
              },
              "example": {
                "lines": [
                  {
                    "lineId": 123456,
                    "quantity": 1
                  }
                ],
                "reasonId": 500
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