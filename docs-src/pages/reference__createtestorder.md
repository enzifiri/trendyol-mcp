---
updatedAt: 2026-01-28T06:19:34.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Test Siparişi Oluşturma

Test siparişi oluşturma servisi STAGE ortamında talep edilen senaryolarda test siparişi oluşturulması için kullanılacaktır.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Test Sipariş API'si",
    "description": "Test ortamında test siparişi oluşturma servisi",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "servers": [
    {
      "url": "https://stageapigw.trendyol.com/integration",
      "description": "Test Ortamı"
    }
  ],
  "tags": [
    {
      "name": "Test Siparişi",
      "description": "Test siparişi oluşturma işlemleri"
    }
  ],
  "paths": {
    "/test/order/orders/core": {
      "post": {
        "tags": [
          "Test Siparişi"
        ],
        "summary": "Test Siparişi Oluşturma",
        "description": "Test siparişi oluşturma servisi STAGE ortamında talep edilen senaryolarda test siparişi oluşturulması için kullanılacaktır.",
        "operationId": "createTestOrder",
        "parameters": [
          {
            "name": "sellerID",
            "in": "header",
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
                "type": "object",
                "required": [
                  "customer",
                  "invoiceAddress",
                  "lines",
                  "seller",
                  "shippingAddress"
                ],
                "properties": {
                  "customer": {
                    "type": "object",
                    "required": [
                      "customerFirstName",
                      "customerLastName"
                    ],
                    "properties": {
                      "customerFirstName": {
                        "type": "string",
                        "description": "Müşteri adı"
                      },
                      "customerLastName": {
                        "type": "string",
                        "description": "Müşteri soyadı"
                      }
                    }
                  },
                  "invoiceAddress": {
                    "type": "object",
                    "required": [
                      "addressText",
                      "city",
                      "district",
                      "invoiceFirstName",
                      "invoiceLastName",
                      "phone",
                      "email"
                    ],
                    "properties": {
                      "addressText": {
                        "type": "string",
                        "description": "Fatura adresi"
                      },
                      "city": {
                        "type": "string",
                        "description": "Şehir"
                      },
                      "company": {
                        "type": "string",
                        "description": "Firma adı (kurumsal fatura için gerekli)"
                      },
                      "district": {
                        "type": "string",
                        "description": "İlçe"
                      },
                      "invoiceFirstName": {
                        "type": "string",
                        "description": "Fatura adı"
                      },
                      "invoiceLastName": {
                        "type": "string",
                        "description": "Fatura soyadı"
                      },
                      "latitude": {
                        "type": "string",
                        "description": "Enlem"
                      },
                      "longitude": {
                        "type": "string",
                        "description": "Boylam"
                      },
                      "neighborhood": {
                        "type": "string",
                        "description": "Mahalle"
                      },
                      "phone": {
                        "type": "string",
                        "description": "Telefon numarası"
                      },
                      "postalCode": {
                        "type": "string",
                        "description": "Posta kodu"
                      },
                      "email": {
                        "type": "string",
                        "description": "E-posta adresi"
                      },
                      "invoiceTaxNumber": {
                        "type": "string",
                        "description": "Vergi numarası (kurumsal fatura için gerekli)"
                      },
                      "invoiceTaxOffice": {
                        "type": "string",
                        "description": "Vergi dairesi (kurumsal fatura için gerekli)"
                      }
                    }
                  },
                  "lines": {
                    "type": "array",
                    "description": "Sipariş kalemleri",
                    "items": {
                      "type": "object",
                      "required": [
                        "barcode",
                        "quantity"
                      ],
                      "properties": {
                        "barcode": {
                          "type": "string",
                          "description": "Ürün barkodu"
                        },
                        "quantity": {
                          "type": "integer",
                          "description": "Miktar"
                        },
                        "discountPercentage": {
                          "type": "number",
                          "format": "double",
                          "description": "İndirim yüzdesi"
                        }
                      }
                    }
                  },
                  "seller": {
                    "type": "object",
                    "required": [
                      "sellerId"
                    ],
                    "properties": {
                      "sellerId": {
                        "type": "integer",
                        "description": "Satıcı ID"
                      }
                    }
                  },
                  "shippingAddress": {
                    "type": "object",
                    "required": [
                      "addressText",
                      "city",
                      "district",
                      "phone",
                      "shippingFirstName",
                      "shippingLastName",
                      "email"
                    ],
                    "properties": {
                      "addressText": {
                        "type": "string",
                        "description": "Teslimat adresi"
                      },
                      "city": {
                        "type": "string",
                        "description": "Şehir"
                      },
                      "company": {
                        "type": "string",
                        "description": "Firma adı"
                      },
                      "district": {
                        "type": "string",
                        "description": "İlçe"
                      },
                      "latitude": {
                        "type": "string",
                        "description": "Enlem"
                      },
                      "longitude": {
                        "type": "string",
                        "description": "Boylam"
                      },
                      "neighborhood": {
                        "type": "string",
                        "description": "Mahalle"
                      },
                      "phone": {
                        "type": "string",
                        "description": "Telefon numarası"
                      },
                      "postalCode": {
                        "type": "string",
                        "description": "Posta kodu"
                      },
                      "shippingFirstName": {
                        "type": "string",
                        "description": "Teslimat adı"
                      },
                      "shippingLastName": {
                        "type": "string",
                        "description": "Teslimat soyadı"
                      },
                      "email": {
                        "type": "string",
                        "description": "E-posta adresi"
                      }
                    }
                  },
                  "commercial": {
                    "type": "boolean",
                    "description": "Kurumsal fatura durumu (true ise invoiceAddress içinde company, invoiceTaxNumber ve invoiceTaxOffice doldurulmalıdır)",
                    "default": false
                  },
                  "microRegion": {
                    "type": "string",
                    "description": "Mikro ihracat bölgesi (AZ veya GULF)",
                    "enum": [
                      "AZ",
                      "GULF"
                    ]
                  }
                }
              },
              "example": {
                "customer": {
                  "customerFirstName": "John",
                  "customerLastName": "Doe"
                },
                "invoiceAddress": {
                  "addressText": "test deneme adresi",
                  "city": "İzmir",
                  "company": "",
                  "district": "Bornova",
                  "invoiceFirstName": "John",
                  "invoiceLastName": "Doe",
                  "latitude": "string",
                  "longitude": "string",
                  "neighborhood": "",
                  "phone": "333333333",
                  "postalCode": "",
                  "email": "pf+j2jm8x99@trendyolmail.com",
                  "invoiceTaxNumber": "Firma Tax Number",
                  "invoiceTaxOffice": "Firma Tax Office"
                },
                "lines": [
                  {
                    "barcode": "9900000000486",
                    "quantity": 2,
                    "discountPercentage": 50
                  }
                ],
                "seller": {
                  "sellerId": 2738
                },
                "shippingAddress": {
                  "addressText": "test deneme adresi",
                  "city": "İzmir",
                  "company": "",
                  "district": "Bornova",
                  "latitude": "string",
                  "longitude": "string",
                  "neighborhood": "",
                  "phone": "333333333",
                  "postalCode": "",
                  "shippingFirstName": "John",
                  "shippingLastName": "Doe",
                  "email": "pf+j2jm8x99@trendyolmail.com"
                },
                "commercial": false,
                "microRegion": "String"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "orderNumber": {
                      "type": "string",
                      "description": "Oluşturulan sipariş numarası"
                    }
                  }
                },
                "example": {
                  "orderNumber": "123456789"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          },
          "500": {
            "description": "Internal Server Error"
          }
        },
        "security": [
          {
            "BasicAuth": []
          }
        ]
      }
    }
  },
  "components": {
    "securitySchemes": {
      "BasicAuth": {
        "type": "http",
        "scheme": "basic",
        "description": "Basic authentication kullanarak header içerisinde gönderilen satıcı ID ile doğrulama yapılır"
      }
    }
  }
}
```