---
updatedAt: 2026-01-22T11:34:23.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Adres Bilgileri

Sipariş paketlerini çekme servisinden dönen adres bilgilerine aşağıdaki servisler üzerinden ulaşabilirsiniz.

### Ülke Bilgisi

**HTTP METHOD: GET**

Ülke bilgisine aşağıdaki servisten ulaşabilirsiniz.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/member/countries
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/member/countries
</NoLinkCallout>

### GULF ve CEE Ülkeleri İçin İl Bilgisi

**HTTP METHOD: GET**

Gulf ve Cee ülkeleri için ilgili ülke kodu ile o ülkenin il bilgisine aşağıdaki servisten ulaşabilirsiniz.

* CountryCode bilgisini ülke bilgisi servisinden dönen "code" alanından almalısınız.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/member/countries/{CountryCode}/cities
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/member/countries/{CountryCode}/cities
</NoLinkCallout>

* CEE ülkeleri için ilçe bilgisi servisimizde bulunmamaktadır.

### GULF Ülkeleri İçin İlçe Bilgisi

**HTTP METHOD: GET**

Gulf ülkeleri için ilçe bilgilerine aşağıdaki servisten ulaşabilirsiniz.

* CityCode bilgisini il bilgisi servisinden dönen "id" alanından almalısınız.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/member/countries/{CountryCode}/cities/{cityId}/districts
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
https://stageapigw.trendyol.com/integration/member/countries/{CountryCode}/cities/{cityId}/districts
</NoLinkCallout>

### Azerbaycan İçin İl Bilgisi

**HTTP METHOD: GET**

Azerbaycan için il bilgilerine aşağıdaki servisten ulaşabilirsiniz.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/member/countries/domestic/AZ/cities
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/member/countries/domestic/AZ/cities
</NoLinkCallout>

### Azerbaycan İçin İlçe Bilgisi

**HTTP METHOD: GET**

Azerbaycan için ilçe bilgilerine aşağıdaki servisten ulaşabilirsiniz.

* CityCode bilgisini il bilgisi servisinden dönen "id" alanından almalısınız.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/member/countries/domestic/AZ/cities/{cityCode}/districts
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/member/countries/domestic/AZ/cities/{cityCode}/districts
</NoLinkCallout>

### Türkiye İçin İl Bilgisi

**HTTP METHOD: GET**

Türkiye için il bilgisine aşağıdaki servisten ulaşabilirsiniz.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/member/countries/domestic/TR/cities
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/member/countries/domestic/TR/cities
</NoLinkCallout>

### Türkiye İçin İlçe Bilgisi

**HTTP METHOD: GET**

Türkiye için ilçe bilgilerine aşağıdaki servisten ulaşabilirsiniz.

* CityCode bilgisini il bilgisi servisinden dönen "id" alanından almalısınız.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
  https://apigw.trendyol.com/integration/member/countries/domestic/TR/cities/{CityCode}/districts
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/member/countries/domestic/TR/cities/{CityCode}/districts
</NoLinkCallout>

### Türkiye İçin Mahalle Bilgisi

**HTTP METHOD: GET**

Türkiye için mahalle bilgilerine aşağıdaki servisten ulaşabilirsiniz.

* CityCode bilgisini il bilgisi servisinden dönen "id" alanından almalısınız.
* DistrictCode bilgisini ilçe bilgisi servisinden dönen "id" alanından almalısınız.

**Servis Endpointleri**

<NoLinkCallout type="info" title="PROD">
https://apigw.trendyol.com/integration/member/countries/domestic/TR/cities/{CityCode}/districts/{DistrictCode}/neighborhoods
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
https://stageapigw.trendyol.com/integration/member/countries/domestic/TR/cities/{CityCode}/districts/{DistrictCode}/neighborhoods
</NoLinkCallout>

<br />