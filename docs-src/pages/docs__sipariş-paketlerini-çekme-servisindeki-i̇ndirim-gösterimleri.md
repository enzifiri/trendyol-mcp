---
updatedAt: 2026-07-20T05:25:27.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Sipariş Paketlerini Çekme Servisindeki İndirim Gösterimleri

## Sipariş İndirimlerini Anlama Kılavuzu

`getShipmentPackages` servisindeki indirim alanları — hangi indirim satıcı kaynaklı, hangisi Trendyol kaynaklı, nasıl okunur.

> **Temel Kural:** `lineItemSellerDiscount` satıcı tarafından karşılanan indirimi, `lineItemTyDiscount` ise Trendyol tarafından karşılanan indirimi gösterir. İkisi birbirinden tamamen bağımsızdır.
>
> Net ödenen tutar: `lineItemPrice = lineGrossAmount − lineItemSellerDiscount − lineItemTyDiscount`

***

## Alan Hiyerarşisi

### Paket Seviyesi

Siparişin tamamını özetler.

| Alan                    | Açıklama                                      |
| ----------------------- | --------------------------------------------- |
| `packageGrossAmount`    | İndirimsiz toplam tutar                       |
| `packageSellerDiscount` | Satıcı indirim toplamı                        |
| `packageTyDiscount`     | Trendyol indirim toplamı \*                   |
| `packageTotalDiscount`  | Toplam indirim (Satıcı + TY)                  |
| `packageTotalPrice`     | Net ödenecek tutar (Faturalandırılacak tutar) |
| `discountDisplays[]`    | Kampanya isimleri ve tutarları                |

* `packageTyDiscount` yalnızca `commercial=true` siparişlerde dolu gelebilir.

### Ürün Satır Seviyesi — `lines[]`

Her ürün tipi için birim toplamı.

| Alan                 | Açıklama                       |
| -------------------- | ------------------------------ |
| `lineGrossAmount`    | Birim brüt fiyat (indirimsiz)  |
| `lineSellerDiscount` | Satıcı indirimi (item toplamı) |
| `lineTyDiscount`     | TY indirimi (item toplamı)     |
| `lineTotalDiscount`  | Toplam birim indirim           |
| `lineUnitPrice`      | Net birim fiyat                |

### Kalem Seviyesi — `discountDetails[]`

Her adet için ayrı indirim satırı. `quantity=N` olan her ürün satırında `discountDetails` N elemanlı dizi döner.

| Alan                     | Açıklama                            |
| ------------------------ | ----------------------------------- |
| `lineItemPrice`          | Net fiyat = Brüt − Satıcı − TY      |
| `lineItemSellerDiscount` | Bu kaleme uygulanan satıcı indirimi |
| `lineItemTyDiscount`     | Bu kaleme uygulanan TY indirimi     |

***

## Senaryo Örnekleri

### 1. İndirim Yok (Baseline)

Hiçbir indirim uygulanmamış standart sipariş. Tüm indirim alanları sıfır, `discountDisplays` boş dizi olarak döner.

```json
{
  "packageGrossAmount": 498.90,
  "packageSellerDiscount": 0.00,
  "packageTyDiscount": 0.00,
  "packageTotalDiscount": 0.00,
  "packageTotalPrice": 498.90,
  "discountDisplays": [],
  "lines": [
    {
      "lineGrossAmount": 498.90,
      "lineSellerDiscount": 0.00,
      "lineTyDiscount": 0.00,
      "lineTotalDiscount": 0.00,
      "lineUnitPrice": 498.90,
      "discountDetails": [
        {
          "lineItemPrice": 498.90,
          "lineItemSellerDiscount": 0.00,
          "lineItemTyDiscount": 0.00
        }
      ]
    }
  ]
}
```

### 2. Satıcı İndirimi ("350 TL'ye %15 İndirim")

Satıcının Trendyol Satıcı Paneli üzerinden tanımladığı kampanya. 52.50 TL satıcı tarafından karşılanır.

```json
{
  "packageGrossAmount": 350.00,
  "packageSellerDiscount": 52.50,
  "packageTyDiscount": 0.00,
  "packageTotalDiscount": 52.50,
  "packageTotalPrice": 297.50,
  "discountDisplays": [
    {
      "displayName": "350 TL'ye %15 İndirim",
      "discountAmount": 52.50
    }
  ],
  "lines": [
    {
      "lineGrossAmount": 350.00,
      "lineSellerDiscount": 52.50,
      "lineTyDiscount": 0.00,
      "lineTotalDiscount": 52.50,
      "lineUnitPrice": 297.50,
      "discountDetails": [
        {
          "lineItemPrice": 297.50,
          "lineItemSellerDiscount": 52.50,
          "lineItemTyDiscount": 0.00
        }
      ]
    }
  ]
}
```

