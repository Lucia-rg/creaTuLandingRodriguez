// Hooks
import { useParams } from "react-router-dom";
// Components
import ItemList from "./ItemList";

function ItemListContainer ( {greeting, products, loading} ) {

  const {category} = useParams();

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