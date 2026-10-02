"use client";

import Image from "next/image";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-[#071510]/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Drawer */}
      <aside className="relative w-full max-w-md bg-[#0D201A] text-[#F5F7F2] h-full shadow-2xl z-10 flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-[var(--color-border)]">
        {/* Drawer Header */}
        <div className="p-6 sm:p-8 border-b border-[var(--color-border)] flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.35em] uppercase text-[var(--color-gold)] font-cinzel block font-medium">
              Aurelia Salon Bag
            </span>
            <h3 className="font-serif text-2xl uppercase tracking-wider text-[#F5F7F2]">
              Acquisitions ({totalItems})
            </h3>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#F5F7F2] hover:text-[var(--color-gold)] transition-colors"
            aria-label="Close Bag"
          >
            <X className="w-5 h-5 stroke-[1.4]" />
          </button>
        </div>

        {/* Drawer Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <span className="font-serif text-2xl uppercase text-[var(--color-text-secondary)] italic">
                Your bag is empty
              </span>
              <p className="font-sans text-xs text-[var(--color-text-secondary)] tracking-wider">
                Discover our signature pieces and bridal monograph.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex space-x-4 border-b border-[var(--color-border)] pb-6"
              >
                <div className="relative w-20 h-24 bg-[#132B23] overflow-hidden flex-shrink-0 border border-[var(--color-border)]">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover object-center brightness-[0.9]"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif text-lg uppercase tracking-wide leading-tight text-[#F5F7F2]">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] font-sans text-[var(--color-text-secondary)] mt-0.5">
                        {item.product.material}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[var(--color-text-secondary)] hover:text-red-400 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <div className="flex items-center border border-[var(--color-border)] bg-[#132B23]">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-[var(--color-border)] text-[#F5F7F2] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2.5 text-xs font-cinzel font-medium text-[#F5F7F2]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-[var(--color-border)] text-[#F5F7F2] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-cinzel text-sm font-semibold text-[var(--color-gold)]">
                      ₹{(item.product.priceNum * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 sm:p-8 bg-[#132B23] border-t border-[var(--color-border)] space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase font-cinzel tracking-[0.25em] text-[var(--color-text-secondary)]">
                Estimated Value
              </span>
              <span className="font-cinzel text-2xl font-light text-[var(--color-gold)]">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-[10px] tracking-wider text-[var(--color-text-secondary)] uppercase font-cinzel">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span>Complimentary Armored Courier & Insurance Included</span>
            </div>

            <button
              onClick={() => {
                alert(
                  "Directing to Aurelia Private Secure Checkout. An armored delivery specialist will confirm your delivery date."
                );
                setIsCartOpen(false);
              }}
              className="w-full py-4 bg-[var(--color-gold)] text-[#071510] text-[10px] tracking-[0.3em] font-cinzel uppercase font-semibold flex items-center justify-center space-x-3 hover:bg-[#F5F7F2] transition-colors duration-300 shadow-xl"
            >
              <span>Proceed to Acquisition</span>
              <ArrowRight className="w-4 h-4 stroke-[1.4]" />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
