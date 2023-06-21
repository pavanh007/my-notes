/*
// * A data type describes a set of values and the operations possible on those values.
// * types:
    * primitive datatypes
          * number - whole number and number(4 bytes)
          * string - sequence of characters, enclosed with single or double quotes
          * boolean - true or false
          * null
          * undefined
          * symbol
    * Object datatypes - composition of primitive datatypes
          * Objects - set of properties and methods
          * Array - set of different type of values.
          * functions - piece of code when executed when it's called.
*/


//number
let num = 100,
  num1 = 4294967295, num2 = 1.2;

//string
let str = "javascript", str1 = "a", str3 = "";

//boolean
let alive = true, dead = false;

//null
let define = null;

//undefined
let variable = undefined;

//objects
var myObject = {
  stringProperty: "Hello, World!",
  numberProperty: 42,
  booleanProperty: true,
  arrayProperty: [1, 2, 3],
  objectProperty: { name: "John", age: 25 },
  nullProperty: null,
  undefinedProperty: undefined,
  functionProperty: function () {
    console.log("This is a function property.");
  },
};

//array
var myArray = [
  1,
  "Hello",
  true,
  null,
  undefined,
  { name: "John" },
  ["apple", "banana"],
  function () {
    console.log("I'm a function!");
  },
];

//functions
function func() {
  console.log("calling the function!");
}


//TODO - METHOD INSIDE - NUMBER
// * JavaScript provides various arithmetic operators for performing calculations with numbers
var sum = 5 + 3; // 8
var difference = 10 - 4; // 6
var product = 3 * 4; // 12
var quotient = 10 / 2; // 5
var remainder = 10 % 3; // 1
var result = 2 ** 3; // 8

// * JavaScript's Math object provides additional mathematical functions and constants:
Math.sqrt(16); // Square root: 4
Math.abs(-10); // Absolute value: 10
Math.round(3.7); // Rounded to the nearest integer: 4
Math.floor(3.7); // Rounded down to the nearest integer: 3
Math.ceil(3.2); // Rounded up to the nearest integer: 4
Math.random(); // Random number between 0 and 1
// and more...

// * JavaScript allows converting values to numbers using built-in functions:
/*
  // * parseInt(): Converts a string to an integer.
  // * parseFloat(): Converts a string to a floating-point number.
  // * Number(): Converts a value to a number.
*/
parseInt("42"); // 42
parseFloat("3.14"); // 3.14
Number("10"); // 10

// * avaScript provides methods that can be called on number values:

var pi = 3.14159;
pi.toFixed(2); // "3.14"
pi.toPrecision(3); // "3.14"
pi.toString(); // "3.14159"


//TODO - METHOD INSIDE - STRING

// * Template literals, introduced in ES6, allow you to create multi-line strings and embed expressions within them using backticks (``). For example:
var name = "John";
var age = 25;
var message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is John and I am 25 years old."


var myString = "Hello, World!";
console.log(myString.length); // 13

// * You can concatenate (combine) strings using the concatenation operator (+) or the concat() method. For example:
var greeting = "Hello";
var name = "John";
var message = greeting + ", " + name;
console.log(message); // "Hello, John"

var fullName = name.concat(" Doe");
console.log(fullName); // "John Doe"


var myString = "Hello, World!";
console.log(myString[1]); // "e"
console.log(myString.charAt(4)); // "o"


var originalString = "Hello, World!";
var modifiedString = originalString.replace("Hello", "Hi");
console.log(modifiedString); // "Hi, World!"
console.log(originalString.slice(0, 4)); //Hell

var myString = "   Hello, World!   ";

console.log(myString.toUpperCase()); // "   HELLO, WORLD!   "
console.log(myString.toLowerCase()); // "   hello, world!   "
console.log(myString.trim()); // "Hello, World!"
var fruits = "apple,banana,grape,orange";
var fruitArray = fruits.split(",");
console.log(fruitArray); // ["apple", "banana", "grape", "orange"]
var sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.indexOf("fox")); // 16
var names = "John Doe";
var firstName = names.substring(0, 4);
console.log(firstName); // "John"

