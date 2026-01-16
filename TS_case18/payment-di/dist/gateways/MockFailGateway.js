"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFailGateway = void 0;
class MockFailGateway {
    async processPayment(amount) {
        console.log(`[MockFail] Simulating failure for $${amount}`);
        return false;
    }
}
exports.MockFailGateway = MockFailGateway;
