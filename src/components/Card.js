
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import "../style/card.css";

const Card = ({ kitaplar, kitapSil, cardDuzenle}) => {


  return kitaplar.map(
    (kitap) =>
      !kitap.isDeleted && (
        <div key={kitap.id} className="card">
          <button
            onClick={() => kitapSil(kitap.id)}
            className="card-delete-button"
          >
            <RiDeleteBin5Fill />
          </button>
          <img src={kitap.kitapResim} alt="resim" />
          <div className="card-body">
            <p>{kitap.kitapAdi}</p>
            <p>Kitap Kategori: {kitap.kitapKategori}</p>
            <p>Kitap Yazarı: {kitap.kitapYazari}</p>
            <p>Sayfa Sayısı: {kitap.sayfaSayisi}</p>
            <p>
              Açıklama:{" "}
              {kitap.kitapAciklama
                .substring(0, 176)
                .substring(
                  0,
                  kitap.kitapAciklama.substring(0, 176).lastIndexOf(" ")
                ) + "..."}
            </p>
          </div>
          <button
            onClick={() => cardDuzenle(kitap.id)}
            className="card-edit-button"
          >
            <AiOutlineEdit />
          </button>
        </div>
      )
  );
};

export default Card;
