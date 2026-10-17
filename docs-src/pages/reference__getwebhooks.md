---
updatedAt: 2026-01-28T07:02:28.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Listeleme - getWebhook

Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını listeleyebilirsiniz.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Webhook API'si",
    "description": "Sipariş paketleri için webhook yönetimi",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://apigw.trendyol.com/integration/webhook",
      "description": "Canlı Ortam"
    },
    {
      "url": "https://stageapigw.trendyol.com/integration/webhook",
      "description": "Test Ortamı"
    }
  ],
  "tags": [
    {
      "name": "Webhook",
      "description": "Webhook oluşturma, listeleme ve güncelleme işlemleri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/webhooks": {
      "get": {
        "tags": [
          "Webhook"
        ],
        "summary": "Webhook Listeleme - getWebhook",
        "description": "Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını listeleyebilirsiniz.",
        "operationId": "getWebhooks",
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
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string",
                        "description": "Webhook ID'si"
                      },
                      "createdDate": {
                        "type": "integer",
                        "format": "int64",
                        "description": "Webhook talebinin yaratıldığı tarih (timestamp GMT +3)"
                      },
                      "lastModifiedDate": {
                        "type": "integer",
                        "format": "int64",
                        "nullable": true,
                        "description": "Webhook talebinin son güncellendiği tarih (timestamp GMT +3)"
                      },
                      "url": {
                        "type": "string",
                        "description": "Webhook Servis URL Bilgisi"
                      },
                      "username": {
                        "type": "string",
                        "description": "Basic Authentication için kullanılacak olan kullanıcı adı"
                      },
                      "authenticationType": {
                        "type": "string",
                        "description": "BASIC_AUTHENTICATION ya da API_KEY değerini alabilir"
                      },
                      "status": {
                        "type": "string",
                        "description": "ACTIVE ya da PASSIVE olabilir"
                      },
                      "subscribedStatuses": {
                        "type": "array",
                        "nullable": true,
                        "items": {
                          "type": "string"
                        },
                        "description": "Sipariş bilgisi alınması istenilen statü listesi"
                      }
                    }
                  }
                },
                "example": [
                  {
                    "id": "5297c986-6e09-4615-9f16-0deff65a0890",
                    "createdDate": 1733317686667,
                    "lastModifiedDate": 1734010262454,
                    "url": "https://testwebhook1.com",
                    "username": "test1",
                    "authenticationType": "BASIC_AUTHENTICATION",
                    "status": "PASSIVE",
                    "subscribedStatuses": [
                      "CREATED",
                      "CANCELLED",
                      "SHIPPED",
                      "DELIVERED",
                      "UNPACKED"
                    ]
                  },
                  {
                    "id": "4f9429b9-ef13-4d7c-94cf-9eee3ce7273a",
                    "createdDate": 1733917501531,
                    "lastModifiedDate": 1733920106237,
                    "url": "https://testwebhook2.com",
                    "username": "test2",
                    "authenticationType": "API_KEY",
                    "status": "PASSIVE",
                    "subscribedStatuses": null
                  },
                  {
                    "id": "2ba10e5d-5176-416b-9770-5d9c85a81a5e",
                    "createdDate": 1734087820902,
                    "lastModifiedDate": null,
                    "url": "https://testwebhook3.com",
                    "username": "test3",
                    "authenticationType": "API_KEY",
                    "status": "ACTIVE",
                    "subscribedStatuses": [
                      "CREATED",
                      "PICKING"
                    ]
                  }
                ]
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
        "description": "Basic authentication kullanarak satıcı API KEY ve API SECRET KEY ile doğrulama yapılır"
      }
    }
  }
}
```