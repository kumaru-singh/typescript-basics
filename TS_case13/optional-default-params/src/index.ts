import { describePerson } from "./functions/describePerson";
import { calculatePrice } from "./functions/calculatePrice";

console.log(describePerson("Eve"));
console.log(describePerson("Frank", 28));

console.log(calculatePrice(100));      // 90
console.log(calculatePrice(100, 0.2)); // 80
