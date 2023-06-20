/*
// * named storage for storing the data
// * variables are immutable
// * Define the variable : let, var and const 
// * scoping :
            * var in function scooped 
            * let is block scoped
            * const is block scoped 
// * let - define the variable and assign it later.
// * const -  used to assign the constant variable
// ! variable should not start with number(digit)
// * variable declaration anology:
    * variable name can start with "character", "$" and "_"
    * variable names are case-sensitive
    * variable names should not be latin
    * If we use the "use strict", we can define variable with "let" 
*/

let message1, message2, message3;
message1 = "this is string variable";
var variable = "abcd";
const USERID = "USER_1234";

//NOTE -HOISTING
// * It refers to the behavior of moving "variable" and only "function declarations" to the top of their containing scope during the compilation phase, before the code is executed.

console.log(x); // undefined
var x = 5;
console.log(y); //  ReferenceError: y is not defined

funCall(); // this function is calling
function funCall() {
  console.log("this function is calling!");
}


//IMPORTANT
// * scoping

var globalVariable = "I'm a global variable"; // Global variable

function myFunction() {
  const val = 100; //block scoped
  var localVariable = "I'm a local variable"; // Local variable
  let localVariable = "I'm a local variable"; // function variable
  console.log(localVariable);
  console.log(globalVariable);
}

myFunction(); // Call the function
console.log(globalVariable);
console.log(localVariable); // ReferenceError: localVariable is not defined

