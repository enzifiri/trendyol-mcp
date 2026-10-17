---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Barkod ile Kategori Bilgisi Listeleme

[Ürün Oluşturma V2](../reference/autoft-create-products-v2) adımında, zorunlu özellik listesini elde etmek için gerekli olan 
categoryId bilgisi barkod bilgisi ile bu endpointten listelenebilir.


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
      "name": "Ürün Lookup",
      "description": "Menşei, materyal bileşenleri, yıkama talimatları ve kategori bilgileri"
    }
  ],
  "paths": {
    "/v1/{sellerId}/lookup/product-categories/by-barcodes": {
      "post": {
        "tags": [
          "Ürün Lookup"
        ],
        "summary": "Barkod ile Kategori Bilgisi Listeleme",
        "description": "[Ürün Oluşturma V2](../reference/autoft-create-products-v2) adımında, zorunlu özellik listesini elde etmek için gerekli olan \ncategoryId bilgisi barkod bilgisi ile bu endpointten listelenebilir.\n",
        "operationId": "autoft-get-categories-by-barcodes",
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
                  "barcodes"
                ],
                "properties": {
                  "barcodes": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "description": "Barkod listesi"
                  }
                }
              },
              "example": {
                "barcodes": [
                  "barcode-1",
                  "barcode-2",
                  "barcode-3"
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "barcodeCategories": {
                      "type": "object",
                      "description": "Barkod-kategori eşleştirmeleri",
                      "additionalProperties": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "description": "Kategori ID"
                          },
                          "displayName": {
                            "type": "string",
                            "description": "Kategori görünen adı"
                          }
                        }
                      }
                    },
                    "notFound": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      },
                      "description": "Kategorisi bulunamayan barkodlar"
                    }
                  }
                },
                "example": {
                  "barcodeCategories": {
                    "barcode-1": {
                      "id": 123,
                      "displayName": "Etek"
                    },
                    "barcode-2": {
                      "id": 124,
                      "displayName": "Deri Ceket"
                    },
                    "barcode-3": {
                      "id": 125,
                      "displayName": "Kot Pantolon"
                    }
                  },
                  "notFound": [
                    "barcode-4",
                    "barcode-5"
                  ]
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