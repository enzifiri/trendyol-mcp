---
updatedAt: 2026-01-22T11:26:11.000Z
agentTools:
  projectIndex: https://developers.trendyol.com/llms.txt
---

# Yetkili Servis İle Gönderim

Ürünlerini yetkili servise kargolayan satıcılarımızın bu servisi çağırmaları gerekmektedir

Lojistik firmalarıyla Tedarikçi Öder entegrasyonu yapan ve ürünlerini yetkili servise kargolayan satıcılarımızın bu servisi çağırmaları gerekmektedir. (Mevcut durumda lojistik firmalarından sadece Horoz Lojistik ile tedarikçi öder çalışmamız bulunmaktadır.)

* Paket shipped statusune geçirilene kadar herhangi bir zamanda bu servis çağırılabilir

### **PUT** delivered-by-service

<NoLinkCallout type="info" title="PROD">
 https://apigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/delivered-by-service
</NoLinkCallout>

<NoLinkCallout type="info" title="STAGE">
https://stageapigw.trendyol.com/integration/order/sellers/{sellerId}/shipment-packages/{packageId}/delivered-by-service
</NoLinkCallout>