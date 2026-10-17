---
updatedAt: 2026-07-20T14:44:22.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Ürün V2- API Servisleri

Servis Kapsamı kolonundan ilgili endpoint'in hangi versiyon için geçerli olduğunu kontrol edebilirsiniz.&#x20;

* V1-V2 yazan servisler versiyon 1 ve versiyon 2 de ortak olup.&#x20;
* Sadece V2 yazan servisler yeni geliştirilen servislerdir.

| Servis                                                                                                                                                       | Servis Kapsamı |  Metod | Endpoint                                                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | :----: | :----------------------------------------------------------------------------------------------------------- |
| [Trendyol Marka Listesi](https://developers.trendyol.com/docs/trendyol-marka-listesi-getbrands-1)                                                            | V1-V2          |   GET  | `https://apigw.trendyol.com/integration/product/brands`                                                      |
| [Trendyol Kategori Listesi](https://developers.trendyol.com/docs/trendyol-kategori-listesi-getcategorytree-1)                                                | V1-V2          |   GET  | `https://apigw.trendyol.com/integration/product/product-categories`                                          |
| [Trendyol Kategori Özellik Listesi v2](https://developers.trendyol.com/docs/kategori-%C3%B6zellik-listesi-v2)                                                | V2             |   GET  | `https://apigw.trendyol.com/integration/product/categories/{categoryId}/attributes`                          |
| [Trendyol Kategori Özellik Değerleri Listesi v2](https://developers.trendyol.com/docs/kategori-%C3%B6zellik-de%C4%9Ferleri-listesi-v2)                       | V2             |   GET  | `https://apigw.trendyol.com/integration/product/categories/{categoryId}/attributes/{attributeId}/values`     |
| [Ürün Yaratma v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-yaratma-v2)                                                                            | V2             |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/v2/products`                              |
| [Ürün Güncelleme - Onaysız Ürün v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onays%C4%B1z-%C3%BCr%C3%BCn-v2)                      | V2             |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/unapproved-bulk-update`          |
| [Ürün Güncelleme - Onaylı Ürün v2 (Content)](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)              | V2             |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/content-bulk-update`             |
| [Ürün Güncelleme - Onaylı Ürün v2 (Varyant)](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)              | V2             |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/variant-bulk-update`             |
| [Ürün Güncelleme - Onaylı Ürün v2 (Teslimat)](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-g%C3%BCncelleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)             | V2             |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/delivery-info-bulk-update`       |
| [Stok ve Fiyat Güncelleme (updatePriceAndInventory)](https://developers.trendyol.com/docs/stok-ve-fiyat-g%C3%BCncelleme-updatepriceandinventory-1)           | V1-V2          |  POST  | `https://apigw.trendyol.com/integration/inventory/sellers/{sellerId}/products/price-and-inventory`           |
| [Ürün Silme](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-silme-1)                                                                                    | V1-V2          | DELETE | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products`                                 |
| [Toplu İşlem Kontrolü (getBatchRequestResult)](https://developers.trendyol.com/docs/toplu-i%CC%87%C5%9Flem-kontrol%C3%BC-getbatchrequestresult-1)            | V2             |   GET  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/batch-requests/{batchRequestId}` |
| [Ürün Filtreleme - Temel Bilgiler v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-temel-bilgiler-v2)                                      | V2             |   GET  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/product/{barcode}`                        |
| [Ürün Filtreleme - Onaysız Ürün v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onays%C4%B1z-%C3%BCr%C3%BCn-v2)                           | V2             |   GET  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/unapproved`                      |
| [Ürün Filtreleme - Onaylı Ürün v2](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2)                             | V2             |   GET  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/approved`                        |
| [Ürün Filtreleme – Onaylı Ürün V2 Stok ve Fiyat](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-filtreleme-onayl%C4%B1-%C3%BCr%C3%BCn-v2-stok-ve-fiyat) | V2             |   GET  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/approved/inventory-and-price`    |
| [Ürün Arşivleme (archiveProducts)](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-ar%C5%9Fivleme-archiveproducts)                                       | V1-V2          |   PUT  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/archive-state`                   |
| [Ürün Buybox Kontrol Servisi](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-buybox-kontrol-servisi-1)                                                  | V1-V2          |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/buybox-information`              |
| [Ürün Kilit Kaldırma Servisi](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-kilit-kald%C4%B1rma-servisi-1)                                             | V1-V2          |   PUT  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/unlock`                          |
| [Video Oluşturma / Listeleme Servisi](https://developers.trendyol.com/docs/seller-integration-video-api)                                                     | V2             |  POST  | `https://apigw.trendyol.com/integration/video/sellers/{sellerId}/videos`                                     |
| [Marka Yaratma Servisi](https://developers.trendyol.com/docs/marka-yaratma-servisi)                                                                          | V2             |  POST  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/brands`                                   |
| [Ürün Bilgileri Güncelleme Sonucu Kontrol Servisi](https://developers.trendyol.com/docs/%C3%BCr%C3%BCn-bilgileri-g%C3%BCncelleme-sonucu-kontrol-servisi)     | V2             |   GET  | `https://apigw.trendyol.com/integration/product/sellers/{sellerId}/products/{contentId}/update-audits`       |

<br />