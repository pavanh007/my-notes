/*
// * Type coercion in JavaScript refers to the process of converting one data type to another automatically during operations or comparisons.
// * JavaScript is a dynamically typed language, which means variables can hold values of different types, and the language will attempt to perform operations or comparisons between different types by implicitly converting them.
*/


// * 1. String concatenation:
   var age = 30;
   var message = "I am " + age + " years old.";
   console.log(message); // Output: "I am 30 years old."

  // * In this example, the number `age` is implicitly coerced to a string when it is concatenated with another string.

// * Addition with different types:
   var number = 10;
   var text = "20";
   var result = number + text;
console.log(result); // Output: "1020"
   
  // * The number `number` is implicitly coerced to a string, and then string concatenation occurs, resulting in the concatenation of "10" and "20".

// * 3. Comparison operators:

   console.log(5 == "5"); // Output: true
   console.log(5 === "5"); // Output: false

   // * In JavaScript, the `==` operator performs type coercion, trying to make both operands of the same type before comparison. In this case, the string "5" is coerced to a number, and the comparison returns `true`. However, the `===` operator performs a strict comparison without coercion, and the comparison returns `false`.

// * 4. Truthy and falsy values:

   console.log(0 == false); // Output: true
   console.log("" == false); // Output: true
   console.log(null == undefined); // Output: true

  // * JavaScript has the concept of truthy and falsy values. During comparisons, certain values are implicitly coerced to boolean values. For example, `0`, `""` (empty string), `null`, and `undefined` are considered falsy values, and when compared to `false`, they yield `true`.

// * Type coercion can be useful in some cases, as it allows for more flexible and concise code. However, it can also lead to unexpected behavior and bugs if not used carefully. To avoid unintended type coercion, it's often recommended to use strict equality (`===`) for precise comparisons and explicitly convert values to the desired types when necessary.