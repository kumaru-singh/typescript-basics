import { PaymentGateway } from "../gateways/PaymentGateway";

export class PaymentProcessor {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number): Promise<void> {
    const success = await this.gateway.processPayment(amount);

    if (!success) {
      throw new Error("Payment failed");
    }

    console.log("Payment successful");
  }
}
