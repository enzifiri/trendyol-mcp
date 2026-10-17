---
updatedAt: 2026-01-27T12:07:35.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Numarasi ile İade - manualReturnByPackageId

Shipped statüsünde olan ve müşteriye teslim edilemeyen siparişlerin deponuza iade edilmesi durumunda bu servisi kullanabilirsiniz.

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
      "name": "Alternatif Teslimat ile Gönderim",
      "description": "Alternatif teslimat yöntemleri ve manuel teslimat/iade işlemleri"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/shipment-packages/{packageId}/manual-return": {
      "put": {
        "tags": [
          "Alternatif Teslimat ile Gönderim"
        ],
        "summary": "Paket Numarasi ile İade - manualReturnByPackageId",
        "description": "Shipped statüsünde olan ve müşteriye teslim edilemeyen siparişlerin deponuza iade edilmesi durumunda bu servisi kullanabilirsiniz.",
        "operationId": "manualReturnByPackageId",
        "parameters": [
          {
            "name": "sellerId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "packageId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
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