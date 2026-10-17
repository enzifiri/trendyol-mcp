---
updatedAt: 2026-01-28T06:00:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Siparişlerde Ret Talebi Oluşturma - createClaimIssue

Trendyol sisteminde deponuzdaki iade siparişleri için ret talebi oluşturabilirsiniz.
İadeye ait ekleri (pdf, jpeg vb.) "form-data (file)" olarak eklemeniz gerekmektedir.


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
    "/order/sellers/{sellerId}/claims/{claimId}/issue": {
      "post": {
        "tags": [
          "İade Entegrasyonu"
        ],
        "summary": "İade Siparişlerde Ret Talebi Oluşturma - createClaimIssue",
        "description": "Trendyol sisteminde deponuzdaki iade siparişleri için ret talebi oluşturabilirsiniz.\nİadeye ait ekleri (pdf, jpeg vb.) \"form-data (file)\" olarak eklemeniz gerekmektedir.\n",
        "operationId": "createClaimIssue",
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
            "name": "claimId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "İade ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "required": [
                  "claimIssueReasonId",
                  "claimItemIdList",
                  "description"
                ],
                "properties": {
                  "claimIssueReasonId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "İade ret nedeni ID"
                  },
                  "claimItemIdList": {
                    "type": "string",
                    "description": "Virgül ile ayrılmış iade kalemi ID'leri listesi"
                  },
                  "description": {
                    "type": "string",
                    "maxLength": 500,
                    "description": "Red açıklaması"
                  },
                  "files": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "format": "binary"
                    },
                    "description": "Ekler (pdf, jpeg, vb.)"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success"
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