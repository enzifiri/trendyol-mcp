---
updatedAt: 2026-08-25T09:48:58.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Payment Order List Servisi

Satıcının PAID ödeme emirlerini sayfalı listeler (varsayılan/maksimum size=10). Cevap bir ödeme emri listesidir. id alanı paymentOrderId, tarih alanı payoutDate'tir.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Yurtiçi Cari Hesap Ekstresi Entegrasyonu",
    "description": "Trendyol sisteminde oluşan muhasebesel kayıtlarınızı bu servis aracılığı ile entegrasyon üzerinden çekebilirsiniz.\n\n- Finansal kayıtlar sipariş teslim edildikten sonra oluşmaktadır.\n- transactionType veya transactionTypes girilmesi zorunludur. 1 istekte yalnızca 1 type girilebilir. transactionTypes ile birden fazla type gönderilebilir. İkisi birlikte gönderilirse transactionTypes geçerlidir.\n- paymentOrderId siparişin ödemesi yapıldıktan sonra oluşmaktadır. İstisnalar hariç, her çarşamba, ilgili haftada vadesi gelen siparişler için ödeme emri oluşur.\n- paymentOrderId ile sipariş ve ödemelerinizi eşleştirebilirsiniz.\n- Tarih filtresi için startDate+endDate, paymentDate veya paymentOrderId gönderilmelidir. startDate ve endDate arasındaki süre **15** günden uzun **olamaz**. paymentDate (yyyy-MM-dd) gönderildiğinde kayıtlar işlem tarihi yerine ödeme/vade tarihine göre filtrelenir.\n- Store bilgileri Marketplace satıcıları için \"null\" olarak dönecektir.\n- \"affiliate\" alanı \"TRENDYOLTR\" yada \"TRENDYOLAZJV\" dönebilir.\n\n**Kullanılacak olan servisler (settlements, otherfinancials, payment-order) birbirinden ayrı işlem kayıtlarını vermektedir.**\n- \"Settlements\" servisinden satış, iade, indirim, kupon, provizyon işlemlerinin detaylarına ulaşabilirsiniz.\n- \"Other Financial\" servisinden tedarikçi finansmanı, virman, ödemeler (hakediş), faturalar, tedarikçi faturaları, gelen havale, komisyon mutabakat faturaları işlemlerinin detaylarına ulaşabilirsiniz.\n- \"Payment Order\" servisinden belirli bir ödeme tarihindeki hakediş kayıtlarını sorgulayabilirsiniz. Dönen `id` değeri paymentOrderId'dir; settlements ve otherfinancials bu id ile startDate/endDate olmadan filtrelenebilir. Hakediş dönemi için paymentDate satır filtresi değil, bu iki adımlı paymentOrderId akışı kullanılmalıdır.\n",
    "version": "1.1.0",
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
      "name": "Payment Order",
      "description": "Ödeme tarihine göre hakediş (payment order) sorgulama"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/payment-order": {
      "get": {
        "tags": [
          "Payment Order"
        ],
        "summary": "Payment Order List Servisi",
        "description": "Satıcının PAID ödeme emirlerini sayfalı listeler. Varsayılan ve maksimum size 10'dur. Cevaptaki id alanı paymentOrderId'dir; settlements ve otherfinancials bu değerle startDate/endDate olmadan sorgulanır. Tarih alanı payoutDate'tir.\n",
        "operationId": "getPaymentOrders",
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
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 0
            },
            "description": "Sayfa numarası (0'dan başlar)"
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 10,
              "maximum": 10
            },
            "description": "Sayfa boyutu (varsayılan ve maksimum 10)"
          }
        ],
        "responses": {
          "200": {
            "description": "Başarılı yanıt",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PaymentOrderPagedResponse"
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
      "PaymentOrderPagedResponse": {
        "type": "object",
        "properties": {
          "page": {
            "type": "integer"
          },
          "size": {
            "type": "integer"
          },
          "totalPages": {
            "type": "integer"
          },
          "totalElements": {
            "type": "integer",
            "format": "int64"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PaymentOrderLookup"
            }
          }
        }
      },
      "PaymentOrderLookup": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "paymentOrderId. settlements ve otherfinancials filtre parametresi."
          },
          "status": {
            "type": "string",
            "description": "Ödeme emri durumu"
          },
          "amount": {
            "type": "number",
            "format": "double",
            "description": "Ödeme tutarı"
          },
          "payoutDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Ödeme emrinin oluştuğu tarih (Unix timestamp milisaniye)"
          },
          "paymentType": {
            "type": "string",
            "nullable": true,
            "description": "Ödeme tipi"
          },
          "sellerId": {
            "type": "integer",
            "format": "int64",
            "description": "Satıcı ID"
          },
          "regionId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Ödeme bölgesi ID"
          },
          "regionName": {
            "type": "string",
            "nullable": true,
            "description": "Ödeme bölgesi adı"
          },
          "regionCode": {
            "type": "string",
            "nullable": true,
            "description": "Ödeme bölgesi kodu"
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