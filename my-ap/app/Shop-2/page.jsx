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
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-black py-24 overflow-hidden">
      {/* لایه تاریک‌تر */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-6 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 
                     animate-text-shadow"
        >
          Welcome to my Shop
        </h1>

        <p className="mt-6 text-lg text-gray-300 animate-fade-in">
          Discover exclusive products with unbeatable offers ✨
        </p>

        <SearchBar/>
      </div>
    </section>

            <div className="mt-15 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </>
    )
}
