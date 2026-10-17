---
updatedAt: 2026-01-28T06:19:34.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Test Siparişlerinde Statü Güncellemeleri

Test senaryolarınızı gerçekleştirmek adına stage ortamda vermiş olduğunuz siparişler için statüleri güncelleyebilirsiniz.

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
    "/test/order/sellers/{sellerId}/shipment-packages/{packageId}/status": {
      "put": {
        "tags": [
          "Test Siparişi"
        ],
        "summary": "Test Siparişlerinde Statü Güncellemeleri",
        "description": "Test senaryolarınızı gerçekleştirmek adına stage ortamda vermiş olduğunuz siparişler için statüleri güncelleyebilirsiniz.",
        "operationId": "updateTestOrderStatus",
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
          },
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
            "name": "packageId",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Paket ID"
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "lines",
                  "status"
                ],
                "properties": {
                  "lines": {
                    "type": "array",
                    "description": "Sipariş satırları",
                    "items": {
                      "type": "object",
                      "required": [
                        "lineId",
                        "quantity"
                      ],
                      "properties": {
                        "lineId": {
                          "type": "integer",
                          "format": "int64",
                          "description": "Satır ID"
                        },
                        "quantity": {
                          "type": "integer",
                          "description": "Miktar"
                        }
                      }
                    }
                  },
                  "params": {
                    "type": "object",
                    "description": "Ek parametreler",
                    "additionalProperties": {
                      "type": "string"
                    }
                  },
                  "status": {
                    "type": "string",
                    "description": "Güncellenecek statü. Statüler sıralı ilerlemektedir.\n\n- Shipped: Paket kargoya verildi\n- AtCollectionPoint: Paket kargo firmasının dağıtım noktasına ulaştı\n- Delivered: Paket teslimat noktasına ulaştı\n- UnDelivered: Paket teslim edilemedi (kargonun dağıtım merkezine geri döndü)\n- Returned: Paket geri gönderildi\n",
                    "enum": [
                      "Shipped",
                      "AtCollectionPoint",
                      "Delivered",
                      "UnDelivered",
                      "Returned"
                    ]
                  }
                }
              },
              "example": {
                "lines": [
                  {
                    "lineId": 4944785,
                    "quantity": 1
                  }
                ],
                "params": {},
                "status": "Delivered"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string",
                  "example": "200 OK"
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