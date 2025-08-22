"use client"
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-blue-600 text-white px-5 py-3 shadow">
        <h1 className="text-lg font-bold">My Project</h1>
        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-lg hover:bg-blue-700 transition"
        >
          {/* آیکون همبرگری */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Overlay با بلور + تیرگی */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition"
        ></div>
      )}

      {/* منوی همبرگری */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <ul className="p-4 space-y-4">
          <li>
            <Link
              href="/"
              className="block px-3 py-2 rounded font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/TodoApp"
              className="block px-3 py-2 rounded font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Todo App
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
