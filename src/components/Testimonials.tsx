"use client";

import { useReveal } from "@/hooks/useReveal";

const REVIEWS = [
  {
    quote:
      "The Dubai Style Chocolate tasted exactly like our favorite shop in the city — pistachio, crunch, and that perfect chocolate shell. Instant obsession.",
    name: "Amina R.",
    place: "Los Angeles, CA",
    product: "Dubai Style Chocolate",
  },
  {
    quote:
      "Ordered for a dinner party and everyone asked where I got it. The packaging felt premium and shipping was faster than expected.",
    name: "Marcus T.",
    place: "Austin, TX",
    product: "Dubai Pizza",
  },
  {
    quote:
      "My kids loved the cones and dunking cream. Fun, shareable, and actually delicious — not just cute. We’re already reordering.",
    name: "Priya S.",
    place: "Chicago, IL",
    product: "Dubai Cones",
  },
  {
    quote:
      "Finally a DTC Dubai chocolate that feels authentic. Bold flavor, beautiful presentation, and great value without the middleman markup.",
    name: "Jordan L.",
    place: "Miami, FL",
    product: "Ka-Nufs Bars",
  },
] as const;

function Stars() {
  return (
    <div className="flex justify-center gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-current"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L10 13.8 5.2 16.4l.9-5.4L2.2 7.2l5.4-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="reviews"
      ref={ref}
      className="moroccan-surface reveal scroll-mt-24 border-t border-gold/25 bg-emerald px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Reviews
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 font-serif text-3xl tracking-[0.08em] text-gold-shine uppercase sm:text-4xl"
          >
            Loved by chocolate people
          </h2>
          <p className="mt-3 text-sm text-ivory/70 sm:text-base">
            Real moments from customers discovering Golden Viral — demo quotes
            for the brand experience.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <li
              key={review.name}
              className="flex h-full flex-col border border-gold/30 bg-obsidian/35 p-6 text-center backdrop-blur-sm"
            >
              <Stars />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ivory/85">
                “{review.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-gold/20 pt-4">
                <p className="font-serif text-lg text-champagne">{review.name}</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.16em] text-ivory/55 uppercase">
                  {review.place}
                </p>
                <p className="mt-2 text-[0.65rem] tracking-[0.14em] text-gold uppercase">
                  {review.product}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
