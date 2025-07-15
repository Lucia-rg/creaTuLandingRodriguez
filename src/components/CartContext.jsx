import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider ({children}) {

    const [cart, setCart] = useState([]);

    function addToCart (product, quantity) {

        setCart(prev => {

            const existItem = prev.find(item => item.id === product.id);
            if (existItem) {
                return prev.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item);
            }
            return [...prev, {...product, quantity: quantity}];
        });      

    };

    return (
        <CartContext.Provider value={ {cart, addToCart} }>
            {children}
        </CartContext.Provider>
    );

}

export const useCart = () => useContext(CartContext);

