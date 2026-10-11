type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12.2c0-2.2-.3-3.8-.5-4.5-.3-.9-.9-1.5-1.8-1.8C18.2 5.5 12 5.5 12 5.5s-6.2 0-7.7.4c-.9.3-1.5.9-1.8 1.8-.3.7-.5 2.3-.5 4.5s.2 3.8.5 4.5c.3.9.9 1.5 1.8 1.8 1.5.4 7.7.4 7.7.4s6.2 0 7.7-.4c.9-.3 1.5-.9 1.8-1.8.2-.7.5-2.3.5-4.5Zm-12.2 3V9.2l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function PinterestIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.2-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.3 1.1.5 1.9 1.5 1.9 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.9 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.8 2.3.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.8-6.3 3.6 0 6.3 2.5 6.3 5.9 0 3.5-2.2 6.4-5.3 6.4-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.7 1 .3 2 .4 3.1.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 4c.5 2.2 2 3.8 4.2 4.1v3c-1.5-.1-2.9-.6-4.1-1.5v6.3c0 3.5-2.8 6.3-6.3 6.3S4 19.4 4 15.9c0-3.3 2.6-6 5.9-6.3v3.1c-1.5.3-2.6 1.6-2.6 3.2 0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2V4h2.8Z" />
    </svg>
  );
}
