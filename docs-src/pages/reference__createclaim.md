---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Talebi Oluşturma - createClaim

İade kodu olmadan gelen sipariş paketleri için iade talebi paketleri oluşturmak için kullanabilirsiniz.

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
    "/order/sellers/{sellerId}/claims/create": {
      "post": {
        "tags": [
          "İade Entegrasyonu"
        ],
        "summary": "İade Talebi Oluşturma - createClaim",
        "description": "İade kodu olmadan gelen sipariş paketleri için iade talebi paketleri oluşturmak için kullanabilirsiniz.",
        "operationId": "createClaim",
        "parameters": [
          {
            "name": "sellerId",
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
                  "claimItems",
                  "orderNumber"
                ],
                "properties": {
                  "claimItems": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "barcode",
                        "quantity",
                        "reasonId"
                      ],
                      "properties": {
                        "barcode": {
                          "type": "string",
                          "description": "Siparişteki ürünün barkod bilgisidir.",
                          "example": "string"
                        },
                        "customerNote": {
                          "type": "string",
                          "description": "Müşteriler tarafından yazılan alandır. İsterseniz bu alana İade kodu olmadan iade gibi bir metin besleyebilirsiniz.",
                          "example": "string"
                        },
                        "quantity": {
                          "type": "integer",
                          "description": "İade talebi oluşturmak istediğiniz ürünün adet bilgisidir.",
                          "example": 0
                        },
                        "reasonId": {
                          "type": "integer",
                          "description": "Müşterilerin trendyol.com'da seçtiği iade nedenleridir. Bu id değerini şimdilik 401 id değeri ile Vazgectim olarak besleyebilirsiniz.",
                          "example": 401
                        }
                      }
                    }
                  },
                  "customerId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Trendyol'da siparişi alan müşterinin id değeridir.",
                    "example": 0
                  },
                  "excludeListing": {
                    "type": "boolean",
                    "description": "Listeleme dışında tut",
                    "example": true
                  },
                  "forcePackageCreation": {
                    "type": "boolean",
                    "description": "Paket oluşturmayi zorla",
                    "example": true
                  },
                  "orderNumber": {
                    "type": "string",
                    "description": "Siparişlarin numarasıdir.",
                    "example": "string"
                  },
                  "shipmentCompanyId": {
                    "type": "integer",
                    "description": "Çalıştığınız kargo firmasının id değerini kullanabilirsiniz.",
                    "example": 4
                  }
                }
              },
              "example": {
                "claimItems": [
                  {
                    "barcode": "string",
                    "customerNote": "string",
                    "quantity": 0,
                    "reasonId": 401
                  }
                ],
                "customerId": 888888888,
                "excludeListing": true,
                "forcePackageCreation": true,
                "orderNumber": "string",
                "shipmentCompanyId": 4
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
                    "claimId": {
                      "type": "string",
                      "description": "Oluşturulan iade ID"
                    },
                    "cargoTrackingNumber": {
                      "type": "integer",
                      "format": "int64",
                      "description": "İade için kargo takip numarası"
                    },
                    "claimItemIds": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "description": "Oluşturulan iade kalemi ID'leri dizisi"
                    }
                  }
                },
                "example": {
                  "claimId": "string",
                  "cargoTrackingNumber": "733xxxxxxx",
                  "claimItemIds": [
                    "string"
                  ]
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