//TODO - FOR LOOP

// * In JavaScript, a `for` loop is a control flow statement that allows you to repeatedly execute a block of code based on a specified condition. 
// * It is commonly used when you know how many times you want to iterate over a set of values or perform a specific task.

// * The general syntax of a `for` loop in JavaScript is as follows:
for (initialization; condition; iteration) {
  // code to be executed
}

// * 1. Initialization: This part is executed before the loop starts and is usually used to initialize a counter variable. For example, `let i = 0;` sets the variable `i` to 0.
// * 2. Condition: The loop will continue executing as long as this condition is true. It is checked before each iteration. If the condition evaluates to false, the loop stops. For example, `i < 5` means the loop will run until `i` is less than 5.
// * 3. Iteration: This part is executed at the end of each iteration. It is usually used to update the counter variable or perform other operations. For example, `i++` increments the value of `i` by 1 after each iteration.
// * 4. Code to be executed: This is the block of code that will be repeated until the condition evaluates to false. It can consist of any valid JavaScript statements and can include multiple lines of code.

for (let i = 0; i < 5; i++) {
  console.log(i); 1, 2, 3, 4
}

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// * In this case, `array.length` is used as the condition to ensure the loop runs until the end of the array. The value of each element is accessed using the index `i` with `array[i]`.
// * Remember, `for` loops are versatile and can be customized based on your specific needs. You can adapt the initialization, condition, and iteration to achieve different looping behaviors.

//TODO - WHILE LOOP


// * In JavaScript, a while loop is a control flow statement that repeatedly executes a block of code as long as a specified condition evaluates to true. The general syntax of a while loop is as follows:

while (condition) {
  // code to be executed
}

// * 1. The condition is evaluated before each iteration. If the condition is true, the code within the loop is executed. If the condition is false, the loop is exited, and the program continues with the next statement after the loop.
// * 2. The code block inside the loop can contain any valid JavaScript statements. It can be a single statement or a block of statements enclosed within curly braces `{}`.
// * 3. After executing the code block, the control goes back to the beginning of the loop, and the condition is checked again. If the condition is still true, the code block is executed again, and the process repeats. If the condition becomes false, the loop is terminated.
// * It's important to ensure that the condition within a while loop eventually becomes false; otherwise, the loop will run indefinitely, causing an infinite loop and potentially freezing the program.


let count = 0;

while (count < 5) {
  console.log('Count:', count);
  count++;
}

// * Note that if the initial value of `count` were already greater than or equal to 5, the loop would not execute at all.
// * You can also use the `break` statement within a while loop to exit the loop prematurely, even if the condition is still true. Similarly, the `continue` statement can be used to skip the rest of the current iteration and move to the next one.
// * While loops are useful when the number of iterations is not known in advance and depends on a particular condition. They provide flexibility and allow you to repeatedly execute code until a desired state is reached. However, it's important to use them carefully to avoid infinite loops and ensure that the condition will eventually become false.


//TODO - DO-WHILE

// * In JavaScript, the `do-while` loop is a type of loop that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true. 
// * It is similar to the `while` loop, but with the condition checked at the end of the loop instead of at the beginning.

// * The basic syntax of the `do-while` loop in JavaScript is as follows:
do {
  // Code block to be executed
} while (condition);

// * 1. The code block within the `do` statement is executed first.
// * 2. Then, the condition specified after the `while` keyword is evaluated.
// * 3. If the condition is true, the code block is executed again.
// * 4. This process continues until the condition becomes false. Once the condition is false, the loop terminates, and the program execution continues with the next statement after the loop.
// * It's important to note that the code block is always executed at least once, regardless of the condition. This differentiates the `do-while` loop from other loop types, such as the `while` loop, which may not execute at all if the condition is initially false.


let counts = 0;

do {
  console.log(counts);
  counts++;
} while (counts < 5);

