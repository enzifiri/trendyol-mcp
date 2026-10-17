---
updatedAt: 2026-01-28T06:19:34.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Test Siparişlerini WaitingInAction Statüsüne Çekme

Test senaryolarınızı gerçekleştirmek adına stage ortamda vermiş olduğunuz siparişler için yaratmış olduğunuz iade talepleri sonrasında iade statüsünü waitinginaction'a çekmek için kullanabilirsiniz.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Test Sipariş API'si",
    "description": "Test ortamında test siparişi oluşturma servisi",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://stageapigw.trendyol.com/integration",
      "description": "Test Ortamı"
    }
  ],
  "tags": [
    {
      "name": "Test Siparişi",
      "description": "Test siparişi oluşturma işlemleri"
    }
  ],
  "paths": {
    "/test/order/sellers/{sellerId}/claims/waiting-in-action": {
      "put": {
        "tags": [
          "Test Siparişi"
        ],
        "summary": "İade Test Siparişlerini WaitingInAction Statüsüne Çekme",
        "description": "Test senaryolarınızı gerçekleştirmek adına stage ortamda vermiş olduğunuz siparişler için yaratmış olduğunuz iade talepleri sonrasında iade statüsünü waitinginaction'a çekmek için kullanabilirsiniz.",
        "operationId": "updateTestClaimToWaitingInAction",
        "parameters": [
          {
            "name": "sellerId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Satıcı ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "shipmentPackageId"
                ],
                "properties": {
                  "shipmentPackageId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "getClaims servisinden dönen \"orderShipmentPackageId\" değerine karşılık gelmektedir"
                  }
                }
              },
              "example": {
                "shipmentPackageId": 56526451
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string",
                  "example": "200 OK"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "500": {
            "description": "Internal Server Error"
          }
        },
        "security": [
          {
            "BasicAuth": []
          }
        ]
      }
    }
  },
  "components": {
    "securitySchemes": {
      "BasicAuth": {
        "type": "http",
        "scheme": "basic",
        "description": "Basic authentication kullanarak header içerisinde gönderilen satıcı ID ile doğrulama yapılır"
      }
    }
  }
}
```