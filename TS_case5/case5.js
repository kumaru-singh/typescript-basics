var answer = null;
console.log(answer);
answer = 12;
console.log(answer);
answer = "abc";
console.log(answer);
answer = false;
console.log(answer);
answer = [1, 2, 3];
console.log(answer);
var array = [];
array.push(1);
array.push(2);
console.log(array);
for (var i = 3; i < 10; i++) {
    array.push(i);
}
console.log.apply(console, array);
// for(let value of array){
//     console.log(value);
// }
array.pop();
console.log.apply(console, array);
// [1,2,3,4,5,6,7,8]
array.shift();
// [2,3,4,5,6,7,8]
console.log.apply(console, array);
array.unshift(12);
// [12,2,3,4,5,6,7,8]
console.log.apply(console, array);
/*

null
12
abc
false
[ 1, 2, 3 ]
[ 1, 2 ]
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8
2 3 4 5 6 7 8
12 2 3 4 5 6 7 8

*/
function recordAnswer(qId, ans) {
    console.log(" Question ID : ".concat(qId, ", Answer : ").concat(ans));
    var object = {};
    object[qId] = ans;
    console.log(object[qId]);
}
recordAnswer(1, " TypeScript ");
recordAnswer(2, 42);
recordAnswer(3, [1, 2, 3]);
