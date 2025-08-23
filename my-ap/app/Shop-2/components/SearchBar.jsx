"use client"
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SearchBar() {
    // const { search, setSearch } = useCart();
    const { search, setSearch } = useCart();
    const [input, setInput] = useState("");

    function inputOK() {
        setSearch(input);
        redirect("/Shop-2/Search")
    }
    return (
        <>
            <input
                placeholder = "Search..."
                value = {input}
                onChange = {(e) => setInput(e.target.value)}
            />
            {/* <Link href = {"/Shop-2/Search"} >Search</Link> */}
            <button onClick = {() => input.trim().length !== 0 ? inputOK() : redirect("/Shop-2")} >Search</button>
            {/* <button onClick = {() => <SearchPage title = {search}/>}>Search</button> */}

        </>
    )
}