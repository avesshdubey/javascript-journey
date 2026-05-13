console.log(null+1);
console.log("5"+3);
console.log("5"-3);
console.log(true + false);


console.log(typeof[]);
console.log(typeof null);
console.log(typeof 123n);

console.log(Boolean([]));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(undefined));

function isEmpty(value){
    return value === "" || value === undefined || value === null
}

console.log("first js function");
console.log(isEmpty(""));

console.log(5=="5");
console.log(5==="5");

