import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import {CartContext} from "../CartContext.js";

const HomePage = () => {

    const [products, setProducts] = useState([]);

    const { items } = useContext(CartContext);

    const fetchProducts = () => {
        fetch("https://sheetdb.io/api/v1/lznph4tf5x7x2")
            .then(reponse => reponse.json())
            .then(data => setProducts(data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto p-4 md:p-6">
            <h1 className="font-semibold text-2xl p-2">
                Cart
            </h1>
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        {item.name} | {item.quantity} | {item.price * item.quantity}
                    </div>
                ))}
            </div>
            <h1 className="font-semibold text-2xl p-2">
                Products
            </h1>
            <div className="flex flex-wrap mx-0">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-full md:w-1/3 lg:w-1/4 p-2"
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    )

};

export default HomePage;