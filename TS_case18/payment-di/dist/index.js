"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentProcessor_1 = require("./processor/PaymentProcessor");
const StripeGateway_1 = require("./gateways/StripeGateway");
const PaypalGateway_1 = require("./gateways/PaypalGateway");
const BankTransferGateway_1 = require("./gateways/BankTransferGateway");
const MockFailGateway_1 = require("./gateways/MockFailGateway");
async function main() {
    const stripeProcessor = new PaymentProcessor_1.PaymentProcessor(new StripeGateway_1.StripeGateway());
    await stripeProcessor.pay(100);
    const paypalProcessor = new PaymentProcessor_1.PaymentProcessor(new PaypalGateway_1.PaypalGateway());
    await paypalProcessor.pay(200);
    const bankProcessor = new PaymentProcessor_1.PaymentProcessor(new BankTransferGateway_1.BankTransferGateway());
    await bankProcessor.pay(300);
    const testProcessor = new PaymentProcessor_1.PaymentProcessor(new MockFailGateway_1.MockFailGateway());
    try {
        await testProcessor.pay(50);
    }
    catch (err) {
        console.error("Expected failure:", err.message);
    }
}
main();
