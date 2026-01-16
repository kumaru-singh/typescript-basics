import { PaymentGateway } from "./PaymentGateway";

export class BankTransferGateway implements PaymentGateway {
  async processPayment(amount: number): Promise<boolean> {
    console.log(`[BankTransfer] Processing $${amount}`);
    return true;
  }
}
