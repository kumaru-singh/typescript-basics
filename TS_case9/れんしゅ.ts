export {}

type status = string;
let stats : status;

const x = 10;;
const fn = () => console.log("Hello");

type OrderStatus = " SUCCESS " | " FAILED " | " PENDING " ;

/*

function processOrder ( orderId : number ) : OrderStatus {
    console.log( " Processing order", orderId );
    return " SUCCESS ";
}

const status = processOrder ( 1234 ) ;
console.log( " Order Status : " , status ) ;


*/
let status : OrderStatus ;

function processOrder (
    orderId : number,
    callback : ( status : OrderStatus) => void 
): void { 
    console.log( " Processing order", orderId );
    const status : OrderStatus = " SUCCESS " ;
    callback ( status ) ;
}

processOrder ( 1234, () => {
    console.log( " Order Status : "  ) ;
} )



