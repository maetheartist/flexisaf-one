// refresher practice

const heading = document.querySelector("h1");
heading.style.color = "teal";
heading.style.fontSize = "70px";

// SCOPE
// global and block scope, for example the variable heading I defined above is in a global scope and can be used anywhere on this page while block scope is within the confines of a function

// LET: This is used in declaring variables which may change later, it is loosely typed and used before ES6 was introduced,and therefore no longer recommended so as to avoid errors. for example:

let myName = "Ade";
myName = "Joseph";
console.log(myName);

// CONST: This variable declaration on the other is more srictly typed as opposed to let, once const has been used, you can't redeclare such variable, it will throw an error message, for example:

const userName = "Bash";
// const userName = "Yahya";
console.log(userName);
// error: Uncaught SyntaxError: Identifier 'userName' has already been declared (at index.js:16:7)

// Array and Array methods

// the array below contains many data types like string, number, boolean, and also a nested array. Map and Filter are also known as high order functions.
const myArray = [
  1,
  "Bola,",
  90,
  ["Bread,", "Eggs", "Milo", "Lipton"],
  true,
  "Ava",
  "London",
  "Parrot",
  "Ruler",
  140,
  false,
];

// mapping the array
const mappedArr = myArray.map((item) => {
  console.log(item);
});

// filtering the array
const filteredArr = myArray.filter((item) => {
  // filter the numbers in the array
  if (typeof item === "number") {
    return item;
  }
  // to filter nested array =   return  item.length === 4
});
console.log(filteredArr);

// using reduce function
const reducedArr = myArray.reduce((accumulator, currentValue) => {
  if (typeof currentValue === "number") {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);
console.log(reducedArr);

// using foreach. this is another way to loop through an array too
myArray.forEach((i) => {
  console.log(i);
});

// splice is used to add, remove or replace  items in an array.
 myArray.splice(0,0, "hello");
console.log(myArray); /*add new element*/

myArray.splice(2,4);
console.log(myArray);

