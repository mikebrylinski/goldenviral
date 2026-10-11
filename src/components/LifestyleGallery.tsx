"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const MOMENTS = [
  {
    src: "/images/lifestyle-bite.jpg",
    alt: "Woman enjoying Dubai-style pistachio kunafa chocolate",
    caption: "First bite energy",
  },
  {
    src: "/images/lifestyle-couple.jpg",
    alt: "Couple sharing Dubai chocolate pizza at a candlelit table",
    caption: "Made to share",
  },
  {
    src: "/images/lifestyle-party.jpg",
    alt: "Friends tasting Dubai party cups with pistachio cream",
    caption: "Party-ready cups",
  },
  {
    src: "/images/lifestyle-cones.jpg",
    alt: "Guest dunking a Dubai cone into pistachio cream",
    caption: "Dunk and savor",
  },
] as const;

export function LifestyleGallery() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="moroccan-surface reveal border-t border-gold/25 bg-emerald-deep px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="lifestyle-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs tracking-[0.28em] text-gold uppercase">
            The Golden Viral Moment
          </p>
          <h2
            id="lifestyle-heading"
            className="mt-3 font-serif text-3xl tracking-[0.08em] text-gold-shine uppercase sm:text-4xl"
          >
            Real Indulgence
          </h2>
          <p className="mt-3 text-sm text-ivory/70 sm:text-base">
            From first bite to shared celebrations — crafted for chocolate lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MOMENTS.map((moment) => (
            <figure
              key={moment.src}
              className="gold-frame group relative aspect-square overflow-hidden"
            >
              <Image
                src={moment.src}
                alt={moment.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs tracking-[0.16em] text-champagne uppercase">
                {moment.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
