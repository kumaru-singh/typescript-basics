// Implement a PromotionSystem interface with an update method
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.notify = function (msg) {
        console.log("Customer Notification: ".concat(msg));
    };
    return Customer;
}());
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    Inventory.prototype.notify = function (msg) {
        console.log("Inventory Notification: ".concat(msg));
    };
    return Inventory;
}());
var DrinkOrder = /** @class */ (function () {
    function DrinkOrder() {
        this.observers = [];
    }
    DrinkOrder.prototype.addObserver = function (obj) {
        this.observers.push(obj);
    };
    DrinkOrder.prototype.notifyAll = function (msg) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.notify(msg);
        }
    };
    DrinkOrder.prototype.completeOrder = function () {
        this.notifyAll("Your drink order is ready!");
    };
    return DrinkOrder;
}());
var PromotionSystem = /** @class */ (function () {
    function PromotionSystem() {
    }
    PromotionSystem.prototype.notify = function (msg) {
        console.log("Promotion System Notification: ".concat(msg));
    };
    return PromotionSystem;
}());
var order = new DrinkOrder();
var customer = new Customer();
var inventory = new Inventory();
var promoSystem = new PromotionSystem();
order.addObserver(customer);
order.addObserver(inventory);
order.addObserver(promoSystem);
console.log("Placing drink order...");
order.completeOrder();
