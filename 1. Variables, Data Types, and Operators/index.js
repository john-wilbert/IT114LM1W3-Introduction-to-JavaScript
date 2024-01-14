/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x = "Hi there"
console.log(x)
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y = "Goodbye"
console.log(y)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const z = 1
console.log(z)
// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:
// var : Declares a variable, optionally initializing it to a value
// let : Declares a block-scoped, local variable, optionally initializing it to a value.
// const : Declares a block-scoped, read-only named constant.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
console.log(12 % 5) //Remainder

let w = 4
const i = ++w //Increment
console.log(i)

let v = 5
const j = --v //Decrement
console.log(j)

console.log(2 ** 3) //Exponentiation
// Checkpoint 1.2 What operators did you use?
// Answer: 
// Remainder, Increment, Decrement, Exponentiation

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("a " + "string")

let mystring = "dog"
mystring += "house"
console.log(mystring)
// Checkpoint 1.3 What operators did you use?
// Answer: 
// " + " and " += "

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const a = 5
const b = -2
console.log(a > 0 && b > 0) // Logical AND (&&)
console.log(a > 0 || b > 0) // Logical OR (||)
console.log(!(a > 0 || b > 0)) // Logical NOT (!)

// Checkpoint 1.4 What operators did you use?
// Answer: 
// Logical AND (&&), Logical OR (||), Logical NOT (!)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
let e = 10
let f = 20

console.log("Greater than", e > f)
console.log("Less than", e < f)
console.log("Not equal to", e != f)
console.log("Equal to", e == f)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Using the "==" operator leads to the execution of type coercion which considers the empty array [] as true which makes the
// comparison as true == false. To avoid this, the usage of "===" for equality comparisons is better to avoid confusion.
// Your code here
console.log([] == false)