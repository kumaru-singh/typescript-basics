import { Drink } from "./Drink";
import { Latte } from "./Latte";
import { Espresso } from "./Espresso";

export class DrinkFactory {
  static create(type: string): Drink {
    switch (type) {
      case "latte":
        return new Latte();
      case "espresso":
        return new Espresso();
      default:
        throw new Error("Unknown drink type");
    }
  }
}
