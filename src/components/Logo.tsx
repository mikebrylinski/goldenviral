"use client";

import { useId } from "react";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

export function Logo({
  className = "",
  showWordmark = true,
  compact = false,
}: LogoProps) {
  const gradientId = useId();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 72 72"
        className={compact ? "h-10 w-10" : "h-12 w-12"}
        role="img"
        aria-label="Golden Viral monogram"
      >
        <defs>
          <linearGradient id={gradientId} x1="12%" y1="0%" x2="88%" y2="100%">
            <stop offset="0%" stopColor="#F4D58A" />
            <stop offset="50%" stopColor="#D8A83E" />
            <stop offset="100%" stopColor="#9A6E1E" />
          </linearGradient>
        </defs>
        {/* Crown */}
        <path
          d="M18 22 L24 14 L32 20 L40 12 L48 20 L56 14 L54 28 H20 Z"
          fill={`url(#${gradientId})`}
        />
        <circle cx="24" cy="14" r="1.6" fill="#F4D58A" />
        <circle cx="40" cy="12" r="1.8" fill="#F4D58A" />
        <circle cx="56" cy="14" r="1.6" fill="#F4D58A" />
        {/* GV monogram */}
        <path
          d="M24 34c0-8 6-13 16-13 7 0 12 3.2 14 8.2l-5.2 1.8c-1.2-2.8-4-4.4-8.8-4.4-5.6 0-9.2 2.8-9.2 7.4 0 4.4 3.4 6.8 9.2 6.8h3.2v4.4h-3.4c-4.8 0-8 1.6-8 4.6 0 3 2.8 4.8 8.2 4.8 4.6 0 7.6-1.6 9-4.4l5 2c-2.2 5-7.4 7.8-14.2 7.8-10 0-15.2-4.4-15.2-10.6 0-4.4 2.8-7.4 7.6-8.8C27.2 39.2 24 37 24 34Z"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M42 42.5h8.5"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark ? (
        <div className="leading-none">
          <p className="font-serif text-lg tracking-[0.2em] text-gold uppercase sm:text-xl">
            Golden Viral
          </p>
          <p className="mt-1.5 text-[0.62rem] tracking-[0.32em] text-champagne/85 uppercase">
            Dubai Chocolate
          </p>
        </div>
      ) : null}
    </div>
  );
}
