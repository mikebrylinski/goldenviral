export function PackagingArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 360"
      className={className}
      role="img"
      aria-label="Golden Viral emerald packaging illustration"
    >
      <defs>
        <linearGradient id="pack-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0C4032" />
          <stop offset="55%" stopColor="#06251D" />
          <stop offset="100%" stopColor="#031510" />
        </linearGradient>
        <linearGradient id="pack-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D58A" />
          <stop offset="100%" stopColor="#D8A83E" />
        </linearGradient>
      </defs>
      <rect
        x="16"
        y="10"
        width="188"
        height="340"
        rx="6"
        fill="url(#pack-body)"
        stroke="url(#pack-gold)"
        strokeWidth="2.2"
      />
      <rect
        x="32"
        y="26"
        width="156"
        height="308"
        rx="3"
        fill="none"
        stroke="#D8A83E"
        strokeOpacity="0.4"
      />
      <path
        d="M110 52l3.4 6.8 7.4 1.3-5.5 5.1 1.5 7.4-6.8-3.8-6.8 3.8 1.5-7.4-5.5-5.1 7.4-1.3Z"
        fill="url(#pack-gold)"
      />
      <text
        x="110"
        y="118"
        textAnchor="middle"
        fill="#F4D58A"
        fontFamily="Georgia, serif"
        fontSize="17"
        letterSpacing="3.5"
      >
        GOLDEN
      </text>
      <text
        x="110"
        y="142"
        textAnchor="middle"
        fill="#F4D58A"
        fontFamily="Georgia, serif"
        fontSize="17"
        letterSpacing="3.5"
      >
        VIRAL
      </text>
      <line
        x1="70"
        y1="158"
        x2="150"
        y2="158"
        stroke="#D8A83E"
        strokeOpacity="0.55"
      />
      <text
        x="110"
        y="178"
        textAnchor="middle"
        fill="#D8A83E"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        letterSpacing="2.8"
      >
        DUBAI CHOCOLATE
      </text>
      <g
        stroke="#D8A83E"
        strokeWidth="1.25"
        fill="none"
        strokeLinejoin="round"
        opacity="0.95"
      >
        <path d="M46 248h128" />
        <path d="M58 292V258h14v34" />
        <path d="M80 292V246l9-12 9 12v46" />
        <path d="M108 292V230l6-16 6 16v62" />
        <path d="M128 292V252h16v40" />
        <path d="M152 292V260h18v32" />
        <path d="M48 268c10-14 22-20 34-20" />
        <path d="M172 268c-10-14-22-20-34-20" />
      </g>
    </svg>
  );
}
