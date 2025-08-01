import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/_itemdetailcontainer.scss";


function ItemCount ({stock, init = 1, onAddToCart}) {

    const [quantity, setQuantity] = useState(init);
    

    const increment = () => {
        if (quantity < stock) setQuantity(quantity+1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity-1);
    };

    const handleAddtoCart = () => {
        if (stock > 0) {
            onAddToCart(quantity);
        }    
    };

    return (

        <div className="row justify-content-center align-content-center">
            <div className="col mb-4 justify-content-center align-content-center">
                <div className="d-flex align-items-center counter-container">

                    <button className="btn btn-counter" onClick={decrement} disabled={quantity <= 1} >
                        <i className="bi bi-dash-lg fs-5"></i>
                    </button>

                    <p className="m-4">{quantity}</p>

                    <button className="btn btn-counter" onClick={increment} disabled={quantity >= stock}>
                        <i className="bi bi-plus-lg fs-5"></i>
                    </button>

                </div>

            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-between gap-2">
                <button className="btn btn-outline-primary btn-carrito" onClick={handleAddtoCart}>
                <i className="bi bi-cart me-2 "></i>
                Agregar al carrito
                </button>
                <NavLink to="/cart" className="nav-link">
                    <button className="btn-compra btn btn-outline-primary" onClick={handleAddtoCart}>
                    Comprar ahora
                    </button> 
                </NavLink>
            </div>
        </div>

    )

}

export default ItemCount;