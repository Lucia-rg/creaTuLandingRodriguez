import { useCart } from "./CartContext";
import { useNavigate, NavLink } from 'react-router-dom';
import ItemCart from "./ItemCart";

import { formatPriceCOP } from "../utilities/formaterPrice";
import "../styles/components/_cart.scss";


function Cart () {

    const {cart, setCart, removeFromCart, updateQuantity, subTotal} = useCart();
    const navigate = useNavigate();

    // const handleSendForm = () => {

    return (
        <div className="container py-3">
            <h1 className="mb-4">Carrito de compras</h1>

            {cart.length === 0 ? (
                <div className="text-center py-3">

                    <h3>Tu carrito está vacío</h3>

                    <button className="btn btn-outline-primary btn-nav mt-3" onClick={() => navigate('/')}>
                    <i className="bi bi-arrow-left"></i> Ir a ver los productos
                    </button>

                </div>)
             : (
                <>
                    <div className="col-lg-8">
                        {cart.map(product => (
                            <ItemCart key={product.id} product={product} onRemoveFromCart = {removeFromCart} onUpdateQuantity = {updateQuantity}/> ))}

                        <button className="btn btn-outline-primary btn-nav mt-3" onClick={() => setCart([])}>Limpiar carrito</button>
                    </div>

                    

                    <div className="cart-summary">
                    <h3>Subtotal: {formatPriceCOP(subTotal.toFixed(2))} COP </h3>
                    <p>Impuestos incluidos y envío calculado en el checkout</p>

                    <NavLink to="/checkout" className="nav-link">
                    <button className="btn btn-outline-primary btn-checkout mt-3">Finalizar Pedido <i className="bi bi-arrow-right"></i> </button>
                    </NavLink>

                    </div>
                </>
            
            )
             }

            {/* <CheckoutForm onSendForm = {handleSendForm} /> */}

        </div>
    )

}

export default Cart;
