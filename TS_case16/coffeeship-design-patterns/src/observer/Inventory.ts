import { Observer } from "./Observer";

export class Inventory implements Observer {
  update(message: string) {
    console.log(`[Inventory]: ${message}`);
  }
}
