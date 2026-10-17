---
updatedAt: 2026-01-27T12:07:35.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Türkiye için İlçe Bilgisi

Türkiye için ilçe bilgisini aşağıdaki servisten alabilirsiniz.

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
    "/member/countries/domestic/TR/cities/{CityCode}/districts": {
      "get": {
        "tags": [
          "Adres Bilgileri"
        ],
        "summary": "Türkiye için İlçe Bilgisi",
        "description": "Türkiye için ilçe bilgisini aşağıdaki servisten alabilirsiniz.",
        "operationId": "getTürkeyDistricts",
        "parameters": [
          {
            "name": "CityCode",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            },
            "description": "Türkiye şehirler endpointinden gelen şehir kodu"
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