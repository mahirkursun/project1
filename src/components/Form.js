import React, { useEffect, useState } from "react";

import "../style/form.scss";

function Form({ kitapEkleDuzenle, kitaplar, secilenKitap }) {
  const [kitapAdi, setKitapAdi] = useState("");
  const [kitapYazari, setKitapYazari] = useState("");
  const [kitapKategori, setKitapKategori] = useState("Kategori Seçiniz");
  const [sayfaSayisi, setSayfaSayisi] = useState("");
  const [kitapResim, setKitapResim] = useState("");
  const [kitapAciklama, setKitapAciklama] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const yeniKitapBilgisi = {
      id: kitaplar.length + 1,
      kitapAdi: kitapAdi,
      kitapYazari: kitapYazari,
      kitapKategori: kitapKategori,
      sayfaSayisi: sayfaSayisi,
      kitapResim: kitapResim,
      kitapAciklama: kitapAciklama,
    };

    kitapEkleDuzenle(yeniKitapBilgisi);

    setKitapAdi("");
    setKitapYazari("");
    setKitapKategori("Kategori Seçiniz");
    setSayfaSayisi("");
    setKitapResim("");
    setKitapAciklama("");
  };

  useEffect(() => {
    if (secilenKitap) {
      setKitapKategori(secilenKitap.kitapKategori);
      setKitapAdi(secilenKitap.kitapAdi);
      setKitapYazari(secilenKitap.kitapYazari);
      setSayfaSayisi(secilenKitap.sayfaSayisi);
      setKitapResim(secilenKitap.kitapResim);
      setKitapAciklama(secilenKitap.kitapAciklama);
    }
  }, [secilenKitap]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>{secilenKitap ? "Kitap Düzenle" : "Kitap Ekle"}</h3>
        <select
          placeholder="Kitap Kategorisi:"
          id="kategori"
          value={kitapKategori}
          onChange={(e) => setKitapKategori(e.target.value)}
        >
          <option>Kategori Seçiniz</option>
          <option>Yazılım</option>
          <option>Edebiyat</option>
          <option>Tarih</option>
          <option>Diğer</option>
        </select>
        <input
          type="text"
          placeholder="Kitap Adı"
          id="ad"
          value={kitapAdi}
          onChange={(e) => setKitapAdi(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kitap Yazarı"
          id="yazar"
          value={kitapYazari}
          onChange={(e) => setKitapYazari(e.target.value)}
        />

        <input
          type="text"
          placeholder="Sayfa Sayısı"
          id="sayi"
          value={sayfaSayisi}
          onChange={(e) => setSayfaSayisi(e.target.value)}
        />
        <input
          type="text"
          id="resim"
          placeholder="Kitap Resmi(URL)"
          value={kitapResim}
          onChange={(e) => setKitapResim(e.target.value)}
        />

        <textarea
          type="text"
          rows="6"
          cols="45"
          placeholder="Kitap Açıklaması"
          id="aciklama"
          value={kitapAciklama}
          onChange={(e) => setKitapAciklama(e.target.value)}
        />

        <input
          disabled={
            kitapKategori === "Kategori Seçiniz" ||
            !kitapAdi ||
            !kitapYazari ||
            !sayfaSayisi ||
            !kitapResim ||
            !kitapAciklama
          }
          type="submit"
          value={secilenKitap ? "Düzenle" : "Ekle"}
        />
      </form>
    </div>
  );
}

export default Form;
