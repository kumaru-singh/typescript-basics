// This is the implementation of the code in case5.ts file

function recordAnswer( qId : number, ans : any) : void {
    console.log(` Question ID : ${qId}, Answer : ${ans}`);
    let object : any = {};
    object[qId] = ans;
    console.log(object[qId]);

}

recordAnswer(1, " TypeScript ");
recordAnswer(2, 42);
recordAnswer(3, [1,2,3]);

/*
 Output :


Question ID : 1, Answer :  TypeScript
 TypeScript
 Question ID : 2, Answer : 42
42
 Question ID : 3, Answer : 1,2,3
[ 1, 2, 3 ]

*/