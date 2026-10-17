---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Oluşturma V2

Trendyol Pazaryeri'nde onaylanmış ürünleri ihracata açmak için kullanılır. 
Satıcı Paneli'nde oluşturulmayan ürünler, İhracat Merkezi'nde oluşturulamaz.

> Barkod bazında günde **1** kez fiyat güncelleme işlemi yapılmaktadır.


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
      "post": {
        "tags": [
          "Ürün Entegrasyonu"
        ],
        "summary": "Ürün Oluşturma V2",
        "description": "Trendyol Pazaryeri'nde onaylanmış ürünleri ihracata açmak için kullanılır. \nSatıcı Paneli'nde oluşturulmayan ürünler, İhracat Merkezi'nde oluşturulamaz.\n\n> Barkod bazında günde **1** kez fiyat güncelleme işlemi yapılmaktadır.\n",
        "operationId": "autoft-create-products-v2",
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
                  "products"
                ],
                "properties": {
                  "products": {
                    "type": "array",
                    "maxItems": 5000,
                    "description": "Ürünlerin listesini içeren ana dizi. Maksimum 5000 ürün girişi olabilir",
                    "items": {
                      "type": "object",
                      "required": [
                        "barcode",
                        "buyingPrice",
                        "origin",
                        "stock",
                        "categoryId",
                        "attributes"
                      ],
                      "properties": {
                        "barcode": {
                          "type": "string",
                          "description": "Ürünün benzersiz tanımlayıcısı olan barkod numarası"
                        },
                        "buyingPrice": {
                          "type": "number",
                          "format": "double",
                          "description": "Ürünün Trendyol tarafından KDV dahil satın alındığı fiyat"
                        },
                        "rrp": {
                          "type": "number",
                          "format": "double",
                          "description": "Ürünün tavsiye edilen perakende satış fiyatı. buyingPrice değerinden büyük veya eşit olmalıdır"
                        },
                        "gtip": {
                          "type": "string",
                          "minLength": 4,
                          "maxLength": 12,
                          "description": "Ürünün GTIP numarası. Minimum 4, maksimum 12 hane olabilir"
                        },
                        "origin": {
                          "type": "string",
                          "description": "Ürünün üretildiği ülke"
                        },
                        "stock": {
                          "type": "integer",
                          "description": "Ürünün mevcut stok miktarı"
                        },
                        "categoryId": {
                          "type": "integer",
                          "description": "Ürünün Pazaryerindeki kategori bilgisi"
                        },
                        "attributes": {
                          "type": "array",
                          "description": "Zorunlu ürün özellikleri",
                          "items": {
                            "type": "object",
                            "properties": {
                              "attributeId": {
                                "type": "integer",
                                "description": "Özellik ID"
                              },
                              "attributeValueId": {
                                "type": "integer",
                                "description": "Özellik değeri ID (allowCustom=false ve multipleValues=false durumunda)"
                              },
                              "customAttributeValue": {
                                "type": "string",
                                "description": "Özel özellik değeri (allowCustom=true ve multipleValues=false durumunda)"
                              },
                              "customAttributeValues": {
                                "type": "object",
                                "description": "Çoklu özel değerler (allowCustom=true ve multipleValues=true durumunda, örn. Materyal Bileşeni)",
                                "additionalProperties": {
                                  "type": "string"
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
              "example": {
                "products": [
                  {
                    "barcode": "barcode-0",
                    "buyingPrice": 6.95,
                    "rrp": 30.99,
                    "gtip": "gtip-0123",
                    "stock": 100,
                    "origin": "Türkiye",
                    "categoryId": 123,
                    "attributes": [
                      {
                        "attributeId": 100,
                        "attributeValueId": 1
                      },
                      {
                        "attributeId": 101,
                        "customAttributeValue": "Custom-Value"
                      },
                      {
                        "attributeId": 102,
                        "customAttributeValues": {
                          "1": "95",
                          "2": "5"
                        }
                      }
                    ]
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