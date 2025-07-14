// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
// Librerias
import {Routes, Route} from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
// import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
// import Footer from "./components/Footer";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Onda Sonar! Descubre productos únicos y servicios inolvidables."/>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:category" element={<ItemListContainer />} />
        <Route path="/productos/:category/:id" element={<ItemDetailContainer />} />
      </Routes>
      {/* <Main /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App;
