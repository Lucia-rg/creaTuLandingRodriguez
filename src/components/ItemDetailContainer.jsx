import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/components/_itemcard.scss";
import "../styles/components/_itemdetailcontainer.scss";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer () {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    
        const fetchProduct = async () => {
          try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await fetch("/data/products.json");
            const data = await response.json();
            const findProductById = data.find(product => product.id === id);
            setProduct(findProductById);
          } catch (err) {
              console.error("Fetch error:", err);
          }
          finally {
            setLoading(false);
          }
    
        };
    
        fetchProduct();
    
    }, [id]);

    if (loading) {

        return (
          <div className="col-12 text-center py-5">
            <div>
              <span >Cargando producto...</span>
            </div>
          </div>
        )
    
      }

    return (
        <>
            <ItemDetail product = {product} />
        </>  
    )


}

export default ItemDetailContainer;