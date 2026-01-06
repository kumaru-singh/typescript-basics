// let answer : {[key : number] : any} = {};
// // empty object
// let id : number[] = [];
// // my task is to add all numbers from 1 to 10 into the id
// for(let i = 1; i <= 10; i++){
//     id.push(i);
// }
// let marks : number[] = [];
// // my task is to add marks from 50 to 70 but i want to add all the even numbers
// for(let i = 50; i <= 68; i += 2){
//     marks.push(i);
// }
// for(let i = 0; i < marks.length; i++){ // id.length -> 10
//     let key = id[i];
//     let value = marks[i];
//     answer[key] = value;
//     // answer[key] = true;
// }
// delete answer[1];
// console.log(answer);
/*
    id      1 2 3 4 5 6 7 8 9 10
    marks   50 52 54....        68
    {
        2 : 52
        ....
        10 : 68
    }
*/
/*
    why maps accept boolean as a key
    but objects do not accept boolean as a key
*/
/*

{
  '2': 52,
  '3': 54,
  '4': 56,
  '5': 58,
  '6': 60,
  '7': 62,
  '8': 64,
  '9': 66,
  '10': 68
}

*/
function processTransaction(amount, desc, isCredit) {
    function negativeAmount() {
        throw new Error(" Amount cannot be negative ");
    }
    if (amount < 0) {
        negativeAmount();
    }
    var description = desc === undefined ? " No description provided " : desc;
    console.log(" Summary of the transaction is -> Amount : ".concat(amount, ", Description : ").concat(description, ", IsCredit : ").concat(isCredit));
}
// processTransaction(1000, true);
processTransaction(500, undefined, false);
/*

OUTPUT

 Summary of the transaction is -> Amount : 500, Description :  No description provided , IsCredit : false

 */ 
