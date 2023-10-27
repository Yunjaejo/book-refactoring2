export function isDeliveryFree(anOrder: Order) {
  return anOrder.basePrice > 1000;
}

interface Order {
  basePrice: number;
}
