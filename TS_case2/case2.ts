let apple : string = "apple"
let favouriteFruit : string = "Mango"
function fun(num : number) : number{
    return num * 2;
}



class Person{
    sayHello() : void {
        console.log("HELLO THEREEE");
        console.log("Nice to meet you all!");
    }
}

let p = new Person();
p.sayHello();
let value : number = 20;
let result : number = fun(value);
console.log(result);
console.log(apple);
console.log(favouriteFruit);


/*


HELLO THEREEE
Nice to meet you all!
40
apple
Mango

*/


// This is the implementation of the code in case2.ts file