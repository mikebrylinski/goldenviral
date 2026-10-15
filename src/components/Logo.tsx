"use client";

import { PistachioMascot } from "@/components/PistachioMascot";

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
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`relative shrink-0 ${
          compact ? "h-12 w-12" : "h-[3.75rem] w-[3.75rem]"
        }`}
      >
        <span
          className="absolute inset-0 rounded-full bg-gold/20 blur-[6px]"
          aria-hidden="true"
        />
        <PistachioMascot
          className="relative h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
          title="Golden Viral pistachio mascot"
        />
      </span>

      {showWordmark ? (
        <p
          className={`font-serif font-semibold tracking-[0.08em] text-ivory uppercase ${
            compact ? "text-[1.35rem] sm:text-2xl" : "text-2xl sm:text-[1.85rem]"
          }`}
        >
          Golden <span className="text-gold">Viral</span>
        </p>
      ) : null}
    </div>
  );
}
