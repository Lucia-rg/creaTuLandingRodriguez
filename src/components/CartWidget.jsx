import "../styles/components/_cartwidget.scss";

function CartWidget({className}) {
    return (
        <div className={`cart-widget ${className} d-flex align-items-center ms-3`}>
          <i className="bi bi-cart fw-bold fs-4 cart-icon"></i>
          <span className="badge text-bg-secondary ms-1 cart-badge">0</span>
        </div>
      );

};

export default CartWidget;