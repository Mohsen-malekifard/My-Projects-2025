"use client"
import { useCart } from "../context/CartContext";
import Link from "next/link";
export default function ProductCard({product}) {
    const { AddToCart } = useCart();

    return(
        <>
            <h1>{product.name}</h1>
            <h2>{product.price.toLocaleString()} تومان</h2>
            <Link href = {`/Shop-2/product/${product.id}`} >Detail</Link>
            <button onClick = {() => AddToCart(product)} >Add To Cart</button>
        </>
    )
}