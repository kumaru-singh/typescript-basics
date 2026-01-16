import { Drink } from "./Drink";

export class Latte implements Drink {
  serve() {
    console.log("Serving Latte");
  }
}
