
# Twitter-Clone

Bu proje, Firebase kullanarak oluşturulmuş basit bir Twitter benzeri uygulamadır.
Uygulama açıldığında kullanıcılar, Google ile giriş yaparak uygulamaya giriş yapabilirler.
Google giriş işlemi Firebase Authentication üzerinden yapılmaktadır.
Kullanıcı, e-posta doğrulaması gerektirdiğinde, Firebase tarafından otomatik olarak doğrulama kodu e-posta adresine gönderilir.
Kullanıcılar tweet atma işleminde metin ve fotoğraf ekleyebilirler.
Yüklenen fotoğraf Firebase Storage'a kaydedilir ve tweet içeriğiyle birlikte Firestore'a eklenir.
Kullanıcılar attıkları tweet'leri düzenleyebilir veya silebilir.
Kullanıcılar tweet'leri beğenebilirler.
Beğeniler, Firestore'da kullanıcıların etkileşimde bulundukları tweet'leri izlemek için tutulur.

# Kütüphaneler

