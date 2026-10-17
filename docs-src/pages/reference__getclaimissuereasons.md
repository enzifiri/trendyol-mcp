---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Red Sebeplerini Çekme - getClaimIssueReasons

createClaimIssue servisine gönderilecek claimIssueReasonId değerine bu servisi kullanarak ulaşabilirsiniz.

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
    "/order/claim-issue-reasons": {
      "get": {
        "tags": [
          "İade Entegrasyonu"
        ],
        "summary": "İade Red Sebeplerini Çekme - getClaimIssueReasons",
        "description": "createClaimIssue servisine gönderilecek claimIssueReasonId değerine bu servisi kullanarak ulaşabilirsiniz.",
        "operationId": "getClaimIssueReasons",
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
                        "type": "integer",
                        "description": "Neden ID"
                      },
                      "name": {
                        "type": "string",
                        "description": "Türkce neden adi"
                      }
                    }
                  }
                },
                "example": [
                  {
                    "id": 1,
                    "name": "İade gelen ürün sahte"
                  },
                  {
                    "id": 51,
                    "name": "İade gelen ürün kullanilmis"
                  },
                  {
                    "id": 201,
                    "name": "İade gelen ürün yanlis"
                  },
                  {
                    "id": 251,
                    "name": "İade gelen ürün defolu / zarar gormis"
                  },
                  {
                    "id": 401,
                    "name": "Eksik ürün"
                  },
                  {
                    "id": 101,
                    "name": "Fazla ürün"
                  },
                  {
                    "id": 151,
                    "name": "Ürünun bir parcasi / aksesuari eksik"
                  },
                  {
                    "id": 301,
                    "name": "Ürün bana ait değil"
                  },
                  {
                    "id": 351,
                    "name": "İade paketi boş geldi"
                  },
                  {
                    "id": 1651,
                    "name": "İade paketi elime ulasmadi"
                  },
                  {
                    "id": 1701,
                    "name": "Ürün yanlis değil"
                  },
                  {
                    "id": 1751,
                    "name": "Ürün kusurlu değil"
                  },
                  {
                    "id": 451,
                    "name": "Diger"
                  }
                ]
              }
            }
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