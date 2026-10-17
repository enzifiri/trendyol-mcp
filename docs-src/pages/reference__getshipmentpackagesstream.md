---
updatedAt: 2026-04-07T07:28:05.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Akış ile Çekme - getShipmentPackagesStream

Müşteriler tarafından verilen sipariş paketlerini cursor tabanlı sayfalama kullanarak çekebilirsiniz.
Bu yöntem, sayfa numarası tabanlı sayfalamaya kıyasla daha verimli ve güvenilir bir sipariş paketi çekme deneyimi sunar.
Veriler sabit bir sıralama ile döner: lastModifiedDate yeniden eskiye (DESC).


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
      "name": "Sipariş Entegrasyonu",
      "description": "Sipariş paketi yönetimi ve teslimat işlemleri"
    }
  ],
  "paths": {
    "/order/sellers/{sellerId}/orders/stream": {
      "get": {
        "tags": [
          "Sipariş Entegrasyonu"
        ],
        "summary": "Sipariş Paketlerini Akış ile Çekme - getShipmentPackagesStream",
        "description": "Müşteriler tarafından verilen sipariş paketlerini cursor tabanlı sayfalama kullanarak çekebilirsiniz.\nBu yöntem, sayfa numarası tabanlı sayfalamaya kıyasla daha verimli ve güvenilir bir sipariş paketi çekme deneyimi sunar.\nVeriler sabit bir sıralama ile döner: lastModifiedDate yeniden eskiye (DESC).\n",
        "operationId": "getShipmentPackagesStream",
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
            "name": "size",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "default": 50,
              "maximum": 200
            },
            "description": "Bir istekte döndürülecek maksimum paket sayısı (varsayılan 50, maksimum 200)"
          },
          {
            "name": "nextCursor",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "Sonraki sayfaya geçmek için kullanılan opak token. İlk istekte gönderilmemelidir. Yanıttaki nextCursor değeri olduğu gibi kullanılmalıdır."
          },
          {
            "name": "packageItemStatuses",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "Paket kalem statülerine göre filtreleme. Birden fazla statü virgülle ayrılarak gönderilebilir.\nGeçerli değerler: Created, Picking, Invoiced, Shipped, Cancelled, Delivered, UnDelivered, Returned, UnSupplied, AtCollectionPoint, UnPacked, Awaiting\n"
          },
          {
            "name": "lastModifiedStartDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Belirli bir tarihten sonra değiştirilen paketleri getirir (Unix timestamp milisaniye)"
          },
          {
            "name": "lastModifiedEndDate",
            "in": "query",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Belirtilen tarihe kadar değiştirilen paketleri getirir (Unix timestamp milisaniye)"
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
                    "content": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ShipmentPackage"
                      }
                    },
                    "size": {
                      "type": "integer",
                      "description": "Mevcut yanıttaki paket sayısı"
                    },
                    "hasMore": {
                      "type": "boolean",
                      "description": "Daha fazla veri olup olmadığını belirtir. true ise sonraki sayfa mevcuttur."
                    },
                    "nextCursor": {
                      "type": "string",
                      "description": "Sonraki sayfayı çekmek için kullanılacak cursor değeri. hasMore false ise boş döner."
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request - Geçersiz nextCursor değeri, geçersiz sellerId, cursor ile filtre uyumsuzluğu",
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
      "ShipmentPackage": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "Paket ID"
          },
          "shipmentNumber": {
            "type": "string",
            "description": "Gönderi numarası"
          },
          "orderNumber": {
            "type": "string",
            "description": "Sipariş numarası"
          },
          "grossAmount": {
            "type": "number",
            "format": "double",
            "description": "Brut tutar"
          },
          "totalDiscount": {
            "type": "number",
            "format": "double",
            "description": "Toplam indirim"
          },
          "totalTyDiscount": {
            "type": "number",
            "format": "double",
            "description": "Toplam Trendyol indirimi"
          },
          "taxNumber": {
            "type": "string",
            "description": "Vergi numarası"
          },
          "invoiceAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "customerFirstName": {
            "type": "string"
          },
          "customerLastName": {
            "type": "string"
          },
          "customerEmail": {
            "type": "string"
          },
          "customerId": {
            "type": "integer",
            "format": "int64"
          },
          "customerTckn": {
            "type": "string",
            "description": "Müşteri TCKN"
          },
          "shipmentAddress": {
            "$ref": "#/components/schemas/Address"
          },
          "shipmentPackageStatus": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "Created",
              "Picking",
              "Invoiced",
              "Shipped",
              "Cancelled",
              "Delivered",
              "UnDelivered",
              "Returned"
            ]
          },
          "deliveryType": {
            "type": "string"
          },
          "timeSlotId": {
            "type": "integer",
            "format": "int64"
          },
          "estimatedDeliveryStartDate": {
            "type": "integer",
            "format": "int64"
          },
          "estimatedDeliveryEndDate": {
            "type": "integer",
            "format": "int64"
          },
          "totalPrice": {
            "type": "number",
            "format": "double"
          },
          "agreedDeliveryDate": {
            "type": "integer",
            "format": "int64"
          },
          "agreedDeliveryDateExtendible": {
            "type": "boolean"
          },
          "agreedDeliveryExtensionStartDate": {
            "type": "integer",
            "format": "int64"
          },
          "agreedDeliveryExtensionEndDate": {
            "type": "integer",
            "format": "int64"
          },
          "extendedAgreedDeliveryDate": {
            "type": "integer",
            "format": "int64"
          },
          "deci": {
            "type": "number",
            "format": "double"
          },
          "cargoTrackingNumber": {
            "type": "string"
          },
          "cargoTrackingLink": {
            "type": "string"
          },
          "cargoSenderNumber": {
            "type": "string"
          },
          "cargoProviderName": {
            "type": "string"
          },
          "cargoProviderId": {
            "type": "integer",
            "format": "int64"
          },
          "lines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/OrderLine"
            }
          },
          "packageHistory": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "createdDate": {
                  "type": "integer",
                  "format": "int64"
                },
                "status": {
                  "type": "string"
                }
              }
            }
          },
          "warehouseId": {
            "type": "integer"
          }
        }
      },
      "OrderLine": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "productSize": {
            "type": "string"
          },
          "productColor": {
            "type": "string"
          },
          "merchantSku": {
            "type": "string"
          },
          "productName": {
            "type": "string"
          },
          "productCode": {
            "type": "integer",
            "format": "int64"
          },
          "merchantId": {
            "type": "integer",
            "format": "int64"
          },
          "amount": {
            "type": "number",
            "format": "double"
          },
          "discount": {
            "type": "number",
            "format": "double"
          },
          "tyDiscount": {
            "type": "number",
            "format": "double"
          },
          "currencyCode": {
            "type": "string"
          },
          "productCategory": {
            "type": "string"
          },
          "shipmentType": {
            "type": "string"
          },
          "gift": {
            "type": "boolean"
          },
          "fastDelivery": {
            "type": "boolean"
          },
          "fastDeliveryType": {
            "type": "string"
          },
          "sku": {
            "type": "string"
          },
          "vatBaseAmount": {
            "type": "number",
            "format": "double"
          },
          "barcode": {
            "type": "string"
          },
          "orderLineItemStatusName": {
            "type": "string"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "quantity": {
            "type": "integer"
          },
          "fastDeliveryOptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "salesCampaignId": {
            "type": "integer",
            "format": "int64"
          },
          "productSellerCode": {
            "type": "string"
          },
          "deliveryFeeType": {
            "type": "string"
          },
          "laborCostPerItem": {
            "type": "number",
            "format": "double"
          }
        }
      },
      "Address": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "address1": {
            "type": "string"
          },
          "address2": {
            "type": "string"
          },
          "city": {
            "type": "string"
          },
          "cityCode": {
            "type": "integer"
          },
          "district": {
            "type": "string"
          },
          "districtId": {
            "type": "integer"
          },
          "postalCode": {
            "type": "string"
          },
          "countryCode": {
            "type": "string"
          },
          "neighborhoodId": {
            "type": "integer"
          },
          "neighborhood": {
            "type": "string"
          },
          "fullName": {
            "type": "string"
          },
          "fullAddress": {
            "type": "string"
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