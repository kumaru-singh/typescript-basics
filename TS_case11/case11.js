var h = 0;
while (true) {
    if (h == 4) {
        h++;
        continue;
    }
    console.log(h);
    h++;
    if (h == 10)
        break;
}
var inventory = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScriptGuides": 2,
    "abc 1": 2
};
// using for in  loop 
for (var key in inventory) {
    console.log("".concat(key, " :  ").concat(inventory[key]));
}
var visitors = ["Alice", "Bob", "Carol"];
// visitors.reverse();
for (var _i = 0, visitors_1 = visitors; _i < visitors_1.length; _i++) {
    var visitor = visitors_1[_i];
    console.log(visitors);
}
/*

[ 'Alice', 'Bob', 'Carol' ]
[ 'Alice', 'Bob', 'Carol' ]
[ 'Alice', 'Bob', 'Carol' ]

*/ 
