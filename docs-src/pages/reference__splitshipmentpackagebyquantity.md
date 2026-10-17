---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Birden Fazla Barkod İle Bölme - splitShipmentPackageByQuantity

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
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/quantity-split": {
      "post": {
        "tags": [
          "Sipariş Paketlerini Bölme"
        ],
        "summary": "Sipariş Paketlerini Birden Fazla Barkod İle Bölme - splitShipmentPackageByQuantity",
        "description": "Bu servisi kullandiktan sonra sipariş numarasına bağlı yeni paketler asenkron olarak oluşturulacaktir.",
        "operationId": "splitShipmentPackageByQuantity",
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
                  "quantitySplit"
                ],
                "properties": {
                  "quantitySplit": {
                    "type": "array",
                    "description": "Her sipariş satıri için miktar bölme istekleri",
                    "items": {
                      "type": "object",
                      "required": [
                        "orderLineId",
                        "quantities"
                      ],
                      "properties": {
                        "orderLineId": {
                          "type": "integer",
                          "format": "int64",
                          "description": "Bölünecek sipariş satır ID"
                        },
                        "quantities": {
                          "type": "array",
                          "description": "Ayri paketlere bölünecek miktarlar dizisi",
                          "items": {
                            "type": "integer",
                            "minimum": 1
                          }
                        }
                      }
                    }
                  }
                }
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
                    "newPackageIds": {
                      "type": "array",
                      "description": "Yeni oluşturulan paket ID'lerinin dizisi",
                      "items": {
                        "type": "integer",
                        "format": "int64"
                      }
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