"use client"
import { useCart } from "../context/CartContext";
import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function Search() {
    const { search, setSearch} = useCart();
    const filter = products.filter(product => product.name.includes(search))
    const [input, setInput] = useState("");
    return(
        <>
            <input
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
                placeholder = "Search..."
            />
            <button onClick = {() => input.trim().length !== 0 ? setSearch(input) : redirect("/Shop-2")} >Search</button>
            {/* {input.trim().length !== 0 && <h1>نتایج جستجو برای: {search}</h1>} */}
            <h1>نتایج جستجو برای: {search}</h1>
            {filter.map(product => (
                <ProductCard key = {product.id} product = {product} />
            ))}
            {filter.length == 0 && <h1>Not Found</h1>}
        </>
    )
}