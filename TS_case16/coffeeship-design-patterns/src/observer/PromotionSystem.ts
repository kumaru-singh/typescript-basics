import { Observer } from "./Observer";

export class PromotionSystem implements Observer {
  update(message: string) {
    console.log(`[Promotion]: Special offer triggered by "${message}"`);
  }
}
