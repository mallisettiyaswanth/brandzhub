"use client";

import { CarrotIcon, Search, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store"; // Adjust path based on your project

export function Header() {
  // Fetch the total quantity of items in the cart
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="border border-gray-300 fixed top-0 z-10 w-full bg-transparent h-20 flex items-center backdrop-blur rounded-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <Link href="/" className="text-xl font-bold">
            <div className="flex items-center text-center">
              <img src="/Logo.png" alt="" className="w-10 h-10" />
              <span className="text-center mt-1 ml-2 hidden sm:block">
                brandZhub
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-grow max-w-xs mx-auto relative sm:block">
            <input
              type="text"
              placeholder="Search for Watches, Crocs, etc.."
              className="w-full p-2 pl-10 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>

          <nav className="flex items-center gap-8 font-bold relative">
            <Link href="/" className="text-md">
              Home
            </Link>
            <Link href="/cart" className="text-md relative">
              <ShoppingCartIcon />
              {/* Badge for item count */}
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
    </header>
  );
}
