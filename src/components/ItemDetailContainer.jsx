import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/components/_itemcard.scss";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer () {

    const {category, id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const validCategories = ['microfonos', 'audifonos', 'accesorios', 'estudio'];

    useEffect(() => {
    
        const fetchProduct = async () => {
          try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await fetch("/data/products.json");
            const data = await response.json();
            const findProductById = data.find(product => product.id === id);
            if (!findProductById || (category && !validCategories.includes(category))) { 
              navigate('*') 
              return}  
            setProduct(findProductById)
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