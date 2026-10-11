"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { formatPrice, products } from "@/data/products";
import { useUI } from "@/context/UIProvider";

function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return products;

    return products.filter((product) => {
      const haystack = [
        product.name,
        product.subtitle,
        product.description,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 py-16 sm:px-6">
      <button
        type="button"
        className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
        aria-label="Close search"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-2xl border border-gold/40 bg-emerald-deep shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-gold/20 px-4 py-3">
          <Search className="h-5 w-5 text-gold" aria-hidden="true" />
          <h2 id={titleId} className="sr-only">
            Search products
          </h2>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search flavors, pistachio, kunafa..."
            className="min-h-11 flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gold hover:bg-gold/10"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3">
          {results.length === 0 ? (
            <div className="px-3 py-10 text-center">
              <p className="font-serif text-xl text-champagne">No matches</p>
              <p className="mt-2 text-sm text-ivory/65">
                Try another flavor name or description keyword.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {results.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push(`/products/${product.id}`);
                    }}
                    className="flex w-full items-center gap-3 rounded px-2 py-2 text-left transition-colors hover:bg-gold/10"
                  >
                    <div className="relative h-14 w-12 overflow-hidden ring-1 ring-gold/25">
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-serif text-lg text-ivory">
                        {product.name}
                      </p>
                      <p className="truncate text-xs tracking-[0.12em] text-ivory/60 uppercase">
                        {product.subtitle}
                      </p>
                    </div>
                    <p className="text-sm text-champagne">
                      {formatPrice(product.priceUSD)}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export function SearchDialog() {
  const { searchOpen, closeSearch } = useUI();

  if (!searchOpen) return null;

  return <SearchPanel key="search-open" onClose={closeSearch} />;
}
