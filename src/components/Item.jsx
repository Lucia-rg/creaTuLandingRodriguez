import "../styles/components/_itemcard.scss";
import { formatPriceCOP } from "../utilities/formaterPrice";
import {NavLink} from "react-router-dom";

function Item ( {product}) {

    return (

      <div className="card shadow-sm m-2">
          <img 
            src={product.image}
            alt={product.name} 
            className="img-list"
          />
          <div className="card-body">
            <h5>{product.name}</h5>
            <p>{formatPriceCOP(product.price)} COP</p>

            <div className="d-flex align-items-center gap-3 justify-content-center mt-1">
              <button className="btn btn-outline-primary">Agregar al carrito</button>
              <NavLink to={`/productos/${product.category}/${product.id}`}><i className="bi bi-search fw-bold fs-4 search-icon"></i></NavLink>
              
            </div>
            
          </div>
      </div>

    );

};

export default Item;