//TODO - BOOLEAN USAGE
/*

// *Boolean data type in JavaScript represents two values: `true` and `false`. It is primarily used for logical operations and conditional statements.

// * 1. Boolean Values:
   // * - `true`: Represents a true value.
   // * - `false`: Represents a false value.

// * 2. Boolean Operators:
   // * - Logical AND (`&&`): Returns `true` if both operands are true.
   // * - Logical OR (`||`): Returns `true` if at least one operand is true.
   // * - Logical NOT (`!`): Flips the boolean value, `true` becomes `false`, and vice versa.

// * 3. Comparison Operators:
   // * - Equality (`==` or `===`): Compares two values for equality. `===` performs strict equality, comparing both value and type.
   // * - Inequality (`!=` or `!==`): Compares two values for inequality. `!==` performs strict inequality, comparing both value and type.
   // * - Other comparison operators (`>`, `<`, `>=`, `<=`): Compare two values based on their numerical or lexicographical order.

// * 4. Conditional Statements:
   // * - `if` statement: Executes a block of code if a condition is true.
   // * - `else` statement: Executes a block of code if the preceding `if` condition is false.
   // * - `else if` statement: Allows multiple conditions to be checked sequentially.
   // * - Ternary operator (`?:`): A shorthand way of writing an `if-else` statement.

// * 5. Truthy and Falsy Values:
   // * In JavaScript, certain non-boolean values can be coerced to `true` or `false` when used in a boolean context. 
   // * Values that are considered falsy include `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`. All other values are considered truthy.

// * 6. Boolean Functions:
   // * - `Boolean()`: Converts a value to a boolean explicitly.
   // * - `isNaN()`: Checks if a value is `NaN`.
   // * - `typeof`: Returns a string representing the type of a value.
*/

//EXAMPLE
var x = 5;
var y = 10;
var z = x > y;

console.log(z); // false

if (x < y) { 
  console.log("x is less than y");
} else {
  console.log("x is greater than or equal to y");
}




//TODO - ARRAY METHODS

// * Accessing Array Elements:
// * Array elements are accessed using their index, starting from 0. You can retrieve or modify values using square bracket notation. For example:
console.log(myArray[0]);
myArray[2] = 10;
console.log(myArray); 

console.log("Length :", myArray.length); // 8

const arr = ["a", "b", "c", "d", "e", "f"];
arr.push("g");
arr.pop();
arr.shift();
arr.unshift("-a");

arr.splice(0, 1, "ab", "bc");
const arr2 = arr.slice(-3);
console.log("arr2", arr2); //arr2 [ 'd', 'e', 'f' ]
console.log(arr);

const val = arr.concat(["g", "h"]);
const val2 = arr.concat(["g", "h"], "i");
console.log(val2);
console.log(val);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
/*
// * output
Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
Gandalf is at index 1 in Bilbo,Gandalf,Nazgul
Nazgul is at index 2 in Bilbo,Gandalf,Nazgul
*/
const arr3 = ["a", "b", "c", "d", "e", "f", "g", "f"];
console.log([...new Set(arr3)]); //["a", "b", "c", "d", "e", "f", "g"];
console.log(arr.indexOf("bc")); //1
console.log(arr.includes("ab", 0)); //true
arr.find((a) => {
  console.log(a); //true
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let nums = numbers.filter((item) => item % 2 === 0);
console.log(nums); //[ 2, 4, 6, 8 ]
numbers.map((a) => {
  console.log(a * 2); // 2, 4, 6, 8, 10, 12, 14, 16
});

let numb = [1, 8, 3, 4, 2, 6, 7, 5];
let sorted = numb.sort();
console.log("sorted", sorted); //sorted [ 1, 2, 3, 4, 5, 6, 7, 8]

//sorting
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let check = [1, 2, 15];
console.log(check.sort()); //[ 1, 15, 2 ]

console.log(check.sort(compareNumeric)); //[ 1, 2, 15 ]

console.log("pavan:h:sagar".split(":")); // [ 'pavan', 'h', 'sagar' ]
console.log(check.reduce((sum, current) => sum + current, 0)); //18
console.log(check.reverse()); //[ 15, 2, 1 ]
console.log(check.fill(0, 2));// [ 15, 2, 0 ]



