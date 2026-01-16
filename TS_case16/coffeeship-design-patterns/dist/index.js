"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CafeManager_1 = require("./manager/CafeManager");
const DrinkFactory_1 = require("./drinks/DrinkFactory");
const FastPrep_1 = require("./strategy/FastPrep");
const EcoPrep_1 = require("./strategy/EcoPrep");
const DrinkOrder_1 = require("./order/DrinkOrder");
const Customer_1 = require("./observer/Customer");
const Inventory_1 = require("./observer/Inventory");
const PromotionSystem_1 = require("./observer/PromotionSystem");
// Singleton
const manager = CafeManager_1.CafeManager.getInstance();
manager.announce("Cafe is open");
// Factory
const drink = DrinkFactory_1.DrinkFactory.create("latte");
drink.serve();
// Strategy
const fastPrep = new FastPrep_1.FastPrep();
fastPrep.prepare();
const ecoPrep = new EcoPrep_1.EcoPrep();
ecoPrep.prepare();
// Observer
const order = new DrinkOrder_1.DrinkOrder();
order.addObserver(new Customer_1.Customer());
order.addObserver(new Inventory_1.Inventory());
order.addObserver(new PromotionSystem_1.PromotionSystem()); // ← challenge used
order.completeOrder();
