"use client";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useCart();
  const allPrices = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex flex-col items-center py-16 px-6">
      {/* عنوان */}
      <h1 className="text-4xl font-extrabold text-white mb-10">
        🛒 Cart Page
      </h1>

      {/* اگر خالی بود */}
      {cart.length === 0 && (
        <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-lg p-8 text-center">
          <h1 className="text-xl text-gray-300">Your Cart Is Empty</h1>
        </div>
      )}

      {/* آیتم‌ها */}
      <div className="w-full max-w-3xl space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* جمع کل */}
      {cart.length >= 1 && (
        <div className="mt-10 w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-md shadow-lg p-6 flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-200">
            Total:
          </h4>
          <h4 className="text-xl font-bold text-pink-400">
            {allPrices.toLocaleString()} تومان
          </h4>
        </div>
      )}
    </div>
  );
}
