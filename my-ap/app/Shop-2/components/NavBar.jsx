"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  const { cart } = useCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="bg-white shadow-md w-full top-14 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Home */}
        <Link
          href="/Shop-2"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          MyShop
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link
            href="/Shop-2"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/Shop-2/cart"
            className="relative flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {/* Badge */}
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
