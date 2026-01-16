export function calculatePrice(
    basePrice: number,
    discount: number = 0.1
  ): number {
    return basePrice * (1 - discount);
  }
  