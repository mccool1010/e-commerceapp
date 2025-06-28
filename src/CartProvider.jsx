import React from "react";
import {CartContext} from "./CartContext.js";

const CartProvider = ({ children }) => {

    const [items, setItems] = React.useState([]);

    const addToCart = (item) => {
        if(items.find((i) => i.id === item.id)) {
            setItems([
                ...items.map((i) => {
                    if(i.id === item.id) {
                        return {
                            ...i,
                            quantity: i.quantity + 1,
                        }
                    }
                    return i;
                }),
            ]);

        } else {
            setItems((prev) => [
                ...prev,
                {
                    ...item,
                    quantity: 1,
                }
            ]);

        }
    }

    const removeFromCart = (id) => {
        setItems((prev) =>
            prev.filter((item) => item.id === id)
        );
    }

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )

};

export default CartProvider;