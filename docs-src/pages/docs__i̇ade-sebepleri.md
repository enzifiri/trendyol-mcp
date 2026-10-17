---
updatedAt: 2026-09-22T09:01:45.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# İade Sebepleri

[getClaims servisinden](https://integration-documentation-udwy.readme.io/docs/i%CC%87adesi-olu%C5%9Fturulan-sipari%C5%9Fleri-%C3%A7ekme-getclaims) dönen response içerisinde yer alan customerClaimItemReason verileri aşağıdaki şekilde olacaktır.

* Müşteri tarafından kullanılan iade sebepleri tabloda "Müşteri" olarak, Trendyol tarafından kullanılan iade sebepleri tabloda "Trendyol" olarak belirtilmiştir

| Id   | Açıklama                                                                                                                                    | Müşteri/Trendyol |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------ | :--------------- |
| 51   | Sebep Yok                                                                                                                                   | Trendyol         |
| 101  | Depo Kayıp                                                                                                                                  | Trendyol         |
| 151  | Çapraz Hatalı                                                                                                                               | Trendyol         |
| 201  | Müşteri İade Kayıp                                                                                                                          | Trendyol         |
| 251  | Modelini beğenmedim                                                                                                                         | Müşteri          |
| 301  | Kusurlu ürün gönderildi                                                                                                                     | Müşteri          |
| 351  | Yanlış ürün gönderildi                                                                                                                      | Müşteri          |
| 401  | Vazgeçtim                                                                                                                                   | Müşteri          |
| 451  | Diğer                                                                                                                                       | Müşteri          |
| 501  | Bedeni küçük geldi                                                                                                                          | Müşteri          |
| 551  | Bedeni büyük geldi                                                                                                                          | Müşteri          |
| 651  | Ürün belirtilen özelliklere sahip değil                                                                                                     | Müşteri          |
| 701  | Yanlış sipariş verdim                                                                                                                       | Müşteri          |
| 751  | Diğer - Fraud Kaynaklı                                                                                                                      | Trendyol         |
| 1651 | Kalitesini beğenmedim                                                                                                                       | Müşteri          |
| 1701 | Kargo Teslimatı Gecikmesi                                                                                                                   | Trendyol         |
| 2000 | Cezalı Onay                                                                                                                                 | Trendyol         |
| 2001 | Cezasız Onay                                                                                                                                | Trendyol         |
| 2002 | Teknik Servis Desteği Gerekiyor                                                                                                             | Trendyol         |
| 2003 | Kullanılmış Ürün Sebepli Red                                                                                                                | Trendyol         |
| 2004 | Hijyenik Sebepli Red                                                                                                                        | Trendyol         |
| 2005 | Analiz sonucu üretimden kaynaklı sorun yok                                                                                                  | Trendyol         |
| 2006 | Analiz Değişim                                                                                                                              | Trendyol         |
| 2007 | Analiz Tamirat                                                                                                                              | Trendyol         |
| 2008 | Üründe adet/aksesuar eksiği                                                                                                                 | Trendyol         |
| 2009 | Firmaya ait olmayan ürün                                                                                                                    | Trendyol         |
| 2010 | Tekrar Sevk                                                                                                                                 | Trendyol         |
| 2011 | Satıcı Tarafından Aksiyona Çekilen                                                                                                          | Trendyol         |
| 2012 | İade Süresi Geçmiş                                                                                                                          | Trendyol         |
| 2013 | Ürün Müşteride (Not: Bu kodla iade edilen paketler, müşteriye geri gönderilememektedir. getClaims servisinde dontShipBack alanı true döner) | Trendyol         |
| 2014 | Analize Gönder                                                                                                                              | Trendyol         |
| 2015 | Teslim edilemeyen gönderi                                                                                                                   | Trendyol         |
| 2017 | Tazmin                                                                                                                                      | Trendyol         |
| 2030 | Daha iyi bir fiyat mevcut                                                                                                                   | Müşteri          |
| 2042 | Beğenmedim                                                                                                                                  | Müşteri          |
| 2043 | Ürünümün parçası/aksesuarı eksik gönderildi                                                                                                 | Müşteri          |
| 2058 | Gönderi Sevk Edilemedi                                                                                                                      | Trendyol         |
| 2065 | Müşteri onayı tamamlanmayan gönderi                                                                                                         | Trendyol         |
| 2067 | Müşteri talebiyle iptal edilen gönderi                                                                                                      | Trendyol         |