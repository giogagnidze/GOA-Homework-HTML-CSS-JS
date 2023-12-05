// Arithmetic Operators
let a = 10;
let b = 3;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let power = a ** b; // Exponentiation (ES6)

console.log("Arithmetic Operators:");
console.log("Sum:", sum); // 13
console.log("Difference:", difference); // 7
console.log("Product:", product); // 30
console.log("Quotient:", quotient); // 3.333...
console.log("Remainder:", remainder); // 1
console.log("Power:", power); // 1000 (ES6)

// Assignment Operators
let x = 5;
x += 3; // Add and assign
x -= 2; // Subtract and assign
x *= 4; // Multiply and assign
x /= 2; // Divide and assign
x %= 3; // Modulus and assign

console.log("\nAssignment Operators:");
console.log("x after +=:", x); // 1

// Comparison Operators
let num1 = 10;
let num2 = 5;
let isEqual = num1 === num2; // Equal to
let isNotEqual = num1 !== num2; // Not equal to
let isGreaterThan = num1 > num2; // Greater than
let isLessThan = num1 < num2; // Less than
let isGreaterOrEqual = num1 >= num2; // Greater than or equal to
let isLessOrEqual = num1 <= num2; // Less than or equal to

console.log("\nComparison Operators:");
console.log("isEqual:", isEqual); // false
console.log("isNotEqual:", isNotEqual); // true
console.log("isGreaterThan:", isGreaterThan); // true
console.log("isLessThan:", isLessThan); // false
console.log("isGreaterOrEqual:", isGreaterOrEqual); // true
console.log("isLessOrEqual:", isLessOrEqual); // false

// Logical Operators
let istrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // Logical AND
let orResult = isTrue || isFalse; // Logical OR
let notResult = !isTrue; // Logical NOT

console.log("\nLogical Operators:");
console.log("andResult:", andResult); // false
console.log("orResult:", orResult); // true
console.log("notResult:", notResult); // false

// Number
let num = 42;

// String
let str = "Hello, World!";

// Boolean
let isTrue = true;

// Undefined
let g;
console.log(g); // undefined

// Null
let y = null;

// Symbol (ES6)
const uniqueSymbol = Symbol("unique");

// BigInt (ES11)
const bigIntValue = 1234567890123456789012345678901234567890n;

// Object
let person = {
  name: "John",
  age: 30,
};

// Array
let colors = ["red", "green", "blue"];

// Function
function add(a, b) {
  return a + b;
}

// Date
let currentDate = new Date();

// RegExp
let pattern = /abc/g;

// Map (ES6)
let myMap = new Map();
myMap.set("name", "Alice");

// Set (ES6)
let mySet = new Set([1, 2, 2, 3, 4, 4]);

// Promise (ES6)
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous code here
  });
};

console.log("Hello World!")
console.log(5 + 2)
var Hello = "World"
let World = "Hello"
const pi = 3.14
let message = "Hello World!"

let f = 5;
f += 3; // Add and assign
f -= 2; // Subtract and assign
f *= 4; // Multiply and assign
f /= 2; // Divide and assign
f %= 3; // Modulus and assign

// console.log(x)

// let h = "Hello"
// let w = "World!"
// let hw = `${h} ${w}`
// console.log(hw)

if (x == 0) {
    console.log("Final result of x is 0")
}else if (x !== 0){
    console.log("X does not equal to 0")
}else{
    console.log("i love gio")
}
let x = "Janeza"

switch (x) {
    case "Gagnidze":
        console.log("I love him")
        break;

    default:
        console.log("i dont love him")
        break;
}
authenticated ? renderApp() : renderLogin();

for (let i = 0; i < 100; i++) {
    console.log(i)
}
function print(x){
    return x
}