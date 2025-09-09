"use client";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { handleDelete, upQty, dnQty } = useCart();
  const price = item.price * item.qty;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full rounded-2xl bg-white/10 backdrop-blur-md shadow-lg p-4 sm:p-6 transition-all hover:scale-[1.02]">
      
      {/* نام و قیمت */}
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-lg font-bold text-white">{item.name}</h1>
        <h2 className="mt-1 text-gray-200 font-semibold">
          {price.toLocaleString()} تومان
        </h2>
      </div>

      {/* تعداد و دکمه‌ها */}
      <div className="mt-3 sm:mt-0 flex items-center gap-2">
        <button
          onClick={() => upQty(item.id)}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-bold hover:opacity-90 transition-all"
        >
          +
        </button>
        <span className="px-4 py-1 text-white font-medium">{item.qty}</span>
        <button
          onClick={() => dnQty(item.id)}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold hover:opacity-90 transition-all"
        >
          -
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="px-4 py-1 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
