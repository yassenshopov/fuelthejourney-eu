"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-end">
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-fuel-black" />
          ) : (
            <Menu className="h-6 w-6 text-fuel-black" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 mt-8">
          <a
            href="#about"
            className="font-bebas font-bold uppercase text-fuel-black hover:text-fuel-pink transition-colors text-2xl"
          >
            ABOUT US
          </a>
          <a
            href="#adce"
            className="font-bebas font-bold uppercase text-fuel-black hover:text-fuel-pink transition-colors text-2xl"
          >
            ADCE
          </a>
          <a
            href="#contacts"
            className="font-bebas font-bold uppercase text-fuel-black hover:text-fuel-pink transition-colors text-2xl"
          >
            CONTACTS
          </a>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-fuel-black md:hidden z-50">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#about"
                className="block font-bebas font-bold uppercase text-fuel-black hover:text-fuel-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT US
              </a>
              <a
                href="#adce"
                className="block font-bebas font-bold uppercase text-fuel-black hover:text-fuel-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ADCE
              </a>
              <a
                href="#contacts"
                className="block font-bebas font-bold uppercase text-fuel-black hover:text-fuel-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACTS
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
