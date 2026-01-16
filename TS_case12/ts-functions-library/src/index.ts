import { displayMember } from "./members/displayMember";
import { calculateFines } from "./fines/calculateFines";
import { membershipFee } from "./fees/membershipFee";
import { greetVisitor } from "./visitors/greetVisitor";
import { vipGreet, consoleGreet } from "./visitors/formatters";
import { factorial } from "./math/factorial";
import { generateReport } from "./reports/generateReport";

console.log(displayMember(1, "Alice"));
console.log(displayMember(2, "Bob", "bob@mail.com"));

console.log(calculateFines(5, 10, 2.5));

console.log(membershipFee(100));
console.log(membershipFee(100, 0.2));

greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

console.log(factorial(5));

const books = [{ title: "1984" }];
console.log(generateReport(books));
console.log(generateReport(books, "json"));
