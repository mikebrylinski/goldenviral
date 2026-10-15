type IconProps = {
  className?: string;
};

export function ShippingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 28h26v8H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M30 22h8l6 8v6h-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 28V16h18v12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="36" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="34" cy="36" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 16l4-6h8l3 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DirectIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 6l16 10v8c0 10-7.2 16.8-16 20-8.8-3.2-16-10-16-20v-8L24 6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M18 24l4.5 4.5L30 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PackagingIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 16l14-8 14 8v18l-14 8-14-8V16z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 16l14 8 14-8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 24v18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 13l12 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="24" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}

export function ExperienceIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 40s-12-7.5-12-16.5C12 17 16.5 13 21 13c2.6 0 4.6 1.3 5.5 3.1C27.4 14.3 29.4 13 32 13c4.5 0 9 4 9 10.5C41 32.5 24 40 24 40z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M24 18.5c.8-2.2 2.6-3.5 5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function ChocolateBarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="10"
        y="12"
        width="28"
        height="24"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10 20h28M10 28h28M19 12v24M29 12v24" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14.5" cy="16" r="1.2" fill="currentColor" />
      <circle cx="24" cy="24" r="1.2" fill="currentColor" />
      <circle cx="33.5" cy="32" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function InstagramGlyphIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="33.5" cy="14.5" r="2" fill="currentColor" />
    </svg>
  );
}
