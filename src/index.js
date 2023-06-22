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

//Header Bölümü:

 document.getElementById("logo-img").src = siteContent.images["logo-img"];
 const aLink = document.querySelectorAll("nav a");
 aLink.forEach((item, index)=> {
   item.className ="italic";
   item.textContent = siteContent.nav["nav-item-" + (index+1)];
 });

 //Section-1:
document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.images["cta-img"];

//Section-2:
const textContentArr = document.querySelectorAll("h4");
textContentArr[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
textContentArr[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
textContentArr[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
textContentArr[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
textContentArr[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

document.getElementById("middle-img").src = siteContent.images["accent-img"];

const textContentText = document.querySelectorAll(".text-content p");
textContentText[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
textContentText[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
textContentText[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
textContentText[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
textContentText[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

//Section-3:

document.querySelector(".contact h4").textContent = siteContent.iletisim["iletişim-h4"]

const iletisimP = document.querySelectorAll(".contact p")
iletisimP[0].textContent = siteContent.iletisim.adres;
iletisimP[1].textContent = siteContent.iletisim.telefon;
iletisimP[2].textContent = siteContent.iletisim.email;

//Footer:
const footerDOM = document.querySelector("footer a");
footerDOM.className = "bold";
footerDOM.textContent = siteContent.footer.copyright;