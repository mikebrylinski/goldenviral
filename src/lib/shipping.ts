export const FREE_SHIPPING_THRESHOLD_USD = 69;

export function amountUntilFreeShipping(subtotal: number): number {
  return Math.max(0, FREE_SHIPPING_THRESHOLD_USD - subtotal);
}

export function qualifiesForFreeShipping(subtotal: number): boolean {
  return subtotal >= FREE_SHIPPING_THRESHOLD_USD;
}
