import { Observer } from "../observer/Observer";

export class DrinkOrder {
  private observers: Observer[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  notifyAll(message: string) {
    this.observers.forEach(obs => obs.update(message));
  }

  completeOrder() {
    this.notifyAll("Drink is ready");
  }
}
