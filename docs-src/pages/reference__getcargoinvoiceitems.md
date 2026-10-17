---
updatedAt: 2026-02-18T07:21:16.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Kargo Faturası Detayları Servisi

Trendyol tarafından satıcılara kesilen kargo faturalarının detaylarına ulaşabilirsiniz.

Kargo faturasının seri numarasını bulmak için Cari Hesap Ekstresi Entegrasyonu üzerinden
transactionType='DeductionInvoices' responsundan dönen data içerisindeki alanlardan
transactionType değeri "Kargo Faturası" yada "Kargo Fatura" olan kayıtların "Id" değerini kullanınız.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Yurtiçi Kargo Faturası Detayları Entegrasyonu",
    "description": "Trendyol tarafından satıcılara kesilen kargo faturalarını detayına bu servis üzerinden ulaşabilirsiniz.\n\n- **Kargo Faturasının seri numarasını nasıl bulurum?**\n  Cari Hesap Ekstresi Entegrasyonu üzerinden transactionType='DeductionInvoices' responsundan dönen data içerisindeki alanlardan transactionType değeri \"Kargo Faturası\" yada \"Kargo Fatura\" olan kayıtların \"Id\" değeri \"invoiceSerialNumber\" değeridir.\n",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://apigw.trendyol.com/integration/finance/che",
      "description": "Canlı Ortam"
    },
    {
      "url": "https://stageapigw.trendyol.com/integration/finance/che",
      "description": "Test Ortamı"
    }
  ],
  "tags": [
    {
      "name": "Cargo Invoice",
      "description": "Kargo faturası detay işlemleri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/cargo-invoice/{invoiceSerialNumber}/items": {
      "get": {
        "tags": [
          "Cargo Invoice"
        ],
        "summary": "Kargo Faturası Detayları Servisi",
        "description": "Trendyol tarafından satıcılara kesilen kargo faturalarının detaylarına ulaşabilirsiniz.\n\nKargo faturasının seri numarasını bulmak için Cari Hesap Ekstresi Entegrasyonu üzerinden\ntransactionType='DeductionInvoices' responsundan dönen data içerisindeki alanlardan\ntransactionType değeri \"Kargo Faturası\" yada \"Kargo Fatura\" olan kayıtların \"Id\" değerini kullanınız.\n",
        "operationId": "getCargoInvoiceItems",
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
          },
          {
            "name": "invoiceSerialNumber",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            },
            "description": "Kargo faturası seri numarası. Cari Hesap Ekstresi'nden transactionType='DeductionInvoices' ile elde edilir."
          },
          {
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 0
            },
            "description": "Sadece belirtilen sayfadaki bilgileri döndürür"
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 500
            },
            "description": "Bir sayfada listelenecek maksimum adeti belirtir."
          }
        ],
        "responses": {
          "200": {
            "description": "Başarılı yanıt",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CargoInvoicePageResponse"
                },
                "example": {
                  "page": 0,
                  "size": 500,
                  "totalPages": 1,
                  "totalElements": 25,
                  "content": [
                    {
                      "shipmentPackageType": "Gönderi Kargo Bedeli",
                      "parcelUniqueId": 7260001151141191,
                      "orderNumber": "2111681160",
                      "amount": 34.24,
                      "desi": 1
                    },
                    {
                      "shipmentPackageType": "İade Kargo Bedeli",
                      "parcelUniqueId": 7265609146531138,
                      "orderNumber": "2111161312",
                      "amount": 34.24,
                      "desi": 1
                    }
                  ]
                }
              }
            }
          },
          "400": {
            "description": "Hatalı İstek",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "401": {
            "description": "Yetkisiz",
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
    "schemas": {
      "CargoInvoicePageResponse": {
        "type": "object",
        "properties": {
          "page": {
            "type": "integer",
            "description": "Mevcut sayfa numarası"
          },
          "size": {
            "type": "integer",
            "description": "Sayfa başına öğe sayısı"
          },
          "totalPages": {
            "type": "integer",
            "description": "Toplam sayfa sayısı"
          },
          "totalElements": {
            "type": "integer",
            "description": "Toplam öğe sayısı"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CargoInvoiceItem"
            }
          }
        }
      },
      "CargoInvoiceItem": {
        "type": "object",
        "properties": {
          "shipmentPackageType": {
            "type": "string",
            "description": "Kargo paketi türü (örn. \"Gönderi Kargo Bedeli\", \"İade Kargo Bedeli\")"
          },
          "parcelUniqueId": {
            "type": "integer",
            "format": "int64",
            "description": "Kargo paketi benzersiz kimliği"
          },
          "orderNumber": {
            "type": "string",
            "description": "Sipariş numarası"
          },
          "amount": {
            "type": "number",
            "format": "double",
            "description": "Kargo bedeli tutarı"
          },
          "desi": {
            "type": "integer",
            "description": "Kargo desi değeri"
          }
        }
      },
      "Error": {
        "type": "object",
        "properties": {
          "error": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      }
    },
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