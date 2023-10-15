import React, { useContext } from "react";
import "../style/navi.css";
import Logo from "../images/book.png";
import DataContext from "../context/DataContext";

function Navi() {
  const {state,dispatch} =
    useContext(DataContext);

  const handleClickKategori=(kategoriAdi)=>{
    dispatch({type:"secilenKategori",payload:kategoriAdi})
  }
  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <b>BilgeAdam Library</b>
      </div>
      <div className="search-box">
        <input
          type="search"
          placeholder="Kitap ara"
          onChange={(e) => dispatch({type:"arananKitap", payload:e.target.value})}
        />
      </div>
      <div className="kategori">
        <ul>
          {state.kategoriler.map(
            (kategori) =>
              ((state.secilenKategori && state.secilenKategori !== "Tüm Kitaplar") ||
                kategori.kategoriAdi !== "Tüm Kitaplar") && (
                <li
                  key={kategori.kategoriID}
                  onClick={() => handleClickKategori(kategori.kategoriAdi)}
                >
                  {kategori.kategoriAdi}
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navi;
