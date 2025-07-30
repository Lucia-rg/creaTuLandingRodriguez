import { useCart } from "./CartContext";


function CheckoutForm ( {onSendForm}) {

    const {cart, removeFromCart, updateQuantity, subTotal} = useCart();

    const handleClick = () => {
        onSendForm();

    }

    return (
        <div>
            <h2>Formulario</h2>
            <button onClick = {handleClick}>Comprar</button>
            
        </div>
    )

}

export default CheckoutForm;