---
updatedAt: 2026-02-02T08:59:09.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Paket Detayı V2

İlgili paket içerisinde bulunan ürünlerin detayları buradan alınmalıdır.

Henüz oluşmayan ve bir sonraki gün oluşturulacak olan paketleriniz için bu servisi kullanabilir (status = new) 
ve tedarik beklenecek olan adetleri önceden görerek stoklarınızı yönetebilirsiniz.

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
    "/v2/{sellerId}/packages/items": {
      "get": {
        "tags": [
          "Paket Entegrasyonu"
        ],
        "summary": "Paket Detayı V2",
        "description": "İlgili paket içerisinde bulunan ürünlerin detayları buradan alınmalıdır.\n\nHenüz oluşmayan ve bir sonraki gün oluşturulacak olan paketleriniz için bu servisi kullanabilir (status = new) \nve tedarik beklenecek olan adetleri önceden görerek stoklarınızı yönetebilirsiniz.\n\n**⚠️ ÖNEMLİ:**\n- **new** durumunda bulunan ürünler iptal edildiğinde, newQuantity değeri azalır ve cancelledQuantity değişmez.\n- **pending** durumunda bulunan ürünler iptal edildiğinde, pendingQuantity değeri azalır ve cancelledQuantity artar.\n",
        "operationId": "autoft-get-package-items-v2",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "packageId",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "Paket numarası"
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
            "description": "Paket durumu"
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
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PackageItemsResponseV2"
                },
                "example": {
                  "totalItemCount": 2,
                  "totalPageCount": 1,
                  "size": 20,
                  "page": 1,
                  "items": [
                    {
                      "itemId": "75243c90-55eb-45a3-a052-e227ca1465f9-816701986",
                      "name": "product-name-01",
                      "trackingNumber": null,
                      "sellerBarcode": "seller-barcode-01",
                      "barcode": "barcode-01",
                      "newQuantity": 10,
                      "pendingQuantity": 20,
                      "completedQuantity": 5,
                      "unSuppliedQuantity": 5,
                      "cancelledQuantity": 10,
                      "unitBuyingPrice": 10,
                      "creationDate": 1678691613222,
                      "lastModifiedDate": 1678691613210
                    },
                    {
                      "itemId": "75243c90-55eb-45a3-a052-e227ca1465f9-728609554",
                      "name": "product-name-02",
                      "trackingNumber": 3687712,
                      "sellerBarcode": "seller-barcode-02",
                      "barcode": "barcode-02",
                      "newQuantity": 15,
                      "pendingQuantity": 10,
                      "completedQuantity": 7,
                      "unSuppliedQuantity": 6,
                      "cancelledQuantity": 3,
                      "unitBuyingPrice": 15,
                      "creationDate": 1678691633736,
                      "lastModifiedDate": 1678691613210
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
      "PackageItemsResponseV2": {
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
              "$ref": "#/components/schemas/PackageItemV2"
            }
          }
        }
      },
      "PackageItemV2": {
        "type": "object",
        "properties": {
          "itemId": {
            "type": "string",
            "description": "Benzersiz ürün numarası"
          },
          "name": {
            "type": "string",
            "description": "Ürün adı"
          },
          "trackingNumber": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Paketin takip numarası"
          },
          "sellerBarcode": {
            "type": "string",
            "description": "Ürünün satıcı sistemlerinde kayıtlı barkodu"
          },
          "barcode": {
            "type": "string",
            "description": "Ürünün barkodu (Gönderim Beklenen Barkod)"
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
          "creationDate": {
            "type": "integer",
            "format": "int64",
            "description": "Paket item oluşturulma zaman etiketi (UTC +0)"
          },
          "lastModifiedDate": {
            "type": "integer",
            "format": "int64",
            "description": "Paket item son güncellenme zaman etiketi (UTC +0)"
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