### 3. Trendyol Kuponu

Müşterinin ödeme adımında kullandığı Trendyol kuponu. İndirim tutarı Trendyol tarafından karşılanır; satıcıya yansıtılmaz.

```json
{
  "packageGrossAmount": 500.00,
  "packageSellerDiscount": 0.00,
  "packageTyDiscount": 75.00,
  "packageTotalDiscount": 75.00,
  "packageTotalPrice": 425.00,
  "discountDisplays": [
    {
      "displayName": "75 TL Kupon",
      "discountAmount": 75.00
    }
  ],
  "lines": [
    {
      "lineGrossAmount": 500.00,
      "lineSellerDiscount": 0.00,
      "lineTyDiscount": 75.00,
      "lineTotalDiscount": 75.00,
      "lineUnitPrice": 425.00,
      "discountDetails": [
        {
          "lineItemPrice": 425.00,
          "lineItemSellerDiscount": 0.00,
          "lineItemTyDiscount": 75.00
        }
      ]
    }
  ]
}
```

### 4. Trendyol Kampanyası (Flash Sale / Deals)

Trendyol tarafından organize edilen Flash Sale, Deals veya "Sepette %20 İndirim" gibi platform kampanyaları. Tüm indirim Trendyol tarafından finanse edilir.

```json
{
  "packageGrossAmount": 800.00,
  "packageSellerDiscount": 0.00,
  "packageTyDiscount": 160.00,
  "packageTotalDiscount": 160.00,
  "packageTotalPrice": 640.00,
  "discountDisplays": [
    {
      "displayName": "Sepette %20 İndirim",
      "discountAmount": 160.00
    }
  ],
  "lines": [
    {
      "lineGrossAmount": 800.00,
      "lineSellerDiscount": 0.00,
      "lineTyDiscount": 160.00,
      "lineTotalDiscount": 160.00,
      "lineUnitPrice": 640.00,
      "discountDetails": [
        {
          "lineItemPrice": 640.00,
          "lineItemSellerDiscount": 0.00,
          "lineItemTyDiscount": 160.00
        }
      ]
    }
  ]
}
```

### 5. Birleşik İndirim (Satıcı + Trendyol)

Satıcı kampanyası ile Trendyol kuponu aynı siparişe birlikte uygulandığında her iki alan da dolu gelir.

```json
{
  "packageGrossAmount": 600.00,
  "packageSellerDiscount": 60.00,
  "packageTyDiscount": 50.00,
  "packageTotalDiscount": 110.00,
  "packageTotalPrice": 490.00,
  "discountDisplays": [
    {
      "displayName": "%10 Satıcı İndirimi",
      "discountAmount": 60.00
    },
    {
      "displayName": "50 TL Kupon",
      "discountAmount": 50.00
    }
  ],
  "lines": [
    {
      "lineGrossAmount": 600.00,
      "lineSellerDiscount": 60.00,
      "lineTyDiscount": 50.00,
      "lineTotalDiscount": 110.00,
      "lineUnitPrice": 490.00,
      "discountDetails": [
        {
          "lineItemPrice": 490.00,
          "lineItemSellerDiscount": 60.00,
          "lineItemTyDiscount": 50.00
        }
      ]
    }
  ]
}
```

### 6. Çoklu Adet (quantity > 1)

Aynı üründen 2 adet sipariş edildiğinde `discountDetails` dizisi her kalem için ayrı bir eleman içerir. `lineSellerDiscount` ise item'ların toplamıdır.

```json
{
  "packageGrossAmount": 700.00,
  "packageSellerDiscount": 70.00,
  "packageTyDiscount": 0.00,
  "packageTotalDiscount": 70.00,
  "packageTotalPrice": 630.00,
  "discountDisplays": [
    {
      "displayName": "%10 Satıcı İndirimi",
      "discountAmount": 70.00
    }
  ],
  "lines": [
    {
      "quantity": 2,
      "lineGrossAmount": 350.00,
      "lineSellerDiscount": 35.00,
      "lineTyDiscount": 0.00,
      "lineTotalDiscount": 35.00,
      "lineUnitPrice": 315.00,
      "discountDetails": [
        {
          "lineItemPrice": 315.00,
          "lineItemSellerDiscount": 35.00,
          "lineItemTyDiscount": 0.00
        },
        {
          "lineItemPrice": 315.00,
          "lineItemSellerDiscount": 35.00,
          "lineItemTyDiscount": 0.00
        }
      ]
    }
  ]
}
```

<br />