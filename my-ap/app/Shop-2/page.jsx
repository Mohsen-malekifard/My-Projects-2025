"use client"
import { useCart } from "./context/CartContext";
import { products } from "./lib/products";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";


export default function Home() {
    const { search } = useCart();
    const filter = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <h1>Welcome to my Shop</h1>
            <SearchBar/>
            {filter.map(product => (
                <ProductCard key = {product.id} product = {product} />
            ))}
        </>
    )
}