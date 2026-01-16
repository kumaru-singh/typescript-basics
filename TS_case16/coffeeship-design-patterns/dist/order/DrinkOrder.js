"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkOrder = void 0;
class DrinkOrder {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyAll(message) {
        this.observers.forEach(obs => obs.update(message));
    }
    completeOrder() {
        this.notifyAll("Drink is ready");
    }
}
exports.DrinkOrder = DrinkOrder;
