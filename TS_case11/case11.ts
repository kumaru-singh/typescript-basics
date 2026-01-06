let h = 0;
while(true){
    if( h == 4){
        h++; 
        continue;
    }
    console.log(h);
    h++;
    if( h == 10 ) break;
}


let inventory : { [title : string ] : number} = {
    "The Hobbit": 3,
    "1984":5,
    "TypeScriptGuides": 2,
    "abc 1": 2
}

// using for in  loop 

for( let key in inventory){
    console.log(`${key} :  ${inventory[key]}`);
}


let visitors: string[] = ["Alice", "Bob", "Carol"];
// visitors.reverse();
for ( let visitor of visitors ) {
    console.log(visitors);
}


/*

0
1
2
3
5
6
7
8
9

1984 :  5
The Hobbit :  3
TypeScriptGuides :  2
abc 1 :  2

[ 'Alice', 'Bob', 'Carol' ]
[ 'Alice', 'Bob', 'Carol' ]
[ 'Alice', 'Bob', 'Carol' ]

*/