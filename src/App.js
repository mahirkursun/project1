import axios from "axios";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import "./style/App.css";
import { useEffect, useState } from "react";

function App() {
  const [kitaplar, setKitaplar] = useState([]);
  const [kategoriler, setKategoriler] = useState([]);
  const [secilenKategori, setSecilenKategori] = useState("");
  const [secilenKitap, setSecilenKitap] = useState(null);
  //const [arananKitap, setArananKitap] = useState([]);

  const kitapEkleDuzenle = async (yeni) => {
    // setKitaplar([...kitaplar, yeni]);
    //setKitaplar((prev) => [...prev, yeni]);
    let url = "http://localhost:3005/kitaplar";
    if (!secilenKitap) {
      //kitap ekle
      const response = await axios.post(url, yeni);
      if (response.status === 201) {
        await setKitaplar((prev) => [...prev, yeni]);
      }
    } else {
      //kitap düzenle
      url += `/${secilenKitap.id}`;
      await axios.put(url, yeni);
      setSecilenKitap(null);
    }
  };

  const kitapSil = async (id) => {
    // setKitaplar(kitaplar.filter(statedenGelen=>statedenGelen.id !== id));
    // setKitaplar((prev) =>
    //   prev.filter((statedenGelen) => statedenGelen.id !== id)
    // );
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.patch(url, { isDeleted: true });
    if (response.status === 200) {
      setKitaplar((prev) =>
        prev.filter((statedenGelen) => statedenGelen.id !== id)
      );
    }
  };

  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if (secilenKategori && secilenKategori !== "Tüm Kitaplar") {
      url += "?kitapKategori=" + secilenKategori;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();

    setKitaplar(kitaplar);
  };
  const kategorileriGetir = async () => {
    let url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    setKategoriler(kategoriler);
  };

  const cardDuzenle = async (id) => {
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.get(url);

    const duzenlenecekKitap = response.data;

    setSecilenKitap(duzenlenecekKitap);
  };

  // const kitapAra = (event) => {
  //   const dataFind = event.target.value.toLowerCase();

  //   const data = kitaplar.filter((kitap) =>
  //     kitap.kitapAdi.toLowerCase().includes(dataFind)
  //   );

  //   setArananKitap(data);
  // };

  useEffect(() => {
    kitaplariGetir();
    kategorileriGetir();
    // eslint-disable-next-line
  }, [secilenKategori, secilenKitap]);

  return (
    <>
      <Navi
        kategoriler={kategoriler}
        setSecilenKategori={setSecilenKategori}
        secilenKategori={secilenKategori}
        //kitapAra={kitapAra}
      />
      <Form
        kitapEkleDuzenle={kitapEkleDuzenle}
        kitaplar={kitaplar}
        secilenKitap={secilenKitap}
      />
      <CardList
        kitaplar={kitaplar}
        kitapSil={kitapSil}
        cardDuzenle={cardDuzenle}
        // arananKitap={arananKitap}
        // setArananKitap={setArananKitap}
      />
      <h2>BilgeAdamAkademi</h2>
    </>
  );
}

export default App;
