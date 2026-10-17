---
updatedAt: 2026-02-16T13:07:02.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Soruyu Cevaplama

Müşteriden gelen bir soruya cevap verilir. Cevap metni değerlendirildikten sonra yayınlanır.


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
    "/qna/sellers/{sellerId}/questions/{id}/answers": {
      "post": {
        "tags": [
          "Müşteri Soruları Entegrasyonu"
        ],
        "summary": "Soruyu Cevaplama",
        "description": "Müşteriden gelen bir soruya cevap verilir. Cevap metni değerlendirildikten sonra yayınlanır.\n",
        "operationId": "answerQuestion",
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
            "description": "Cevaplanacak sorunun ID'si."
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/QuestionAnswerRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Cevap başarıyla kaydedildi. Değerlendirilmeye gönderildi.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string",
                  "example": "Cevabınız başarıyla kaydedilmiştir."
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
      "QuestionAnswerRequest": {
        "type": "object",
        "required": [
          "text"
        ],
        "properties": {
          "text": {
            "type": "string",
            "minLength": 10,
            "maxLength": 2000,
            "description": "Verilecek cevap metni. \n- Minimum: 10 karakter\n- Maksimum: 2000 karakter\n",
            "example": "Değerli müşterimiz, ürünümüz %100 pamukludur."
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