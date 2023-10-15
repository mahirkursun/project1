
import CardList from "./components/CardList";
import Form from "./components/Form";
import Navi from "./components/Navi";
import { DataProvider } from "./context/DataContext";
import "./style/App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <DataProvider>
      <ToastContainer/>
      <Navi/>
      <Form/>
      <CardList/>
      <h2>BilgeAdamAkademi</h2>
    </DataProvider>
  );
}

export default App;
