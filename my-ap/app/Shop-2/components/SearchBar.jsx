"use client"
import { useCart } from "../context/CartContext";

export default function SearchBar() {
    const { search, setSearch } = useCart();

    return (
        <>
            <input
                placeholder = "Search..."
                value = {search}
                onChange = {(e) => setSearch(e.target.value)}
            />
        </>
    )
}