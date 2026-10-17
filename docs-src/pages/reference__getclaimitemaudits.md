---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Audit Bilgilerini Çekme - getClaimItemAudits

Bu servis ile iade siparişinin statü ilerlemesini, güncelleme tarihini, işlemi yapan kişiyi kontrol edebilirsiniz.

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
    "/order/sellers/{sellerId}/claims/items/{claimItemsId}/audit": {
      "get": {
        "tags": [
          "İade Entegrasyonu"
        ],
        "summary": "İade Audit Bilgilerini Çekme - getClaimItemAudits",
        "description": "Bu servis ile iade siparişinin statü ilerlemesini, güncelleme tarihini, işlemi yapan kişiyi kontrol edebilirsiniz.",
        "operationId": "getClaimItemAudits",
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
            "name": "claimItemsId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "İade kalemi ID"
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
                      "claimId": {
                        "type": "string",
                        "description": "İade ID"
                      },
                      "claimItemId": {
                        "type": "string",
                        "description": "İade kalemi ID"
                      },
                      "previousStatus": {
                        "type": "string",
                        "description": "İade kaleminin önceki statüsü"
                      },
                      "newStatus": {
                        "type": "string",
                        "description": "İade kaleminin yeni statüsü"
                      },
                      "userInfoDocument": {
                        "type": "object",
                        "properties": {
                          "executorId": {
                            "type": "string",
                            "description": "Yükleyici ID"
                          },
                          "executorApp": {
                            "type": "string",
                            "description": "İşlemin hangi platformdan yapıldığını gösterir"
                          },
                          "executorUser": {
                            "type": "string",
                            "description": "İşlemin hangi kullanıcı tarafından yapıldığını gösterir"
                          }
                        }
                      },
                      "date": {
                        "type": "integer",
                        "format": "int64",
                        "description": "Güncelleme tarihi timestamp"
                      }
                    }
                  }
                },
                "example": [
                  {
                    "claimId": "6101ceca-1743-4d4e-bad2-d476c22542ca",
                    "claimItemId": "f369b0a2-1461-4c9c-b3cc-12824d65e5e6",
                    "previousStatus": "",
                    "newStatus": "Created",
                    "userInfoDocument": {
                      "executorId": "328e8073-d898-11eb-b199-d6f52af37563",
                      "executorApp": "Seller Center Orders BFF",
                      "executorUser": 6666666
                    },
                    "date": 1624943376430
                  },
                  {
                    "claimId": "6101ceca-1743-4d4e-bad2-d476c22542ca",
                    "claimItemId": "f369b0a2-1461-4c9c-b3cc-12824d65e5e6",
                    "previousStatus": "WaitingInAction",
                    "newStatus": "Accepted",
                    "userInfoDocument": {
                      "executorId": "41038394-d898-11eb-9b23-caa176587e6c",
                      "executorApp": "SellerIntegrationApi",
                      "executorUser": 6666666
                    },
                    "date": 1624943400249
                  },
                  {
                    "claimId": "6101ceca-1743-4d4e-bad2-d476c22542ca",
                    "claimItemId": "f369b0a2-1461-4c9c-b3cc-12824d65e5e6",
                    "previousStatus": "Created",
                    "newStatus": "WaitingInAction",
                    "userInfoDocument": {
                      "executorId": "328e8073-d898-11eb-b199-d6f52af37563",
                      "executorApp": "Seller Center Orders BFF",
                      "executorUser": 6666666
                    },
                    "date": 1624943381690
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