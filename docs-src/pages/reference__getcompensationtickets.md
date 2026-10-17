---
updatedAt: 2026-02-16T04:43:28.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Trendyol Express siparişlerindeki tazmin istekleri çekme - getCompensationTickets

Trendyol Express siparişlerinizdeki tazmin işlemlerinin durumlarını çekebilirsiniz.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Express Entegrasyonu",
    "description": "Trendyol Express Entegrasyon API'si",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://apigw.trendyol.com/integration",
      "description": "Canlı Ortam"
    },
    {
      "url": "https://stageapigw.trendyol.com/integration",
      "description": "Test Ortamı"
    }
  ],
  "paths": {
    "/tex/compensation/sellers/{sellerId}/tickets": {
      "get": {
        "tags": [
          "Tazmin Listeleme Entegrasyonu"
        ],
        "summary": "Trendyol Express siparişlerindeki tazmin istekleri çekme - getCompensationTickets",
        "description": "Trendyol Express siparişlerinizdeki tazmin işlemlerinin durumlarını çekebilirsiniz.",
        "operationId": "getCompensationTickets",
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
            "name": "startDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Başlangıç tarihi (Unix timestamp milisaniye)"
          },
          {
            "name": "endDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Bitiş tarihi (Unix timestamp milisaniye)"
          },
          {
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 0
            },
            "description": "Sayfa numarası"
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 200,
              "maximum": 200
            },
            "description": "Sayfa boyutu (maksimum 100)"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "totalCount": {
                      "type": "integer"
                    },
                    "data": {
                      "type": "object",
                      "items": {
                        "$ref": "#/components/schemas/CompensationTicket"
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "429": {
            "description": "Too Many Requests",
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
      }
    },
    "schemas": {
      "CompensationTicket": {
        "type": "object",
        "properties": {
          "cargoProvider": {
            "type": "string",
            "description": "Kargo sağlayıcısı"
          },
          "compensateReason": {
            "type": "string",
            "description": "Tazmin Sebebi"
          },
          "createDate": {
            "type": "integer",
            "format": "int64",
            "description": "Oluşturulma Tarihi (Unix timestamp milisaniye)"
          },
          "currentState": {
            "type": "string",
            "enum": [
              "Empty",
              "MarkInCompensation",
              "OpenedForRefund",
              "StartCompensationFinanceProgress",
              "StartCompensationInApprovalProgress",
              "CompensationApproved",
              "CompensationRejected",
              "FoundAfterCompensationComplete",
              "NotCompensationCase",
              "FoundInCompensation",
              "FoundInvestigationProgress",
              "MarkCompensationCancel",
              "CreateCompensationTicket",
              "FinalizeCompensation",
              "CloseCompensationTicket",
              "FoundInvestigationProgressDeliveredToCustomer",
              "FoundInCompensationDeliveredToCustomer",
              "FoundAfterCompensationCompleteDeliveredToCustomer"
            ],
            "description": "Durum Bilgisi\n- Empty (Tazmin talebiniz yapılan incelemelere göre reddedilmiştir)\\n\n- MarkInCompensation (Tazmin talebiniz inceleniyor)\n- OpenedForRefund (Tazmin talebiniz inceleniyor)\n- StartCompensationFinanceProgress (Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır)\n- StartCompensationInApprovalProgress (Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır)\n- CompensationApproved (Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır)\n- CompensationRejected (Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır)                                  \n- FoundAfterCompensationComplete (Gönderiniz bulundu, iade edilecektir)\n- NotCompensationCase (Tazmin talebiniz yapılan incelemelere göre reddedilmiştir)\n- FoundInCompensation (Gönderiniz bulundu, iade edilecektir)\n- FoundInvestigationProgress (Gönderiniz bulundu, iade edilecektir)\n- MarkCompensationCancel (Tazmin talebiniz yapılan incelemelere göre reddedilmiştir)\n- CreateCompensationTicket (Tazmin talebiniz inceleniyor)\n- FinalizeCompensation (Tazmin talebiniz onaylanmıştır. Faturalandırılacak tutar en geç 15 iş günü içerisinde Finans> Fatura Listeleme> Trendyol'a Kesmem Gereken Faturalar sayfasına aktarılacaktır)\n- CloseCompensationTicket (Gönderiniz bulundu, iade edilecektir)\n- FoundInvestigationProgressDeliveredToCustomer (Gönderiniz bulundu, müşteriye teslim edilecektir)\n- FoundInCompensationDeliveredToCustomer (Gönderiniz bulundu, müşteriye teslim edilecektir)\n- FoundAfterCompensationCompleteDeliveredToCustomer (Gönderiniz bulundu, müşteriye teslim edilecektir)            \n"
          },
          "deliveryNumber": {
            "type": "string",
            "description": "Teslimat Numarası"
          },
          "itemDetails": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CompensationItemDetail"
            }
          },
          "orderNumber": {
            "type": "string",
            "description": "Sipariş Numarası"
          },
          "requestedBy": {
            "type": "string",
            "description": "Talebi Açan"
          },
          "stateMessage": {
            "type": "string",
            "description": "Durum Mesajı"
          },
          "totalItemsAmount": {
            "type": "string",
            "description": "Toplam Miktar"
          }
        }
      },
      "CompensationItemDetail": {
        "type": "object",
        "properties": {
          "itemAmount": {
            "type": "number",
            "format": "float",
            "description": "Miktar"
          },
          "itemCode": {
            "type": "string",
            "description": "Kodu"
          },
          "itemCount": {
            "type": "integer",
            "description": "Miktar"
          },
          "itemName": {
            "type": "string",
            "description": "Adı"
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
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ]
}
```