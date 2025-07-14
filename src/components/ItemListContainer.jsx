// Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Components
import ItemList from "./ItemList";

function ItemListContainer ( {greeting} ) {

  const {category} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch("/data/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
          console.error("Fetch error:", err);
      }
      finally {
        setLoading(false);
      }

    };

    fetchData();

}, []);

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