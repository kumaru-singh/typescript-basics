"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stats;
var x = 10;
;
var fn = function () { return console.log("Hello"); };
/*

function processOrder ( orderId : number ) : OrderStatus {
    console.log( " Processing order", orderId );
    return " SUCCESS ";
}

const status = processOrder ( 1234 ) ;
console.log( " Order Status : " , status ) ;


*/
var status;
function processOrder(orderId, callback) {
    console.log(" Processing order", orderId);
    var status = " SUCCESS ";
    callback(status);
}
processOrder(1234, function () {
    console.log(" Order Status : ");
});
