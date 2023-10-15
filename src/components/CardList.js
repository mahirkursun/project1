import React, { useContext } from "react";
import Card from "./Card";
import "../style/cardList.scss";
import DataContext from "../context/DataContext";

function CardList() {
  const { state } = useContext(DataContext);
  return (
    <div className="cardList">
      {state.kitaplar.map(
        (kitap) =>
          kitap.kitapAdi
            .toLowerCase()
            .startsWith(state.arananKitap.toLowerCase()) && <Card kitap={kitap} />
      )}
    </div>
  );
}

export default CardList;
