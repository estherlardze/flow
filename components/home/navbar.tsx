"use client";

import { useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Features", "Pricing", "Faqs", "Contact Us"];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-slate-900/40 text-white py-2 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 relative">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">LeadFlow</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="#" className="bg-blue-500 py-2 px-6 rounded text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600">
            Login 
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full backdrop-blur-md bg-slate-900 shadow-lg md:hidden z-50 flex flex-col space-y-4 px-6 py-6 rounded-b-xl">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-200 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Link
              href="#"
              className="bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600 py-2 rounded-2xl px-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Login 
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
