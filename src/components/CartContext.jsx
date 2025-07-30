import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider ({children}) {

    const [cart, setCart] = useState([]);
    const subTotal = cart.reduce((total, product) => total + (product.price*product.quantity), 0);

    function addToCart (product, quantity) {

        setCart((prev) => {

            const existItem = prev.find(item => item.id === product.id);
            if (existItem) {
                return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
            }
            return [...prev, {...product, quantity: quantity}];
        });      

    };

    function removeFromCart (productId) {
        setCart((prev) => {
            return prev.filter(item => item.id !== productId);
        });
    };

    function updateQuantity (productId, newQuantity) {
        setCart((prev) => {
            return prev.map(item => item.id === productId ? {...item, quantity: newQuantity } : item);
        });
    };

    return (
        <CartContext.Provider value={ {cart, addToCart, removeFromCart, updateQuantity, subTotal} }>
            {children}
        </CartContext.Provider>
    );

}

export const useCart = () => useContext(CartContext);

