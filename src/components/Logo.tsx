"use client";

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
    <div
      className={`logo-badge relative inline-flex items-center overflow-hidden border border-gold/60 bg-emerald-deep shadow-[inset_0_0_0_1px_rgba(244,213,138,0.12)] ${
        compact ? "px-3 py-1.5" : "px-4 py-2"
      } ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'url("/icons/moroccan-pattern.svg")',
          backgroundSize: "72px 72px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-obsidian/40"
        aria-hidden="true"
      />

      {showWordmark ? (
        <div className="relative z-10 inline-flex flex-col items-center leading-none">
          <p
            className={`whitespace-nowrap font-serif font-bold tracking-[0.08em] text-ivory uppercase ${
              compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
            }`}
          >
            Golden Viral
          </p>
          <p
            className={`w-full text-center tracking-[0.28em] text-champagne uppercase ${
              compact ? "text-[0.55rem] sm:text-[0.6rem]" : "text-[0.6rem] sm:text-xs"
            }`}
          >
            Dubai Chocolate
          </p>
        </div>
      ) : null}
    </div>
  );
}
