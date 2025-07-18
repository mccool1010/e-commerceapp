import {createContext} from "react";

export const CartContext = createContext({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
});