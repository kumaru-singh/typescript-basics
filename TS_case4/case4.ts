let score : number = 97;

if(true){
    let score = 32;
    console.log(score);
    //   let score = 88;  ---> giving error as we cannot re-declare the variable with let keyword in the same block
}

const COUNTRY : string  = " India ";
// COUNTRY = " USA "; // This will give an error as we cannot change the value of a constant

console.log("Score is : " + score);
console.log("Country is : " + COUNTRY);