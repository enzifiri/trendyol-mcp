---
updatedAt: 2026-02-05T11:19:53.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade, Sevkiyat ve Fatura Adres Bilgileri - getSuppliersAddresses

createProduct V2 servisine yapılacak isteklerde gönderilecek iade, sevkiyat ve fatura adres bilgileri 
ile kargo firma bilgileri ve bu bilgilere ait ID değerleri bu servis kullanılarak alınacaktır.

**ÖNEMLİ:** "SATICI BAŞVURU SÜRECİM" tam olarak tamamlanmadı ise bu servisi kullanmamanız gerekir.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Marketplace - Satıcı Bilgileri Entegrasyonu",
    "description": "Trendyol Satıcı Adres Bilgileri Entegrasyon API'si",
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
      "name": "Satıcı Bilgileri Entegrasyonu",
      "description": "Satıcı adres bilgileri ve kargo firma bilgileri"
    }
  ],
  "paths": {
    "/sellers/{sellerId}/addresses": {
      "get": {
        "tags": [
          "Satıcı Bilgileri Entegrasyonu"
        ],
        "summary": "İade, Sevkiyat ve Fatura Adres Bilgileri - getSuppliersAddresses",
        "description": "createProduct V2 servisine yapılacak isteklerde gönderilecek iade, sevkiyat ve fatura adres bilgileri \nile kargo firma bilgileri ve bu bilgilere ait ID değerleri bu servis kullanılarak alınacaktır.\n\n**ÖNEMLİ:** \"SATICI BAŞVURU SÜRECİM\" tam olarak tamamlanmadı ise bu servisi kullanmamanız gerekir.\n",
        "operationId": "getSuppliersAddresses",
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
            "name": "storeFrontCode",
            "in": "header",
            "required": false,
            "schema": {
              "type": "string",
              "default": "TR"
            },
            "description": "Satıcının satış yaptığı ülke kodu. Gönderilmezse default olarak \"TR\" kullanılır. Gönderilen değere göre ilgili ülke/bölgeye ait adres bilgileri döner."
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
                    "supplierAddresses": {
                      "type": "array",
                      "description": "Satıcı adres listesi",
                      "items": {
                        "$ref": "#/components/schemas/SupplierAddress"
                      }
                    },
                    "defaultShipmentAddress": {
                      "$ref": "#/components/schemas/SupplierAddress"
                    },
                    "defaultInvoiceAddress": {
                      "$ref": "#/components/schemas/SupplierAddress"
                    },
                    "defaultReturningAddress": {
                      "type": "object",
                      "properties": {
                        "present": {
                          "type": "boolean",
                          "description": "Varsayılan iade adresinin mevcut olup olmadığını gösterir"
                        }
                      }
                    }
                  }
                },
                "example": {
                  "supplierAddresses": [
                    {
                      "id": 1,
                      "addressType": "Shipment",
                      "country": "Country-0",
                      "city": "Kocaeli",
                      "cityCode": 0,
                      "district": "Gebze",
                      "districtId": 0,
                      "postCode": "post-code-0",
                      "address": "Address-0",
                      "isReturningAddress": false,
                      "fullAddress": "John Doe's House",
                      "isShipmentAddress": true,
                      "isInvoiceAddress": false,
                      "isDefault": true
                    },
                    {
                      "id": 2,
                      "addressType": "Invoice",
                      "country": "Country-2",
                      "city": "Ankara",
                      "cityCode": 0,
                      "district": "Mamak",
                      "districtId": 0,
                      "postCode": "post-code-2",
                      "address": "Address-2",
                      "isReturningAddress": false,
                      "fullAddress": "John Doe's House",
                      "isShipmentAddress": false,
                      "isInvoiceAddress": true,
                      "isDefault": true
                    },
                    {
                      "id": 3,
                      "addressType": "Returning",
                      "country": "Country-3",
                      "city": "Bursa",
                      "cityCode": 0,
                      "district": "Teleferik",
                      "districtId": 0,
                      "postCode": "post-code-3",
                      "address": "Address-3",
                      "isReturningAddress": true,
                      "fullAddress": "John Doe's House",
                      "isShipmentAddress": false,
                      "isInvoiceAddress": false,
                      "isDefault": true
                    },
                    {
                      "id": 4,
                      "addressType": "Returning",
                      "country": "Country-4",
                      "city": "İzmir",
                      "cityCode": 0,
                      "district": "Bornova",
                      "districtId": 0,
                      "postCode": "post-code-4",
                      "address": "Address-4",
                      "isReturningAddress": true,
                      "fullAddress": "John Doe's House",
                      "isShipmentAddress": false,
                      "isInvoiceAddress": false,
                      "isDefault": false
                    }
                  ],
                  "defaultShipmentAddress": {
                    "id": 0,
                    "addressType": "Shipment",
                    "country": "Country-0",
                    "city": "Kocaeli",
                    "cityCode": 0,
                    "district": "Gebze",
                    "districtId": 0,
                    "postCode": "post-code-0",
                    "address": "Address-0",
                    "isReturningAddress": false,
                    "fullAddress": "John Doe's House",
                    "isShipmentAddress": true,
                    "isInvoiceAddress": false,
                    "isDefault": true
                  },
                  "defaultInvoiceAddress": {
                    "id": 2,
                    "addressType": "Invoice",
                    "country": "Country-2",
                    "city": "Ankara",
                    "cityCode": 0,
                    "district": "Mamak",
                    "districtId": 0,
                    "postCode": "post-code-2",
                    "address": "Address-2",
                    "isReturningAddress": false,
                    "fullAddress": "John Doe's House",
                    "isShipmentAddress": false,
                    "isInvoiceAddress": true,
                    "isDefault": true
                  },
                  "defaultReturningAddress": {
                    "present": true
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
            "description": "Unauthorized - Token geçersiz veya Token yetkileri içerisinde SELLER_BASE rolü bulunamadı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "404": {
            "description": "Domain Not Found",
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
        "description": "Basic Auth ile Satıcı API Key ve API Secret kullanılarak kimlik doğrulama yapılır.\n\n**Yetkilendirme:**\n- Token'ın geçerli (valid) olması gerekmektedir\n- Token yetkileri içerisinde **SELLER_BASE** rolünün bulunması zorunludur\n- Token geçerli ancak SELLER_BASE rolü yoksa 401 Unauthorized hatası döner\n"
      }
    },
    "schemas": {
      "SupplierAddress": {
        "type": "object",
        "description": "Satıcı adres bilgisi",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "Adres ID"
          },
          "addressType": {
            "type": "string",
            "enum": [
              "Shipment",
              "Invoice",
              "Returning"
            ],
            "description": "Adres tipi (Sevkiyat, Fatura veya İade)"
          },
          "country": {
            "type": "string",
            "description": "Ülke"
          },
          "city": {
            "type": "string",
            "description": "Şehir"
          },
          "cityCode": {
            "type": "integer",
            "description": "Şehir kodu"
          },
          "district": {
            "type": "string",
            "description": "İlçe"
          },
          "districtId": {
            "type": "integer",
            "description": "İlçe ID"
          },
          "postCode": {
            "type": "string",
            "description": "Posta kodu"
          },
          "address": {
            "type": "string",
            "description": "Adres"
          },
          "isReturningAddress": {
            "type": "boolean",
            "description": "İade adresi mi?"
          },
          "fullAddress": {
            "type": "string",
            "description": "Tam adres"
          },
          "isShipmentAddress": {
            "type": "boolean",
            "description": "Sevkiyat adresi mi?"
          },
          "isInvoiceAddress": {
            "type": "boolean",
            "description": "Fatura adresi mi?"
          },
          "isDefault": {
            "type": "boolean",
            "description": "Varsayılan adres mi?"
          }
        }
      },
      "Error": {
        "type": "object",
        "properties": {
          "error": {
            "type": "string",
            "description": "Hata kodu"
          },
          "message": {
            "type": "string",
            "description": "Hata mesajı"
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