---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kategoriye Göre Zorunlu Özellik Listesi

[Ürün Oluşturma V2](../reference/autoft-create-products-v2) adımında, request modelde istenen zorunlu özellik listesi bu endpointten alınır.


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
    "/v1/{sellerId}/lookup/product-categories/{categoryId}/attributes": {
      "get": {
        "tags": [
          "Ürün Lookup"
        ],
        "summary": "Kategoriye Göre Zorunlu Özellik Listesi",
        "description": "[Ürün Oluşturma V2](../reference/autoft-create-products-v2) adımında, request modelde istenen zorunlu özellik listesi bu endpointten alınır.\n",
        "operationId": "autoft-get-category-attributes",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "categoryId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer"
            },
            "description": "Kategori ID"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CategoryAttributes"
                },
                "example": {
                  "categoryId": 123,
                  "displayName": "Deri Ceket",
                  "categoryAttributes": [
                    {
                      "attributeId": 200,
                      "attributeName": "Renk",
                      "required": true,
                      "allowCustom": true,
                      "multipleValues": false,
                      "attributeValues": []
                    },
                    {
                      "attributeId": 296,
                      "attributeName": "Cinsiyet",
                      "required": true,
                      "allowCustom": false,
                      "multipleValues": false,
                      "attributeValues": [
                        {
                          "id": 1234,
                          "name": "Unisex"
                        },
                        {
                          "id": 1235,
                          "name": "Erkek"
                        },
                        {
                          "id": 1236,
                          "name": "Kadın"
                        }
                      ]
                    },
                    {
                      "attributeId": 294,
                      "attributeName": "Yaş Grubu",
                      "required": true,
                      "allowCustom": false,
                      "multipleValues": false,
                      "attributeValues": [
                        {
                          "id": 2879,
                          "name": "Yetişkin"
                        },
                        {
                          "id": 2878,
                          "name": "Genç"
                        },
                        {
                          "id": 2877,
                          "name": "Çocuk"
                        },
                        {
                          "id": 2876,
                          "name": "Bebek"
                        }
                      ]
                    },
                    {
                      "attributeId": 59810,
                      "attributeName": "Menşei",
                      "required": true,
                      "allowCustom": false,
                      "multipleValues": false,
                      "attributeValues": [
                        {
                          "id": 2178083,
                          "name": "Abd"
                        },
                        {
                          "id": 2178005,
                          "name": "Almanya"
                        },
                        {
                          "id": 2178100,
                          "name": "Türkiye"
                        }
                      ]
                    },
                    {
                      "attributeId": 21602,
                      "attributeName": "Yıkama Talimatı",
                      "required": true,
                      "allowCustom": false,
                      "multipleValues": false,
                      "attributeValues": [
                        {
                          "id": 232837,
                          "name": "T44"
                        },
                        {
                          "id": 232838,
                          "name": "T102"
                        },
                        {
                          "id": 232839,
                          "name": "T104"
                        }
                      ]
                    },
                    {
                      "attributeId": 17620,
                      "attributeName": "Materyal Bileşeni",
                      "required": true,
                      "allowCustom": true,
                      "multipleValues": true,
                      "attributeValues": [
                        {
                          "id": 261340,
                          "name": "Abaka (manila kendiri)"
                        },
                        {
                          "id": 261348,
                          "name": "Air Mesh"
                        },
                        {
                          "id": 228690,
                          "name": "Akrilik"
                        },
                        {
                          "id": 228691,
                          "name": "Pamuk"
                        },
                        {
                          "id": 228692,
                          "name": "Elastan"
                        }
                      ]
                    }
                  ]
                }
              }
            }
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
      "CategoryAttributes": {
        "type": "object",
        "properties": {
          "categoryId": {
            "type": "integer",
            "description": "Kategori ID"
          },
          "displayName": {
            "type": "string",
            "description": "Kategori görünen adı"
          },
          "categoryAttributes": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "attributeId": {
                  "type": "integer",
                  "description": "Özellik ID"
                },
                "attributeName": {
                  "type": "string",
                  "description": "Özellik adı"
                },
                "required": {
                  "type": "boolean",
                  "description": "Zorunlu mu?"
                },
                "allowCustom": {
                  "type": "boolean",
                  "description": "Özel değer girilebilir mi?"
                },
                "customValue": {
                  "type": "boolean",
                  "description": "Özel değer girilebilir mi? (alternatif alan)"
                },
                "multipleValues": {
                  "type": "boolean",
                  "description": "Çoklu değer destekliyor mu?"
                },
                "attributeValues": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "description": "Değer ID"
                      },
                      "name": {
                        "type": "string",
                        "description": "Değer adı"
                      }
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