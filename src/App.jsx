// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
// Librerias
import {Routes, Route} from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import NoPage from "./components/NoPage";
// import { getProducts } from "./firebaseConfig";
// Hooks y contextos
import { CartProvider } from "./components/CartContext";
import { useEffect } from "react";

function App() {

  // useEffect( () => {
  //   getProducts();

  // }, [])

  return (
    <>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Onda Sonar! Descubre productos únicos y servicios inolvidables."/>} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/productos/:category/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          {/* <Footer /> */}
      </CartProvider>
    </>
  )
}

export default App;
