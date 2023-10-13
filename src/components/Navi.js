import React from "react";
import "../style/navi.css";
import Logo from "../images/book.png";

function Navi({ kategoriler, setSecilenKategori, secilenKategori, }) {
  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <b>BilgeAdam Library</b>
      </div>
      {/* <div className="search-box">
        <input
        
          type="search"
          placeholder="Kitap ara"
          onChange={kitapAra}
        />
      </div> */}
      <div className="kategori">
        <ul>
          {kategoriler.map(
            (kategori) =>
              ((secilenKategori && secilenKategori !== "Tüm Kitaplar") ||
                kategori.kategoriAdi !== "Tüm Kitaplar") && (
                <li
                  key={kategori.kategoriID}
                  onClick={() => setSecilenKategori(kategori.kategoriAdi)}
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
