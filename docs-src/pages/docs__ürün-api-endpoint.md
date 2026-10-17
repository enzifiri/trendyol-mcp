---
updatedAt: 2026-09-15T13:31:39.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün V1- API Endpoint

Ürün Servisleri ile ilgili kullanmanız gereken API listesi

<Callout icon="❗️" theme="error">
  \*\*Aşağıdaki Ürün V1 endpoint servisleri **15 Ekim 2026 itibari ile kullanım dışı olacaktır.** Bu tarihe kadar [Product V2 servis geliştirmelerini](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-ak%C4%B1%C5%9F%C4%B1) yapmanız gerekmektedir.
</Callout>

| SERVİS                                                                                                                                                    | ENDPOINT                | METHOD | URL                                                                              |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :----: | :------------------------------------------------------------------------------- |
| [İade ve Sevkiyat Adres Bilgileri](https://integration-documentation-udwy.readme.io/docs/i%CC%87ade-ve-sevkiyat-adres-bilgileri-getsuppliersaddresses)    | getSuppliersAddresses   |   GET  | /integration/sellers/(sellerId)/addresses                                        |
| [Trendyol Kargo Şirketleri Listesi](https://integration-documentation-udwy.readme.io/docs/trendyol-kargo-%C5%9Firketleri-listesi-getproviders)            | getProviders            |   GET  | Tablodan Alınmalı                                                                |
| [Trendyol Marka Listesi](https://integration-documentation-udwy.readme.io/docs/trendyol-marka-listesi-getbrands)                                          | getBrands               |   GET  | /integration/product/brands                                                      |
| [Trendyol Kategori Listesi](https://integration-documentation-udwy.readme.io/docs/trendyol-kategori-listesi-getcategorytree)                              | getCategoryTree         |   GET  | /integration/product/product-categories                                          |
| [Trendyol Kategori - Özellik Listesi](https://integration-documentation-udwy.readme.io/docs/trendyol-kategori-%C3%B6zellik-listesi-getcategoryattributes) | getCategoryAttributes   |   GET  | /integration/product/product-categories/(categoryId)/attributes                  |
| [Ürün Aktarma](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-aktarma-v2createproducts)                                             | createProducts          |  POST  | /integration/product/sellers/(sellerId)/products                                 |
| [Ürün Bilgisi Güncelleme](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-bilgisi-g%C3%BCncelleme-updateproduct)                     | updateProduct           |   PUT  | /integration/product/sellers/(sellerId)/products                                 |
| [Stok ve Fiyat Güncelleme](https://integration-documentation-udwy.readme.io/docs/stok-ve-fiyat-g%C3%BCncelleme-updatepriceandinventory)                   | updatePriceAndInventory |  POST  | /integration/inventory/sellers/(sellerId)/products/price-and-inventory           |
| [Ürün Silme](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-silme)                                                                  | products                | DELETE | /integration/product/sellers/(sellerId)/products                                 |
| [Toplu İşlem Kontrolü](https://integration-documentation-udwy.readme.io/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult)                  | getBatchRequestResult   |   GET  | /integration/product/sellers/(sellerId)/products/batch-requests/(batchRequestId) |
| [Ürün Filtreleme](https://integration-documentation-udwy.readme.io/docs/%C3%BCr%C3%BCn-filtreleme-filterproducts)                                         | filterProducts          |   GET  | /integration/product/sellers/(sellerId)/products                                 |

<br />

<br />