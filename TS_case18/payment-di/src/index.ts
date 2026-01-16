import { PaymentProcessor } from "./processor/PaymentProcessor";
import { StripeGateway } from "./gateways/StripeGateway";
import { PaypalGateway } from "./gateways/PaypalGateway";
import { BankTransferGateway } from "./gateways/BankTransferGateway";
import { MockFailGateway } from "./gateways/MockFailGateway";

async function main() {
  const stripeProcessor = new PaymentProcessor(new StripeGateway());
  await stripeProcessor.pay(100);

  const paypalProcessor = new PaymentProcessor(new PaypalGateway());
  await paypalProcessor.pay(200);

  const bankProcessor = new PaymentProcessor(new BankTransferGateway());
  await bankProcessor.pay(300);

  const testProcessor = new PaymentProcessor(new MockFailGateway());
  try {
    await testProcessor.pay(50);
  } catch (err) {
    console.error("Expected failure:", (err as Error).message);
  }
}

main();
