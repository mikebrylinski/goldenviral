"use client";

import Image from "next/image";
import { Diamond, Globe2, Heart, Leaf } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { scrollToId } from "@/lib/scroll";

const STORY_VALUES = [
  {
    icon: Leaf,
    title: "Premium Ingredients",
    copy: "Real pistachios, fine chocolate, no shortcuts.",
  },
  {
    icon: Diamond,
    title: "Crafted with Care",
    copy: "Thoughtful presentation and indulgence.",
  },
  {
    icon: Globe2,
    title: "Inspired by Dubai",
    copy: "A taste of luxury, in every bite.",
  },
  {
    icon: Heart,
    title: "Made for Chocolate Lovers",
    copy: "Because life's better with chocolate.",
  },
] as const;

export function OurStory() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="story"
      ref={ref}
      className="moroccan-surface reveal scroll-mt-24 border-t border-gold/25 bg-emerald px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.1fr_0.85fr] lg:gap-10 xl:gap-14">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="arch-frame relative aspect-[4/5] overflow-hidden ring-1 ring-gold/50 shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/story-bakery.jpg"
              alt="Artisans in a luxury bakery crafting Dubai-style pistachio kunafa chocolate bars"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 90vw, 32vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/55 via-transparent to-obsidian/20" />
          </div>
          <div
            className="pointer-events-none absolute inset-x-[8%] -bottom-1 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-3xl leading-tight text-ivory sm:text-4xl"
          >
            Bringing the Taste of Dubai to the World.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ivory/80 sm:text-base">
            <p>
              Golden Viral brings together the bold flavors of Dubai-inspired
              chocolate and the pleasure of discovering something extraordinary.
              Inspired by rich pistachio, delicate kunafa, and the spirit of
              Middle Eastern indulgence, every creation is designed to make an
              impression.
            </p>
            <p>
              From the first crack of chocolate to the final bite, discover a
              world of flavor crafted for chocolate lovers.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToId("story")}
            className="mt-8 inline-flex min-h-11 items-center border border-gold px-6 text-xs font-semibold tracking-[0.18em] text-gold uppercase transition-all hover:bg-gold hover:text-obsidian"
          >
            Our Story →
          </button>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {STORY_VALUES.map(({ icon: Icon, title, copy }) => (
            <li key={title} className="flex gap-4">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/45 text-gold">
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.18em] text-gold uppercase">
                  {title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ivory/75">
                  {copy}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
