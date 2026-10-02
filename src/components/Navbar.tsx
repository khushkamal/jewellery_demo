"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, User, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme, ThemeType } from "@/context/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setIsCartOpen, wishlist } = useCart();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
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

  const themeOptions: { key: ThemeType; label: string; dotColor: string }[] = [
    { key: "noir", label: "Royal Noir", dotColor: "#C5A059" },
    { key: "ivory", label: "Ivory Silk", dotColor: "#B89557" },
    { key: "emerald", label: "Emerald", dotColor: "#2E5339" },
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
            ? "bg-[#0A0A09]/90 [data-theme='ivory']:bg-[#F5F1EA]/90 [data-theme='emerald']:bg-[#0A1410]/90 backdrop-blur-md border-b border-[var(--color-border)] py-3.5 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="text-[var(--color-text)] p-1.5 focus:outline-none"
            >
              <Menu className="w-5 h-5 stroke-[1.25]" />
            </button>
          </div>

          {/* Left / Brand Logo */}
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="group flex flex-col items-start leading-none tracking-widest text-[var(--color-text)]"
            >
              <span className="font-serif text-xl sm:text-2xl tracking-[0.3em] uppercase font-normal group-hover:text-[var(--color-gold)] transition-colors duration-300">
                AURELIA
              </span>
              <span className="text-[8px] tracking-[0.45em] uppercase text-[var(--color-text-secondary)] font-cinzel mt-0.5">
                Maison de Haute Joaillerie
              </span>
            </Link>

            {/* Quick Theme Switcher Pill (Desktop) */}
            <div className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-[var(--color-gold)] mr-1" />
              {themeOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setTheme(opt.key)}
                  className={`text-[9px] uppercase tracking-[0.18em] font-cinzel px-2 py-0.5 rounded-full transition-all ${
                    theme === opt.key
                      ? "bg-[var(--color-gold)] text-[#0A0A09] font-semibold shadow-sm"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Center Links (Desktop only) */}
          <nav className="hidden md:flex items-center space-x-10">
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
          <div className="flex items-center space-x-5 sm:space-x-7">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1"
              aria-label="Search Collection"
            >
              <Search className="w-4 h-4 stroke-[1.25]" />
            </button>

            {/* Account (Desktop) */}
            <button
              onClick={() =>
                alert(
                  "Welcome to Aurelia Client Concierge. Private salon appointments and orders can be managed here."
                )
              }
              className="hidden lg:block text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1"
              aria-label="Client Account"
            >
              <User className="w-4 h-4 stroke-[1.25]" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => {
                const el = document.querySelector("#featured");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 stroke-[1.25]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-[var(--color-gold)] text-[#0A0A09] text-[8px] font-sans font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center space-x-1.5 text-[var(--color-text)]/90 hover:text-[var(--color-gold)] transition-colors duration-300 p-1"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[1.25]" />
              <span className="text-[10px] tracking-[0.1em] font-sans font-medium">
                ({totalItems})
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Luxury Search Bar */}
        {isSearchOpen && (
          <div className="w-full bg-[var(--color-bg-secondary)] text-[var(--color-text)] py-4 px-6 border-t border-[var(--color-border)] animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search high jewellery, solitaires, necklaces..."
                className="w-full bg-transparent border-none text-[var(--color-text)] placeholder-[var(--color-text-secondary)] text-sm tracking-wider focus:outline-none font-serif text-lg italic"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] ml-4 text-xs tracking-widest uppercase font-cinzel"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Slide-over Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-300">
          <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-6">
            <span className="font-serif text-2xl tracking-[0.3em] uppercase">
              AURELIA
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--color-text)] p-2"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 stroke-[1.2]" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-serif text-2xl tracking-[0.15em] uppercase hover:text-[var(--color-gold)] transition-colors"
              >
                <span className="text-xs font-cinzel text-[var(--color-gold)] mr-3">
                  0{idx + 1}
                </span>
                {link.name}
              </a>
            ))}

            {/* Mobile Theme Selector */}
            <div className="pt-6 border-t border-[var(--color-border)]">
              <span className="text-[10px] tracking-[0.3em] uppercase font-cinzel text-[var(--color-text-secondary)] block mb-3">
                Palette Mood
              </span>
              <div className="flex gap-2">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setTheme(opt.key)}
                    className={`text-[10px] uppercase tracking-wider font-cinzel px-3 py-1.5 rounded-full border transition-all ${
                      theme === opt.key
                        ? "bg-[var(--color-gold)] text-[#0A0A09] border-[var(--color-gold)] font-medium"
                        : "border-[var(--color-border)] text-[var(--color-text)]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--color-border)] pt-6 flex flex-col space-y-3 text-xs tracking-[0.2em] text-[var(--color-text-secondary)] uppercase">
            <span>Private Salon Viewing</span>
            <span>Concierge: +91 (0) 22 8900 1200</span>
          </div>
        </div>
      )}
    </>
  );
}
