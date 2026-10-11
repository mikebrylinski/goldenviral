"use client";

import { scrollToId } from "@/lib/scroll";
import { useReveal } from "@/hooks/useReveal";

/** Compact contact bridge — full newsletter lives in the footer (mockup layout). */
export function Newsletter() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="moroccan-surface reveal border-t border-gold/25 bg-emerald-deep px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="contact-bridge-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Contact</p>
        <h2
          id="contact-bridge-heading"
          className="mt-4 font-serif text-3xl text-ivory sm:text-4xl"
        >
          Stay close to the next drop.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base">
          Join the newsletter below for new flavors and exclusive updates — demo
          only, no mailing list is connected yet.
        </p>
        <button
          type="button"
          onClick={() => scrollToId("contact")}
          className="btn-gold mt-8 inline-flex min-h-11 items-center px-7 text-xs font-semibold tracking-[0.18em] uppercase"
        >
          Join Our Newsletter →
        </button>
      </div>
    </section>
  );
}
