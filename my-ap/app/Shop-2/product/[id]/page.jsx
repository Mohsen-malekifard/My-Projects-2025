"use client"
import { useCart } from "../../context/CartContext";
import { products } from "../../lib/products";

export default function ProductDetail({params}) {
    const {id} = params;
    const { AddToCart } = useCart();
    const product = products.find(product => product.id == parseInt(id))
    return(
        <>
            <h1>{product.name}</h1>
            <h2>{product.price.toLocaleString()} تومان</h2>
            <h3>{product.description}</h3>
            <button onClick = {() => AddToCart(product)} >Add to cart</button>
        </>
    )
}