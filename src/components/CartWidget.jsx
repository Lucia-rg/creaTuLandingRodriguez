import "../styles/components/_cartwidget.scss";
import { useCart } from "./CartContext";

function CartWidget({className}) {

  const {cart} = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={`cart-widget ${className} d-flex align-items-center ms-3`}>
          <i className="bi bi-cart fw-bold fs-4 cart-icon"></i>
          <span className="badge text-bg-secondary ms-1 cart-badge">{cart.length}</span>
        </div>
      );

};

export default CartWidget;