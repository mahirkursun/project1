import React, { useContext } from "react";

import "../style/form.scss";
import DataContext from "../context/DataContext";

function Form() {
  const {state, dispatch, handleSubmit} = useContext(DataContext);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>{state.secilenKitap ? "Kitap Düzenle" : "Kitap Ekle"}</h3>
        <select
          placeholder="Kitap Kategorisi:"
          id="kategori"
          value={state.kitapKategori}
          onChange={(e) =>
            dispatch({ type: "kitapKategori", payload: e.target.value })
          }
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
          value={state.kitapAdi}
          onChange={(e) =>
            dispatch({ type: "kitapAdi", payload: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Kitap Yazarı"
          id="yazar"
          value={state.kitapYazari}
          onChange={(e) =>
            dispatch({ type: "kitapYazari", payload: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Sayfa Sayısı"
          id="sayi"
          value={state.sayfaSayisi}
          onChange={(e) =>
            dispatch({ type: "sayfaSayisi", payload: e.target.value })
          }
        />
        <input
          type="text"
          id="resim"
          placeholder="Kitap Resmi(URL)"
          value={state.kitapResim}
          onChange={(e) =>
            dispatch({ type: "kitapResim", payload: e.target.value })
          }
        />

        <textarea
          type="text"
          rows="6"
          cols="45"
          placeholder="Kitap Açıklaması"
          id="aciklama"
          value={state.kitapAciklama}
          onChange={(e) =>
            dispatch({ type: "kitapAciklama", payload: e.target.value })
          }
        />

        <input
          disabled={
            state.kitapKategori === "Kategori Seçiniz" ||
            !state.kitapAdi ||
            !state.kitapYazari ||
            !state.sayfaSayisi ||
            !state.kitapResim ||
            !state.kitapAciklama
          }
          type="submit"
          value={state.secilenKitap ? "Düzenle" : "Ekle"}
        />
      </form>
    </div>
  );
}

export default Form;
