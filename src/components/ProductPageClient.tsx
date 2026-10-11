"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartProvider";
import { useUI } from "@/context/UIProvider";
import { ProductCard } from "@/components/ProductCard";

type ProductPageClientProps = {
  product: Product;
  related: Product[];
};

export function ProductPageClient({ product, related }: ProductPageClientProps) {
  const { addItem } = useCart();
  const { openCart } = useUI();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  const handleAdd = () => {
    addItem(product.id, quantity);
    openCart();
  };

  return (
    <div className="moroccan-surface bg-emerald-deep">
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-10 sm:px-6 lg:px-8">
        <Link
          href="/#shop"
          className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-champagne uppercase transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Signature Creations
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="gold-frame relative aspect-[4/5] overflow-hidden bg-black/30">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.gallery.length > 1 ? (
              <div className="mt-4 flex gap-3">
                {product.gallery.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`relative h-20 w-16 overflow-hidden border ${
                      activeImage === image
                        ? "border-gold"
                        : "border-gold/30 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <p className="text-xs tracking-[0.28em] text-gold uppercase">
              {product.subtitle}
            </p>
            <h1 className="mt-3 font-serif text-4xl text-ivory sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-serif text-3xl text-champagne">
              {formatPrice(product.priceUSD)}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/80 sm:text-base">
              {product.description}
            </p>

            <ul className="mt-8 space-y-3 border border-gold/25 bg-black/25 p-5 backdrop-blur-sm">
              {product.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ivory/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-gold/40">
                <button
                  type="button"
                  className="p-3 text-gold hover:bg-gold/10"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm text-ivory">
                  {quantity}
                </span>
                <button
                  type="button"
                  className="p-3 text-gold hover:bg-gold/10"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((value) => Math.min(99, value + 1))}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="btn-gold min-h-12 flex-1 px-8 text-xs font-semibold tracking-[0.18em] uppercase sm:flex-none"
              >
                Add to Cart
              </button>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-champagne/80">
              Sold straight to consumer for better prices. Free shipping on US
              orders over $69.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ivory/50">
              Interactive demo product page — checkout is not enabled. Pricing is
              illustrative for client presentation.
            </p>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-20 border-t border-gold/20 pt-14">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.24em] text-gold uppercase">
                  Keep Exploring
                </p>
                <h2 className="mt-2 font-serif text-3xl text-ivory">
                  More Signature Creations
                </h2>
              </div>
              <Link
                href="/#shop"
                className="hidden text-xs tracking-[0.18em] text-champagne uppercase hover:text-gold sm:inline"
              >
                Shop All →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <ProductCard key={item.id} product={item} index={index} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
