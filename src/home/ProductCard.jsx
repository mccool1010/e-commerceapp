import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../CartContext.js";

const ProductCard = ({ id, name, imageURL, price }) => {

    const { items, addToCart } = useContext(CartContext);

    console.log(items);

    return (
        <div className="p-4 rounded border">
            <Link to={`/product/${id}`}>
                {imageURL ? (
                    <img src={imageURL} alt="" />
                ) : (
                    <div>Placeholder</div>
                )}
                <div className="md:text-red-500 border-purple-500 text-lg text-left md:text-center font-semibold p-2 rounded-lg border shadow">
                    {name}
                </div>
                <div>Rs. {price}</div>
            </Link>
            <button
                type="button"
                className="bg-purple-500 rounded-lg px-4 py-2"
                onClick={() => {
                    addToCart({
                        id,
                        name,
                        price,
                        imageURL,
                    })
                }}
            >
                Add to cart
            </button>
        </div>
    );

};

export default ProductCard;