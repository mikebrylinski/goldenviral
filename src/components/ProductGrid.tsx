"use client";

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { scrollToId } from "@/lib/scroll";

export function ProductGrid() {
  return (
    <section
      id="shop"
      className="moroccan-surface relative scroll-mt-24 border-t border-gold/25 bg-emerald-deep px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="shop-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(216,168,62,0.06),transparent_65%)]"
        aria-hidden="true"
      />
      <div id="flavors" className="absolute top-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="shop-heading"
              className="font-serif text-3xl tracking-[0.16em] text-gold-shine uppercase sm:text-4xl"
            >
              Signature Creations
            </h2>
            <p className="mt-3 text-sm tracking-wide text-ivory/70 sm:text-base">
              Discover your next obsession.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToId("shop")}
            className="self-start text-xs tracking-[0.22em] text-gold uppercase transition-colors hover:text-champagne sm:self-auto"
          >
            Shop All Flavors →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
