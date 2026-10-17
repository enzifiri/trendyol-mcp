---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Birden Fazla Barkod İle Bölme - multiSplitShipmentPackage

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
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/multi-split": {
      "post": {
        "tags": [
          "Sipariş Paketlerini Bölme"
        ],
        "summary": "Sipariş Paketlerini Birden Fazla Barkod İle Bölme - multiSplitShipmentPackage",
        "description": "Bu servisi kullandiktan sonra sipariş numarasına bağlı yeni paketler asenkron olarak oluşturulacaktir.",
        "operationId": "multiSplitShipmentPackage",
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
                  "splitGroups"
                ],
                "properties": {
                  "splitGroups": {
                    "type": "array",
                    "description": "Ayri paketlere bölünecek sipariş satır ID grupları",
                    "items": {
                      "type": "object",
                      "required": [
                        "orderLineIds"
                      ],
                      "properties": {
                        "orderLineIds": {
                          "type": "array",
                          "description": "Yeni pakette bir araya gruplanacak sipariş satır ID'leri",
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
              "example": {
                "splitGroups": [
                  {
                    "orderLineIds": [
                      3,
                      5,
                      6
                    ]
                  },
                  {
                    "orderLineIds": [
                      7,
                      8,
                      9
                    ]
                  }
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
                    "results": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "newPackageId": {
                            "type": "integer",
                            "format": "int64"
                          }
                        }
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