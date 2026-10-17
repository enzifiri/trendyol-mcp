---
updatedAt: 2026-07-20T10:58:13.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün Bilgileri Güncelleme Sonucu Kontrol Servisi

Bu servis ile ürün bilgilerini güncelleme servisinden yaptığınız ve başarılı sonuçlanan isteklerin, ürün kontrol adımı sonucunu görebilirsiniz.

Header’&#x61;**&#x20;Accept-Language: tr** parametresi geçildiğinde servis cevabı Türkçe dönecektir.

**GET isteği ile aşağıdaki endpointe istek yapabilirsiniz:**

<NoLinkCallout type="info" title="PROD">
	https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/{contentId}/update-audits
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  https://stageapigw.trendyol.com/integration/product/sellers/{sellerId}/products/{contentId}/update-audits
</NoLinkCallout>

**Ürün güncelleme isteğinde yer alan ürün bilgilerine göre response body örneklerine aşağıda ulaşabilirsiniz:**

1. **Title Güncelleme İsteğinin Reddedildiği Response Örneği:**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "TITLE",
                    "status": "FAIL",
                    "completedDate": "2025-07-21T05:50:57.201884871Z",
                    "rejectReasons": [
                        {
                            "type": "CHANGES_NOT_FOUND",
                            "reason": "No Changes Detected",
                            "detail": "The product information you submitted is identical to the existing data already defined in the system. Since no changes were detected, the update was not applied.Please submit different values if you wish to make an update.",
                            "parameters": {}
                        }
                    ],
                    "changedTitle": "Test Ekin",
                    "existingTitle": "Test Ekin"
                }
            ]
        }
    ]
}
```

2. **Title Güncelleme İsteğinin Onaylandığı Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "TITLE",
                    "status": "SUCCESS",
                    "completedDate": "2025-07-17T11:56:16.577557916Z",
                    "changedTitle": "Test Test",
                    "existingTitle": "Test TestTest Test"
                }
            ]
        }
    ]
}
```

3. **Description Güncelleme İsteğinin Reddedildiği Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "DESCRIPTION",
                    "status": "FAIL",
                    "completedDate": "2025-07-18T06:55:08.820424Z",
                    "rejectReasons": [
                        {
                            "type": "CHANGES_NOT_FOUND",
                            "reason": "No Changes Detected",
                            "detail": "The product information you submitted is identical to the existing data already defined in the system. Since no changes were detected, the update was not applied.Please submit different values if you wish to make an update.",
                            "parameters": {}
                        }
                    ],
                    "changedDescription": "Test",
                    "existingDescription": "Test"
                }
            ]
        }
    ]
}
```

4. **Description Güncelleme İsteğinin Onaylandığı Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "DESCRIPTION",
                    "status": "SUCCESS",
                    "completedDate": "2025-07-17T11:56:15.948777837Z",
                    "changedDescription": "Test",
                    "existingDescription": "Test TestTest Test"
                }
            ]
        }
    ]
}
```

5. **Media Güncelleme İsteğinin Reddedildiği Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "MEDIA",
                    "status": "FAIL",
                    "completedDate": "2025-07-17T11:44:39.638752Z",
                    "rejectReasons": [
                        {
                            "type": "CHANGES_NOT_FOUND",
                            "reason": "No Changes Detected",
                            "detail": "The product information you submitted is identical to the existing data already defined in the system. Since no changes were detected, the update was not applied.Please submit different values if you wish to make an update.",
                            "parameters": {}
                        }
                    ],
                    "changedMedias": [
                        {
                            "url": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC/20241114/14/03b9f886-194a-3de7-b42a-3bdf76f8181f/1_org_zoom.jpg",
                            "order": 1
                        }
                    ],
                    "existingMedias": [
                        {
                            "_type": "Media",
                            "url": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC/20241114/14/03b9f886-194a-3de7-b42a-3bdf76f8181f/1_org_zoom.jpg",
                            "order": 1
                        }
                    ]
                }
            ]
        }
    ]
}
```

6. **Media Güncelleme İsteğinin Onaylandığı Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "MEDIA",
                    "status": "SUCCESS",
                    "completedDate": "2025-07-17T11:44:39.638752Z",
                    "changedMedias": [
                        {
                            "url": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC/20241114/14/03b9f886-194a-3de7-b42a-3bdf76f8181f/1_org_zoom.jpg",
                            "order": 1
                        }
                    ],
                    "existingMedias": [
                        {
                            "_type": "Media",
                            "url": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC/20241114/14/03b9f886-194a-3de7-b42a-3bdf76f8181f/1_org_zoom.jpg",
                            "order": 1
                        }
                    ]
                }
            ]
        }
    ]
}
```

