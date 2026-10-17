---
updatedAt: 2026-01-27T11:58:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Çekme - getShipmentPackages

Müşteriler tarafından verilen her sipariş hakkındaki sipariş paketlerini çekebilirsiniz.

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
    "/order/sellers/{sellerId}/orders": {
      "get": {
        "tags": [
          "Sipariş Entegrasyonu"
        ],
        "summary": "Sipariş Paketlerini Çekme - getShipmentPackages",
        "description": "Müşteriler tarafından verilen her sipariş hakkındaki sipariş paketlerini çekebilirsiniz.",
        "operationId": "getShipmentPackages",
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
            "description": "Sayfa boyutu (maksimum 200)"
          },
          {
            "name": "orderNumber",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string"
            },
            "description": "Sipariş numarasına göre filtrele"
          },
          {
            "name": "status",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "Awaiting",
                "Created",
                "Picking",
                "Invoiced",
                "Shipped",
                "Cancelled",
                "Delivered",
                "UnDelivered",
                "Returned",
                "AtCollectionPoint",
                "UnSupplied"
              ]
            },
            "description": "Paket statüsüne göre filtrele"
          },
          {
            "name": "orderByField",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "PackageLastModifiedDate",
                "CreatedDate"
              ]
            },
            "description": "Sıralama alanı"
          },
          {
            "name": "orderByDirection",
            "in": "query",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "ASC",
                "DESC"
              ]
            },
            "description": "Sıralama yönü"
          },
          {
            "name": "shipmentPackageIds",
            "in": "query",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "description": "Paket ID'lerine göre filtrele (maksimum 50)"
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
                      "type": "integer"
                    },
                    "content": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ShipmentPackage"
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