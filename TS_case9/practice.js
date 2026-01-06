"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var widgetId = 42;
var status = "shipped";
var storeLocation = [3, 4];
var product = {
    id: widgetId,
    name: "Widget",
    price: 9.99,
    inStock: true
};
var consoleLogger = function (msg) {
    console.log(msg);
};
typeof consoleLogger; // Logger
