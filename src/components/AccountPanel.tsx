"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { useUI } from "@/context/UIProvider";

export function AccountPanel() {
  const { accountOpen, closeAccount } = useUI();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!accountOpen) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAccount();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [accountOpen, closeAccount]);

  if (!accountOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
        aria-label="Close account panel"
        onClick={closeAccount}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md border border-gold/30 bg-emerald p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id={titleId} className="font-serif text-2xl text-ivory">
            Customer Accounts
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeAccount}
            className="rounded-full p-2 text-gold hover:bg-gold/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ivory/80">
          Account sign-in and saved preferences can be added in the production
          build. This demo does not include real authentication.
        </p>
        <button
          type="button"
          onClick={closeAccount}
          className="mt-6 min-h-11 w-full border border-gold/50 text-xs tracking-[0.18em] text-champagne uppercase transition-colors hover:border-champagne hover:text-ivory"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
}
