---
updatedAt: 2026-02-16T04:42:17.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ortak Etiket Barkod Talebi - createCommonLabel

Ortak barkod süreci TEX, Aras Kargo için Trendyol öder gönderilerde kullanılabilmektedir.
Bu servis ile ortak etiket sürecindeki siparişler için ilgili kargo numarasına ait barkod talebi yapabilirsiniz. Barkod oluştuktan sonra sizlere ZPL formatında Ortak Etiket Oluşan Barkodun Alınması Servisinden dönecektir.

**Önemli Notlar:**
- Barkod talebini ilgili sipariş paketine PICKING veya INVOICED statüsü besledikten sonra yapmanız tavsiye edilmektedir.
- Format olarak şu an için sadece ZPL formatı bulunmaktadır.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Marketplace - Ortak Etiket Barkod Entegrasyonu",
    "description": "Trendyol Ortak Etiket Barkod Entegrasyon API'si",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://apigw.trendyol.com/integration",
      "description": "Canlı Ortam (PROD)"
    },
    {
      "url": "https://stageapigw.trendyol.com/integration",
      "description": "Test Ortamı (STAGE)"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/common-label/{cargoTrackingNumber}": {
      "post": {
        "tags": [
          "Ortak Etiket Barkod Talep Entegrasyonu"
        ],
        "summary": "Ortak Etiket Barkod Talebi - createCommonLabel",
        "description": "Ortak barkod süreci TEX, Aras Kargo için Trendyol öder gönderilerde kullanılabilmektedir.\nBu servis ile ortak etiket sürecindeki siparişler için ilgili kargo numarasına ait barkod talebi yapabilirsiniz. Barkod oluştuktan sonra sizlere ZPL formatında Ortak Etiket Oluşan Barkodun Alınması Servisinden dönecektir.\n\n**Önemli Notlar:**\n- Barkod talebini ilgili sipariş paketine PICKING veya INVOICED statüsü besledikten sonra yapmanız tavsiye edilmektedir.\n- Format olarak şu an için sadece ZPL formatı bulunmaktadır.\n",
        "operationId": "createCommonLabel",
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
            "name": "cargoTrackingNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "Kargo takip numarası (cargoTrackingNumber)"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "format"
                ],
                "properties": {
                  "format": {
                    "type": "string",
                    "description": "Barkod format tipi",
                    "enum": [
                      "ZPL"
                    ]
                  },
                  "boxQuantity": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Koli miktarı"
                  },
                  "volumetricHeight": {
                    "type": "number",
                    "format": "float",
                    "description": "Volumetrik yükseklik"
                  }
                }
              },
              "example": {
                "format": "ZPL",
                "boxQuantity": 5,
                "volumetricHeight": 3.5
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success - No response body"
          },
          "400": {
            "description": "Bad Request - İletmiş olduğunuz kargo takip numarası değerini kontrol ediniz",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                },
                "example": {
                  "error": {
                    "status": 400,
                    "errors": [
                      {
                        "code": 1001,
                        "type": "BadRequestException",
                        "title": "İletmiş olduğunuz kargo takip numarası değerini kontrol ediniz"
                      }
                    ]
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized - Girdiğiniz API bilgilerini kontrol etmeniz gerekmektedir",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                },
                "example": {
                  "error": {
                    "status": 401,
                    "errors": [
                      {
                        "code": 1002,
                        "type": "UnauthorizedException",
                        "title": "Girdiğiniz API bilgilerini kontrol etmeniz gerekmektedir"
                      }
                    ]
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found - Kargo takip numarasına ait gönderi bulunamamıştır",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                },
                "example": {
                  "error": {
                    "status": 404,
                    "errors": [
                      {
                        "code": 1001,
                        "type": "NotFoundException",
                        "title": "Kargo takip numarasına ait gönderi bulunamamıştır"
                      }
                    ]
                  }
                }
              }
            }
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
    },
    "schemas": {
      "Error": {
        "type": "object",
        "properties": {
          "error": {
            "type": "object",
            "properties": {
              "status": {
                "type": "integer",
                "description": "HTTP durum kodu",
                "example": 404
              },
              "errors": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "code": {
                      "type": "integer",
                      "description": "Hata kodu",
                      "example": 1001
                    },
                    "type": {
                      "type": "string",
                      "description": "Hata tipi",
                      "example": "NotFoundException"
                    },
                    "title": {
                      "type": "string",
                      "description": "Hata açıklaması",
                      "example": "Kargo takip numarasına ait kargo bulunamamıştır"
                    }
                  }
                }
              }
            }
          }
        }
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