# 💰 Ionic Harcama Takip Uygulaması

Bu proje, Ionic Framework ve Angular kullanılarak geliştirilmiş bir "Günlük Harcama Takip" mobil uygulamasıdır. **TBP4001 - Mobil Programlama** dersi proje ödevi kapsamında geliştirilmiştir.

## 🚀 Proje Özellikleri

* **Harcama Ekleme:** Kullanıcılar harcama adı, tutarı ve kategorisi belirterek kayıt oluşturabilir (Boş veri girişi engellenmiştir).
* **Dinamik Bakiye:** Eklenen ve silinen harcamalara göre toplam tutar anlık olarak güncellenir ve ana ekranda gösterilir.
* **Kaydırarak Silme (Sliding):** İlgili harcama kartı yana kaydırılarak pratik bir şekilde silinebilir. Kazaları önlemek için silme işlemi öncesi **"Emin misiniz?"** onayı (Alert) istenir.
* **Kalıcı Veri (Local Storage):** Tüm veriler tarayıcının yerel hafızasına kaydedilir. Sayfa yenilense veya uygulama kapatılsa dahi veriler kaybolmaz.
* **Kategori Rengi ve Tarih (Bonus):** Harcamalar eklendiği tarihlerle birlikte listelenir ve seçilen kategoriye göre (Market, Fatura, Ulaşım vb.) liste elemanları otomatik renklendirilir.
* **Kullanıcı Bildirimleri (Toast):** Başarılı ekleme veya eksik bilgi durumlarında alt kısımdan anlık bildirim (Toast mesajı) çıkar.

## 🛠️ Kullanılan Teknolojiler

* Ionic Framework
* Angular
* TypeScript, HTML, SCSS
* LocalStorage API
