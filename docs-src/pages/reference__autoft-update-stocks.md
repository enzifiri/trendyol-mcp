---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Stok Bilgisi Güncelleme

İhracata açık olan ürünlerin stok bilgilerinin güncellenmesi ve geri beslenmesi için kullanılır.

Ürünlerin öncelikle Ürün Oluşturma adımında oluşturulduğundan emin olunmalıdır.

Eğer talep edilirse stok yönetimi Trendyol Satıcı Panel ile ortak yapılabilir. 
Ortak stok yönetimi yapan satıcılar bu endpointi kullanamazlar.

> **Not:** İşlem sonucunda dönen batch ID ile sonucu mutlaka kontrol etmeniz tavsiye edilir.


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
      "name": "Stok Entegrasyonu",
      "description": "Stok güncelleme işlemleri"
    }
  ],
  "paths": {
    "/v1/{sellerId}/stocks": {
      "post": {
        "tags": [
          "Stok Entegrasyonu"
        ],
        "summary": "Ürün Stok Bilgisi Güncelleme",
        "description": "İhracata açık olan ürünlerin stok bilgilerinin güncellenmesi ve geri beslenmesi için kullanılır.\n\nÜrünlerin öncelikle Ürün Oluşturma adımında oluşturulduğundan emin olunmalıdır.\n\nEğer talep edilirse stok yönetimi Trendyol Satıcı Panel ile ortak yapılabilir. \nOrtak stok yönetimi yapan satıcılar bu endpointi kullanamazlar.\n\n> **Not:** İşlem sonucunda dönen batch ID ile sonucu mutlaka kontrol etmeniz tavsiye edilir.\n",
        "operationId": "autoft-update-stocks",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "stocks"
                ],
                "properties": {
                  "stocks": {
                    "type": "array",
                    "maxItems": 5000,
                    "description": "Stok bilgilerini içeren ana dizi. Maksimum 5000 ürün stock bilgisi alınabilir",
                    "items": {
                      "type": "object",
                      "required": [
                        "barcode",
                        "stock"
                      ],
                      "properties": {
                        "barcode": {
                          "type": "string",
                          "description": "Ürünün benzersiz tanımlayıcısı olan barkod numarası"
                        },
                        "stock": {
                          "type": "integer",
                          "minimum": 0,
                          "description": "Ürünün mevcut stok miktarı"
                        }
                      }
                    }
                  }
                }
              },
              "example": {
                "stocks": [
                  {
                    "barcode": "brcd123",
                    "stock": 223
                  },
                  {
                    "barcode": "brcd1235",
                    "stock": 1
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "İşlem başarılı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BatchIdResponse"
                },
                "example": {
                  "batchId": "example-batch-id-0"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequest"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
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
      "BadRequest": {
        "description": "Bad Request",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ErrorResponse"
            },
            "example": {
              "status": 400,
              "type": "ValidationError",
              "traceId": "abc123-def456-ghi789",
              "error": {
                "code": 1002,
                "title": "Zorunlu Alan Hatası",
                "detail": "Zorunlu alanları doldurunuz"
              }
            }
          }
        }
      },
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
      "BatchIdResponse": {
        "type": "object",
        "properties": {
          "batchId": {
            "type": "string",
            "description": "İşlem batch ID. Bu ID ile işlem sonucunu sorgulayabilirsiniz"
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