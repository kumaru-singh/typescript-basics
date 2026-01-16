import { PaymentGateway } from "./PaymentGateway";

export class MockFailGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`[MockFail] Simulating failure for $${amount}`);
    return false;
  }
}
