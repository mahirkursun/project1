const data = [
  {
    id: 1,
    kitapAdi: "Kafamda Bir Tuhaflık",
    kitapKategori: "Edebiyat",
    kitapYazari: "Orhan Pamuk",
    sayfaSayisi: 480,
    kitapResim:
      "https://img.kitapyurdu.com/v1/getImage/fn:5192424/wh:true/wi:220",
    kitapAciklama:
      "Kafamda Bir Tuhaflık hem bir aşk hikâyesi hem de modern bir destan. Orhan Pamuk’un üzerinde altı yıl çalıştığı roman, bozacı Mevlut ile üç yıl aşk mektupları yazdığı sevgilisinin İstanbul’daki hayatlarını hikâye ediyor",
  },
  {
    id: 2,
    kitapAdi: "Kapsamlı Python Kursu",
    kitapKategori: "Yazılım",
    kitapYazari: "Eric Matthes",
    sayfaSayisi: 608,
    kitapResim:
      "http://buzdagiyayinevi.com/wp-content/uploads/2022/02/Python-Crash-Course-Kapak-scaled.jpg",
    kitapAciklama:
      "Kapsamlı Python Kursu, dünyada Python programlama dili için yazılmış en çok satan ve beğenilen kitaptır. Python ile programlamaya bu hızlı giriş sayesinde programlar yazacak, problemleri çözecek ve işlerinizi çabucak halledeceksiniz.",
  },
  {
    id: 3,
    kitapAdi: "Hayatımızdaki Algoritmalar",
    kitapKategori: "Yazılım",
    kitapYazari: "Brian Christian , Tom Griffiths",
    sayfaSayisi: 486,
    kitapResim:
      "https://i.dr.com.tr/cache/500x400-0/originals/0001720482001-1.jpg",
    kitapAciklama:
      "Yaşamımızın tamamı, belirli bir sorun grubuna yol açan mekân ve zaman kısıtları ile sınırlandırılmıştır. Bir günde ya da ömrümüz boyunca ne yapmalı ya da ne yapmamalıyız?Yaşamımızın tamamı, belirli bir sorun grubuna yol açan mekân ve zaman kısıtları ile sınırlandırılmıştır. Bir günde ya da ömrümüz boyunca ne yapmalı ya da ne yapmamalıyız?",
  },
  {
    id: 4,
    kitapAdi: "Serenad",
    kitapKategori: "Edebiyat",
    kitapYazari: "Zülfü Livaneli",
    sayfaSayisi: 400,
    kitapResim:
      "https://r2.1k-cdn.com/sig/size:128/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F56586_2218b_1621537273.jpg",
    kitapAciklama:
      "Serenad, 60 yıldır süren bir aşkı ele alırken, ister herkesin bildiği Yahudi Soykırımı olsun isterse çok az kimsenin bildiği Mavi Alay, bütün siyasi sorunlarda asıl harcananın, gürültüye gidenin hep insan olduğu gerçeğini de göz önüne seriyor.",
  },
  {
    id: 5,
    kitapAdi: "İnce Memed 1",
    kitapKategori: "Edebiyat",
    kitapYazari: "Yaşar Kemal",
    sayfaSayisi: 352,
    kitapResim:
      "https://r2.1k-cdn.com/sig/size:128/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F39535_AMRrt_1507312826.jpg",
    kitapAciklama:
      "İnce Mehmed, köyünde zalim bir ağa tarafından haksızlığa uğramış bir köylüdür. Onun hikayesi, adaleti sağlamak için verdiği mücadeleyi anlatır ve unutulmaz karakterlerle dolu bir macera sunar.",
  },
  {
    id: 6,
    kitaAdi: "Cumhuriyetin 100 Günü",
    kitapKategori: "Tarih",
    kitapYazari: "Emrah Safa Gürkan",
    sayfaSayisi: 608,
    kitapResim:
      "https://img.kitapyurdu.com/v1/getImage/fn:11707006/wh:true/wi:220",
    kitapAciklama:
      "Bu kitap, yorgun bir imparatorluğun yüzlerce yıldır yapamadığını yapacak genç bir cumhuriyetin doğuşunun hikâyesi… Aksayan planların, kaygan ittifakların, saklanan niyetlerin, ama en nihayetinde tartışmasız bir zaferin öyküsü.",
  },
  {
    id: 7,
    kitapAdi: "Gazi Mustafa Kemal Atatürk",
    kitapKategori: "Tarih",
    kitapYazari: "İlber Ortaylı",
    sayfaSayisi: 480,
    kitapResim:
      "https://i.dr.com.tr/cache/500x400-0/originals/0001740229001-1.jpg",
    kitapAciklama:
      "Gazi Mustafa Kemal Atatürk kitabı, evvela imparatorluğu dirilten nesil olan 1880'liler kuşağı, Balkan coğrafyası ve Mustafa Kemal'in aile kökeni ile başlıyor.",
  },
  {
    id: 8,
    kitapAdi: "Tongue Fu",
    kitapKategori: "Psikoloji",
    kitapYazari: "Sam Horn",
    sayfaSayisi: 289,
    kitapResim:
      "https://r2.1k-cdn.com/sig/size:128/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F332663_dccdd_1552245370.jpg",
    kitapAciklama:
      "İnsanlararası iletişimde husumeti, anlaşmazlıkları ve yanlış anlamaları uyuma dönüştürmek, Sözlü çatışmalardan, ağız kavgalarından ve sinir patlamalarından kaçınmak,Sözünüzü, insanlarla huzurlu bir birlikteliğin aracı haline getirmek istemez misiniz?Sözlü dövüş sanatı Tongue Fu size bütün bunların yolunu gösteriyor.Tongue Fu ile şu teknikleri kolaylıkla öğrenebilirsiniz.",
  },
  {
    id: 9,
    kitapAdi: "Elon Musk",
    kitapKategori: "Diğer",
    kitapYazari: "Ashlee Vance",
    sayfaSayisi: 462,
    kitapResim:
      "https://static.ticimax.cloud/30373/uploads/urunresimleri/elon-musk-tesla-spacex-ve-muhtesem-gelec-e6e2.jpg",
    kitapAciklama:
      "1971 doğumlu genç bir girişimcinin şirketleri ile dünyadaki otomotiv, uzay-havacılık ve enerji sektörlerindeki yerleşik düzene meydan okumasının sıra dışı hikâyesidir.",
  },
  {
    id: 10,
    kitapAdi: "Stoacının Günlüğü",
    kitapKategori: "Felsefe",
    kitapYazari: "Stephen Hanselman",
    sayfaSayisi: 432,
    kitapResim:
      "https://r2.1k-cdn.com/sig/size:128/plain/https%3A%2F%2F1k-cdn.com%2Fresimler%2Fkitaplar%2F1010667_a139e_1619956364.jpg",
    kitapAciklama:
      "Mutluluğa nasıl kavuşuruz? Öfkemizi kontrol etmenin en etkili yolu nedir? Başarının gerçek ölçütü ne olmalıdır? Kederimizin üstesinden gelip hayatımıza nasıl bir anlam katabiliriz? Tüm bu soruların ve daha fazlasının cevabı Stoacı felsefenin özünü oluşturur. ",
  },
];

export default data;
