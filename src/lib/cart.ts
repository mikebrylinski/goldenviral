import type { Product } from "@/data/products";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export const CART_STORAGE_KEY = "golden-viral-cart-v1";

export function createEmptyCart(): CartState {
  return { items: [] };
}

export function readCartFromStorage(): CartState {
  if (typeof window === "undefined") {
    return createEmptyCart();
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return createEmptyCart();

    const parsed = JSON.parse(raw) as CartState;
    if (!parsed || !Array.isArray(parsed.items)) {
      return createEmptyCart();
    }

    return {
      items: parsed.items
        .filter(
          (item) =>
            typeof item?.productId === "string" &&
            typeof item?.quantity === "number" &&
            item.quantity > 0,
        )
        .map((item) => ({
          productId: item.productId,
          quantity: Math.min(99, Math.floor(item.quantity)),
        })),
    };
  } catch {
    return createEmptyCart();
  }
}

export function writeCartToStorage(cart: CartState): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // Ignore storage failures (private mode, quota, etc.)
  }
}

export function getCartItemCount(cart: CartState): number {
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartSubtotal(
  cart: CartState,
  catalog: Product[],
): number {
  return cart.items.reduce((total, item) => {
    const product = catalog.find((entry) => entry.id === item.productId);
    if (!product) return total;
    return total + product.priceUSD * item.quantity;
  }, 0);
}

export function addItemToCart(
  cart: CartState,
  productId: string,
  quantity = 1,
): CartState {
  const nextQty = Math.max(1, Math.min(99, Math.floor(quantity)));
  const existing = cart.items.find((item) => item.productId === productId);

  if (existing) {
    return {
      items: cart.items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(99, item.quantity + nextQty) }
          : item,
      ),
    };
  }

  return {
    items: [...cart.items, { productId, quantity: nextQty }],
  };
}

export function updateItemQuantity(
  cart: CartState,
  productId: string,
  quantity: number,
): CartState {
  const nextQty = Math.floor(quantity);

  if (nextQty <= 0) {
    return removeItemFromCart(cart, productId);
  }

  return {
    items: cart.items.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.min(99, nextQty) }
        : item,
    ),
  };
}

export function removeItemFromCart(
  cart: CartState,
  productId: string,
): CartState {
  return {
    items: cart.items.filter((item) => item.productId !== productId),
  };
}
