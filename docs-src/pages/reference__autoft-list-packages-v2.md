---
updatedAt: 2026-02-03T08:09:14.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Listeleme V2

Gün içerisinde oluşan yeni paketlerinizi buradan takip edebilirsiniz. Sipariş almanız durumunda her gün 08:00 - 08:15 saatleri arasında yeni bir paketiniz oluşacaktır. Paketleri günlük olarak takip etmeniz ve gün içerisinde Trendyol'a göndermeniz gerekmektedir.Paket listeme adımında yeni bir paketiniz olduğunu sorguladığınızda, paket içerisinde tedarik beklenen ürün bilgisine erişmek için [Paket Detayı V2](../reference/autoft-get-package-items-v2) servisi kullanılmalıdır.

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
      "name": "Paket Entegrasyonu",
      "description": "Paket listeleme ve detay işlemleri"
    }
  ],
  "paths": {
    "/v2/{sellerId}/packages": {
      "get": {
        "tags": [
          "Paket Entegrasyonu"
        ],
        "summary": "Paket Listeleme V2",
        "description": "Gün içerisinde oluşan yeni paketlerinizi buradan takip edebilirsiniz. \n\nSipariş almanız durumunda her gün 08:00 - 08:15 saatleri arasında yeni bir paketiniz oluşacaktır. \nPaketleri günlük olarak takip etmeniz ve gün içerisinde Trendyol'a göndermeniz gerekmektedir.\n\nPaket listeme adımında yeni bir paketiniz olduğunu sorguladığınızda, paket içerisinde tedarik beklenen \nürün bilgisine erişmek için Paket Detayı V2 servisi kullanılmalıdır.\n",
        "operationId": "autoft-list-packages-v2",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "trackingNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Tedarik beklenen ürünler için oluşturulan takip numarası (paket numarası)"
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "new",
                "pending",
                "completed",
                "cancelled"
              ]
            },
            "description": "Paketin durumu:\n- new: Yeni oluşmuş paket, henüz tedarik beklenmeyen ürünler bulunur\n- pending: Tedarik beklenen paket\n- completed: Tüm işlemler tamamlandı\n- cancelled: İptal edilen paket\n"
          },
          {
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 1,
              "minimum": 1
            },
            "description": "Sayfa numarası"
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
            "description": "Sayfa boyutu. Maksimum 100"
          },
          {
            "name": "approvedStartDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Paketin onaylandığı ilk tarih (UTC +0 millisecond timestamp)"
          },
          {
            "name": "approvedEndDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Paketin onaylandığı son tarih (UTC +0 millisecond timestamp)"
          },
          {
            "name": "creationStartDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Paketin oluşturulduğu ilk tarih (UTC +0 millisecond timestamp)"
          },
          {
            "name": "creationEndDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Paketin oluşturulduğu son tarih (UTC +0 millisecond timestamp)"
          },
          {
            "name": "boutiqueId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "Butik numarası"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PackageListResponseV2"
                },
                "example": {
                  "totalItemCount": 2465,
                  "totalPageCount": 2465,
                  "size": 1,
                  "page": 1,
                  "items": [
                    {
                      "trackingNumber": 518315,
                      "packageId": "75243c90-55eb-45a3-a052-e227ca1465f9",
                      "totalQuantity": 13,
                      "totalBuyingPrice": 3802,
                      "currency": "EUR",
                      "status": "pending",
                      "boutiqueId": "6783",
                      "platformId": 150,
                      "creationDate": 1678691613208,
                      "approvedDate": 1678691614208,
                      "lastModifiedDate": 1678691614208,
                      "cargos": [
                        {
                          "codes": [
                            "3ac32647-20aa-4a0b-97bc-f80de06c1692"
                          ],
                          "provider": "Trendyol Express"
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
      "PackageListResponseV2": {
        "type": "object",
        "properties": {
          "page": {
            "type": "integer",
            "description": "Güncel sayfa numarası"
          },
          "size": {
            "type": "integer",
            "description": "Sayfa boyutu"
          },
          "totalItemCount": {
            "type": "integer",
            "description": "Toplam paket sayısı"
          },
          "totalPageCount": {
            "type": "integer",
            "description": "Toplam sayfa sayısı"
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PackageV2"
            }
          }
        }
      },
      "PackageV2": {
        "type": "object",
        "properties": {
          "trackingNumber": {
            "type": "integer",
            "format": "int64",
            "description": "Tedarik beklenen ürünler için oluşturulan takip numarası"
          },
          "packageId": {
            "type": "string",
            "description": "Paket numarası"
          },
          "totalQuantity": {
            "type": "integer",
            "description": "Pakette bulunan toplam item sayısı"
          },
          "totalBuyingPrice": {
            "type": "number",
            "format": "double",
            "description": "Pakette yer alan ürünlerin KDV dahil satın alındığı fiyat toplamı"
          },
          "currency": {
            "type": "string",
            "description": "Para birimi"
          },
          "status": {
            "type": "string",
            "enum": [
              "new",
              "pending",
              "completed",
              "cancelled"
            ],
            "description": "Paket durumu"
          },
          "boutiqueId": {
            "type": "string",
            "description": "Butik numarası"
          },
          "platformId": {
            "type": "integer",
            "description": "Platform (partner) numarası"
          },
          "creationDate": {
            "type": "integer",
            "format": "int64",
            "description": "Paketin oluşturulma tarihi (UTC +0 timestamp)"
          },
          "approvedDate": {
            "type": "integer",
            "format": "int64",
            "description": "Paketin onaylanma tarihi (UTC +0 timestamp)"
          },
          "lastModifiedDate": {
            "type": "integer",
            "format": "int64",
            "description": "Paketin son değiştirilme tarihi (UTC +0 timestamp)"
          },
          "cargos": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CargoInfo"
            }
          }
        }
      },
      "CargoInfo": {
        "type": "object",
        "properties": {
          "codes": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Kargo takip numaraları"
          },
          "provider": {
            "type": "string",
            "description": "Kargo firması"
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