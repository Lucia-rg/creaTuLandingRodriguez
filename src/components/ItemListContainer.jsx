// Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { app } from "../firebaseConfig.js"
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"
// Components
import ItemList from "./ItemList";

function ItemListContainer ( {greeting} ) {

  const {category} = useParams();
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

//   useEffect(() => {
    
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         const response = await fetch("/data/products.json");
//         const data = await response.json();
//         setProducts(data);
//       } catch (err) {
//           console.error("Fetch error:", err);
//       }
//       finally {
//         setLoading(false);
//       }

//     };

//     fetchData();

// }, []);

    return (

        <div className="container my-4">
          <div className="row ">
            <div className="col-md-12 mx-auto text-center">
              <h2>{greeting}</h2>
              <ItemList category={category} products = {products} loading = {loading}/>
            </div>
          </div>
      </div>

    );

};

export default ItemListContainer;