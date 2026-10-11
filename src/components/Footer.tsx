"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Logo } from "@/components/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

const FOOTER_LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#story", label: "Our Story" },
  { href: "#contact", label: "Contact" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms" },
] as const;

const SOCIALS = [
  { label: "Instagram (placeholder)", Icon: InstagramIcon },
  { label: "TikTok (placeholder)", Icon: TikTokIcon },
  { label: "Facebook (placeholder)", Icon: FacebookIcon },
  { label: "YouTube (placeholder)", Icon: YoutubeIcon },
  { label: "Pinterest (placeholder)", Icon: PinterestIcon },
] as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccess(false);

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setSuccess(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/25 bg-obsidian px-4 pt-16 pb-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute right-0 bottom-0 w-[min(520px,80vw)] opacity-50">
        <Image
          src="/icons/skyline.svg"
          alt=""
          width={520}
          height={130}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr_1.2fr] lg:gap-10">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/65">
            Premium Dubai-inspired chocolate sold straight to you for better
            prices. Free shipping on US orders over $69.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <a
                  href={link.href}
                  className="text-xs tracking-[0.14em] text-ivory/60 uppercase transition-colors hover:text-champagne"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p id="privacy" className="sr-only">
            Privacy Policy placeholder — content pending client review.
          </p>
          <p id="terms" className="sr-only">
            Terms placeholder — content pending client review.
          </p>
        </div>

        <div>
          <h2 className="text-xs tracking-[0.24em] text-gold uppercase">
            Follow Our Journey
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <a
                key={label}
                href="#social-placeholder"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-all hover:border-champagne hover:bg-gold/10 hover:text-champagne"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-ivory/45">
            Social links are placeholders until official accounts are provided.
          </p>
        </div>

        <div id="contact" className="scroll-mt-24">
          <h2 className="text-xs tracking-[0.24em] text-gold uppercase">
            Join Our Newsletter
          </h2>
          <p className="mt-3 text-sm text-ivory/65">
            Be the first to discover new flavors and exclusive drops.
          </p>
          <form
            onSubmit={onSubmit}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError(null);
                setSuccess(false);
              }}
              placeholder="Your email address"
              aria-invalid={Boolean(error)}
              className="min-h-12 flex-1 border border-gold/35 bg-emerald-deep/80 px-4 text-sm text-ivory placeholder:text-ivory/35 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="btn-gold min-h-12 px-6 text-xs font-semibold tracking-[0.18em] uppercase"
            >
              Subscribe
            </button>
          </form>
          {error ? (
            <p role="alert" className="mt-3 text-sm text-champagne">
              {error}
            </p>
          ) : null}
          {success ? (
            <p role="status" className="mt-3 text-sm text-ivory/80">
              Demo success — your email was validated locally. No mailing list
              subscription was created.
            </p>
          ) : null}
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-gold/20 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Golden Viral. All rights reserved.</p>
        <p>Interactive brand demo — not a live storefront.</p>
      </div>
    </footer>
  );
}
