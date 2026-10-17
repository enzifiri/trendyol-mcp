---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# GULF Ülkeleri için İlçe Bilgisi

GULF ülkeleri için ilçe bilgisini aşağıdaki servisten alabilirsiniz.

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
      "name": "Adres Bilgileri",
      "description": "Ülke, şehir, ilçe ve mahalle bilgileri"
    }
  ],
  "paths": {
    "/member/countries/{CountryCode}/cities/{cityId}/districts": {
      "get": {
        "tags": [
          "Adres Bilgileri"
        ],
        "summary": "GULF Ülkeleri için İlçe Bilgisi",
        "description": "GULF ülkeleri için ilçe bilgisini aşağıdaki servisten alabilirsiniz.",
        "operationId": "getDistrictsByCity",
        "parameters": [
          {
            "name": "CountryCode",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "cityId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            },
            "description": "Şehirler endpointinden gelen şehir ID"
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
                        "type": "integer"
                      },
                      "name": {
                        "type": "string"
                      }
                    }
                  }
                }
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