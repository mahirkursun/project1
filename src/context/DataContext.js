import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";


const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //case13-14
  const kitapEkleDuzenle = async (yeni) => {
  
    let url = "http://localhost:3005/kitaplar";
    if (!state.secilenKitap) {
      //kitap ekle
      const response = await axios.post(url, yeni);
      if (response.status === 201) {
        dispatch({ type: "kitapEkle", yeni });
        toast.success("Yeni Kitap Eklendi!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } else {
      //kitap düzenle
      url += `/${state.secilenKitap.id}`;
      await axios.put(url, yeni);
      dispatch({ type: "kitapDuzenle" });
      toast.warn("Kitap Düzenlendi!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  //case11
  const kitapSil = async (id) => {
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.patch(url, { isDeleted: true });
    if (response.status === 200) {
      dispatch({ type: "kitapSil", id });

      toast.error("Kitap Silindi!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  //case1
  const kitaplariGetir = async () => {
    let url = "http://localhost:3005/kitaplar";
    if (state.secilenKategori && state.secilenKategori !== "Tüm Kitaplar") {
      url += "?kitapKategori=" + state.secilenKategori;
    }
    const response = await fetch(url);
    const kitaplar = await response.json();

    dispatch({ type: "kitapGetir", payload: kitaplar });
  };
  //case8
  const kategorileriGetir = async () => {
    let url = "http://localhost:3005/kategoriler";
    const response = await axios.get(url);
    const kategoriler = await response.data;
    dispatch({ type: "kategoriGetir", payload: kategoriler });
  };
  //case15
  const cardDuzenle = async (id) => {
    let url = `http://localhost:3005/kitaplar/${id}`;
    const response = await axios.get(url);

    const duzenlenecekKitap = response.data;
    dispatch({ type: "secilenKitap", payload: duzenlenecekKitap });
  };

  useEffect(() => {
    kitaplariGetir();
    kategorileriGetir();
    // eslint-disable-next-line
  }, [state.secilenKategori, state.secilenKitap]);

  //case9
  const handleSubmit = (e) => {
    e.preventDefault();

    const yeniKitapBilgisi = {
      id: state.kitaplar.length + 1,
      kitapAdi: state.kitapAdi,
      kitapYazari: state.kitapYazari,
      kitapKategori: state.kitapKategori,
      sayfaSayisi: state.sayfaSayisi,
      kitapResim: state.kitapResim,
      kitapAciklama: state.kitapAciklama,
    };

    kitapEkleDuzenle(yeniKitapBilgisi);

    dispatch({ type: "resetForm" });
  };

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        kitapEkleDuzenle,
        kitapSil,
        cardDuzenle,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
