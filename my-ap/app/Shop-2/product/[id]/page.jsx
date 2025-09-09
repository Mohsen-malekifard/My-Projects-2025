"use client";
import { useCart } from "../../context/CartContext";
import { products } from "../../lib/products";

export default function ProductDetail({ params }) {
  const { id } = params;
  const { AddToCart } = useCart();
  const product = products.find((product) => product.id == parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-xl">
        محصول یافت نشد ❌
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-16 px-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl p-8 text-center">
        {/* نام */}
        <h1 className="text-3xl font-extrabold text-white">
          {product.name}
        </h1>

        {/* قیمت */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-200">
          {product.price.toLocaleString()}{" "}
          <span className="text-sm">تومان</span>
        </h2>

        {/* توضیحات */}
        <h3 className="mt-6 text-gray-300 leading-relaxed">
          {product.description}
        </h3>

        {/* دکمه */}
        <button
          onClick={() => AddToCart(product)}
          className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold hover:opacity-90 transition-all"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
