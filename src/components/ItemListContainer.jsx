import ItemList from "./ItemList";
import products from "../data/products";


function ItemListContainer ( {greeting} ) {
    return (

        <div className="container my-4">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2>{greeting}</h2>
              <ItemList products={products} />
              <p>Próximamente Catálogo de productos</p>
            </div>
          </div>
      </div>

    );

};

export default ItemListContainer;