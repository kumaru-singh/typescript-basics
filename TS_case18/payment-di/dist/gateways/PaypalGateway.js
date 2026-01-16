"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalGateway = void 0;
class PaypalGateway {
    async processPayment(amount) {
        console.log(`[PayPal] Processing $${amount}`);
        return true;
    }
}
exports.PaypalGateway = PaypalGateway;
