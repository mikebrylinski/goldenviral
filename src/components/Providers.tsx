"use client";

import { CartProvider } from "@/context/CartProvider";
import { UIProvider } from "@/context/UIProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <UIProvider>{children}</UIProvider>
    </CartProvider>
  );
}
