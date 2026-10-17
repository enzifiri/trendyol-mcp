---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Batch ID ile İşlem Sonucu Sorgulama

Response olarak batchId aldığınız işlemlerin sonuçlarını bu endpoint üzerinden takip edebilirsiniz.

> **Not:** İşlemler sonucunda dönen batchId **24 saat** sonra sistemden silinecektir.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol İhracat Merkezi (AutoFT) Entegrasyonu",
    "description": "Trendyol Pazaryeri'nde bulunan ürünlerinizi İhracat Merkezi Entegrasyonu ile Trendyol'un yurtdışı platformlarında \nve/veya Trendyol'un anlaşmalı olduğu yurtdışı platformlarında (Global Platform) satış görmesi için Trendyol'a \nsatışını gerçekleştirebilirsiniz.\n\n## İhracat Modeli Özellikleri\n* Ürünleriniz Trendyol tarafından Türkiye sınırları içerisinde satın alınmaktadır.\n* Uygunluk çerçevesinde ürünlerinizi taşıma operasyonu Trendyol tarafından yapılmakta; ürünler deponuzdan teslim alınmaktadır.\n* Ürünlerinizi toplu ve günlük olarak paketlediğiniz beklendiği için işçilik maliyetinizin düşük olacağı tahmin edilmektedir.\n* Ürünün nihai müşterisi ürünü teslim aldıktan sonra iade ettiğinde şu an için sizlere iade yansıtılmamaktadır.\n* Satışlarınız üzerinden komisyon faturası kesilmemektedir.\n\n## Zorunlu HTTP Header Alanları\nBütün isteklerde aşağıdaki header'ların gönderilmesi zorunludur:\n* **x-clientip**: İsteğin gönderildiği IPv4 adresi\n* **x-correlationid**: UUID formatında log takip kodu\n* **x-agentname**: İsteği yapan client/entegratör adı\n* **Authorization**: Basic Token (API KEY ve API SECRET ile oluşturulur)\n",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://stageapigw.trendyol.com/integration/ecgw",
      "description": "Test Ortamı (Stage)"
    },
    {
      "url": "https://apigw.trendyol.com/integration/ecgw",
      "description": "Canlı Ortam (Production)"
    }
  ],
  "tags": [
    {
      "name": "İşlem Sonuç Entegrasyonu",
      "description": "Batch ID ile işlem sonucu sorgulama"
    }
  ],
  "paths": {
    "/v1/{sellerId}/check-status": {
      "get": {
        "tags": [
          "İşlem Sonuç Entegrasyonu"
        ],
        "summary": "Batch ID ile İşlem Sonucu Sorgulama",
        "description": "Response olarak batchId aldığınız işlemlerin sonuçlarını bu endpoint üzerinden takip edebilirsiniz.\n\n> **Not:** İşlemler sonucunda dönen batchId **24 saat** sonra sistemden silinecektir.\n",
        "operationId": "autoft-check-batch-status",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "batchId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string",
              "format": "uuid"
            },
            "description": "Sorgulanacak batch ID"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BatchStatusResponse"
                },
                "example": {
                  "batchId": "57a7229a-e345-4232-88ac-f4169b864293",
                  "batchType": "ProductCreate",
                  "items": [
                    {
                      "requestItem": {
                        "product": {
                          "barcode": "BRCD001",
                          "price": 12.99,
                          "rrp": 22,
                          "gtip": "2231317",
                          "origin": "TR",
                          "stock": 100,
                          "composition": "95% Cotton, 5% Elastane"
                        }
                      },
                      "status": "SUCCESS",
                      "failureReasons": []
                    }
                  ],
                  "status": "COMPLETED",
                  "creationDate": 1529734317090,
                  "lastModification": 1529734653403,
                  "itemCount": 1
                }
              }
            }
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
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
    "parameters": {
      "sellerId": {
        "name": "sellerId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer",
          "format": "int64"
        },
        "description": "Satıcı ID"
      }
    },
    "responses": {
      "Unauthorized": {
        "description": "Unauthorized - Kimlik doğrulama bilgileri eksik veya yanlış",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ErrorResponse"
            },
            "example": {
              "status": 401,
              "type": "AuthenticationError",
              "traceId": "abc123-def456-ghi789",
              "error": {
                "code": 1006,
                "title": "Yetkisiz Erişim",
                "detail": "Yetkisiz erişim talebi"
              }
            }
          }
        }
      },
      "NotFound": {
        "description": "Not Found - İstenen kaynak mevcut değil",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ErrorResponse"
            },
            "example": {
              "status": 404,
              "type": "NotFoundError",
              "traceId": "abc123-def456-ghi789",
              "error": {
                "code": 2006,
                "title": "Kaynak Bulunamadı",
                "detail": "Barkod için listing bulunamadı"
              }
            }
          }
        }
      }
    },
    "schemas": {
      "ErrorResponse": {
        "type": "object",
        "properties": {
          "status": {
            "type": "integer",
            "description": "HTTP cevap kodu (400, 401, 500 vb.)"
          },
          "type": {
            "type": "string",
            "description": "Ana hata tipi"
          },
          "traceId": {
            "type": "string",
            "description": "Hatanın takibi için kod"
          },
          "error": {
            "type": "object",
            "properties": {
              "code": {
                "type": "integer",
                "description": "Hatanın özel kod numarası:\n- 1001: İstek ulaşırken bir hata oluştu\n- 1002: Zorunlu alanları doldurunuz\n- 1003: Talebiniz gerçekleştirilemedi\n- 1004: Uygun olmayan parametre girildi\n- 1005: Sistemsel bir sorun meydana geldi\n- 1006: Yetkisiz erişim talebi\n- 2006: Barkod için listing bulunamadı\n- 2007: Ürün sistemde kayıtlı değil\n- 3001: Ürün sistemde kayıtlı değil\n- 3002: Ürün henüz onaylanmamış\n- 3003: Bazı alanlar eksik ya da hatalı\n- 3004: Geçersiz composition bilgisi\n- 3005: Teslimat tipi uygun değil\n- 3007: Barkod ile TY barkodu uyuşmazlığı\n- 3009: Ürün satışa uygun değildir\n"
              },
              "title": {
                "type": "string",
                "description": "Hatanın ana başlığı"
              },
              "detail": {
                "type": "string",
                "description": "Hatanın açıklaması"
              }
            }
          }
        }
      },
      "BatchStatusResponse": {
        "type": "object",
        "properties": {
          "batchId": {
            "type": "string",
            "format": "uuid",
            "description": "Batch ID"
          },
          "batchType": {
            "type": "string",
            "description": "İşlem tipi (ProductCreate, StockUpdate, PriceUpdate vb.)"
          },
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "requestItem": {
                  "type": "object",
                  "description": "İstek içeriği"
                },
                "status": {
                  "type": "string",
                  "enum": [
                    "SUCCESS",
                    "FAILED",
                    "PENDING"
                  ],
                  "description": "İşlem durumu"
                },
                "failureReasons": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  },
                  "description": "Hata nedenleri"
                }
              }
            }
          },
          "status": {
            "type": "string",
            "enum": [
              "COMPLETED",
              "IN_PROGRESS",
              "FAILED"
            ],
            "description": "Batch durumu"
          },
          "creationDate": {
            "type": "integer",
            "format": "int64",
            "description": "Oluşturma tarihi (timestamp)"
          },
          "lastModification": {
            "type": "integer",
            "format": "int64",
            "description": "Son güncelleme tarihi (timestamp)"
          },
          "itemCount": {
            "type": "integer",
            "description": "Toplam öğe sayısı"
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