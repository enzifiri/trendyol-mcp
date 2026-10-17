---
updatedAt: 2026-02-03T10:28:48.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Fatura Linki Gönderme - sendInvoiceLink

Tedarikçi tarafından kendi sisteminde yaratılmış e-Arşiv ya da e-Fatura bilgisinin LİNK detayını Trendyol sistemine transfer etmek için bu method kullanılacaktır.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Fatura Entegrasyonu (Invoice Integration)",
    "description": "Trendyol Satıcı Fatura Entegrasyon API'si - E-Fatura ve E-Arşiv fatura yönetimi için entegrasyon servisleri",
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
  "tags": [
    {
      "name": "Fatura Linki Yönetimi",
      "description": "Fatura linki gönderme ve silme işlemleri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/seller-invoice-links": {
      "post": {
        "tags": [
          "Fatura Linki Yönetimi"
        ],
        "summary": "Fatura Linki Gönderme - sendInvoiceLink",
        "description": "Tedarikçi tarafından kendi sisteminde yaratılmış e-Arşiv ya da e-Fatura bilgisinin LİNK detayını Trendyol sistemine transfer etmek için bu method kullanılacaktır.\n\n**YASAL ZORUNLULUK**: Bu servis ile gönderilen fatura bağlantılarının hukuki zorunluluk gereği 10 yıl boyunca erişilebilir durumda olması gereklidir.\n\n### Kullanım Şartları\n- Eğer ilgili siparişe ait fatura gönderimini siparişteki kriptolu mail adresine **PDF** ekleyerek gönderim **yapamıyorsanız** bu servisi kullanmanız gerekmektedir.\n- Bu servisin tetiklenmesi ile birlikte ilgili sipariş paketi için Trendyol müşterilerine e-Fatura linki kontrol edilerek gönderilir.\n- Kriptolu mail adresleri müşteri bazlı sabit değildir, her sipariş için unique mail üretilmektedir.\n\n### Zorunlu Alanlar\n- \"invoiceNumber\" ve \"invoiceDateTime\" alanları mikro ihracat paketleri için zorunlu ancak diğer paket türleri için opsiyoneldir.\n- Azerbaycan ve GULF ülkelerinin sipariş faturaları için entegrasyondan yapacağınız yüklemelerde, fatura üzerinde yazılı olan fatura numarası ile sistem üzerinden ileteceğiniz fatura numarası aynı olmalıdır.\n\n### Fatura Numarası Formatı\nFatura numarasının geçerli olabilmesi için aşağıdaki koşullara uyması gerekmektedir:\n- İlk üç hane: alfa numeric olmalı (Harf veya rakam)\n- Dört, beş, altı ve yedinci hane: bir yıla eşit olmalı (2020'den 2099'a kadar)\n- Sekizinci haneden itibaren (son dokuz hane): numeric olmalı\n\nFormat: [3 digit(alphanumeric)][4 digit(year)][9 digit(numeric)]\n\n**Geçerli Örnekler:**\n- FRY2024567890123\n- FR12024567890123\n- F1Y2024567890123\n- 1RY2024567890123\n- 12Y2024567890123\n- 1232024567890123\n- F232024567890123\n\n**Geçersiz Örnek:**\n- FRY12345 (eksik hane)\n",
        "operationId": "sendInvoiceLink",
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
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InvoiceLinkRequest"
              },
              "example": {
                "invoiceLink": "https://developers.trendyolefaturam.com/invoice-example.pdf",
                "shipmentPackageId": 435346,
                "invoiceDateTime": 1678788898,
                "invoiceNumber": "TY42024567890123"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Success - Fatura linki başarıyla kaydedildi"
          },
          "400": {
            "description": "Bad Request - Geçersiz istek parametreleri",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized - Kimlik doğrulama hatası",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "409": {
            "description": "Conflict - İki durumda bu hata döner:\n1. Gönderilen ShipmentPackageId'ye ait bir fatura zaten beslenmiş olabilir\n2. Gönderilen link daha önce başka bir ShipmentPackageId'ye zaten beslenmiş olabilir\n",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
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
      },
      "apiKeyAuth": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "description": "Bearer token kimlik doğrulama"
      }
    },
    "schemas": {
      "InvoiceLinkRequest": {
        "type": "object",
        "required": [
          "invoiceLink",
          "shipmentPackageId"
        ],
        "properties": {
          "invoiceLink": {
            "type": "string",
            "format": "uri",
            "description": "E-Fatura veya E-Arşiv fatura linki. Bu link 10 yıl boyunca erişilebilir olmalıdır (yasal zorunluluk).\n",
            "example": "https://developers.trendyolefaturam.com/invoice-example.pdf"
          },
          "shipmentPackageId": {
            "type": "integer",
            "format": "int64",
            "description": "Trendyol sipariş paket ID",
            "example": 435346
          },
          "invoiceDateTime": {
            "type": "integer",
            "format": "int64",
            "description": "Fatura tarihi - Unix timestamp formatında (saniye veya milisaniye).\n0'dan büyük, 10 haneli (saniye) veya 13 haneli (milisaniye) olmalıdır.\nMikro ihracat paketleri için zorunlu, diğer paket türleri için opsiyonel.\n",
            "example": 1678788898
          },
          "invoiceNumber": {
            "type": "string",
            "description": "Fatura numarası. Mikro ihracat paketleri için zorunlu, diğer paket türleri için opsiyonel.\n\nFormat Kuralları:\n- İlk 3 hane: alfanumerik (harf veya rakam)\n- 4-7. haneler: yıl bilgisi (2020-2099 arası)\n- Son 9 hane: numerik\n\nToplam 16 karakter: [3 alfanumerik][4 digit yıl][9 digit numara]\n\nAzerbaycan ve GULF ülkeleri için: Fatura üzerindeki numara ile gönderilen numara aynı olmalıdır.\n",
            "pattern": "^[A-Za-z0-9]{3}(20[2-9][0-9])\\d{9}$",
            "minLength": 16,
            "maxLength": 16,
            "example": "TY42024567890123"
          }
        }
      },
      "Error": {
        "type": "object",
        "properties": {
          "error": {
            "type": "string",
            "description": "Hata kodu veya tipi",
            "example": "CONFLICT"
          },
          "message": {
            "type": "string",
            "description": "Hata mesajı detayı",
            "example": "Gönderilen ShipmentPackageId'ye ait bir fatura zaten beslenmiş"
          },
          "timestamp": {
            "type": "integer",
            "format": "int64",
            "description": "Hata zamanı (Unix timestamp)"
          },
          "path": {
            "type": "string",
            "description": "Hatanın oluştuğu endpoint"
          },
          "status": {
            "type": "integer",
            "description": "HTTP status kodu"
          }
        }
      }
    }
  },
  "security": [
    {
      "basicAuth": []
    },
    {
      "apiKeyAuth": []
    }
  ]
}
```