---
updatedAt: 2026-08-14T10:42:42.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Test Siparişi Oluşturma

Test siparişi oluşturma servisi STAGE ortamında talep edilen senaryolarda test siparişi oluşturulması için kullanılacaktır.

* İstek yaparken, "SellerID" bilgisini Header içinde göndermelisiniz. Bu değer, kullanılan test satıcısının satıcı ID si olmalıdır.
* Header içerisinde göndermiş olduğunuz satıcıId ile basic authentication yapmanız gerekmektedir.
* Test ortamı bilgilerini edinmek için [Canlı-Test Ortam Bilgileri](https://integration-documentation-udwy.readme.io/docs/3-canl%C4%B1-test-ortam-bilgileri) bölümünü inceleyebilirsiniz.
* İstek başarıyla tamamlandığında, tarafınıza gönderilen response içinde "orderNumber" değeri yer alacaktır. Bu sipariş numarasını kullanarak ilgili işlemleri gerçekleştirebilirsiniz.

### Kurumsal Faturalı Test Siparişi Oluşturma

Kurumsal faturalı test siparişi oluşturmak için aşağıda yer alan request body içerisinde "commercial" alanı true olarak gönderilmelidir. "commercial" alanının true olduğu durumda, "invoiceAddress" altında bulunan "company", "invoiceTaxNumber" ve "invoiceTaxOffice" alanlarını doldurmanız gerekmektedir.

### Mikro İhracat Test Siparişi Oluşturma

Mikro ihracat test siparişi oluşturmak için aşağıda yer alan request body içerisinde "microRegion" alanı doldurulmalıdır.

* Eğer Azerbaycan mikro ihracat test siparişi oluşturulmak isteniyorsa "microRegion" alanı "AZ" olarak doldurulmalıdır.
* Eğer Gulf bölgesi mikro ihracat test siparişi oluşturulmak isteniyorsa "microRegion" alanı "GULF" olarak doldurulmalıdır.

### **POST**

<NoLinkCallout title="STAGE" type="info">
  [https://stageapigw.trendyol.com/integration/test/order/orders/core](https://stageapigw.trendyol.com/integration/test/order/orders/core)
</NoLinkCallout>

**Örnek Servis İsteği**

```json
{
  "customer": {
    "customerFirstName": "John",
    "customerLastName": "Doe"
  },
  "invoiceAddress": {
    "addressText": "test deneme adresi",
    "city": "İzmir",
    "company": "",
    "district": "Bornova",
    "invoiceFirstName": "John",
    "invoiceLastName": "Doe",
    "latitude": "string",
    "longitude": "string",
    "neighborhood": "",
    "phone": "333333333",
    "postalCode": "",
    "email": "pf+j2jm8x99@trendyolmail.com",
    "invoiceTaxNumber": "Firma Tax Number",
    "invoiceTaxOffice": "Firma Tax Office"
  },
  "lines": [
    {
      "barcode": "9900000000486",
      "quantity": 2,
      "discountPercentage": 50,
      "trendyolDiscountPercentage":30
    }
  ],
  "seller": {
    "sellerId": 2738
  },
  "shippingAddress": {
    "addressText": "test deneme adresi",
    "city": "İzmir",
    "company": "",
    "district": "Bornova",
    "latitude": "string",
    "longitude": "string",
    "neighborhood": "",
    "phone": "333333333",
    "postalCode": "",
    "shippingFirstName": "John",
    "shippingLastName": "Doe",
    "email": "pf+j2jm8x99@trendyolmail.com"
  },
   "commercial":false,
   "microRegion": "String"
}
```