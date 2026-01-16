"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CafeManager = void 0;
class CafeManager {
    constructor() { }
    static getInstance() {
        if (!CafeManager.instance) {
            CafeManager.instance = new CafeManager();
        }
        return CafeManager.instance;
    }
    announce(msg) {
        console.log(`[Manager]: ${msg}`);
    }
}
exports.CafeManager = CafeManager;
