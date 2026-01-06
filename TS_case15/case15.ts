type Instructor = { name : string, subject : string };
type Admin = { name : string , accesslevel : string, id : number };
type InstructOrAdmin = Instructor | Admin;

let a : InstructOrAdmin = { name: "rahul", subject: "MERN" };
let b : InstructOrAdmin = { name: "xyz", accesslevel: "high", id: 1 };
let c : InstructOrAdmin = { name: "abc", subject: "DSA", accesslevel: "medium" }; 

console.log(a);
console.log(b);
console.log(c);







type LearnerStats = { quizzes: number, videos : number, assignments : number };

type StatsStrings = {  [ key in keyof LearnerStats]: string };

let obj1 : LearnerStats = { quizzes: 5, videos: 10, assignments: 3 };
let obj2 : StatsStrings = { quizzes: "5", videos: "10", assignments: "3" };

console.log(obj1);
console.log(obj2);


/*
OUTPUT:

{ name: 'rahul', subject: 'MERN' }
{ name: 'xyz', accesslevel: 'high', id: 1 }
{ name: 'abc', subject: 'DSA', accesslevel: 'medium' }
{ quizzes: 5, videos: 10, assignments: 3 }
{ quizzes: '5', videos: '10', assignments: '3' }


*/