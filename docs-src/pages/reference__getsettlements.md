---
updatedAt: 2026-02-16T13:44:40.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Settlements Servisi

Satış, iade, indirim, kupon, provizyon işlemlerinin detaylarına ulaşabilirsiniz.
Transaction Type, SellerRevenuePositive ve CommissionNegative birlikte değerlendirilmelidir.
Transaction Type, SellerRevenueNegative ve CommissionPositive birlikte değerlendirilmelidir.
Transaction Type, SellerRevenuePositiveCancel ve CommissionNegativeCancel birlikte değerlendirilmelidir.
Transaction Type, SellerRevenueNegativeCancel ve CommissionPositiveCancel birlikte değerlendirilmelidir.


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
      "name": "Settlements",
      "description": "Satış, iade, indirim, kupon, provizyon işlemleri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/settlements": {
      "get": {
        "tags": [
          "Settlements"
        ],
        "summary": "Settlements Servisi",
        "description": "Satış, iade, indirim, kupon, provizyon işlemlerinin detaylarına ulaşabilirsiniz.\nTransaction Type, SellerRevenuePositive ve CommissionNegative birlikte değerlendirilmelidir.\nTransaction Type, SellerRevenueNegative ve CommissionPositive birlikte değerlendirilmelidir.\nTransaction Type, SellerRevenuePositiveCancel ve CommissionNegativeCancel birlikte değerlendirilmelidir.\nTransaction Type, SellerRevenueNegativeCancel ve CommissionPositiveCancel birlikte değerlendirilmelidir.\n",
        "operationId": "getSettlements",
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
            "name": "transactionType",
            "in": "query",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/SettlementTransactionType"
            },
            "description": "Finansal işlem türüdür. transactionType veya transactionTypes gönderilmelidir."
          },
          {
            "name": "transactionTypes",
            "in": "query",
            "required": false,
            "style": "form",
            "explode": false,
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SettlementTransactionType"
              }
            },
            "description": "Birden fazla işlem türü (virgülle ayrılmış). transactionType ile birlikte gönderilirse transactionTypes geçerli kabul edilir."
          },
          {
            "name": "startDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "İşlem tarihi aralığının başlangıcı. Timestamp milisecond olarak gönderilmelidir. paymentDate yoksa startDate ve endDate zorunludur."
          },
          {
            "name": "endDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "İşlem tarihi aralığının bitişi. Timestamp milisecond olarak gönderilmelidir. Aralık 15 günden uzun olamaz."
          },
          {
            "name": "paymentDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date",
              "example": "2025-01-10"
            },
            "description": "Ödemeye girebileceği en erken tarih (yyyy-MM-dd, Europe/Istanbul). Gönderildiğinde kayıtlar işlem tarihi yerine ödeme/vade tarihine göre filtrelenir; startDate ve endDate kullanılmaz."
          },
          {
            "name": "paymentOrderId",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "payment-order servisinden dönen id. Hakediş dönemindeki kayıtları startDate/endDate olmadan çekmek için kullanılır."
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
              "default": 500,
              "enum": [
                500,
                1000
              ]
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
                  "$ref": "#/components/schemas/SettlementPageResponse"
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
      "SettlementTransactionType": {
        "type": "string",
        "enum": [
          "Sale",
          "Return",
          "Discount",
          "DiscountCancel",
          "Coupon",
          "CouponCancel",
          "ProvisionPositive",
          "ProvisionNegative",
          "ManualRefund",
          "ManualRefundCancel",
          "TyDiscount",
          "TyDiscountCancel",
          "TyCoupon",
          "TyCouponCancel",
          "SellerRevenuePositive",
          "SellerRevenueNegative",
          "CommissionPositive",
          "CommissionNegative",
          "SellerRevenuePositiveCancel",
          "SellerRevenueNegativeCancel",
          "CommissionPositiveCancel",
          "CommissionNegativeCancel",
          "DeliveryFee",
          "DeliveryFeeCancel",
          "PayByLink"
        ]
      },
      "SettlementPageResponse": {
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
              "$ref": "#/components/schemas/FinancialTransaction"
            }
          }
        }
      },
      "FinancialTransaction": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "İşlem ID"
          },
          "transactionDate": {
            "type": "integer",
            "format": "int64",
            "description": "İşlem tarihi (Unix timestamp milisaniye)"
          },
          "barcode": {
            "type": "string",
            "nullable": true,
            "description": "Ürün barkodu"
          },
          "transactionType": {
            "type": "string",
            "description": "İşlem türü (örn. Satış, Ödeme)"
          },
          "receiptId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Dekont No"
          },
          "description": {
            "type": "string",
            "nullable": true,
            "description": "İşlem açıklaması"
          },
          "debt": {
            "type": "number",
            "format": "double",
            "description": "Borç"
          },
          "credit": {
            "type": "number",
            "format": "double",
            "description": "Alacak"
          },
          "paymentPeriod": {
            "type": "integer",
            "nullable": true,
            "description": "Vade süresi (gün)"
          },
          "commissionRate": {
            "type": "number",
            "format": "double",
            "nullable": true,
            "description": "Komisyon oranı"
          },
          "commissionAmount": {
            "type": "number",
            "format": "double",
            "nullable": true,
            "description": "Trendyol komisyon tutarı"
          },
          "commissionInvoiceSerialNumber": {
            "type": "string",
            "nullable": true,
            "description": "Komisyon fatura seri numarası"
          },
          "sellerRevenue": {
            "type": "number",
            "format": "double",
            "nullable": true,
            "description": "Satıcı hakediş tutarı"
          },
          "orderNumber": {
            "type": "string",
            "nullable": true,
            "description": "Sipariş numarası"
          },
          "paymentOrderId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Ödeme numarası"
          },
          "paymentDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Ödeme tarihi (Unix timestamp milisaniye)"
          },
          "sellerId": {
            "type": "integer",
            "format": "int64",
            "description": "Satıcı ID"
          },
          "storeId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Mağaza ID"
          },
          "storeName": {
            "type": "string",
            "nullable": true,
            "description": "Mağaza adı"
          },
          "storeAddress": {
            "type": "string",
            "nullable": true,
            "description": "Mağaza adresi"
          },
          "country": {
            "type": "string",
            "description": "Ülke"
          },
          "orderDate": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Sipariş tarihi (Unix timestamp milisaniye)"
          },
          "affiliate": {
            "type": "string",
            "description": "Affiliate kodu (TRENDYOLTR veya TRENDYOLAZJV)"
          },
          "shipmentPackageId": {
            "type": "integer",
            "format": "int64",
            "nullable": true,
            "description": "Sipariş paket numarası"
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