import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface shadow-[0px_4px_20px_rgba(62,123,68,0.2)]">
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 bg-primary-container/20 rounded-xl flex items-center justify-center border border-primary/30">
            <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          {/* primary = #6bfc81 — bright neon green, readable on near-black */}
          <span className="font-headline font-bold text-primary text-2xl tracking-tight">foodForALL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {/* on-surface = #ccfcd9 — light mint, clearly readable on dark bg */}
          <Link className="font-label text-on-surface hover:text-primary transition-colors duration-200" to="/#mission">Mission</Link>
          <Link className="font-label text-on-surface hover:text-primary transition-colors duration-200" to="/find-food">Find Food</Link>
          <Link className="font-label text-on-surface hover:text-primary transition-colors duration-200" to="/register">List Surplus</Link>
        </div>

        {/* Right CTA / Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6 mr-2">
            <Link to="/login" className="font-label text-on-surface hover:text-primary transition-colors duration-200">Log In</Link>
            <Link to="/signup" className="font-label text-on-surface hover:text-primary transition-colors duration-200">Sign Up</Link>
          </div>
          {/* primary-container=#11b948, on-primary-container=#002a09 — good contrast */}
          <Link to="/register" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-headline text-[16px] font-bold active:scale-[0.98] hover:bg-primary-fixed-dim transition-all duration-150 shadow-md shadow-primary/20">
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface hover:text-primary focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-surface-container border-b border-outline-variant/30 px-6 py-6 space-y-4 shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <a onClick={() => setIsOpen(false)} className="block font-label text-on-surface hover:text-primary py-2 border-b border-outline-variant/20 transition-colors" href="#mission">Mission</a>
        <Link onClick={() => setIsOpen(false)} className="block font-label text-on-surface hover:text-primary py-2 border-b border-outline-variant/20 transition-colors" to="/find-food">Find Food</Link>
        <Link onClick={() => setIsOpen(false)} className="block font-label text-on-surface hover:text-primary py-2 border-b border-outline-variant/20 transition-colors" to="/register">List Surplus</Link>
        <div className="pt-2">
          <Link onClick={() => setIsOpen(false)} to="/login" className="font-label text-on-surface hover:text-primary transition-colors">Log In</Link>
        </div>
      </div>
    </nav>
  );
}
