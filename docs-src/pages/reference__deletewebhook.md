---
updatedAt: 2026-01-28T07:02:28.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Webhook Silme - deleteWebhook

Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını silebilirsiniz.

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
      "delete": {
        "tags": [
          "Webhook"
        ],
        "summary": "Webhook Silme - deleteWebhook",
        "description": "Bu servis ile daha önce yaratmış olduğunuz webhook methodlarını silebilirsiniz.",
        "operationId": "deleteWebhook",
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
          "404": {
            "description": "Not Found"
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