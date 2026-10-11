"use client";

import { Heart, Package, Sparkles, Truck } from "lucide-react";
import { FREE_SHIPPING_THRESHOLD_USD } from "@/lib/shipping";
import { useReveal } from "@/hooks/useReveal";

const VALUES = [
  {
    icon: Truck,
    title: `Free US shipping over $${FREE_SHIPPING_THRESHOLD_USD}`,
    copy: "Complimentary shipping on qualifying orders within the United States.",
  },
  {
    icon: Sparkles,
    title: "Straight to consumer",
    copy: "We sell direct for better prices—premium chocolate without the middleman markup.",
  },
  {
    icon: Package,
    title: "Thoughtful packaging",
    copy: "Emerald and gold details for a premium unboxing.",
  },
  {
    icon: Heart,
    title: "A memorable experience",
    copy: "Chocolate moments made to share and savor.",
  },
] as const;

export function BrandValues() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="moroccan-surface reveal border-y border-gold/30 bg-emerald-rich px-4 py-11 sm:px-6 lg:px-8"
      aria-label="Brand experience"
    >
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {VALUES.map(({ icon: Icon, title, copy }, index) => (
          <div
            key={title}
            className={`flex gap-4 lg:px-6 ${
              index < VALUES.length - 1
                ? "lg:border-r lg:border-gold/30"
                : ""
            }`}
          >
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
              <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xs tracking-[0.18em] text-gold uppercase">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">{copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
