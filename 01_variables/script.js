// var ⚠️
// Old JavaScript keyword.
// var city = "Ahmedabad";
// Still works.
// But has weird behavior.
// Industry mostly avoids it because it causes:
// scope confusion
// hoisting confusion
// accidental bugs

const username = "avesh"; 
let score = 100;
let isLoggedIn = true;

console.log(username);
console.log(score);
console.log(isLoggedIn);

//Industry Naming Convention camelCase ✅
// let firstName;
// let totalPrice;
// let isLoggedIn;

// Variable Declaration vs Initialization
// Declaration
let age;
// Only created.
// Initialization
age = 20;
// Value assigned.

score = 50;
score = score+10;
console.log(score);

const user = {
  name: "Avesh"
};

user.name = "Khan";

console.log(user.name);

console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));