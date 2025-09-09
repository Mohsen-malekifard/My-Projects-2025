"use client";
import { useCart } from "../context/CartContext";
import { products } from "../lib/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function Search() {
  const { search, setSearch } = useCart();
  const [input, setInput] = useState("");
  const filter = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if (input.trim().length !== 0) {
      setSearch(input);
    } else {
      redirect("/Shop-2");
    }
  };

  return (
    <div className="flex flex-col items-center py-16 px-6 space-y-10">
      {/* کارت جستجو */}
      <div className="w-full max-w-2xl rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          Search: {search || "سرچ برای ..."}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search..."
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md text-gray-200 placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold hover:opacity-90 transition-all"
          >
            Search
          </button>
        </div>
      </div>

      {/* نتایج */}
      <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filter.length > 0 ? (
          filter.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-300 text-xl mt-6">
            Not Found 🔍
          </div>
        )}
      </div>
    </div>
  );
}
