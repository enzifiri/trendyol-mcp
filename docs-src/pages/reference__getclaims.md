---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İadesi Oluşturulan Siparişleri Çekme - getClaims

Bu metod ile Trendyol sisteminden iade edilen siparişler hakkındaki bilgileri çekebilirsiniz.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Marketplace Entegrasyonu",
    "description": "Trendyol Yurtiçi Pazaryeri Sipariş ve İade Entegrasyon API'si",
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
  "tags": [
    {
      "name": "İade Entegrasyonu",
      "description": "İade işlemleri ve yönetimi"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/claims": {
      "get": {
        "tags": [
          "İade Entegrasyonu"
        ],
        "summary": "İadesi Oluşturulan Siparişleri Çekme - getClaims",
        "description": "Bu metod ile Trendyol sisteminden iade edilen siparişler hakkındaki bilgileri çekebilirsiniz.",
        "operationId": "getClaims",
        "parameters": [
          {
            "name": "sellerId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "startDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "endDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "page",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 0
            }
          },
          {
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 50,
              "maximum": 200
            }
          },
          {
            "name": "claimItemStatus",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "Created",
                "WaitingInAction",
                "WaitingFraudCheck",
                "Accepted",
                "Unresolved",
                "Rejected",
                "Cancelled",
                "InAnalysis"
              ]
            }
          },
          {
            "name": "orderNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "İade paketinin sipariş numarası"
          },
          {
            "name": "claimIds",
            "in": "query",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
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
                    "totalElements": {
                      "type": "integer",
                      "description": "Toplam eleman sayısı"
                    },
                    "totalPages": {
                      "type": "integer",
                      "description": "Toplam sayfa sayısı"
                    },
                    "page": {
                      "type": "integer",
                      "description": "Güncel sayfa numarası"
                    },
                    "size": {
                      "type": "integer",
                      "description": "Sayfa boyutu"
                    },
                    "content": {
                      "type": "array",
                      "description": "İade nesneleri dizisi",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string",
                            "description": "İade ID"
                          },
                          "claimId": {
                            "type": "string",
                            "description": "İade ID"
                          },
                          "orderNumber": {
                            "type": "string",
                            "description": "Sipariş numarası"
                          },
                          "orderDate": {
                            "type": "integer",
                            "format": "int64",
                            "description": "Sipariş tarihi (timestamp)"
                          },
                          "customerFirstName": {
                            "type": "string",
                            "description": "Müşteri adi"
                          },
                          "customerLastName": {
                            "type": "string",
                            "description": "Müşteri soyadi"
                          },
                          "claimDate": {
                            "type": "integer",
                            "format": "int64",
                            "description": "İade tarihi (GMT timestamp)"
                          },
                          "cargoTrackingNumber": {
                            "type": "integer",
                            "format": "int64",
                            "description": "Kargo takip numarası"
                          },
                          "cargoTrackingLink": {
                            "type": "string",
                            "description": "Kargo takip linki"
                          },
                          "cargoSenderNumber": {
                            "type": "string",
                            "description": "Kargo gönderici numarası"
                          },
                          "cargoProviderName": {
                            "type": "string",
                            "description": "Kargo firması adi"
                          },
                          "orderShipmentPackageId": {
                            "type": "integer",
                            "format": "int64",
                            "description": "Sipariş gönderi paket ID"
                          },
                          "replacementOutboundpackageinfo": {
                            "type": "object",
                            "description": "Değişim giden paket bilgisi (değişim yoksa boş)",
                            "properties": {
                              "cargoTrackingNumber": {
                                "type": "integer",
                                "format": "int64"
                              },
                              "cargoProviderName": {
                                "type": "string"
                              },
                              "cargoSenderNumber": {
                                "type": "string"
                              },
                              "cargoTrackingLink": {
                                "type": "string"
                              },
                              "packageid": {
                                "type": "integer",
                                "format": "int64",
                                "description": "Değişim paket ID bilgisi"
                              },
                              "items": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                },
                                "description": "İade kalemi ID'leri dizisi"
                              }
                            }
                          },
                          "rejectedpackageinfo": {
                            "type": "object",
                            "description": "Reddedilen paket bilgisi (varsa)",
                            "properties": {
                              "cargoTrackingNumber": {
                                "type": "integer",
                                "format": "int64"
                              },
                              "cargoSenderNumber": {
                                "type": "string"
                              },
                              "cargoProviderName": {
                                "type": "string"
                              },
                              "cargoTrackingLink": {
                                "type": "string"
                              },
                              "packageid": {
                                "type": "integer",
                                "format": "int64",
                                "description": "Reddedilen iade paket ID"
                              },
                              "items": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                },
                                "description": "İade kalemi ID'leri dizisi"
                              },
                              "dontShipBack": {
                                "type": "boolean",
                                "description": "Ürünün geri gönderilmemesi gerektiğini belirtir"
                              }
                            }
                          },
                          "items": {
                            "type": "array",
                            "description": "Sipariş satır kalemleri dizisi",
                            "items": {
                              "type": "object",
                              "properties": {
                                "orderLine": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "integer",
                                      "format": "int64"
                                    },
                                    "productName": {
                                      "type": "string"
                                    },
                                    "barcode": {
                                      "type": "string"
                                    },
                                    "merchantSku": {
                                      "type": "string"
                                    },
                                    "productColor": {
                                      "type": "string"
                                    },
                                    "productSize": {
                                      "type": "string"
                                    },
                                    "price": {
                                      "type": "number",
                                      "format": "double"
                                    },
                                    "vatBaseAmount": {
                                      "type": "number",
                                      "format": "double"
                                    },
                                    "vatRate": {
                                      "type": "number",
                                      "format": "double"
                                    },
                                    "salesCampaignId": {
                                      "type": "integer",
                                      "format": "int64"
                                    },
                                    "productCategory": {
                                      "type": "string"
                                    }
                                  }
                                },
                                "claimItems": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string",
                                        "description": "İade satır kalemi ID"
                                      },
                                      "orderLineItemId": {
                                        "type": "integer",
                                        "format": "int64"
                                      },
                                      "customerClaimItemReason": {
                                        "type": "object",
                                        "properties": {
                                          "name": {
                                            "type": "string"
                                          },
                                          "externalReasonId": {
                                            "type": "integer"
                                          },
                                          "code": {
                                            "type": "string"
                                          }
                                        }
                                      },
                                      "trendyolClaimItemReason": {
                                        "type": "object",
                                        "properties": {
                                          "name": {
                                            "type": "string"
                                          },
                                          "externalReasonId": {
                                            "type": "integer"
                                          },
                                          "code": {
                                            "type": "string"
                                          }
                                        }
                                      },
                                      "claimItemStatus": {
                                        "type": "object",
                                        "properties": {
                                          "name": {
                                            "type": "string",
                                            "description": "Statü adi"
                                          }
                                        }
                                      },
                                      "note": {
                                        "type": "string"
                                      },
                                      "customerNote": {
                                        "type": "string"
                                      },
                                      "resolved": {
                                        "type": "boolean"
                                      },
                                      "autoAccepted": {
                                        "type": "boolean",
                                        "description": "48 saat beklemede kalan iadeler sistem tarafından otomatik olarak kabul edilir"
                                      },
                                      "acceptedBySeller": {
                                        "type": "boolean",
                                        "description": "Satıcı tarafından kabul edilen iadeler"
                                      },
                                      "acceptDetail": {
                                        "type": "string",
                                        "description": "SUPPLIER, DISPUTE veya SYSTEM"
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "lastModifiedDate": {
                            "type": "integer",
                            "format": "int64",
                            "description": "Son güncelleme tarihi (timestamp)"
                          },
                          "orderOutboundPackageId": {
                            "type": "integer",
                            "format": "int64",
                            "description": "Sipariş giden paket ID"
                          }
                        }
                      }
                    }
                  }
                },
                "example": {
                  "totalElements": 2099,
                  "totalPages": 2099,
                  "page": 0,
                  "size": 1,
                  "content": [
                    {
                      "id": "f9da2317-876b-4b86-b8f7-0535c3b65731",
                      "claimId": "f9da2317-876b-4b86-b8f7-0535c3b65731",
                      "orderNumber": "65745805",
                      "orderDate": 1524826343886,
                      "customerFirstName": "John",
                      "customerLastName": "Doe",
                      "claimDate": 1525844162827,
                      "cargoTrackingNumber": 72602420957047276000,
                      "cargoTrackingLink": "https://tracking.trendyol.com/?id=111111111-1111-1111-1111-11111111",
                      "cargoSenderNumber": "8106459254413",
                      "cargoProviderName": "Aras Kargo Marketplace",
                      "orderShipmentPackageId": 3853354,
                      "replacementOutboundpackageinfo": {
                        "cargoTrackingNumber": 72602420957047276000,
                        "cargoProviderName": "Aras Kargo Marketplace",
                        "cargoSenderNumber": "733861966410",
                        "cargoTrackingLink": "https://tracking.trendyol.com/?id=111111111-1111-1111-1111-11111111",
                        "packageid": 28717254,
                        "items": [
                          "b71461e3-d1a0-4c1d-9a6d-18ecbcb5432d"
                        ]
                      },
                      "rejectedpackageinfo": {
                        "cargoTrackingNumber": 72602420957047276000,
                        "cargoSenderNumber": "12345754875355",
                        "cargoProviderName": "Aras Kargo Marketplace",
                        "cargoTrackingLink": "https://tracking.trendyol.com/?id=111111111-1111-1111-1111-11111111",
                        "packageid": 28717254,
                        "items": [
                          "b71461e3-d1a0-4c1d-9a6d-18ecbcb5432d"
                        ],
                        "dontShipBack": false
                      },
                      "items": [
                        {
                          "orderLine": {
                            "id": 28717254,
                            "productName": "Erkek Bebek Sandalet 8S5280Z1/GREEN CS4, 21",
                            "barcode": "99999999999",
                            "merchantSku": "2083667",
                            "productColor": "GREEN CS4",
                            "productSize": " 21",
                            "price": 12.95,
                            "vatBaseAmount": 8,
                            "vatRate": 8,
                            "salesCampaignId": 183631,
                            "productCategory": "Sandalet"
                          },
                          "claimItems": [
                            {
                              "id": "b71461e3-d1a0-4c1d-9a6d-18ecbcb5158c",
                              "orderLineItemId": 29815493,
                              "customerClaimItemReason": {
                                "name": "Beden uymama",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                              },
                              "trendyolClaimItemReason": {
                                "name": "Beden uymama",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                              },
                              "claimItemStatus": {
                                "name": "Created"
                              },
                              "note": "",
                              "customerNote": "Customer note",
                              "resolved": false,
                              "autoAccepted": false,
                              "acceptedBySeller": true,
                              "acceptDetail": "SUPPLIER"
                            }
                          ]
                        },
                        {
                          "orderLine": {
                            "id": 28717255,
                            "productName": "Erkek Bebek Soket Corap 4'lu 8S7346Z1/MIX YARN DYED K00, 6-12 Ay",
                            "barcode": "99999999999",
                            "merchantSku": "2052551",
                            "productColor": "MIX YARN DYED K00",
                            "productSize": " 17-18 (6-12 Ay)",
                            "price": 9.95,
                            "vatBaseAmount": 8,
                            "vatRate": 8,
                            "salesCampaignId": 183631,
                            "productCategory": "Corap"
                          },
                          "claimItems": [
                            {
                              "id": "b71461e3-d1a0-4c1d-9a6d-18ecbcb5432d",
                              "orderLineItemId": 29815494,
                              "customerClaimItemReason": {
                                "name": "Beden uymama",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                              },
                              "trendyolClaimItemReason": {
                                "name": "Beden uymama",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                              },
                              "claimItemStatus": {
                                "name": "Created"
                              },
                              "note": "",
                              "customerNote": "Customer note",
                              "resolved": false,
                              "autoAccepted": false,
                              "acceptedBySeller": true,
                              "acceptDetail": "SUPPLIER"
                            }
                          ]
                        }
                      ],
                      "lastModifiedDate": 1723275767111,
                      "orderOutboundPackageId": 58835111
                    }
                  ]
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
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
    }
  },
  "security": [
    {
      "basicAuth": []
    }
  ]
}
```