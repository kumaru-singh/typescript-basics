function checkSign(num) {
    if (num > 0) {
        console.log("Yes it is Positive");
    }
    else if (num == 0) {
        console.log("Neither positive nor negative");
    }
    else {
        console.log("No it is not positive");
    }
    console.log(typeof num);
    console.log(num > 0);
}
// let x : number = 812;
// checkSign(x);
// let y : number = -123;
// checkSign(y);
// let z : number = 0;
// checkSign(z);
// let str : string = "pratheek";
// checkSign(str); // type string is not assignable to type number
// let numb : any = "abc12";
// checkSign(numb);
// numb = 1234;
// checkSign(numb);
/*
positive
not positive
neither positive nor negative
type error
type error
yes it is positive
*/
// any is actually disabling the type checking
// false is odd and true is even
function evenOrOdd(num) {
    console.log(num % 2);
    return num % 2 == 0;
}
// return num % 2 == 1 ? false : true;
/*
if(num % 2 == 0){
    return true;
}
else{
    return false;
}
*/
/*
14.7 % 2
14.7 into parts of 2?
2 2 2 2 2 2 2 = 14
0.7
*/
function getGrade(score) {
    // if(score >= 90) { console.log("Congratulations"); return "A"; }
    // else if(score >= 80) return "B";
    // else if(score >= 70) return "C";
    // else return "F"; //assuming any score <70 is fail
    switch (true) {
        case score > 100:
            console.log("Marks over 100");
        case score >= 90:
            console.log("A");
        case score >= 80:
            console.log("B");
        case score >= 70:
            console.log("C");
        case score >= 0:
            console.log("F");
        case score > 10000:
            console.log("aihgadjg");
        default:
            console.log("Marks are negative");
    }
}
getGrade(100);
// getGrade(50);
// getGrade(-1);
// console.log(grade);
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Very Good");
            break;
        case "C":
            console.log("Good");
            break;
        case "F":
            console.log("Needs Improvement");
            break;
        default:
            console.log("Invalid Grade");
    }
}
provideFeedback("A");
provideFeedback("B");
provideFeedback("C");
provideFeedback("F");
/*

o/p
  Excellent
  Very Good
  Good
  Needs Improvement

*/
