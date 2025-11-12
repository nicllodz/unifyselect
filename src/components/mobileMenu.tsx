"use client";

import { useEffect, useState, useRef } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus management and escape key handling
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleTab);
      document.body.style.overflow = "hidden";

      // Move focus to close button when menu opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTab);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 backdrop-blur z-40 md:hidden "
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className="fixed w-full top-0 right-0 max-w-full z-60 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl bg-[#2e3970]"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-2">
              {/* Main Navigation Items */}
              <a
                href="/members"
                className="block px-4 py-3 text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Members
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Employers
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Brokers
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Associations
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Unify Healthcare™ Community
              </a>

              {/* Resources Dropdown */}
              <div className="mt-2">
                <button
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white rounded-lg transition-colors"
                  aria-expanded={resourcesOpen}
                  aria-controls="resources-menu"
                >
                  <span>Resources</span>
                  {resourcesOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <div
                  id="resources-menu"
                  className={`ml-4 mt-1 space-y-1 ${!resourcesOpen ? "hidden" : ""}`}
                  aria-hidden={!resourcesOpen}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-300 rounded-lg transition-colors text-sm"
                    onClick={onClose}
                    tabIndex={resourcesOpen ? 0 : -1}
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-300 rounded-lg transition-colors text-sm"
                    onClick={onClose}
                    tabIndex={resourcesOpen ? 0 : -1}
                  >
                    Case Studies
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-300 rounded-lg transition-colors text-sm"
                    onClick={onClose}
                    tabIndex={resourcesOpen ? 0 : -1}
                  >
                    Whitepapers
                  </a>
                </div>
              </div>

              {/* Company Dropdown */}
              <div>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-white rounded-lg transition-colors"
                  aria-expanded={companyOpen}
                  aria-controls="company-menu"
                >
                  <span>Company</span>
                  {companyOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <div
                  id="company-menu"
                  className={`ml-4 mt-1 space-y-1 ${!companyOpen ? "hidden" : ""}`}
                  aria-hidden={!companyOpen}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-300 rounded-lg transition-colors text-sm"
                    onClick={onClose}
                    tabIndex={companyOpen ? 0 : -1}
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-300 rounded-lg transition-colors text-sm"
                    onClick={onClose}
                    tabIndex={companyOpen ? 0 : -1}
                  >
                    Careers
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-300 rounded-lg transition-colors text-sm"
                    onClick={onClose}
                    tabIndex={companyOpen ? 0 : -1}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact Us Button */}
          {/* <div className="p-4 border-t border-white">
            <button
              className="w-full bg-gold-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-gold-500 transition-colors"
              onClick={onClose}
            >
              Contact Us
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
