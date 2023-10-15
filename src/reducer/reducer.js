export const initialState = {
  kitaplar: [],
  kategoriler: [],
  secilenKategori: "",
  secilenKitap: null,
  kitapAdi: "",
  kitapYazari: "",
  kitapKategori: "Kategori Seçiniz",
  sayfaSayisi: "",
  kitapResim: "",
  kitapAciklama: "",
  arananKitap: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    //case1
    case"kitapGetir":
      return {
        ...state,
        kitaplar: action.payload,
      };
    case"kitapAdi":
      return {
        ...state,
        kitapAdi: action.payload,
      };
    case"kitapYazari":
      return {
        ...state,
        kitapYazari: action.payload,
      };
    case"kitapKategori":
      return {
        ...state,
        kitapKategori: action.payload,
      };
    case"kitapResim":
      return {
        ...state,
        kitapResim: action.payload,
      };
    case"sayfaSayisi":
      return {
        ...state,
        sayfaSayisi: action.payload,
      };
    case"kitapAciklama":
      return {
        ...state,
        kitapAciklama: action.payload,
      };
    case"kategoriGetir":
      return {
        ...state,
        kategoriler: action.payload,
      };
    case"resetForm":
      return {
        ...state,
        kitapAdi: "",
        kitapYazari: "",
        kitapKategori: "Kategori Seçiniz",
        sayfaSayisi: "",
        kitapResim: "",
        kitapAciklama: "",
      };
    case"arananKitap":
      return {
        ...state,
        arananKitap: action.payload,
      };

    case"kitapSil":
      const kitapGuncelle = state.kitaplar.filter(
        (kitap) => kitap.id !== action.id
      );
      return {
        ...state,
        kitaplar: kitapGuncelle,
      };

    case"secilenKategori":
      return {
        ...state,
        secilenKategori: action.payload,
      };
    case"kitapEkle":
      const kitapEkle = [...state.kitaplar, action.yeni];
      return {
        ...state,
        kitaplar: kitapEkle,
      };
    case"kitapDuzenle":
      return {
        ...state,
        secilenKitap: null,
      };
    case"secilenKitap":
      return {
        ...state,
        kitapAdi: action.payload.kitapAdi,
        kitapYazari: action.payload.kitapYazari,
        kitapAciklama: action.payload.kitapAciklama,
        kitapResim: action.payload.kitapResim,
        sayfaSayisi: action.payload.sayfaSayisi,
        kitapKategori: action.payload.kitapKategori,
        secilenKitap: action.payload,
      };
    default:
      return state;
  }
};
