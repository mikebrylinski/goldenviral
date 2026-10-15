"use client";

import Image from "next/image";
import { scrollToId } from "@/lib/scroll";
import { useReveal } from "@/hooks/useReveal";

/** Compact contact bridge — full newsletter lives in the footer (mockup layout). */
export function Newsletter() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="reveal relative overflow-hidden border-t border-gold/25 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="contact-bridge-heading"
    >
      <Image
        src="/images/bg-palm-products.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-emerald-deep/75" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-emerald-deep/40 to-obsidian/55"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Contact</p>
          <h2
            id="contact-bridge-heading"
            className="mt-4 font-serif text-3xl text-ivory sm:text-4xl"
          >
            Stay close to the next drop.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/80 sm:text-base">
            Join the newsletter below for new flavors and exclusive updates —
            demo only, no mailing list is connected yet.
          </p>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="btn-gold mt-8 inline-flex min-h-11 items-center px-7 text-xs font-semibold tracking-[0.18em] uppercase"
          >
            Join Our Newsletter →
          </button>
        </div>
      </div>
    </section>
  );
}
