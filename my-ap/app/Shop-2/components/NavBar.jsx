"use client"
import Link from "next/link";
import { useCart } from "../context/CartContext"

export default function NavBar() {
    const { cart } = useCart();
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <>
            <Link href = {"/Shop-2"} >Home</Link>
            <Link href = {"/Shop-2/cart"} >Cart ({totalCount})</Link>
        </>
    )
}

