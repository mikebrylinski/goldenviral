"use client";

import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/data/products";
import { scrollToId } from "@/lib/scroll";

const featured = products[0];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/images/hero-chocolate-plate.jpg"
        alt="Dubai-style pistachio kunafa chocolate on a gold-rimmed plate at a night terrace with palm lights and city glow"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/55 via-obsidian/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-obsidian/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(216,168,62,0.12),transparent_50%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-end px-4 py-10 sm:px-6 sm:py-12 lg:items-center lg:px-8 lg:py-16">
        <div className="animate-fade-up relative z-10 grid w-full grid-cols-1 overflow-hidden border border-gold/50 bg-black/45 shadow-[0_30px_90px_rgba(0,0,0,0.55)] ring-1 ring-white/10 backdrop-blur-2xl md:grid-cols-2">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/15 via-white/5 to-emerald/20"
            aria-hidden="true"
          />

          <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-14">
            <p className="text-xs tracking-[0.35em] text-gold-shine uppercase">
              Premium Dubai Chocolate
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-[3.4rem]"
            >
              A Taste of Dubai in Every Bite.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory/85 sm:text-lg">
              <span className="text-champagne">Rich. Bold. Premium.</span>
              <br />
              Pistachio, kunafa, and more—crafted for true chocolate lovers.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-champagne/90">
              Sold straight to you for better prices. Free shipping on US orders
              over $69.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToId("shop")}
                className="btn-gold inline-flex min-h-12 items-center px-8 text-xs font-semibold tracking-[0.22em] uppercase"
              >
                Shop Now →
              </button>
              <button
                type="button"
                onClick={() => scrollToId("story")}
                className="inline-flex min-h-12 items-center border border-gold/50 bg-obsidian/20 px-7 text-xs font-semibold tracking-[0.2em] text-champagne uppercase transition-all hover:border-champagne hover:bg-gold/10 hover:text-ivory"
              >
                Discover Our Story
              </button>
            </div>
          </div>

          <Link
            href={`/products/${featured.id}`}
            className="group relative min-h-[280px] border-t border-gold/30 md:min-h-full md:border-t-0 md:border-l"
          >
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[0.65rem] tracking-[0.18em] text-champagne/85 uppercase">
                Featured Creation
              </p>
              <p className="mt-2 font-serif text-2xl text-gold sm:text-3xl">
                {featured.name}
              </p>
              <p className="mt-1 text-[0.7rem] tracking-[0.14em] text-ivory/70 uppercase">
                {featured.subtitle}
              </p>
              <p className="mt-3 font-serif text-xl text-champagne">
                {formatPrice(featured.priceUSD)}
              </p>
              <p className="mt-3 text-xs tracking-[0.16em] text-gold uppercase">
                View Product →
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-deep to-transparent" />
    </section>
  );
}
