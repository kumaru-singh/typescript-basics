export {}

// CustomerID as an alias of string
type CustomerID = string;

type Customer = {id : CustomerID, name : string, email? : string};

let customer : Customer = {id : "101", name : "Ram", email : "ABC@gmail.com"};

type OrderStatus = "Pending" | "Packed" | "Delivered";

let stat : OrderStatus;
console.log(typeof stat);
stat = "Packed";
console.log(typeof stat);

type ProcessOrder = (orderID : number, callback : (status : OrderStatus) => void) => void;

const processOrder : ProcessOrder = (orderID, callback) => {
    console.log("Processing Order ", orderID);
    callback(stat);
}

processOrder(11, (stat) => {
    console.log("ORDER STATUS : ", stat);
})


/*

undefined
string
Processing Order  11
ORDER STATUS :  Packed

*/