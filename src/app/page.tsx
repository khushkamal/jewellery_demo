"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionIntro from "@/components/CollectionIntro";
import HorizontalCollection from "@/components/HorizontalCollection";
import ProductShowcase from "@/components/ProductShowcase";
import EditorialSection from "@/components/EditorialSection";
import CraftSection from "@/components/CraftSection";
import BridalSection from "@/components/BridalSection";
import BespokeSection from "@/components/BespokeSection";
import ProductGrid from "@/components/ProductGrid";
import PhilosophySection from "@/components/PhilosophySection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";

export default function Home() {
  return (
    <ThemeProvider>
      <CartProvider>
        <SmoothScroll>
          {/* Preloader with vertical curtain reveal */}
          <Preloader />

          {/* Custom Luxury Magnetic Cursor */}
          <CustomCursor />

          {/* Thin Luxury Navigation Bar with Live Palette Switcher */}
          <Navbar />

          <main className="relative w-full overflow-hidden bg-[var(--color-bg)] transition-colors duration-500">
            {/* Hero Section with Pinned GSAP Scrubbed Timeline */}
            <Hero />

            {/* Collection Editorial Intro */}
            <CollectionIntro />

            {/* Pinned Horizontal Scrolling Gallery (01-04 Signature Pieces) */}
            <HorizontalCollection />

            {/* Immersive Product Showcase: The Celeste */}
            <ProductShowcase />

            {/* Split-Screen Editorial Section: "Designed Around Light" */}
            <EditorialSection />

            {/* Craftsmanship Section: "Crafted by Hand" */}
            <CraftSection />

            {/* Bridal Section: "For the Moment" */}
            <BridalSection />

            {/* Bespoke Atelier Section: "Made for You" */}
            <BespokeSection />

            {/* Featured Ecommerce Product Grid: 2 Columns */}
            <ProductGrid />

            {/* Philosophy Typography Section: "Jewellery Should Feel Like a Part of You" */}
            <PhilosophySection />

            {/* Instagram / Social Campaign: "Follow the Light" */}
            <InstagramSection />
          </main>

          {/* Luxury Editorial Footer */}
          <Footer />

          {/* Interactive Shopping Bag Drawer */}
          <CartDrawer />

          {/* Quick View / Masterpiece Specification Modal */}
          <QuickViewModal />
        </SmoothScroll>
      </CartProvider>
    </ThemeProvider>
  );
}