7. **Attribute Güncelleme İsteğinin Reddedildiği Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "ATTRIBUTE",
                    "status": "FAIL",
                    "completedDate": "2025-07-17T11:43:53.604267Z",
                    "rejectReasons": [
                        {
                            "type": "BANNED_WORD_IN_ATTRIBUTE",
                            "reason": "Ürün özelliğinde yasaklı kelime bulunuyor",
                            "detail": "Ürünün özelliklerinde com, STAGE yasaklı kelimesi bu markada kullanılmamalıdır. Lütfen ürün içeriğinizi yasaklı kelime olmayacak şekilde güncelleyiniz.",
                            "parameters": {}
                        }
                    ],
                    "changedAttributes": [
                        {
                            "attributeId": 47,
                            "attributeName": "Renk",
                            "customAttributeValue": "Beyaz",
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 191,
                            "attributeName": "Kol Boyu",
                            "attributeValueId": 2149,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 293,
                            "attributeName": "Beden",
                            "attributeValueId": 2182733,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 294,
                            "attributeName": "Yaş Grubu",
                            "attributeValueId": 2076589,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 296,
                            "attributeName": "Cinsiyet",
                            "attributeValueId": 438116,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 46498,
                            "attributeName": "Enerji Sınıfı Görseli",
                            "customAttributeValue": "https://cdn.dsmcdn.com/mediacenter-stage6/stage/QC_ENRICHMENT/20250710/14/3e61b0e7-6316-380e-bc80-c55d9c6783b1/1_org_zoom.jpg",
                            "mediaUrl": "https://cdn.dsmcdn.com/mediacenter-stage6/stage/QC_ENRICHMENT/20250710/14/3e61b0e7-6316-380e-bc80-c55d9c6783b1/1_org_zoom.jpg",
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 60144,
                            "attributeName": "Üretici Bilgisi",
                            "attributeValueId": 2181725,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 60145,
                            "attributeName": "İthalatçı / Yetkili Temsilci",
                            "customAttributeValue": "testyetkili111",
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 60152,
                            "attributeName": "Paket Görseli",
                            "customAttributeValue": "https://cdn.dsmcdn.com/mediacenter-stage5/stage/QC_ENRICHMENT/20250710/11/1682036c-bede-3ac2-89a6-9dfdae614824/1_org_zoom.jpg",
                            "mediaUrl": "https://cdn.dsmcdn.com/mediacenter-stage5/stage/QC_ENRICHMENT/20250710/11/1682036c-bede-3ac2-89a6-9dfdae614824/1_org_zoom.jpg",
                            "isAllowedForUpdate": true
                        }
                    ],
                    "existingAttributes": [
                        {
                            "id": 2149,
                            "name": "Uzun",
                            "attributeId": 191,
                            "attributeName": "Kol Boyu",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 2076589,
                            "name": "4 YAŞ",
                            "attributeId": 294,
                            "attributeName": "Yaş Grubu",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 438116,
                            "name": "Yaz",
                            "attributeId": 296,
                            "attributeName": "Cinsiyet",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "Beyaz",
                            "attributeId": 47,
                            "attributeName": "Renk",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 453450,
                            "name": "GDDVWC",
                            "attributeId": 295,
                            "attributeName": "Web Color",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "ba4df426-fffd-3c2f-a288-53d07e4c58f6",
                            "attributeId": 46498,
                            "attributeName": "Enerji Sınıfı Görseli",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "https://cdn.dsmcdn.com/mediacenter-stage5/stage/QC_ENRICHMENT/20250710/11/1682036c-bede-3ac2-89a6-9dfdae614824/1_org_zoom.jpg",
                            "attributeId": 60152,
                            "attributeName": "Paket Görseli",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "attributeId": 60144,
                            "attributeName": "Üretici Bilgisi",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "testyetkili111",
                            "attributeId": 60145,
                            "attributeName": "İthalatçı / Yetkili Temsilci",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 2182733,
                            "name": "test 1",
                            "attributeId": 293,
                            "attributeName": "Beden",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        }
                    ]
                }
            ]
        }
    ]
}
```

8. **Attribute Güncelleme İsteğinin Onaylandığı Response Örneği :**

```json
{
    "page": 1,
    "size": 100,
    "totalPage": 1,
    "content": [
        {
            "barcode": "smoketest-397135",
            "contentId": 12600108,
            "batchRequestId": "f84e1d14-9113-56de-a3e5-9b1983372789",
            "requestDate": "2275-08-06T14:37:09.074Z",
            "updates": [
                {
                    "type": "ATTRIBUTE",
                    "status": "SUCCESS",
                    "completedDate": "2025-07-10T08:45:01.750857896Z",
                    "changedAttributes": [
                        {
                            "attributeId": 47,
                            "attributeName": "Renk",
                            "customAttributeValue": "Beyaz",
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 191,
                            "attributeName": "Kol Boyu",
                            "attributeValueId": 2149,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 293,
                            "attributeName": "Beden",
                            "attributeValueId": 2182733,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 294,
                            "attributeName": "Yaş Grubu",
                            "attributeValueId": 2076589,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 296,
                            "attributeName": "Cinsiyet",
                            "attributeValueId": 438116,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 60144,
                            "attributeName": "Üretici Bilgisi",
                            "attributeValueId": 2181725,
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 60145,
                            "attributeName": "İthalatçı / Yetkili Temsilci",
                            "customAttributeValue": "testyetkili111",
                            "isAllowedForUpdate": true
                        },
                        {
                            "attributeId": 60152,
                            "attributeName": "Paket Görseli",
                            "customAttributeValue": "https://cdn.dsmcdn.com/spm-attribute-images/stage/2748/9c0a34f5-8ef1-44b9-8da9-cb73df772867/2E3A9780.jpeg",
                            "mediaUrl": "https://cdn.dsmcdn.com/spm-attribute-images/stage/2748/9c0a34f5-8ef1-44b9-8da9-cb73df772867/2E3A9780.jpeg",
                            "isAllowedForUpdate": true
                        }
                    ],
                    "existingAttributes": [
                        {
                            "id": 2149,
                            "name": "Uzun",
                            "attributeId": 191,
                            "attributeName": "Kol Boyu",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 2076589,
                            "name": "4 YAŞ",
                            "attributeId": 294,
                            "attributeName": "Yaş Grubu",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 438116,
                            "name": "Yaz",
                            "attributeId": 296,
                            "attributeName": "Cinsiyet",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "Beyaz",
                            "attributeId": 47,
                            "attributeName": "Renk",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 453450,
                            "name": "GDDVWC",
                            "attributeId": 295,
                            "attributeName": "Web Color",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "attributeId": 60144,
                            "attributeName": "Üretici Bilgisi",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "testyetkili",
                            "attributeId": 60145,
                            "attributeName": "İthalatçı / Yetkili Temsilci",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 0,
                            "name": "",
                            "customValue": "https://cdn.dsmcdn.com/mediacenter-stage2/stage/QC_ENRICHMENT/20250710/11/506d7519-7206-3dbb-b271-8d1207046269/1_org_zoom.jpg",
                            "attributeId": 60152,
                            "attributeName": "Paket Görseli",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        },
                        {
                            "id": 2182733,
                            "name": "test 1",
                            "attributeId": 293,
                            "attributeName": "Beden",
                            "slicer": false,
                            "varianter": false,
                            "allowCustom": false
                        }
                    ]
                }
            ]
        }
    ]
}
```

<br />