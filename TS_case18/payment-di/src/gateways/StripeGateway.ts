import { PaymentGateway } from "./PaymentGateway";

export class StripeGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`[Stripe] Processing $${amount}`);
    return true;
  }
}
