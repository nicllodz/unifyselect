// this is site header

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    // Return focus to hamburger button when menu closes
    setTimeout(() => hamburgerButtonRef.current?.focus(), 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-blue-theme shadow-md transition-all duration-300 ease-in-out">
      
        <div className="w-[90%] mx-auto flex items-center justify-between py-1">
          {/* Logo */}
          <div className="flex space-x-2 logo">
            <Logo />
          </div>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="lower-menu hidden md:flex items-center justify-end space-x-8 font-normal text-lg font-[Montserrat] text-white">
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/individuals">Individuals</Link>
            <Link href="/business">Business</Link>
            <Link href="/doctors">Doctors</Link>
            <Link href="/plans">Plans</Link>
          </div>

          {/* Mobile Hamburger Button - visible only on mobile */}
          <button
            ref={hamburgerButtonRef}
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      
      {/* Mobile Menu */}
      <div className="">
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={handleCloseMenu} 
        />
      </div>

    </header>
  );
}
