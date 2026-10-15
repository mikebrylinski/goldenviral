"use client";

import {
  DirectIcon,
  ExperienceIcon,
  PackagingIcon,
  ShippingIcon,
} from "@/components/BrandIcons";
import { FREE_SHIPPING_THRESHOLD_USD } from "@/lib/shipping";
import { useReveal } from "@/hooks/useReveal";

const VALUES = [
  {
    icon: ShippingIcon,
    title: `Free US shipping over $${FREE_SHIPPING_THRESHOLD_USD}`,
    copy: "Complimentary shipping on qualifying orders within the United States.",
  },
  {
    icon: DirectIcon,
    title: "Straight to consumer",
    copy: "We sell direct for better prices—premium chocolate without the middleman markup.",
  },
  {
    icon: PackagingIcon,
    title: "Thoughtful packaging",
    copy: "Emerald and gold details for a premium unboxing.",
  },
  {
    icon: ExperienceIcon,
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
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {VALUES.map(({ icon: Icon, title, copy }, index) => (
          <div
            key={title}
            className={`flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:gap-4 lg:px-6 lg:text-left ${
              index < VALUES.length - 1
                ? "lg:border-r lg:border-gold/30"
                : ""
            }`}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/45 bg-obsidian/35 text-gold shadow-[inset_0_0_0_1px_rgba(244,213,138,0.08)] lg:mt-0.5">
              <Icon className="h-7 w-7" />
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
