"use client"
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
    const { cart } = useCart();
    const allPrices = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    return(
        <>
            <h1>Cart Page</h1>
            {cart.length == 0 && <h1>Your Cart Is Empty</h1>}
            {cart.map(item => <CartItem key = {item.id} item = {item} />)}
            {cart.length >= 1 && <h4>{allPrices.toLocaleString()} تومان</h4>}
        </>
    )
}