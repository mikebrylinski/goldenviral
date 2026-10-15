"use client";

import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { useReveal } from "@/hooks/useReveal";

const HANDLE = "@goldenviral";

const POSTS = [
  {
    src: "/images/lifestyle-packaging-gift.jpg",
    alt: "Emerald gift box of Dubai pistachio chocolates on a marble table",
    caption: "Packaged to impress. Ready to gift.",
    likes: "3,240",
    comments: "98",
  },
  {
    src: "/images/lifestyle-packaging-unbox.jpg",
    alt: "Couple unboxing Golden Viral chocolate packaging at dinner",
    caption: "Unbox the golden moment.",
    likes: "4,512",
    comments: "156",
  },
  {
    src: "/images/lifestyle-packaging-flatlay.jpg",
    alt: "Flat lay of emerald packaging with Dubai chocolate bars and cones",
    caption: "Emerald wraps. Golden bites.",
    likes: "2,881",
    comments: "74",
  },
  {
    src: "/images/lifestyle-packaging-shelf.jpg",
    alt: "Emerald chocolate boxes displayed on a luxury lounge shelf",
    caption: "Shelf-ready luxury.",
    likes: "1,964",
    comments: "41",
  },
  {
    src: "/images/lifestyle-bite.jpg",
    alt: "First bite of Dubai pistachio kunafa chocolate",
    caption: "That first crack. Pure Dubai energy.",
    likes: "2,418",
    comments: "86",
  },
  {
    src: "/images/product-dubai-pizza.jpg",
    alt: "Dubai chocolate pizza plated for sharing",
    caption: "Pizza, but make it pistachio.",
    likes: "3,902",
    comments: "124",
  },
  {
    src: "/images/lifestyle-couple.jpg",
    alt: "Couple sharing Golden Viral chocolate",
    caption: "Date night, upgraded.",
    likes: "1,775",
    comments: "52",
  },
  {
    src: "/images/lifestyle-party.jpg",
    alt: "Friends tasting Dubai party cups",
    caption: "Party cups that actually disappear.",
    likes: "2,088",
    comments: "67",
  },
] as const;

export function InstagramFeed() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="instagram"
      ref={ref}
      className="moroccan-surface reveal scroll-mt-24 border-t border-gold/25 bg-emerald-deep px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.28em] text-gold uppercase">
              On Instagram
            </p>
            <h2
              id="instagram-heading"
              className="mt-3 font-serif text-3xl tracking-[0.08em] text-gold-shine uppercase sm:text-4xl"
            >
              Follow the flavor
            </h2>
            <p className="mt-3 text-sm text-ivory/70 sm:text-base">
              A mock feed of Golden Viral moments — demo only, links open the
              handle placeholder.
            </p>
          </div>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 border border-gold/50 px-5 text-xs font-semibold tracking-[0.16em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold/10"
          >
            <InstagramIcon className="h-4 w-4" />
            <span>{HANDLE}</span>
            <span className="text-champagne/80">· Follow</span>
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
          {POSTS.map((post) => (
            <li key={post.src + post.caption}>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-frame group relative block aspect-square overflow-hidden focus-visible:outline-offset-2"
                aria-label={`${post.caption} — ${post.likes} likes`}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <p className="line-clamp-2 text-[0.7rem] leading-snug text-ivory/90 sm:text-xs">
                    <span className="font-medium text-champagne">{HANDLE}</span>{" "}
                    {post.caption}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-[0.65rem] tracking-[0.08em] text-gold/90 uppercase">
                    <span className="inline-flex items-center gap-1">
                      <Heart className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />
                      {post.likes}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle
                        className="h-3 w-3"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
