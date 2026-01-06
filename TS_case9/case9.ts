export {}

type customerId = string ;

type customer = {
    id : customerId ;
    name : string ;
    email ?: string ;
}

type orderStatus = "new" | "processing" | "completed" | "cancelled" ;

let stats : orderStatus  = "new" ;
console.log( typeof stats );
stats = "processing" ;
console.log( typeof stats );

type processOrder = ( orderId : number , callback : (  status : orderStatus)  => void) => void ;

const ProcessOrder :  processOrder = ( orderId, callback ) => {
    console.log( "Processing Order " , orderId ) ;
    callback ( stats ) ;
}

ProcessOrder( 101, ( stats ) => {
    console.log( "ORDER STATUS : " , stats ) ;
})


// processOrder ( 101 , "processing" ) ;




const Customer : customer = {
    id : "C123" ,
    name : "Alice Smith" ,
    email : "abc@gmail.com"
}


type Container<customer> = {
    value : customer;
}