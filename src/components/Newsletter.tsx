"use client";

import Image from "next/image";
import { PistachioMascot } from "@/components/PistachioMascot";
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
        src="/images/contact-bakery-pro.jpg"
        alt="Professional bakery kitchen making Dubai pistachio chocolates"
        fill
        priority
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-emerald-deep/45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-emerald-deep/35 to-obsidian/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex items-center justify-center">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-gold/45 bg-obsidian/50 shadow-[0_0_40px_rgba(216,168,62,0.2)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-30"
              style={{
                backgroundImage: 'url("/icons/moroccan-pattern.svg")',
                backgroundSize: "80px 80px",
                backgroundRepeat: "repeat",
              }}
              aria-hidden="true"
            />
            <PistachioMascot
              className="relative h-40 w-40 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
              title="Golden Viral pistachio mascot"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Contact</p>
          <h2
            id="contact-bridge-heading"
            className="mt-4 font-serif text-3xl text-ivory sm:text-4xl"
          >
            Stay close to the next drop.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ivory/80 sm:text-base md:mx-0">
            Join the mailing list below for new flavors and exclusive updates —
            demo only, no mailing list is connected yet.
          </p>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="btn-gold mt-8 inline-flex min-h-11 items-center px-7 text-xs font-semibold tracking-[0.18em] uppercase"
          >
            Join Our Mailing List →
          </button>
        </div>
      </div>
    </section>
  );
}
