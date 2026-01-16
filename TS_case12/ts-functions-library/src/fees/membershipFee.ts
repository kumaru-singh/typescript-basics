export function membershipFee(
    price: number,
    discountRate: number = 0.1
  ): number {
    return price * (1 - discountRate);
  }
  