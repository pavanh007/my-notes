
// * Functions in JavaScript are blocks of code that can be defined, invoked, and reused. They play a crucial role in modularizing code, enabling code reusability, and implementing complex functionality. Here's a comprehensive overview of functions in JavaScript:

// * Function Declaration:
// * A function is defined using the `function` keyword, followed by the function name, a list of parameters (optional), and the function body enclosed in curly braces. 

function greet(name) {
  console.log("Hello, " + name + "!");
}

// * Function calling:  To execute a function, you invoke or call it by using its name followed by parentheses, optionally passing arguments if the function expects parameters. For example:

greet("John"); // Output: "Hello, John!"

// * Function Parameters and Arguments:
// * Functions can accept parameters, which act as placeholders for values passed to the function during invocation. Arguments are the actual values supplied when calling the function. For example:

function multiply(a, b) {
  return a * b;
}

var result = multiply(5, 3); // Arguments: 5 and 3
console.log(result); // Output: 15


// * Return Statement: Functions can use the `return` statement to specify a value to be returned to the caller. The `return` statement also terminates the function's execution. For example:

function add(a, b) {
  return a + b;
}

var sum = add(2, 3);
console.log(sum); // Output: 5

// * Function Expressions: Functions can also be assigned to variables, creating function expressions. This allows functions to be treated as values and passed around as arguments or stored in data structures. For example:

var greets = function(name) {
  console.log("Hello, " + name + "!");
};

greets("John"); // Output: "Hello, John!"


// * Anonymous Functions: Anonymous functions are functions without a name. They can be defined as function expressions or passed directly as arguments to other functions. For example:

setTimeout(function() {
  console.log("Delayed execution");
}, 2000);

// * Higher-Order Functions: JavaScript supports higher-order functions, which are functions that can accept other functions as arguments or return functions as results. This enables powerful functional programming techniques. For example:

function map(arr, transform) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(transform(arr[i]));
  }
  return result;
}

var numbers = [1, 2, 3, 4, 5];
var doubled = map(numbers, function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]


// * Function Scopes and Closures: Functions have their own scope in JavaScript. Variables defined within a function are local to that function unless they are defined as global variables. Closures allow inner functions to access and persist variables from their outer function's scope. For example:
// * Closures means functions along with the lexical scoping.
function outer(a, ...args) {
  var outerVar = "I'm outer";
  console.log("spread operator :", a, args);
  function inner() {
    console.log(outerVar);
  }
  return inner;
}

var closure = outer(1, 2, 3, 4, 5);
closure(); // Output: "I'm outer"



//TODO usage of function methods
let userDetail = {
  firstName: "Pavan",
  lastName: "Huchappa",
};

let fullName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + homeTown,
    state
  );
};

fullName.call(userDetail);

let nameTwo = {
  firstName: "Pavan",
  lastName: "Huchhappa",
};

fullName.call(nameTwo, "Hirenellur", "Karnataka");
fullName.apply(nameTwo, ["Sagar", "Karnataka"]);

let printMyName = fullName.bind(nameTwo, "Sagar", "Karnataka");
printMyName();
