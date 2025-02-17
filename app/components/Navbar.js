'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-red-600">Pizza</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">Menu</Link>
            <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</Link>
            <Link href="#reviews" className="text-gray-700 hover:text-red-600 transition-colors">Reviews</Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#menu" className="block px-3 py-2 text-gray-700 hover:text-red-600">Menu</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-600">About</Link>
            <Link href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-red-600">Reviews</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</Link>
            <button className="w-full text-left px-3 py-2 text-white bg-red-600 rounded-md hover:bg-red-700">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 