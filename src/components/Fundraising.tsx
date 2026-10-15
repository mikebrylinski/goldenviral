"use client";

import Image from "next/image";
import {
  HandCoins,
  Home,
  Percent,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { scrollToId } from "@/lib/scroll";

const HIGHLIGHTS = [
  {
    icon: Percent,
    title: "Earn up to 50% profit",
    copy: "Keep more of every sale for your school, team, or cause.",
  },
  {
    icon: Home,
    title: "Ship to home or school",
    copy: "No door-to-door. Supporters order online and we handle delivery.",
  },
  {
    icon: Trophy,
    title: "Track goals in real time",
    copy: "Leaderboards and easy progress tracking keep your group motivated.",
  },
  {
    icon: Users,
    title: "Dedicated fundraising rep",
    copy: "A partner to help you plan, launch, and hit your goal.",
  },
] as const;

const PROGRAMS = [
  {
    icon: HandCoins,
    title: "Dubai Chocolate Bar Fundraising",
    points: [
      "Signature pistachio & kunafa bars supporters love",
      "Multiple flavors for every palate",
      "No minimum order required",
      "Suggested retail priced for strong margins",
    ],
  },
  {
    icon: Sparkles,
    title: "Seasonal Online Campaigns",
    points: [
      "Fall & spring programs ready to launch",
      "Kid-friendly sharing links for teams and classrooms",
      "Checkout ships direct to home or your organization",
      "Prize-program friendly tracking for schools",
    ],
  },
] as const;

export function Fundraising() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="fundraising"
      ref={ref}
      className="moroccan-surface reveal scroll-mt-24 border-t border-gold/25 bg-emerald-rich px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="fundraising-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">
            Fundraising
          </p>
          <h2
            id="fundraising-heading"
            className="mt-4 font-serif text-3xl leading-tight text-ivory sm:text-4xl"
          >
            Raise more with Dubai chocolate — online, not door to door.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ivory/75 sm:text-base">
            Golden Viral helps schools, teams, and organizations exceed their
            fundraising goals with premium Dubai-inspired chocolate. Our online
            platform is easy to share, ships direct to home or school, and
            includes a dedicated rep to guide your success.
          </p>
        </div>

        <div className="gold-frame relative mt-12 aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/images/fundraising-bright.jpg"
            alt="Students and a teacher celebrating a chocolate fundraising goal with emerald gift boxes and Dubai chocolate bars"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 80rem"
          />
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {HIGHLIGHTS.map(({ icon: Icon, title, copy }, index) => (
            <li
              key={title}
              className={`flex flex-col items-center px-4 text-center lg:px-5 ${
                index < HIGHLIGHTS.length - 1
                  ? "lg:border-r lg:border-gold/30"
                  : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold">
                <Icon
                  className="h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-xs tracking-[0.18em] text-gold uppercase">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                {copy}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-gold/25 pt-14 lg:grid-cols-2 lg:gap-14">
          {PROGRAMS.map(({ icon: Icon, title, points }) => (
            <div key={title} className="text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border border-gold/45 text-gold">
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="font-serif text-2xl text-ivory">{title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-relaxed text-ivory/75"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gold/25 pt-12 text-center">
          <p className="max-w-xl text-sm leading-relaxed text-ivory/70">
            Ready to launch? Tell us about your organization and we’ll help you
            pick the right program.
          </p>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="btn-gold inline-flex min-h-11 items-center px-7 text-xs font-semibold tracking-[0.18em] uppercase"
          >
            Start Fundraising →
          </button>
        </div>
      </div>
    </section>
  );
}
