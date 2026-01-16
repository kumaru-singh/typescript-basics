import { Drink } from "./Drink";

export class Espresso implements Drink {
  serve() {
    console.log("Serving Espresso");
  }
}
