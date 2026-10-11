"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { products } from "@/data/products";
import {
  addItemToCart,
  createEmptyCart,
  getCartItemCount,
  getCartSubtotal,
  readCartFromStorage,
  removeItemFromCart,
  updateItemQuantity,
  writeCartToStorage,
  type CartState,
} from "@/lib/cart";

type CartContextValue = {
  items: CartState["items"];
  itemCount: number;
  subtotal: number;
  hydrated: boolean;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const EMPTY_CART = createEmptyCart();
let memoryCart: CartState = EMPTY_CART;
let hasHydrated = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function ensureHydrated() {
  if (hasHydrated || typeof window === "undefined") return;
  memoryCart = readCartFromStorage();
  hasHydrated = true;
}

function subscribe(listener: () => void) {
  ensureHydrated();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getServerSnapshot(): CartState {
  return EMPTY_CART;
}

function getClientSnapshot(): CartState {
  ensureHydrated();
  return memoryCart;
}

function commitCart(next: CartState) {
  memoryCart = next;
  hasHydrated = true;
  writeCartToStorage(next);
  emit();
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cart = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const addItem = useCallback((productId: string, quantity = 1) => {
    commitCart(addItemToCart(getClientSnapshot(), productId, quantity));
  }, []);

  const removeItem = useCallback((productId: string) => {
    commitCart(removeItemFromCart(getClientSnapshot(), productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    commitCart(updateItemQuantity(getClientSnapshot(), productId, quantity));
  }, []);

  const clearCart = useCallback(() => {
    commitCart(EMPTY_CART);
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      items: cart.items,
      itemCount: getCartItemCount(cart),
      subtotal: getCartSubtotal(cart, products),
      hydrated: true,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    }),
    [cart, addItem, removeItem, setQuantity, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
