"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/data/products";

type UIContextValue = {
  cartOpen: boolean;
  searchOpen: boolean;
  accountOpen: boolean;
  mobileMenuOpen: boolean;
  selectedProduct: Product | null;
  openCart: () => void;
  closeCart: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  openAccount: () => void;
  closeAccount: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openProduct: (product: Product) => void;
  closeProduct: () => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openCart = useCallback(() => {
    setSearchOpen(false);
    setAccountOpen(false);
    setMobileMenuOpen(false);
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => setCartOpen(false), []);
  const openSearch = useCallback(() => {
    setCartOpen(false);
    setAccountOpen(false);
    setMobileMenuOpen(false);
    setSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const openAccount = useCallback(() => {
    setCartOpen(false);
    setSearchOpen(false);
    setMobileMenuOpen(false);
    setAccountOpen(true);
  }, []);
  const closeAccount = useCallback(() => setAccountOpen(false), []);
  const openMobileMenu = useCallback(() => {
    setCartOpen(false);
    setSearchOpen(false);
    setAccountOpen(false);
    setMobileMenuOpen(true);
  }, []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const openProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);
  const closeProduct = useCallback(() => setSelectedProduct(null), []);

  const value = useMemo(
    () => ({
      cartOpen,
      searchOpen,
      accountOpen,
      mobileMenuOpen,
      selectedProduct,
      openCart,
      closeCart,
      openSearch,
      closeSearch,
      openAccount,
      closeAccount,
      openMobileMenu,
      closeMobileMenu,
      openProduct,
      closeProduct,
    }),
    [
      cartOpen,
      searchOpen,
      accountOpen,
      mobileMenuOpen,
      selectedProduct,
      openCart,
      closeCart,
      openSearch,
      closeSearch,
      openAccount,
      closeAccount,
      openMobileMenu,
      closeMobileMenu,
      openProduct,
      closeProduct,
    ],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within UIProvider");
  }
  return context;
}
