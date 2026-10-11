"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartProvider";
import { useUI } from "@/context/UIProvider";

function ProductDetailContent({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const { openCart } = useUI();
  const [quantity, setQuantity] = useState(1);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const handleAdd = () => {
    addItem(product.id, quantity);
    onClose();
    openCart();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
        aria-label="Close product details"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="animate-fade-in relative z-10 grid max-h-[92svh] w-full max-w-3xl overflow-hidden border border-gold/40 bg-emerald-deep shadow-2xl sm:grid-cols-2"
      >
        <div className="relative min-h-56 sm:min-h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col overflow-y-auto p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] text-champagne uppercase">
                {product.subtitle}
              </p>
              <h2 id={titleId} className="mt-2 font-serif text-3xl text-ivory">
                {product.name}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-gold transition-colors hover:bg-gold/10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-4 font-serif text-2xl text-gold">
            {formatPrice(product.priceUSD)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/80">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <p className="text-xs tracking-[0.16em] text-ivory/60 uppercase">
              Quantity
            </p>
            <div className="flex items-center border border-gold/35">
              <button
                type="button"
                className="p-2.5 text-gold hover:bg-gold/10"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-ivory">
                {quantity}
              </span>
              <button
                type="button"
                className="p-2.5 text-gold hover:bg-gold/10"
                aria-label="Increase quantity"
                onClick={() => setQuantity((value) => Math.min(99, value + 1))}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="btn-gold mt-6 min-h-12 text-xs font-semibold tracking-[0.18em] uppercase"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailModal() {
  const { selectedProduct, closeProduct } = useUI();

  if (!selectedProduct) return null;

  return (
    <ProductDetailContent
      key={selectedProduct.id}
      product={selectedProduct}
      onClose={closeProduct}
    />
  );
}
