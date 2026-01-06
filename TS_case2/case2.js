var apple = "apple";
var favouriteFruit = "Mango";
function fun(num) {
    return num * 2;
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("HELLO THEREEE");
        console.log("Nice to meet you all!");
    };
    return Person;
}());
var p = new Person();
p.sayHello();
var value = 20;
var result = fun(value);
console.log(result);
console.log(apple);
console.log(favouriteFruit);
