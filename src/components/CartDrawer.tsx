"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { formatPrice, getProductById } from "@/data/products";
import { useCart } from "@/context/CartProvider";
import { useUI } from "@/context/UIProvider";
import {
  amountUntilFreeShipping,
  FREE_SHIPPING_THRESHOLD_USD,
  qualifiesForFreeShipping,
} from "@/lib/shipping";

export function CartDrawer() {
  const { cartOpen, closeCart } = useUI();
  const { items, subtotal, setQuantity, removeItem, clearCart } = useCart();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cartOpen) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cartOpen, closeCart]);

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        className="absolute inset-0 bg-obsidian/75 backdrop-blur-sm"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-gold/30 bg-emerald-deep shadow-2xl transition-transform"
      >
        <div className="flex items-center justify-between border-b border-gold/20 px-5 py-4">
          <h2
            id={titleId}
            className="font-serif text-2xl tracking-wide text-ivory"
          >
            Your Bag
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            className="rounded-full p-2 text-gold hover:bg-gold/10"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full min-h-48 flex-col items-center justify-center text-center">
              <p className="font-serif text-xl text-champagne">Your bag is empty</p>
              <p className="mt-2 max-w-xs text-sm text-ivory/65">
                Explore Signature Creations and add a Dubai-inspired treat to
                begin.
              </p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;

                return (
                  <li
                    key={item.productId}
                    className="flex gap-3 border-b border-gold/15 pb-5"
                  >
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden ring-1 ring-gold/25">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="truncate font-serif text-lg text-ivory">
                            {product.name}
                          </p>
                          <p className="text-sm text-champagne">
                            {formatPrice(product.priceUSD)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.productId)}
                          className="p-1 text-gold/80 hover:text-champagne"
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center border border-gold/30">
                        <button
                          type="button"
                          className="p-2 text-gold hover:bg-gold/10"
                          aria-label={`Decrease ${product.name} quantity`}
                          onClick={() =>
                            setQuantity(item.productId, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className="p-2 text-gold hover:bg-gold/10"
                          aria-label={`Increase ${product.name} quantity`}
                          onClick={() =>
                            setQuantity(item.productId, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="border-t border-gold/20 px-5 py-5">
          <div className="mb-3 rounded border border-gold/25 bg-obsidian/40 px-3 py-2 text-xs leading-relaxed text-ivory/75">
            Interactive demo — checkout is not enabled.
          </div>
          <div className="mb-3 rounded border border-gold/30 bg-emerald/40 px-3 py-2 text-xs leading-relaxed text-champagne">
            {qualifiesForFreeShipping(subtotal) ? (
              <p>You’ve unlocked free shipping on US orders.</p>
            ) : (
              <p>
                Add {formatPrice(amountUntilFreeShipping(subtotal))} more for
                free shipping in the US (orders over $
                {FREE_SHIPPING_THRESHOLD_USD}).
              </p>
            )}
            <p className="mt-1 text-ivory/55">
              Sold straight to consumer for better prices.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm tracking-[0.12em] text-ivory/70 uppercase">
              Subtotal
            </span>
            <span className="font-serif text-2xl text-gold">
              {formatPrice(subtotal)}
            </span>
          </div>
          <button
            type="button"
            disabled
            className="mt-4 min-h-12 w-full cursor-not-allowed bg-gold/40 text-xs font-semibold tracking-[0.18em] text-obsidian/80 uppercase"
            title="Checkout is not enabled in this demo"
          >
            Checkout Unavailable
          </button>
          <p className="mt-2 text-center text-xs text-ivory/55">
            Payment can be connected later via Stripe Checkout or another
            approved provider.
          </p>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full text-xs tracking-[0.14em] text-champagne/80 uppercase hover:text-champagne"
            >
              Clear bag
            </button>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
