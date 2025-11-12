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

  useEffect(() => {
    const topHeader = document.querySelector(".header-top") as HTMLElement | null;

    const handleScroll = () => {
      const topHeight = topHeader?.offsetHeight || 0;
      if (window.scrollY > topHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white">
      {/* Top Row */}
      <div className="bg-[#2e3970] flex justify-end font-[Montserrat] header-top">

        {/* Right section */}
        <div className="flex items-center space-x-6 pr-7 content-right">
          {/* Dropdown: Resources - hidden on mobile */}
          <div className="relative group z-10">
            <button className="text-white font-light hover:text-[#597cbc]">
              Resources ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded text-base w-32">
              <Link href="/resources/guide" className="block px-4 py-2 hover:bg-gray-100 hover:rounded">
                Guides
              </Link>
              <Link href="/resources/tools" className="block px-4 py-2 hover:bg-gray-100">
                Tools
              </Link>
            </div>
          </div>

          {/* Dropdown: Company - hidden on mobile */}
          <div className="relative group z-10">
            <button className="text-white font-light hover:text-[#597cbc]">
              Company ▾
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded text-base w-32">
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 hover:rounded">
                About Us
              </Link>
              <Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">
                Careers
              </Link>
            </div>
          </div>

          {/* Contact Us - hidden on mobile */}
          <Link
            href="/contact"
            className=" bg-[#fae190] shadow-[3px_5px_#f1ae19] text-blue-900 font-semibold px-5 py-2 rounded-full hover:bg-yellow-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Second Row */}
      <div
        className={`header-lower bg-white transition-all duration-300 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 right-0 shadow-md z-40"
            : "relative translate-y-[-10px]"
        }`}
      >
        <div className="w-[70%] mx-auto flex items-center justify-between inner-container py-3">
          {/* Logo */}
          <div className="flex space-x-2 logo">
            <Logo />
          </div>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="lower-menu hidden md:flex items-center justify-end space-x-8 px-6 text-gray-700 font-normal text-lg font-[Montserrat] text-blue-theme">
            <Link href="/members">Members</Link>
            <Link href="/employers">Employers</Link>
            <Link href="/brokers">Brokers</Link>
            <Link href="/associations">Associations</Link>
            <Link href="/community">Unify Community</Link>
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
      </div>

      {isSticky && <div className="h-[80px]" />}
      
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
