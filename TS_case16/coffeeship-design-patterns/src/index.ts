import { CafeManager } from "./manager/CafeManager";
import { DrinkFactory } from "./drinks/DrinkFactory";
import { FastPrep } from "./strategy/FastPrep";
import { EcoPrep } from "./strategy/EcoPrep";
import { DrinkOrder } from "./order/DrinkOrder";

import { Customer } from "./observer/Customer";
import { Inventory } from "./observer/Inventory";
import { PromotionSystem } from "./observer/PromotionSystem";

// Singleton
const manager = CafeManager.getInstance();
manager.announce("Cafe is open");

// Factory
const drink = DrinkFactory.create("latte");
drink.serve();

// Strategy
const fastPrep = new FastPrep();
fastPrep.prepare();

const ecoPrep = new EcoPrep();
ecoPrep.prepare();

// Observer
const order = new DrinkOrder();
order.addObserver(new Customer());
order.addObserver(new Inventory());
order.addObserver(new PromotionSystem()); // ← challenge used

order.completeOrder();
