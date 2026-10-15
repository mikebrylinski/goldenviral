"use client";

import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useCart } from "@/context/CartProvider";
import { useUI } from "@/context/UIProvider";
import { scrollToId } from "@/lib/scroll";

const NAV_LINKS = [
  { id: "shop", label: "Shop" },
  { id: "story", label: "Our Story" },
  { id: "fundraising", label: "Fundraising" },
  { id: "contact", label: "Contact" },
] as const;

export function Header() {
  const { itemCount } = useCart();
  const {
    openCart,
    openSearch,
    openAccount,
    mobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
  } = useUI();
  const [activeSection, setActiveSection] = useState("shop");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    closeMobileMenu();
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-black px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between gap-4">
        <a
          href="#top"
          className="shrink-0"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logo compact />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className={`relative pb-1 text-xs tracking-[0.24em] uppercase transition-colors ${
                  isActive ? "text-gold" : "text-gold/75 hover:text-champagne"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={openSearch}
            className="rounded-full p-2.5 text-gold transition-colors hover:bg-gold/10 hover:text-champagne"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openAccount}
            className="hidden rounded-full p-2.5 text-gold transition-colors hover:bg-gold/10 hover:text-champagne sm:inline-flex"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className="relative rounded-full p-2.5 text-gold transition-colors hover:bg-gold/10 hover:text-champagne"
            aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.65rem] font-semibold text-obsidian">
              {itemCount}
            </span>
          </button>
          <button
            type="button"
            onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
            className="rounded-full p-2.5 text-gold transition-colors hover:bg-gold/10 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-gold/20 py-6 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNav(link.id)}
                className="py-2 text-left text-sm tracking-[0.2em] text-gold uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMobileMenu();
                openAccount();
              }}
              className="py-2 text-left text-sm tracking-[0.2em] text-champagne uppercase"
            >
              Account
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
