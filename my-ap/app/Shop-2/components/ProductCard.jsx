"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function ProductCard({ product }) {
  const { AddToCart } = useCart();

  return (
    <div className="group w-full max-w-sm rounded-2xl bg-white/10 backdrop-blur-md shadow-lg p-6 text-center transition-all hover:scale-105 hover:shadow-2xl">
      {/* اسم محصول */}
      <h1 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
        {product.name}
      </h1>

      {/* قیمت */}
      <h2 className="mt-3 text-lg font-semibold text-gray-200">
        {product.price.toLocaleString()} <span className="text-sm">تومان</span>
      </h2>

      {/* دکمه‌ها */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link
          href={`/Shop-2/product/${product.id}`}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-sm font-medium hover:opacity-90 transition-all"
        >
          Detail
        </Link>
        <button
          onClick={() => AddToCart(product)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white text-sm font-semibold hover:opacity-90 transition-all"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
