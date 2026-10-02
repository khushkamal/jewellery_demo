"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsCartOpen, wishlist } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "#collections" },
    { name: "New Arrivals", href: "#signature" },
    { name: "Bridal", href: "#bridal" },
    { name: "Bespoke", href: "#bespoke" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0D1914]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-2xl"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="text-[var(--color-text)] p-2 hover:text-[var(--color-gold)] transition-colors focus:outline-none"
            >
              <Menu className="w-5 h-5 stroke-[1.4]" />
            </button>
          </div>

          {/* Left / Brand Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex flex-col items-center md:items-start leading-none tracking-widest text-[var(--color-text)]"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.28em] uppercase font-light group-hover:text-[var(--color-gold)] transition-colors duration-300">
                AURELIA
              </span>
              <span className="text-[7px] sm:text-[8px] tracking-[0.45em] uppercase text-[var(--color-gold)] font-cinzel mt-1">
                Haute Joaillerie
              </span>
            </Link>
          </div>

          {/* Center Links (Desktop only) */}
          <nav className="hidden md:flex items-center space-x-9 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--color-text)]/85 hover:text-[var(--color-gold)] transition-colors duration-300 editorial-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1.5"
              aria-label="Search Collection"
            >
              <Search className="w-4 h-4 stroke-[1.4]" />
            </button>

            {/* Account (Desktop) */}
            <button
              onClick={() =>
                alert(
                  "Welcome to Aurelia Client Concierge. Private salon appointments and orders can be managed here."
                )
              }
              className="hidden lg:block text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1.5"
              aria-label="Client Account"
            >
              <User className="w-4 h-4 stroke-[1.4]" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => {
                const el = document.querySelector("#featured");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1.5"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 stroke-[1.4]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[var(--color-gold)] text-[#0D1914] text-[8px] font-sans font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-1.5 text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1.5"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.4]" />
              <span className="text-[10px] tracking-[0.1em] font-sans font-medium text-[var(--color-gold)]">
                ({totalItems})
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Luxury Search Bar */}
        {isSearchOpen && (
          <div className="w-full bg-[#13221C] text-[var(--color-text)] py-4 px-6 border-t border-[var(--color-border)] animate-in fade-in slide-in-from-top-2 duration-300 shadow-2xl">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search high jewellery, solitaires, emeralds, necklaces..."
                className="w-full bg-transparent border-none text-[var(--color-text)] placeholder-[var(--color-text-secondary)] text-sm tracking-wider focus:outline-none font-serif text-lg italic"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] ml-4 text-xs tracking-widest uppercase font-cinzel"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Slide-over Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0D1914] text-[var(--color-text)] flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-300">
          <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-6">
            <span className="font-serif text-2xl tracking-[0.25em] uppercase text-[var(--color-text)]">
              AURELIA
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--color-text)] p-2 hover:text-[var(--color-gold)] transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 stroke-[1.2]" />
            </button>
          </div>

          <div className="flex flex-col space-y-7 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-serif text-3xl tracking-[0.12em] uppercase hover:text-[var(--color-gold)] transition-colors flex items-center"
              >
                <span className="text-xs font-cinzel text-[var(--color-gold)] mr-4">
                  0{idx + 1}
                </span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="border-t border-[var(--color-border)] pt-6 flex flex-col space-y-2 text-xs tracking-[0.2em] text-[var(--color-text-secondary)] uppercase font-cinzel">
            <span>Private Salon Viewing</span>
            <span className="text-[var(--color-gold)]">Concierge: +91 (0) 22 8900 1200</span>
          </div>
        </div>
      )}
    </>
  );
}
