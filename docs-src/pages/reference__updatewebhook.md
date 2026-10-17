---
updatedAt: 2026-01-28T07:02:28.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Güncelleme - updateWebhook

Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını güncelleyebilirsiniz.

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
    "/sellers/{sellerId}/webhooks/{Id}": {
      "put": {
        "tags": [
          "Webhook"
        ],
        "summary": "Webhook Güncelleme - updateWebhook",
        "description": "Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını güncelleyebilirsiniz.",
        "operationId": "updateWebhook",
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
          },
          {
            "name": "Id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "Webhook ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "url",
                  "authenticationType"
                ],
                "properties": {
                  "url": {
                    "type": "string",
                    "description": "Webhook Servis URL Bilgisi"
                  },
                  "username": {
                    "type": "string",
                    "description": "Basic Authentication için kullanılacak olan kullanıcı adı"
                  },
                  "password": {
                    "type": "string",
                    "description": "Basic Authentication için kullanılacak olan şifre"
                  },
                  "authenticationType": {
                    "type": "string",
                    "description": "BASIC_AUTHENTICATION ya da API_KEY değerini alabilir",
                    "enum": [
                      "BASIC_AUTHENTICATION",
                      "API_KEY"
                    ]
                  },
                  "apiKey": {
                    "type": "string",
                    "description": "Authorization için kullanılacak olan apikey bilgisi"
                  },
                  "subscribedStatuses": {
                    "type": "array",
                    "description": "Sipariş bilgisi alınması istenilen statü listesi",
                    "items": {
                      "type": "string",
                      "enum": [
                        "CREATED",
                        "PICKING",
                        "INVOICED",
                        "SHIPPED",
                        "CANCELLED",
                        "DELIVERED",
                        "UNDELIVERED",
                        "RETURNED",
                        "UNSUPPLIED",
                        "AWAITING",
                        "UNPACKED",
                        "AT_COLLECTION_POINT",
                        "VERIFIED"
                      ]
                    }
                  }
                }
              },
              "example": {
                "url": "https://testwebhook.com",
                "username": "user",
                "password": "password",
                "authenticationType": "API_KEY",
                "apiKey": "123456",
                "subscribedStatuses": [
                  "CREATED",
                  "PICKING"
                ]
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
        "description": "Basic authentication kullanarak satıcı API KEY ve API SECRET KEY ile doğrulama yapılır"
      }
    }
  }
}
```