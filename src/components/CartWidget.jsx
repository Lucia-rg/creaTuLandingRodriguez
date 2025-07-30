import "../styles/components/_cartwidget.scss";
import { useCart } from "./CartContext";
import { NavLink } from "react-router-dom";

function CartWidget({className}) {

  const {cart} = useCart();
  const totalItems = (cart).reduce((total, item) => total + item.quantity, 0);

    return (
      <NavLink to="/cart" className="nav-link">
        <div className={`cart-widget ${className} d-flex align-items-center ms-3`}>
          <i className="bi bi-cart fw-bold fs-4 cart-icon"></i>
          <span className="badge text-bg-secondary ms-1 cart-badge">{totalItems}</span>
        </div>
                        
      </NavLink>
        
      );

};

export default CartWidget;