---
updatedAt: 2026-02-03T10:29:17.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Fatura Dosyası Gönderme - uploadInvoiceFile

Satıcıların sipariş paketleri için fatura dosyalarını (PDF, JPEG, PNG) yüklemelerini sağlar.

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
      "name": "Fatura Dosyası Yönetimi",
      "description": "Fatura dosyası yükleme işlemleri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/seller-invoice-file": {
      "post": {
        "tags": [
          "Fatura Dosyası Yönetimi"
        ],
        "summary": "Fatura Dosyası Gönderme - uploadInvoiceFile",
        "description": "Satıcıların sipariş paketleri için fatura dosyalarını (PDF, JPEG, PNG) yüklemelerini sağlar.\n\n### Önemli Kurallar\n- Dosya boyutu 10 MB'dan büyük olamaz\n- İleri tarihli fatura eklenemez\n- Desteklenen dosya formatları: PDF, JPEG, PNG\n- Mikro ihracat siparişleri için invoiceDateTime ve invoiceNumber zorunludur\n\n### Hata Durumları\n- Gönderi paketi başka satıcıya aitse: \"Gönderi paketi, belirtilen satıcıya ait değil. sellerId: X\"\n- Faturası oluşmuş bir pakete yüklenmek istenirse: \"{paketNo} numaralı pakete ait fatura önceden gönderilmiş\"\n- Paket bulunamazsa: \"{paketNo} IDli kargo paketi bulunamadı\"\n- Geçersiz dosya formatı: \"Dosya türü (.txt) desteklenmiyor. Desteklenen dosya türleri: application/pdf,image/jpeg,image/png\"\n- Dosya gönderilmezse: \"Dosya gönderilmedi. Lütfen fatura dosyasını seçip tekrar deneyin\"\n- Mikro için fatura numarası eksikse: \"Micro export type'ları için fatura bilgisi zorunludur\"\n- Mikro için tarih eksikse: \"Micro export type'ları için fatura bilgisi zorunludur\"\n\n### TR (Türkiye) Siparişleri\nHerhangi bir JSON request body bulunmamaktadır. Aşağıdaki alanları form-data olarak göndermeniz gerekmektedir:\n- shipmentPackageId: form-data (Text) olarak\n- file: form-data (File) olarak - PDF, JPEG veya PNG\n\n### Mikro İhracat Siparişleri\nAşağıdaki alanları form-data olarak göndermeniz gerekmektedir:\n- shipmentPackageId: form-data (Text) olarak\n- invoiceDateTime: form-data (Text) olarak - Unix timestamp (saniye veya milisaniye)\n- invoiceNumber: form-data (Text) olarak\n- file: form-data (File) olarak - PDF, JPEG veya PNG\n",
        "operationId": "uploadInvoiceFile",
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
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "required": [
                  "shipmentPackageId",
                  "file"
                ],
                "properties": {
                  "shipmentPackageId": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Sipariş paket ID (zorunlu)"
                  },
                  "invoiceDateTime": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Fatura tarihi - Unix timestamp formatında, 0'dan büyük, 10 haneli (saniye) veya 13 haneli (milisaniye).\nMikro ihracat siparişleri için zorunlu, diğerleri için opsiyonel.\n"
                  },
                  "invoiceNumber": {
                    "type": "string",
                    "description": "Fatura numarası - Mikro ihracat siparişleri için zorunlu, diğerleri için opsiyonel.\nFormat kuralları: İlk 3 hane alfanumerik, 4-7. haneler yıl (2020-2099), son 9 hane numerik.\n",
                    "pattern": "^[A-Za-z0-9]{3}(20[2-9][0-9])\\d{9}$"
                  },
                  "file": {
                    "type": "string",
                    "format": "binary",
                    "description": "Fatura dosyası (PDF, JPEG veya PNG formatında, maksimum 10 MB)"
                  }
                }
              },
              "encoding": {
                "file": {
                  "contentType": "application/pdf, image/jpeg, image/png"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success - Fatura dosyası başarıyla yüklendi"
          },
          "201": {
            "description": "Created - Fatura dosyası başarıyla oluşturuldu"
          },
          "400": {
            "description": "Bad Request - Geçersiz istek parametreleri. Olası hatalar:\n- Dosya boyutu 10 MB'dan büyük\n- İleri tarihli fatura\n- Geçersiz dosya formatı\n- Dosya gönderilmedi\n- Mikro sipariş için eksik bilgi (invoiceDateTime veya invoiceNumber)\n",
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
          "403": {
            "description": "Forbidden - Gönderi paketi belirtilen satıcıya ait değil",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "404": {
            "description": "Not Found - Belirtilen paket ID bulunamadı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "409": {
            "description": "Conflict - Pakete ait fatura daha önce gönderilmiş",
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