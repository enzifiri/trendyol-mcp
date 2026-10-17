---
updatedAt: 2026-01-22T11:35:41.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İşçilik Bedeli Tutarı Gönderme

İşçilik bedeli tutarını beslemek için bu servisi kullanmanız gerekmektedir.

* "laborCostPerItem" alanı line üzerindeki tek bir item için işçilik bedeline karşılık gelmektedir.
* Paket statusu "delivered" olana kadar bu besleme yapılabilir, "delivered" statusu sonrası güncelleme yapılamaz.
* "laborCostPerItem" 0'dan küçük olamaz, itemin faturalandırılacak tutarından büyük olamaz.
* Yalnızca belirli kategorid'ler için beslenebilir, kategori id listesine aşağıdaki tablodan ulaşabilirsiniz.
* Bu servis ile paket statusu "delivered" olana kadar güncellenebilir.
* "laborCostPerItem" beslenmesi zorunlu değildir.
* Girilen değerler sipariş paketlerini çekme servisinden ilerleyen dönemde dönecektir. ("lines" alanı altından.)

### İşçilik Bedeli Tutarı Gönderme

**HTTP METHOD: PUT**

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/labor-costs
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
 https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/labor-costs
</NoLinkCallout>

**Örnek Servis İsteği**

```json
[
  {
    orderLineId: 3653527482,
    laborCostPerItem: 32.12,
  },
  {
    orderLineId: 3653527483,
    laborCostPerItem: 78.65,
  },
];
```

**Başarılı Servis Cevabı**

```json
"200 OK";
```

**İşcilik Bedeli Beslenmesi Gereken Kategori Listesi**

| MainCategory | SubCategory              | CategoryId |
| :----------- | :----------------------- | :--------- |
| Mücevher     | Altın Bileklik           | 1238       |
| Mücevher     | Pırlanta Bileklik        | 1240       |
| Mücevher     | Altın Kolye              | 1246       |
| Mücevher     | Pırlanta Kolye           | 1248       |
| Mücevher     | Altın Küpe               | 1254       |
| Mücevher     | Pırlanta Küpe            | 1256       |
| Mücevher     | Altın Yüzük              | 1258       |
| Mücevher     | Pırlanta Yüzük           | 1260       |
| Mücevher     | Altın Set & Takım        | 1264       |
| Mücevher     | Pırlanta Set & Takım     | 1266       |
| Mücevher     | Altın Kıkırdak Küpe      | 3418       |
| Mücevher     | Pırlanta Kıkırdak Küpe   | 3419       |
| Mücevher     | Altın Halhal             | 3501       |
| Mücevher     | Altın Şahmeran           | 3504       |
| Mücevher     | Elmas Bileklik           | 3883       |
| Mücevher     | Elmas Kolye              | 3884       |
| Mücevher     | Elmas Küpe               | 3885       |
| Mücevher     | Elmas Yüzük              | 3886       |
| Mücevher     | Elmas Set & Takım        | 3887       |
| Mücevher     | Altın Kolye Ucu          | 5255       |
| Sarrafiye    | Tam Altın                | 1229       |
| Sarrafiye    | Yarım Altın              | 1230       |
| Sarrafiye    | Çeyrek Altın             | 1231       |
| Sarrafiye    | Gram Altın               | 1232       |
| Sarrafiye    | Cumhuriyet Altını        | 1234       |
| Sarrafiye    | Reşat Altın              | 1236       |
| Sarrafiye    | Ata Altın                | 1237       |
| Sarrafiye    | Yatırımlık Altın Bilezik | 3017       |
| Sarrafiye    | Gram Gümüş               | 4050       |
| Sarrafiye    | Sarrafiyeli Takılar      | 5317       |
| Takı         | Gümüş Bileklik           | 1239       |
| Takı         | Gümüş Halhal             | 3499       |
| Takı         | Gümüş Kıkırdak Küpe      | 3416       |
| Takı         | Gümüş Kolye              | 1247       |
| Takı         | Gümüş Küpe               | 1255       |
| Takı         | Gümüş Şahmeran           | 3502       |
| Takı         | Gümüş Set & Takım        | 1265       |
| Takı         | Gümüş Yüzük              | 1259       |
| Takı         | İnci Bileklik            | 3171       |
| Takı         | İnci Kolye               | 3168       |
| Takı         | İnci Küpe                | 3170       |
| Takı         | İnci Set Takım           | 5209       |
| Takı         | İnci Yüzük               | 3169       |
| Mücevher     | Altın Alyans             | 5597       |
| Takı         | Gümüş Alyans             | 5598       |