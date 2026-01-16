"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeGateway = void 0;
class StripeGateway {
    async processPayment(amount) {
        console.log(`[Stripe] Processing $${amount}`);
        return true;
    }
}
exports.StripeGateway = StripeGateway;
