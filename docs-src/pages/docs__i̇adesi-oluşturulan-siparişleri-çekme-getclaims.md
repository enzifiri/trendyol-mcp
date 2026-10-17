---
updatedAt: 2026-10-14T10:35:52.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İadesi Oluşturulan Siparişleri Çekme (getClaims)

Trendyol sisteminde iadesi oluşan siparişleri bu metot yardımıyla çekebilirsiniz.

**Red Edilen Paket Bilgileri:**

* İade red paketi bilgileri, response içerisinde "rejectedpackageinfo" alanına eklenmiştir.
* Eğer müşterinin iade talebi reddedildiyse ve geri gönderilmek üzere iade red paketi oluşturulmuşsa, bu paket bilgileri "rejectedpackageinfo" alanından tarafınıza dönecektir.Iade red paketi oluşmamışsa, bu alan görünmeyecektir.
* "rejectedpackageinfo.packageId" bilgisi, iade red paketine ait benzersiz bir ID'yi temsil eder. Bu Id'yi kullanarak kendi kargo anlaşmanız (kendi kargo kodlarınız) ile çıkış yaparak, kargo kodu besleme servisinden tarafımıza bildirebilirsiniz.

**Kullanılabilen Statüler ve Statü Güncellemeleri:**

* Kullanılabilinecek statüler şunlardır; Created, WaitingInAction, Accepted, Cancelled, Rejected, Unresolved, InAnalysis.
* suppliers/(supplierid)/claims?claimItemStatus=Created gibi bir query ile de paket statülerine göre sorgulama yapılabilir.
* İade servislerinde statüsü güncellenen iade paketleriniz, servis üzerinden tarafınıza **lastModifiedDate** sırasına göre dönecektir.
* Yeni oluşmuş paketleri çekmek için **Created** olarak sorgulama yapılmalıdır.

**Tarih Bilgisi:**

* **claimDate** bilgisi, Timestamp (milliseconds) formatında GMT olarak iletilmektedir.
* Tarih bilgisini satıcı paneli ile eşlemek için GMT+3 olarak işlem yapmanız gerekmektedir.

**İade Kargo Takip Linki:**

* **rejectedpackageinfo.cargoTrackingLink** alanı, iade kargo paketi yola çıktığında dönen bilgidir.
* Kendi kargo anlaşmasıyla çalışan satıcılar, kargo sürecini bu link üzerinden kontrol edebilirler.

### **GET** getClaims

