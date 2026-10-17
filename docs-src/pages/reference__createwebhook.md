---
updatedAt: 2026-01-28T07:02:28.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Yaratma - createWebhook

Bu servis ile sipariş paketleriniz için webhook yapısı kurabilirsiniz.

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
      "post": {
        "tags": [
          "Webhook"
        ],
        "summary": "Webhook Yaratma - createWebhook",
        "description": "Bu servis ile sipariş paketleriniz için webhook yapısı kurabilirsiniz.",
        "operationId": "createWebhook",
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
                    "description": "Sipariş bilgisi alınması istenilen statü listesi.\n\nBoş gönderilirse tüm statüler otomatik atanır:\n- CREATED\n- PICKING\n- INVOICED\n- SHIPPED\n- CANCELLED\n- DELIVERED\n- UNDELIVERED\n- RETURNED\n- UNSUPPLIED\n- AWAITING\n- UNPACKED\n- AT_COLLECTION_POINT\n- VERIFIED\n",
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
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "Webhook ID"
                    }
                  }
                },
                "example": {
                  "id": "string"
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