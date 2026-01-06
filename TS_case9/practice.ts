export {};
// 1. Primitive Aliases

type ProductId = number;
let widgetId :  ProductId = 42;

// 2. Union Type Aliases
type OrderState = "pending" | "shipped" | "returned";
let status : OrderState = "shipped";

// 3. Tuple Type Aliases
type Coordinates = [aisle : number, shelf : number];
let storeLocation : Coordinates = [3, 4];

// 4. Object Type Aliases

type Product = {
    id: ProductId;
    name: string;
    price: number;
    inStock: boolean;
};

let product : Product = {
    id: widgetId,
    name: "Widget",
    price: 9.99,
    inStock: true
};

// 5. Function Type Aliases
type Logger = (message : string ) => void;
let consoleLogger : Logger = (msg) => {
    console.log(msg);
};



// 6. Generic Type Aliases

type Container<T> = { value : T; timestamp : Date}

let productContainer : Container<Product> = {
    value: product,
    timestamp: new Date()
};

let idContainer : Container<ProductId> = {
    value:1 ,
    timestamp: new Date()
};

console.log(typeof consoleLogger); // Logger