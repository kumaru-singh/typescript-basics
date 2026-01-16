"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransferGateway = void 0;
class BankTransferGateway {
    async processPayment(amount) {
        console.log(`[BankTransfer] Processing $${amount}`);
        return true;
    }
}
exports.BankTransferGateway = BankTransferGateway;
