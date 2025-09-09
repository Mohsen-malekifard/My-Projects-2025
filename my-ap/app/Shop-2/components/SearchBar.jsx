"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { redirect } from "next/navigation";

export default function SearchBar() {
  const { search, setSearch } = useCart();
  const [input, setInput] = useState("");

  function inputOK() {
    setSearch(input);
    redirect("/Shop-2/Search");
  }

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md shadow-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={() =>
            input.trim().length !== 0 ? inputOK() : redirect("/Shop-2")
          }
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold hover:opacity-90 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
}
