---
updatedAt: 2026-02-03T08:11:45.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Listeleme V3

Paket Listeleme ve Paket Detay için iki ayrı API kullanmak istemeyen iş ortaklarımız tek endpoint olarak kullanabilir.

**⚠️ ÖNEMLİ:**
- **new** durumunda bulunan ürünler iptal edildiğinde, newQuantity değeri azalır ve cancelledQuantity değişmez.
- **pending** durumunda bulunan ürünler iptal edildiğinde, pendingQuantity değeri azalır ve cancelledQuantity artar.


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
    "/v3/{sellerId}/packages": {
      "get": {
        "tags": [
          "Paket Entegrasyonu"
        ],
        "summary": "Paket Listeleme V3 (Konsolide)",
        "description": "Paket Listeleme ve Paket Detay için iki ayrı API kullanmak istemeyen iş ortaklarımız tek endpoint olarak kullanabilir.\n\n**⚠️ ÖNEMLİ:**\n- **new** durumunda bulunan ürünler iptal edildiğinde, newQuantity değeri azalır ve cancelledQuantity değişmez.\n- **pending** durumunda bulunan ürünler iptal edildiğinde, pendingQuantity değeri azalır ve cancelledQuantity artar.\n",
        "operationId": "autoft-list-packages-v3",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
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
            "description": "Paket ürün durumu:\n- new: Yeni oluşmuş paketteki ürün, henüz tedarik beklenmez\n- pending: Tedarik beklenen ürün\n- completed: Ürünün tedariği ve iptali tamamlanmıştır\n- cancelled: İptal edilen ürün\n"
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
            "name": "creationStartDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Başlangıç tarihi (UTC +0 millisecond timestamp)"
          },
          {
            "name": "creationEndDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Bitiş tarihi (UTC +0 millisecond timestamp)"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PackageListResponseV3"
                },
                "example": {
                  "totalItemCount": 2465,
                  "totalPageCount": 2465,
                  "size": 1,
                  "page": 1,
                  "items": [
                    {
                      "itemId": "0c8f8c74-38f3-493f-8a05-5d1dcddd",
                      "trackingNumber": 2584135020123481600,
                      "packageId": "0c8f8c74-38f3-493f-8a05-5d1dcddd52ef",
                      "boutiqueId": 0,
                      "currency": "EUR",
                      "platformId": 150,
                      "barcode": "cb08addb-3d82-4d0a-89d8-d4eb841290e4",
                      "sellerBarcode": "5a4a8217-39da-4f1f-ac49-6b1c06e44869",
                      "creationDate": 1711359070376,
                      "lastModifiedDate": 1711359070376,
                      "name": "5d679332-159a-41d2-8918-f928276a2421",
                      "newQuantity": 0,
                      "pendingQuantity": 0,
                      "unSuppliedQuantity": 0,
                      "cancelledQuantity": 0,
                      "completedQuantity": 1,
                      "unitBuyingPrice": 26214301,
                      "status": "completed",
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
      "PackageListResponseV3": {
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
            "description": "Toplam öğe sayısı"
          },
          "totalPageCount": {
            "type": "integer",
            "description": "Toplam sayfa sayısı"
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PackageItemV3"
            }
          }
        }
      },
      "PackageItemV3": {
        "type": "object",
        "properties": {
          "itemId": {
            "type": "string",
            "description": "Benzersiz ürün numarası"
          },
          "trackingNumber": {
            "type": "integer",
            "format": "int64",
            "description": "Tedarik beklenen ürünler için oluşturulan takip numarası"
          },
          "packageId": {
            "type": "string",
            "description": "Paket numarası"
          },
          "boutiqueId": {
            "type": "integer",
            "description": "Butik numarası"
          },
          "currency": {
            "type": "string",
            "description": "Para birimi"
          },
          "platformId": {
            "type": "integer",
            "description": "Platform (partner) numarası"
          },
          "barcode": {
            "type": "string",
            "description": "Ürünün barkodu (Gönderim Beklenen Barkod)"
          },
          "sellerBarcode": {
            "type": "string",
            "description": "Ürünün satıcı sistemlerinde kayıtlı barkodu"
          },
          "creationDate": {
            "type": "integer",
            "format": "int64",
            "description": "Ürünün sipariş gelme tarihi (UTC +0)"
          },
          "lastModifiedDate": {
            "type": "integer",
            "format": "int64",
            "description": "Ürünün son değiştirilme tarihi (UTC +0)"
          },
          "name": {
            "type": "string",
            "description": "Ürün adı"
          },
          "newQuantity": {
            "type": "integer",
            "description": "Yeni oluşmuş ürün sayısı"
          },
          "pendingQuantity": {
            "type": "integer",
            "description": "Güncel tedarik beklenen ürün sayısı"
          },
          "completedQuantity": {
            "type": "integer",
            "description": "Trendyol tarafından mal kabul yapılan ürün sayısı"
          },
          "unSuppliedQuantity": {
            "type": "integer",
            "description": "Tedarik edilemeyen ve artık gönderimi beklenmeyen ürün sayısı"
          },
          "cancelledQuantity": {
            "type": "integer",
            "description": "İptal edilen ürün sayısı"
          },
          "unitBuyingPrice": {
            "type": "number",
            "format": "double",
            "description": "Ürünün Trendyol'a KDV dahil birim satış fiyatı"
          },
          "status": {
            "type": "string",
            "enum": [
              "new",
              "pending",
              "completed",
              "cancelled"
            ],
            "description": "Ürün durumu"
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