import { Observer } from "./Observer";

export class Customer implements Observer {
  update(message: string) {
    console.log(`[Customer]: ${message}`);
  }
}
