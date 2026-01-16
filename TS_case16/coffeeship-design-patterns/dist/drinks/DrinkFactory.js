"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrinkFactory = void 0;
const Latte_1 = require("./Latte");
const Espresso_1 = require("./Espresso");
class DrinkFactory {
    static create(type) {
        switch (type) {
            case "latte":
                return new Latte_1.Latte();
            case "espresso":
                return new Espresso_1.Espresso();
            default:
                throw new Error("Unknown drink type");
        }
    }
}
exports.DrinkFactory = DrinkFactory;
