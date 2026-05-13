console.log("operatiors practice")
console.log("10"+1);
console.log("10"-1);
console.log(true + false);
console.log(!!"avesh");


let str = "55";
let num = +str;
console.log(str);
console.log(num);

let age = 17;
let msg = age >= 18 ? "adult" : "minor";
console.log(msg);


function calc(a,b,operator){
    if (operator === "+"){
        return a+b;
    } else if (operator === "-") {
        return Math.abs(a - b);
    } else if (operator === "*"){
        return a*b;
    } else if (operator === "/"){
        return a/b;
    } else if (operator === "**"){
        return a**b;
    } else if (operator === "%"){
        return a%b;
    } else {
        console.log("invalid input or operator");
    }

}

console.log(calc(3,5,"-"))


let marks = 82;
if (marks > 90){
    console.log("Excellent");
} else if (marks < 91  && marks > 70){
    console.log("Good");
} else if (marks < 71 && marks > 50){
    console.log("Average");
} else {
    console.log("Fail")
}