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
// Hooks y contextos
import { CartProvider } from "./components/CartContext";
import { useState, useEffect } from "react";
import { app } from "./firebaseConfig";
import { getFirestore, collection, getDocs} from "firebase/firestore"

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    console.log("Traer todos los productos")
    const db = getFirestore(app)
    const productosCollection = collection(db, "products")
    const elPedido = getDocs(productosCollection)
    setLoading(true);

    elPedido
        .then((respuesta) => {
            const productosFinales = []

            respuesta.docs.forEach((producto) => {
                const finalProduct = {
                    ...producto.data()
                }

                productosFinales.push(finalProduct)
            })

            setProducts(productosFinales)
            setLoading(false);
        })
        .catch(() => {
            console.log("Error al traer los productos")
        })

}, []);

  return (
    <>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Onda Sonar! Descubre productos únicos y servicios inolvidables." products = {products} loading = {loading}/>} />
            <Route path="/productos" element={<ItemListContainer products = {products} loading = {loading}/>} />
            <Route path="/productos/:category" element={<ItemListContainer products = {products} loading = {loading} />} />
            <Route path="/productos/:category/:id" element={<ItemDetailContainer products = {products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </CartProvider>
    </>
  )
}

export default App;
