"use client"
import { useCart } from "../context/CartContext";

export default function CartItem({item}) {
    const { handleDelete, upQty, dnQty } = useCart();
    const price = item.price * item.qty;
    return(
        <>
            <h1>{item.name}</h1>
            <h2>{price.toLocaleString()} تومان</h2>
            <button onClick = {() => upQty(item.id)} >+</button>
            <h3>{item.qty}</h3>
            <button onClick = {() => dnQty(item.id)} >-</button>
            <button onClick = {() => handleDelete(item.id)} >Delete</button>
        </>
    )
}