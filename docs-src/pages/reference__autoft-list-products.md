---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Listeleme

Trendyol'da ihracata açılmış ürünleri listelemek için kullanılır.

> **Not:** Döviz türü (currency) bilgisi ihracat merkezine başvuru sırasında satıcı tarafından seçilmektedir.


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
      "name": "Ürün Entegrasyonu",
      "description": "Ürün oluşturma ve listeleme işlemleri"
    }
  ],
  "paths": {
    "/v2/{sellerId}/products": {
      "get": {
        "tags": [
          "Ürün Entegrasyonu"
        ],
        "summary": "Ürün Listeleme",
        "description": "Trendyol'da ihracata açılmış ürünleri listelemek için kullanılır.\n\n> **Not:** Döviz türü (currency) bilgisi ihracat merkezine başvuru sırasında satıcı tarafından seçilmektedir.\n",
        "operationId": "autoft-list-products",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "barcodes",
            "in": "query",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "description": "Ürün barkodları. Birden çok değer alabilir"
          },
          {
            "name": "pageKey",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "İlk istekte boş gönderilir. Sonraki isteklerde önceki response header'daki \nx-paging-key değeri kullanılır\n"
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 20,
              "maximum": 100
            },
            "description": "Listelenmek istenen ürün sayısı. Maksimum 100"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "headers": {
              "x-paging-key": {
                "schema": {
                  "type": "string"
                },
                "description": "Sonraki sayfa için kullanılacak sayfalama anahtarı"
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Product"
                  }
                },
                "example": [
                  {
                    "barcode": "8681261723738",
                    "sellerBarcode": "example-seller-barcode",
                    "rrpPrice": 27.25,
                    "buyingPrice": 5.12,
                    "stock": 8,
                    "origin": "TR",
                    "composition": "%5 Elastan, %95 Pamuk",
                    "description": "Dantelli V yaka Dikişli kısa kol",
                    "currency": "EUR",
                    "gtip": "610831000000",
                    "categoryId": 1000,
                    "careInstructions": "T44",
                    "attributes": [
                      {
                        "attributeId": 200,
                        "attributeName": "Renk",
                        "valueId": null,
                        "valueName": "Yeşil"
                      },
                      {
                        "attributeId": 300,
                        "attributeName": "Cinsiyet",
                        "valueId": 101,
                        "valueName": "Erkek"
                      },
                      {
                        "attributeId": 400,
                        "attributeName": "Materyal Bileşeni",
                        "valueId": null,
                        "valueName": "%5 Elastan, %95 Pamuk"
                      }
                    ]
                  },
                  {
                    "barcode": "8681261710478",
                    "sellerBarcode": "example-seller-barcode-2",
                    "rrpPrice": 19,
                    "buyingPrice": 4.21,
                    "stock": 15,
                    "origin": "TR",
                    "composition": "%100 Pamuk",
                    "description": "İnce yaka işlemeli kısa kollu gömlek",
                    "currency": "EUR",
                    "gtip": "621210900000",
                    "categoryId": 1001,
                    "careInstructions": "T104",
                    "attributes": [
                      {
                        "attributeId": 200,
                        "attributeName": "Renk",
                        "valueId": null,
                        "valueName": "Mavi"
                      },
                      {
                        "attributeId": 300,
                        "attributeName": "Cinsiyet",
                        "valueId": 101,
                        "valueName": "Erkek"
                      },
                      {
                        "attributeId": 400,
                        "attributeName": "Materyal Bileşeni",
                        "valueId": null,
                        "valueName": "%100 Pamuk"
                      }
                    ]
                  }
                ]
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
      "Product": {
        "type": "object",
        "properties": {
          "barcode": {
            "type": "string",
            "description": "Gönderim sağlanacak barkod, Trendyol sistemlerindeki barkod"
          },
          "sellerBarcode": {
            "type": "string",
            "description": "Satıcı sistemlerindeki barkod"
          },
          "rrpPrice": {
            "type": "number",
            "format": "double",
            "description": "Tavsiye edilen perakende fiyatı"
          },
          "buyingPrice": {
            "type": "number",
            "format": "double",
            "description": "Trendyol'a satış fiyatı"
          },
          "stock": {
            "type": "integer",
            "description": "Stok miktarı"
          },
          "origin": {
            "type": "string",
            "description": "Menşei ülke kodu"
          },
          "composition": {
            "type": "string",
            "description": "Materyal bileşeni (örn. %5 Elastan, %95 Pamuk)"
          },
          "description": {
            "type": "string",
            "description": "Ürün açıklaması"
          },
          "currency": {
            "type": "string",
            "description": "Para birimi (EUR, USD vb.)"
          },
          "gtip": {
            "type": "string",
            "description": "GTIP numarası"
          },
          "categoryId": {
            "type": "integer",
            "description": "Kategori ID"
          },
          "careInstructions": {
            "type": "string",
            "description": "Yıkama talimatı kodu"
          },
          "attributes": {
            "type": "array",
            "description": "Zorunlu ürün özellikleri",
            "items": {
              "type": "object",
              "properties": {
                "attributeId": {
                  "type": "integer"
                },
                "attributeName": {
                  "type": "string"
                },
                "valueId": {
                  "type": "integer",
                  "nullable": true
                },
                "valueName": {
                  "type": "string"
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