// * Even though the condition (`count < 5`) becomes false after the fifth iteration, the loop executes one additional time because the condition check occurs at the end of the loop.
// * The `do-while` loop is useful when you want to ensure that a block of code is executed at least once, regardless of the initial condition. It's commonly used when you need to validate user input or iterate over a collection of elements until a specific condition is met.
// * Remember to be cautious with the condition in a `do-while` loop to avoid infinite loops. Make sure the condition will eventually become false; otherwise, the loop will continue indefinitely.

// ! Error handing 

// * In JavaScript, throwing exceptions is a mechanism used to indicate that an error or exceptional condition has occurred during the execution of a program. When an exception is thrown, it interrupts the normal flow of execution and transfers control to an exception-handling block of code.
// * To throw an exception in JavaScript, you use the `throw` statement followed by an expression that represents the exception. The expression can be any value, but it's common to use an instance of the built-in `Error` object or one of its subclasses. Here's an example of throwing a custom exception:

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  var result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error.message);
}

// * In the above example, the `divide` function checks if the second argument is zero and throws an `Error` with a custom error message if it is. The code that calls `divide` is wrapped in a `try` block, and any thrown exceptions are caught and handled in the `catch` block. In this case, the error message is logged to the console.
// * JavaScript provides several built-in error classes, such as `Error`, `SyntaxError`, `TypeError`, and `RangeError`, among others. You can also create your own custom error classes by extending the `Error` class or any of its subclasses. Custom error classes can provide additional information or behavior specific to your application.
// * It's important to note that when an exception is thrown, the normal execution flow is interrupted, and the program jumps to the nearest exception-handling code block. If there is no suitable exception handler, the program may terminate, and an error message will be displayed to the user. Therefore, it's a good practice to include proper exception handling in your JavaScript code to handle and recover from exceptional situations.

//TODO- USING ERROR OBJECT
// * When throwing and catching exceptions in JavaScript, utilizing error objects provides more detailed information about the exception and allows you to handle different types of errors appropriately. 
// * In JavaScript, there are several built-in error objects you can use or extend to represent different types of errors:

// * 1. `Error`: The base error object from which other error objects inherit. It is commonly used to create custom error types by extending it.
// * 2. `SyntaxError`: Represents a syntax error that occurs while parsing code.
// * 3. `TypeError`: Indicates that a value is not of the expected type. For example, trying to call a non-function as a function or accessing properties on undefined or null values.
// * 4. `ReferenceError`: Occurs when you try to use a variable that is not declared or is out of scope.
// * 5. `RangeError`: Thrown when a numeric value is outside the valid range. For instance, using an invalid index in an array or passing an invalid value to a function expecting a specific range.
// * 6. `EvalError`: Represents an error that occurs when using the global `eval()` function.
// * 7. `URIError`: Thrown when you encounter problems with the `encodeURI()`, `decodeURI()`, `encodeURIComponent()`, or `decodeURIComponent()` functions.

// * To utilize error objects, you can throw instances of these error types or create your own custom error types by extending the `Error` object. Here's an example of creating a custom error type:

class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

// * Throwing a custom error
throw new MyCustomError("Something went wrong!");

// * By extending the `Error` object, you can add custom properties or methods to your error type.
// * When catching exceptions, you can use the `catch` block to handle specific error types or fallback to a generic error handler using the `Error` object. Here's an example:

try {
  // Some code that may throw an exception
} catch (error) {
  if (error instanceof MyCustomError) {
    // Handle specific custom error
    console.log("Custom error:", error.message);
  } else if (error instanceof TypeError) {
    // Handle type error
    console.log("Type error:", error.message);
  } else {
    // Generic error handling
    console.log("Error:", error.message);
  }
}

// * By distinguishing between different error types, you can provide specific error handling logic based on the type of exception encountered.
// * Remember to always include appropriate error messages and utilize error objects effectively to provide useful information for debugging and troubleshooting your JavaScript code.