import { PaymentGateway } from "./PaymentGateway";

export class PaypalGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`[PayPal] Processing $${amount}`);
    return true;
  }
}
