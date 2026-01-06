// Implement a PromotionSystem interface with an update method

interface Observer  { 
    /*
    notifyAll( message: string) : void;
    notifyCustomer( messaage : string ) : void;
    notifyStaff( message: string ) : void;

    */
    notify( msg : string ) : void;

}

class Customer implements Observer {

    notify(msg: string): void {
        console.log(`Customer Notification: ${msg}`);
    }

}


class Inventory implements Observer {
    notify(msg: string): void {
        console.log(`Inventory Notification: ${msg}`);
    }
    
}

class DrinkOrder {

    private observers : Observer[] = [];
    addObserver(obj : Observer){
        this.observers.push(obj);
    }

    notifyAll( msg : string): void {
        for( let observer of this.observers ){
            observer.notify(msg);
        }
    }

    completeOrder(){
        this.notifyAll("Your drink order is ready!");
    }
}


class PromotionSystem implements Observer {
    notify(msg: string): void {
        console.log(`Promotion System Notification: ${msg}`);
    }
}

let order = new DrinkOrder();
let customer = new Customer();
let inventory = new Inventory();
let promoSystem = new PromotionSystem();

order.addObserver(customer);
order.addObserver(inventory);
order.addObserver(promoSystem);


/*
Output:


Placing drink order...
Customer Notification: Your drink order is ready!
Inventory Notification: Your drink order is ready!
Promotion System Notification: Your drink order is ready!


*/
