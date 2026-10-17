---
updatedAt: 2026-02-16T13:07:02.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Soru Detayını Getirme

ID bilgisi verilen tek bir sorunun tüm detaylarını getirir.

# OpenAPI definition

```json
{
  "openapi": "3.0.3",
  "x-readme": {
    "proxy-enabled": false
  },
  "info": {
    "title": "Trendyol Pazaryeri - Müşteri Soruları Entegrasyonu",
    "description": "Trendyol üzerinde satıcılara sorulan müşteri sorularının yönetilmesini sağlayan API servisidir. \nBu servis ile soruları filtreleyebilir, detaylarını görüntüleyebilir ve cevaplayabilirsiniz.\n",
    "version": "1.0.0",
    "contact": {
      "name": "Trendyol Entegrasyon Desteği",
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
      "name": "Müşteri Soruları Entegrasyonu",
      "description": "Müşteri sorularını listeleme, filtreleme ve cevaplama işlemleri."
    }
  ],
  "paths": {
    "/qna/sellers/{sellerId}/questions/{id}": {
      "get": {
        "tags": [
          "Müşteri Soruları Entegrasyonu"
        ],
        "summary": "Soru Detayını Getirme",
        "description": "ID bilgisi verilen tek bir sorunun tüm detaylarını getirir.",
        "operationId": "getQuestion",
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
            "name": "id",
            "in": "path",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            },
            "description": "Detayı istenen sorunun ID'si."
          }
        ],
        "responses": {
          "200": {
            "description": "Soru detayı başarıyla getirildi.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Question"
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
        "description": "Trendyol API Key ve API Secret kullanılarak oluşturulan Basic Authentication."
      }
    },
    "schemas": {
      "Question": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "description": "Sorunun benzersiz numarası."
          },
          "text": {
            "type": "string",
            "description": "Müşterinin sorduğu soru metni."
          },
          "customerId": {
            "type": "integer",
            "format": "int64",
            "description": "Soruyu soran müşterinin ID'si."
          },
          "userName": {
            "type": "string",
            "description": "Müşterinin maskelenmiş adı soyadı."
          },
          "showUserName": {
            "type": "boolean",
            "description": "Kullanıcı adının gösterilip gösterilmeyeceği bilgisi."
          },
          "status": {
            "type": "string",
            "description": "Sorunun durumu.",
            "enum": [
              "WAITING_FOR_ANSWER",
              "ANSWERED",
              "REJECTED",
              "REPORTED"
            ]
          },
          "public": {
            "type": "boolean",
            "description": "Sorunun herkes tarafından görünüp görünmediği."
          },
          "productMainId": {
            "type": "string",
            "description": "Sorunun sorulduğu ürünün ana grup numarası."
          },
          "productName": {
            "type": "string",
            "description": "Sorunun sorulduğu ürünün adı."
          },
          "imageUrl": {
            "type": "string",
            "description": "Ürünün görsel linki."
          },
          "webUrl": {
            "type": "string",
            "description": "Ürünün Trendyol üzerindeki sayfa linki."
          },
          "creationDate": {
            "type": "integer",
            "format": "int64",
            "description": "Sorunun oluşturulma tarihi (Epoch ms)."
          },
          "answeredDateMessage": {
            "type": "string",
            "description": "Cevaplanma tarihinin kullanıcı dostu metni. (Örn:\\ \"Cevabınız 12.02.2026 tarihinde yayınlandı.\")"
          },
          "answer": {
            "$ref": "#/components/schemas/Answer"
          },
          "rejectedAnswer": {
            "$ref": "#/components/schemas/Answer"
          },
          "rejectedDate": {
            "type": "integer",
            "format": "int64",
            "description": "Eğer soru reddedildiyse reddedilme tarihi."
          },
          "reason": {
            "type": "string",
            "description": "Reddedilme veya işlem görme nedeni."
          },
          "reportReason": {
            "type": "string",
            "description": "Bildirildiyse bildirilme nedeni."
          },
          "reportedDate": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "Answer": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "description": "Verilen cevabın içeriği."
          },
          "creationDate": {
            "type": "integer",
            "format": "int64",
            "description": "Cevabın oluşturulma tarihi."
          },
          "status": {
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