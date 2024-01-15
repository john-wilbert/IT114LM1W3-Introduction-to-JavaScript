/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log("First Item: " + numbers[0], "Fifth Item: " + numbers[4], "Last Item: " + numbers[numbers.length - 1]);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
const min = Math.min(...numbers)
const max = Math.max(...numbers)

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
const ave = sum / numbers.length

console.log("Min: " + min, "Max: " + max, "Average: " + ave)
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer:
// Python lists provide built-in functions like sum(), min(), and max() while JavaScript arrays use array methods or functions from other libraries

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 3,
    numberOfStudents: 40
}
console.log(IT114L)
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.profName = "Job Lipat"
console.log("Professor Name:", IT114L.profName)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const courses = [
    {
        courseCode: "CS107",
        name: "Information Management",
        units: 2,
        profName: "Dahlia De Mesa"
    },
    {
        courseCode: "CS107L",
        name: "Information Management (Laboratory)",
        units: 1,
        profName: "Adomar Ilao"
    },
    {
        courseCode: "CS120",
        name: "Structure of Programming Languages",
        units: 3,
        profName: "Aurelia Sharlene Delos Santos"
    },
    {
        courseCode: "HUM039",
        name: "Ethics",
        units: 3,
        profName: "Jomar Ebron"
    },
    {
        courseCode: "IT114",
        name: "Web Systems and Techonologies",
        units: 2,
        profName: "Adomar Ilao"
    },
    {
        courseCode: "IT114L",
        name: "Web Systems and Technologies (Laboratory)",
        units: 1,
        profName: "Job Lipat"
    },
    {
        courseCode: "IT133",
        name: "Technopreneurship",
        units: 3,
        profName: "Khristian Kikuchi"
    },
    {
        courseCode: "PE044",
        name: "Physical Activities Towards Health and Fitness 4 (PATHFIT 4): Individual/Dual Team Sports",
        units: 2,
        profName: "Ferdinand Fermin"
    }
]
console.log(courses)
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0
for(let index = 0; index < courses.length; index++){
    totalUnits += courses[index].units
}
console.log("Total units:",totalUnits);
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer:
// The equivalent of objects in JavaScript are the dictionaries in Python. Since both dictionaries and objects are used to store key-value pairs
// Python dictionary keys are usually immutable (strings, numbers, tuples) but in JavaScript, object keys are usually mutable (strings, symbols)

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let newArray = [...numbers, 10]
console.log("Spread:",newArray)
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

const {courseCode, units, ...rest} = IT114L
console.log("Course Code:", courseCode);
console.log("Units:",units);