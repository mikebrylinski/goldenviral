"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartProvider";
import { useUI } from "@/context/UIProvider";
import { useReveal } from "@/hooks/useReveal";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const { openCart } = useUI();
  const ref = useReveal<HTMLElement>();

  const handleQuickAdd = () => {
    addItem(product.id, 1);
    openCart();
  };

  return (
    <article
      ref={ref}
      className="reveal group gold-frame gold-frame-shine flex flex-col overflow-hidden velvet-panel transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/80"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <Link
        href={`/products/${product.id}`}
        className="relative aspect-[4/5] overflow-hidden text-left"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-transparent to-transparent opacity-80" />
      </Link>

      <div className="relative flex flex-1 flex-col border-t border-gold/25 px-4 pt-4 pb-4 sm:px-5">
        <Link href={`/products/${product.id}`} className="text-left">
          <h3 className="font-serif text-lg tracking-[0.08em] text-gold uppercase sm:text-xl">
            {product.name}
          </h3>
          <p className="mt-1.5 text-[0.65rem] tracking-[0.18em] text-champagne/75 uppercase">
            {product.subtitle}
          </p>
        </Link>

        <div className="mt-4 flex items-center justify-between gap-2">
          <p className="font-serif text-base text-ivory/90">
            {formatPrice(product.priceUSD)}
          </p>
          <Link
            href={`/products/${product.id}`}
            className="flex h-8 w-8 items-center justify-center text-gold transition-transform group-hover:translate-x-0.5"
            aria-label={`Open ${product.name} page`}
          >
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={handleQuickAdd}
          className="btn-gold mt-3 inline-flex min-h-10 items-center justify-center gap-2 px-3 text-[0.65rem] font-semibold tracking-[0.16em] uppercase"
        >
          <Plus className="h-3.5 w-3.5" />
          Quick Add
        </button>
      </div>
    </article>
  );
}