<NoLinkCallout type="info" title="PROD">
  [https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/claims](https://apigw.trendyol.com/integration/order/sellers/\{sellerId\}/claims)
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
  [https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId\}/claims](https://stageapigw.trendyol.com/integration/order/sellers/\{sellerId\}/claims)
</NoLinkCallout>

**Servis Parametreleri**

* claimIds parametresi verildiği zaman diğer tüm parametreler işleme alınmayarak sadece ilgili claimId'ye ait değerler dönecektir.
* "orderShipmentPackageId" değeri iade paketinin id değeridir.

| Parametre       | Açıklama                                                                      | Tip     |
| :-------------- | :---------------------------------------------------------------------------- | ------- |
| claimIds        | Tekil veya çoğul olarak ilgili iade paketlerinin detaylarına ulaşabilirsiniz. | string  |
| claimItemStatus | İade itemin statüsüdür.                                                       | string  |
| endDate         | İade paketinin lastModifiedDate tarihine göre çalışır.                        | integer |
| startDate       | İade paketinin lastModifiedDate tarihine göre çalışır.                        | integer |
| orderNumber     | İade paketinin sipariş numarasıdır.                                           | string  |
| size            | Bir sayfada listelenecek maksimum adeti belirtir.                             | integer |
| page            | Sadece belirtilen sayfadaki bilgileri döndürür.                               | integer |

### Örnek Servis Cevabı

```json
{
    "totalElements": 2099,
    "totalPages": 2099,
    "page": 0,
    "size": 1,
    "content": [
        {
            "id": "f9da2317-876b-4b86-b8f7-0535c3b65731", //claimId
            "claimId": "f9da2317-876b-4b86-b8f7-0535c3b65731",
            "channelId": 25, //1 ise TR core, 25 ise luxury kanalından gelen sipariştir.
            "orderNumber": "65745805",
            "orderDate": 1524826343886,
            "customerFirstName": "John", //Trendyol Yurt Dışı Aracılığı siparişleri için "DSM Grup Danışmanlık" olarak dönecektir.
            "customerLastName": "Doe", //Trendyol Yurt Dışı Aracılığı siparişleri için "İletişim ve Satış Ticaret A.Ş." olarak dönecektir.
            "claimDate": 1525844162827,
            "cargoTrackingNumber": 72602420957047272632,
            "cargoTrackingLink": "https://tracking.trendyol.com/?id=111111111-1111-1111-1111-11111111",
            "cargoSenderNumber": "8106459254413",
            "cargoProviderName": "Aras Kargo Marketplace",
            "orderShipmentPackageId": 3853354,
            "replacementOutboundpackageinfo": {
                "cargoTrackingNumber": 72602420957047272632,
                "cargoProviderName": "Aras Kargo Marketplace",
                "cargoSenderNumber": "733861966410",
                "cargoTrackingLink": "https://tracking.trendyol.com/?id=111111111-1111-1111-1111-11111111",
                "packageid": 28717254, //değişim paket id bilgisidir
                "items": [
                    "b71461e3-d1a0-4c1d-9a6d-18ecbcb5432d" //claimItem.Id
                ]
            },
            "rejectedPackageInfo": {
            "cargoTrackingNumber": 2207284754,
            "packageId": 92248304,
            "cargoProviderName": "ARAS",
            "cargoTrackingLink": "https://stage-tracking.trendyol.com/?trackingId=f78aee0b-6755-3c89-bf8c-129c4304ec71",
            "items": [
          	   "26889877-203a-468a-abb8-6b8e05497c9M"
        ],
            "shipmentAddress": {
            "address1": "John Doe's House",
            "address2": "John Doe's House",
            "city": "Test",
            "district": ""
        },
        "dontShipBack": false, // Sadece 2013 iade sebebi kodu ile iade edilen paketler müşteriye geri gönderilemez. Bu durumda bu alan true döner.
        "sellerOtp": "",// Türkiye Marketplace için her zaman null döner
        "sellerDeliveryMethod": ""// Türkiye Marketplace için her zaman null döner
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
                            "id": "b71461e3-d1a0-4c1d-9a6d-18ecbcb5158c", //claimLineItemIdList
                            "orderLineItemId": 29815493,
                            "customerClaimItemReason": {
                                "id": "451", //claimIssueReasonId
                                "name": "Diğer",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                            },
                            "trendyolClaimItemReason": {
                                "id": "451",
                                "name": "Diğer",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                            },
                            "claimItemStatus": {
                                "name": "Created"
                            },
                            "note": "",
                            "customerNote": "Müşteri notu",
                            "resolved": false,
                            "autoAccepted": false,
                            "acceptedBySeller": true
                        }
                    ]
                },
                {
                    "orderLine": {
                        "id": 28717255,
                        "productName": "Erkek Bebek Soket Çorap 4'lü 8S7346Z1/MIX YARN DYED K00, 6-12 Ay",
                        "barcode": "99999999999",
                        "merchantSku": "2052551",
                        "productColor": "MIX YARN DYED K00",
                        "productSize": " 17-18 (6-12 Ay)",
                        "price": 9.95,
                        "vatBaseAmount": 8,
                        "vatRate": 8,
                        "salesCampaignId": 183631,
                        "productCategory": "Çorap"
                    },
                    "claimItems": [
                        {
                            "id": "b71461e3-d1a0-4c1d-9a6d-18ecbcb5432d", //claimLineItemIdList
                            "orderLineItemId": 29815494,
                            "customerClaimItemReason": {
                                "id": "451",
                                "name": "Diğer",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                            },
                            "trendyolClaimItemReason": {
                                "id": "451",
                                "name": "Diğer",
                                "externalReasonId": 23,
                                "code": "UNFIT"
                            },
                            "claimItemStatus": {
                                "name": "Rejected"
                            },
                            "note": "",
                            "customerNote": "Müşteri notu",
                            "resolved": false,
                            "autoAccepted": false, //48 saat boyunca aksiyon alınmayan iadeler, otomatik olarak kabul edilir, ve bu alandan kontrol edilebilir.
                            "acceptedBySeller": true //Satıcı tarafından kabul edilen iadeler, bu alandan kontrol edilebilir.
                        }
                    ]
                }
            ],
            "lastModifiedDate": 1723275767111,
            "orderOutboundPackageId": 58835111,
            "sellerOtp": "", // Türkiye marketplace için her zaman null döner
            "sellerDeliveryMethod": "",// Türkiye marketplace için her zaman null döner
            "sellerCollectionPointDetails": {
                "collectionPointId": ""// Türkiye marketplace için her zaman null döner
            }
        }
    ]
}

```

| Servis                | Açıklama                                                                                                                   |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Created**           | İadesi oluşan siparişlerin ilk statüsüdür. Bu aşamada müşteri iade butonuna bastığı zaman oluşmaktadır.                    |
| **WaitingInAction**   | İadesi oluşturulan sipariş tedarikçimize ulaştığı zaman bu statü dönmektedir.                                              |
| **WaitingFraudCheck** | İadesi onaylanan sipariş fraud kontrolune uğradığı durumda bu statü dönmektedir (Askıda İadeler).                          |
| **Unresolved**        | İhtilaflı statüsündeki iade siparişleridir. Sorun bildir işlemi yapıldıktan sonra sipariş ihtilaflı statüsüne geçmektedir. |
| **Rejected**          | İadesi reddedilen siparişler için kullanılır.                                                                              |
| **Accepted**          | İadesi kabul edilen siparişler için kullanılır.                                                                            |
| **Cancelled**         | İadesi iptal edilmiş siparişler için kullanılır.                                                                           |
| **InAnalysis**        | Analizde olan siparişler için kullanılır.                                                                                  |