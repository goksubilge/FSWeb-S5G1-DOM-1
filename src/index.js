const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

//Header Bölümüsü:
document.getElementById("logo-img").src = siteContent.images["logo-img"];
const navAlar = document.querySelectorAll("nav a")
navAlar.forEach((ozellikA,sirasi) => {
  ozellikA.className = "italic";
  ozellikA.textContent = siteContent.nav["nav-item-"+ (sirasi+1)]
});

//Section Bölümüsü 1
document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.images["cta-img"];

//Section Bölümüsü 2
const h4ler = document.querySelectorAll("h4");
h4ler[0].textContent = siteContent ["ana-içerik"] ["özellikler-h4"];
h4ler[1].textContent = siteContent ["ana-içerik"] ["hakkımızda-h4"];
h4ler[2].textContent = siteContent ["ana-içerik"] ["servisler-h4"];
h4ler[3].textContent = siteContent ["ana-içerik"] ["ürünler-h4"];
h4ler[4].textContent = siteContent ["ana-içerik"] ["vizyon-h4"];

//(middle-img)
document.getElementById("middle-img").src = siteContent.images["accent-img"];

// Section Bölümüsü 2
const Pler = document.querySelectorAll("p");
Pler[0].textContent = siteContent["ana-içerik"] ["özellikler-içerik"];
Pler[1].textContent = siteContent ["ana-içerik"] ["hakkımızda-içerik"];
Pler[2].textContent = siteContent ["ana-içerik"] ["servisler-içeriği"];
Pler[3].textContent = siteContent ["ana-içerik"] [ "ürünler-içeriği"];
Pler[4].textContent = siteContent ["ana-içerik"] ["vizyon-içeriği"];

//Section BÖlümüsü 3 (iletişim)
document.querySelector(".contact h4").textContent = siteContent ["iletisim"] ["iletişim-h4"];
const Piletisim = document.querySelectorAll(".contact p");
Piletisim[0].textContent = siteContent ["iletisim"] ["adres"];
Piletisim[1].textContent = siteContent ["iletisim"] ["telefon"];
Piletisim[2].textContent = siteContent ["iletisim"] ["email"];

//footer Bölümüsü
document.querySelector("footer a").className = "bold"
document.querySelector("footer a").textContent = siteContent ["footer"] ["copyright"];
