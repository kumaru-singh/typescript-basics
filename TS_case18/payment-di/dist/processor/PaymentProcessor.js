"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
class PaymentProcessor {
    constructor(gateway) {
        this.gateway = gateway;
    }
    async pay(amount) {
        const success = await this.gateway.processPayment(amount);
        if (!success) {
            throw new Error("Payment failed");
        }
        console.log("Payment successful");
    }
}
exports.PaymentProcessor = PaymentProcessor;
