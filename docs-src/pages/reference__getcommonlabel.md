---
updatedAt: 2026-02-16T04:42:17.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ortak Etiket Oluşan Barkodun Alınması - getCommonLabel

Ortak barkod süreci TEX, Aras Kargo için Trendyol öder gönderilerde kullanılabilmektedir.
Bu servis ile createCommonLabel servisinden talep edilen barkodu alabilirsiniz.

**Önemli Notlar:**
- Tarafınıza çoklu koliler için birden fazla etiket dönecektir. Tek koli olması durumunda tek ZPL dönecektir.


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
      "get": {
        "tags": [
          "Ortak Etiket Barkod Alma Entegrasyonu"
        ],
        "summary": "Ortak Etiket Oluşan Barkodun Alınması - getCommonLabel",
        "description": "Ortak barkod süreci TEX, Aras Kargo için Trendyol öder gönderilerde kullanılabilmektedir.\nBu servis ile createCommonLabel servisinden talep edilen barkodu alabilirsiniz.\n\n**Önemli Notlar:**\n- Tarafınıza çoklu koliler için birden fazla etiket dönecektir. Tek koli olması durumunda tek ZPL dönecektir.\n",
        "operationId": "getCommonLabel",
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
            "description": "Kargo takip numarası"
          }
        ],
        "responses": {
          "200": {
            "description": "Success - Barkod etiketleri başarıyla alındı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommonLabelResponse"
                },
                "example": {
                  "data": [
                    {
                      "label": "^XA.......^XZ",
                      "format": "ZPL"
                    }
                  ]
                }
              }
            }
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
      "CommonLabelResponse": {
        "type": "object",
        "properties": {
          "data": {
            "type": "array",
            "description": "Barkod etiketleri dizisi",
            "items": {
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "description": "ZPL formatında barkod etiketi",
                  "example": "^XA.......^XZ"
                },
                "format": {
                  "type": "string",
                  "description": "Barkod formatı",
                  "enum": [
                    "ZPL"
                  ],
                  "example": "ZPL"
                }
              }
            }
          }
        }
      },
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