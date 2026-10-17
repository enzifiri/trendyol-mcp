---
updatedAt: 2026-01-27T12:07:35.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Barkod Bazlı Bölme - splitMultiPackageByQuantity

Bu metod ile sipariş paketindeki ürünleri miktar ve orderLineId değerleri ile bölebilirsiniz.

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
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/split-packages": {
      "post": {
        "tags": [
          "Sipariş Paketlerini Bölme"
        ],
        "summary": "Sipariş Paketlerini Barkod Bazlı Bölme - splitMultiPackageByQuantity",
        "description": "Bu metod ile sipariş paketindeki ürünleri miktar ve orderLineId değerleri ile bölebilirsiniz.",
        "operationId": "splitMultiPackagesByQuantity",
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
                  "splitPackages"
                ],
                "properties": {
                  "splitPackages": {
                    "type": "array",
                    "description": "Oluşturulacak paket grupları dizisi",
                    "items": {
                      "type": "object",
                      "required": [
                        "packageDetails"
                      ],
                      "properties": {
                        "packageDetails": {
                          "type": "array",
                          "description": "Bu pakete dahil edilecek sipariş satırları ve miktarları",
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
                                "description": "Sipariş satır ID"
                              },
                              "quantities": {
                                "type": "integer",
                                "minimum": 1,
                                "description": "Bu sipariş satıri için miktar"
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "example": {
                "splitPackages": [
                  {
                    "packageDetails": [
                      {
                        "orderLineId": 12345,
                        "quantities": 2
                      },
                      {
                        "orderLineId": 123456,
                        "quantities": 1
                      }
                    ]
                  },
                  {
                    "packageDetails": [
                      {
                        "orderLineId": 123,
                        "quantities": 1
                      },
                      {
                        "orderLineId": 1234,
                        "quantities": 1
                      }
                    ]
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success - Yeni paketler asenkron olarak oluşturulacak"
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