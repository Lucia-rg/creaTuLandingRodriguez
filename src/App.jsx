// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
// Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Onda Sonar! Descubre productos únicos y servicios inolvidables."  />
    </>
  )
}

export default App;
