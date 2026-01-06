var city : string = "Sitara";
var temperature : number = 14.3;
var isRaining = false;

function weatherReport(city : string, temperature : number, isRaining : boolean) : void{
    console.log(`In ${city}, it is ${temperature} C. Is it raining? ${isRaining}`);
    if(true) var x = 12;
    console.log(x);
}

weatherReport(city, temperature, isRaining);

let vars;
console.log(typeof vars);
/*

let keya;

keya = " Hello ";

console.log(typeof keya);


var global_num = 12; // global variable
class Numbers {
   num_val = 13; // class variable
   static sval = 10; // static field

   storeNum(): void {
      var local_num = 14; // local variable
   }
}
console.log("Global num: " + global_num);
console.log(Numbers.sval); // static variable
var obj = new Numbers();
console.log("Class num: " + obj.num_val);

*/