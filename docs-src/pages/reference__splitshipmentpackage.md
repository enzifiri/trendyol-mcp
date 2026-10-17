---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Bölme - splitShipmentPackage

Bu servisi kullandiktan sonra sipariş numarasına bağlı yeni paketler asenkron olarak oluşturulacaktir.

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
      "name": "Sipariş Paketlerini Bölme",
      "description": "Paket bölme işlemleri"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/split": {
      "post": {
        "tags": [
          "Sipariş Paketlerini Bölme"
        ],
        "summary": "Sipariş Paketlerini Bölme - splitShipmentPackage",
        "description": "Bu servisi kullandiktan sonra sipariş numarasına bağlı yeni paketler asenkron olarak oluşturulacaktir.",
        "operationId": "splitShipmentPackage",
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
                  "orderLineIds"
                ],
                "properties": {
                  "orderLineIds": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "format": "int64"
                    },
                    "description": "Yeni pakete bölünecek sipariş satır ID'leri"
                  }
                }
              },
              "example": {
                "orderLineIds": [
                  123456789
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "newPackageId": {
                      "type": "integer",
                      "format": "int64",
                      "description": "Yeni oluşturulan paket ID"
                    }
                  }
                }
              }
            }
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