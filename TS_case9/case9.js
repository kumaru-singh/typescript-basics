"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats = "new";
console.log(typeof stats);
stats = "processing";
console.log(typeof stats);
var ProcessOrder = function (orderId, callback) {
    console.log("Processing Order ", orderId);
    callback(stats);
};
ProcessOrder(101, function (stats) {
    console.log("ORDER STATUS : ", stats);
});
// processOrder ( 101 , "processing" ) ;
var Customer = {
    id: "C123",
    name: "Alice Smith",
    email: "abc@gmail.com"
};
