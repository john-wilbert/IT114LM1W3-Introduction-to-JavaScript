/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(number => number * number)
console.log(squares);
// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter(number => number % 2 === 0)
console.log(even);
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((number,sum) => number + sum,0)
console.log(sum);
// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upper = words.map(word => word.toUpperCase())
console.log(upper);
// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const wordFilter = words.filter(word => word.length > 4)
console.log(wordFilter);
// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const wordReduce = words.reduce((accumulator,word) => accumulator + word, '')
console.log(wordReduce);
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
// Map: applies a given function to each element of an array, producing a new array
// Filter: takes each element in an array and it applies a conditional statement against it
// Reduce: reduces an array of values down to just one value. It runs a reducer function on each element of the array