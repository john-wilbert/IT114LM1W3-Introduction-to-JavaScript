/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log("Hello there,", name);
}
greet("Wilbert")
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer:
// Function declarations can be used before their actual declarations
// Function expressions must be defined before they are called

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
const calculateArea = function (length, width) {
    return length * width
}

const length = 5
const width = 4
const area = calculateArea(length, width)
console.log("Area:", area);
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer:
// A callback function is a function that is passed as an argument inside of another function


function greetMe(fname, callback) {
    console.log('Hi' + ' ' + fname);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greetMe('Wilb', callMe);

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
function modifyArray(newArr, modifierFunction) {

    return newArr.map(modifierFunction);
}

function incrementByOne(num) {
    return num + 1;
}

const numbers = [1, 2, 3];

const modifiedNumbers = modifyArray(numbers, incrementByOne);

console.log("Numbers:", numbers);
console.log("Modified Numbers:", modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import { add, PI } from './mathUtils.js';

console.log(add(10, 5));
console.log(PI);
// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.js';

console.log(isPalindrome("racecar"));
// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer:  
// require function is used to import modules or packages into your current file
// module.exports is a variable used to expose functionality from a module. Whatever is assigned to module.exports will be available to other modules to import using the 'require' function
// The usage of keywords will depend on the compability of the JavaScript environment
// if you are on a Node.js version prior to 13.2.0, CommonJS('require'/'module.exports') is the traditional approach
// if you are ona  Node.js version that support ECMAScriptModules (Node.js 13.2.0 and later), ESM('import'/'export') is a more standardized approach