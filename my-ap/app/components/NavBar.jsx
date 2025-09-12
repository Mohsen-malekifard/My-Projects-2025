"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* لوگو */}
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-green-400 via-yellow-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,150,0.8)] hover:scale-105 transition-transform"
        >
          Mohsen.dev
        </Link>

        {/* دکمه منو (برای موبایل) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white/80 md:hidden focus:outline-none"
        >
          Menu
        </button>

        {/* منو دسکتاپ */}
        <ul className="hidden md:flex items-center gap-6 text-white/80">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/TodoApp" className="hover:text-yellow-300 transition-colors">
              Todo App
            </Link>
          </li>
          <li>
            <Link
              href="https://example-mongodb-apps.vercel.app/"
              className="hover:text-yellow-300 transition-colors"
              target="_blank"
            >
              Register & Login System
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-yellow-300 transition-colors">
              My Shop Site
            </Link>
          </li>
          <li>
            <Link href="/Shop-2" className="hover:text-yellow-300 transition-colors">
              My Shop Site 2
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:text-yellow-300 transition-colors">
              My Blog Site
            </Link>
          </li>
          <li>
            <Link href="/Blog-2" className="hover:text-yellow-300 transition-colors">
              My Blog Site 2
            </Link>
          </li>
        </ul>
      </div>

      {/* منو موبایل */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl">
          <ul className="p-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/TodoApp"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                Todo App
              </Link>
            </li>
            <li>
              <Link
                href="/TodoApp-2"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                Todo App 2
              </Link>
            </li>
            <li>
              <Link
                href="https://example-mongodb-apps.vercel.app/"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
                target="_blank"
              >
                Register & Login System
              </Link>
            </li>
            <li>
              <Link
                href="/Shop"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                My Shop Site
              </Link>
            </li>
            <li>
              <Link
                href="/Shop-2"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                My Shop Site 2
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                My Blog Site
              </Link>
            </li>
            <li>
              <Link
                href="/Blog-2"
                className="block px-3 py-2 rounded font-medium text-white hover:bg-yellow-400/20 transition-colors"
                onClick={() => setOpen(false)}
              >
                My Blog Site 2
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
