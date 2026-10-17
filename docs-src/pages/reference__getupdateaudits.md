---
updatedAt: 2026-08-10T14:48:15.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Bilgileri Güncelleme Sonucu Kontrol Servisi (getUpdateAudits)

Ürün bilgilerini güncelleme servislerinden yapılan ve başarılı sonuçlanan isteklerin, ürün kontrol adımı sonucunu döner. Güncelleme reddedilmişse rejectReasons alanı ile red sebepleri iletilir. Dönen updates alanının içeriği güncelleme tipine (type) göre değişir.


# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-owner-team": "spm-core",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Marketplace - Ürün Entegrasyonu API",
    "description": "Trendyol Marketplace ürün entegrasyonu API servisleri. Ürün yaratma (V2), filtreleme, güncelleme, silme, arşivleme, stok-fiyat güncelleme, buybox, kilit kaldırma ve toplu işlem kontrolü servislerini kapsar.\n",
    "version": "2.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Destek",
      "email": "entegrasyon@trendyol.com"
    }
  },
  "x-domain-key": "marketplace-product",
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
      "name": "Updates",
      "description": "Ürün güncelleme servisleri (onaylı/onaysız)",
      "x-module-key": "updates"
    }
  ],
  "paths": {
    "/product/sellers/{sellerId}/products/{contentId}/update-audits": {
      "get": {
        "tags": [
          "Updates"
        ],
        "x-module-key": "updates",
        "summary": "Ürün Bilgileri Güncelleme Sonucu Kontrol Servisi (getUpdateAudits)",
        "description": "Ürün bilgilerini güncelleme servislerinden yapılan ve başarılı sonuçlanan isteklerin, ürün kontrol adımı sonucunu döner. Güncelleme reddedilmişse rejectReasons alanı ile red sebepleri iletilir. Dönen updates alanının içeriği güncelleme tipine (type) göre değişir.\n",
        "operationId": "getUpdateAudits",
        "parameters": [
          {
            "$ref": "#/components/parameters/sellerId"
          },
          {
            "name": "contentId",
            "in": "path",
            "required": true,
            "description": "Ürün content ID bilgisi",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          },
          {
            "name": "page",
            "in": "query",
            "description": "Sayfa numarası",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "size",
            "in": "query",
            "description": "Sayfa başına adet",
            "schema": {
              "type": "integer"
            }
          },
          {
            "name": "status",
            "in": "query",
            "description": "Güncelleme durumu filtresi (SUCCESS, FAIL, RUNNING)",
            "schema": {
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/storefrontcode"
          },
          {
            "$ref": "#/components/parameters/acceptLanguage"
          }
        ],
        "responses": {
          "200": {
            "description": "Başarılı",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateAuditsResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/BadRequest"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
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
    "parameters": {
      "sellerId": {
        "name": "sellerId",
        "in": "path",
        "required": true,
        "description": "Satıcı ID",
        "schema": {
          "type": "integer",
          "format": "int64"
        }
      },
      "storefrontcode": {
        "name": "storefrontcode",
        "in": "header",
        "required": false,
        "description": "Ülke kodu. Gönderilmezse veya TR gönderildiğinde Türkiye storefront'u kullanılır.",
        "schema": {
          "type": "string"
        }
      },
      "acceptLanguage": {
        "name": "Accept-Language",
        "in": "header",
        "required": false,
        "description": "Servis cevabının döneceği dil. TR storefront'unda cevap her zaman Türkçe döner. Diğer storefront'larda tr, en, ro, ar, el değerleri desteklenir; gönderilmediğinde veya desteklenmeyen bir değer gönderildiğinde en kullanılır.",
        "schema": {
          "type": "string"
        }
      }
    },
    "responses": {
      "BadRequest": {
        "description": "URL içerisinde eksik veya hatalı parametre kullanılmaktadır.",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ErrorResponse"
            }
          }
        }
      },
      "Unauthorized": {
        "description": "supplierID, API Key veya API Secure Key bilgilerinden birisi eksik/yanlış."
      }
    },
    "schemas": {
      "ErrorResponse": {
        "type": "object",
        "properties": {
          "errors": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "message": {
                  "type": "string"
                },
                "errorCode": {
                  "type": "string"
                }
              }
            }
          }
        }
      },
      "UpdateAuditRejectReason": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Red sebebi tipi"
          },
          "reason": {
            "type": "string",
            "description": "Red sebebi özeti"
          },
          "detail": {
            "type": "string",
            "description": "Red sebebi detayı"
          },
          "parameters": {
            "type": "object",
            "description": "Red sebebine ait ek parametreler"
          }
        }
      },
      "UpdateAuditImage": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "order": {
            "type": "integer"
          }
        }
      },
      "UpdateAuditAttribute": {
        "type": "object",
        "properties": {
          "attributeId": {
            "type": "integer"
          },
          "attributeValueId": {
            "type": "integer"
          },
          "customAttributeValue": {
            "type": "string"
          },
          "attributeValue": {
            "type": "string"
          }
        }
      },
      "UpdateAuditDetail": {
        "type": "object",
        "description": "Güncelleme detayı. type alanının değerine göre dolan alanlar değişir: TITLE için changedTitle/existingTitle, DESCRIPTION için changedDescription/existingDescription, MEDIA için changedMedias/existingMedias, ATTRIBUTE için changedAttributes/existingAttributes.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "TITLE",
              "DESCRIPTION",
              "MEDIA",
              "ATTRIBUTE"
            ]
          },
          "status": {
            "type": "string",
            "enum": [
              "SUCCESS",
              "FAIL",
              "RUNNING"
            ]
          },
          "completedDate": {
            "type": "string"
          },
          "rejectReasons": {
            "type": "array",
            "description": "status FAIL olduğunda döner",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditRejectReason"
            }
          },
          "changedTitle": {
            "type": "string"
          },
          "existingTitle": {
            "type": "string"
          },
          "changedDescription": {
            "type": "string"
          },
          "existingDescription": {
            "type": "string"
          },
          "changedMedias": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditImage"
            }
          },
          "existingMedias": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditImage"
            }
          },
          "changedAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditAttribute"
            }
          },
          "existingAttributes": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditAttribute"
            }
          }
        }
      },
      "UpdateAuditItem": {
        "type": "object",
        "properties": {
          "barcode": {
            "type": "string"
          },
          "contentId": {
            "type": "integer",
            "format": "int64"
          },
          "batchRequestId": {
            "type": "string"
          },
          "requestDate": {
            "type": "string"
          },
          "updates": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditDetail"
            }
          }
        }
      },
      "UpdateAuditsResponse": {
        "type": "object",
        "properties": {
          "page": {
            "type": "integer"
          },
          "size": {
            "type": "integer"
          },
          "totalPage": {
            "type": "integer"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/UpdateAuditItem"
            }
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