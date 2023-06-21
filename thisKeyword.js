// * In JavaScript, the `this` keyword refers to the context in which a function is executed. Its value depends on how the function is invoked, and it can have different behaviors depending on the context. 
// * Here are the different ways the `this` keyword acts in JavaScript:

// * 1. Global scope: When `this` is used outside of any function or object, it refers to the global object, which is `window` in a browser environment or `global` in Node.js.

// * 2. Function context: When a function is called as a method of an object, `this` refers to the object that the function is a property of. For example:


const obj = {
  name: "John",
  sayHello: function() {
    console.log("Hello, " + this.name);
  }
};

obj.sayHello(); // Output: Hello, John

// * In this case, within the `sayHello` method, `this` refers to the `obj` object because it is the object calling the method.
// * 3. Event handlers: When a function is used as an event handler, such as in an event listener, `this` typically refers to the element that triggered the event. For example:

const button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("Button clicked:", this);
});

// * In this example, `this` inside the event handler function refers to the `button` element because it is the element that triggered the click event.
// * 4. Constructor functions: When a function is used as a constructor with the `new` keyword, `this` refers to the newly created object. The constructor function is responsible for defining the properties and methods of the object being created. For example:

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John


// * In this case, `this` inside the `Person` constructor refers to the newly created object (`john`), and the `name` property is assigned to that object.
// * 5. Explicit binding: You can explicitly set the value of `this` using methods like `call()`, `apply()`, or `bind()` that are available on functions. This allows you to control the context in which a function is executed. For example:

function greet() {
  console.log("Hello, " + this.name);
}

const person = { name: "John" };
greet.call(person); // Output: Hello, John

// * In this case, `call()` is used to invoke the `greet` function with `person` as the value of `this`, overriding the default behavior.
// * Understanding how the `this` keyword behaves is crucial for correctly accessing and manipulating data within JavaScript functions and objects based on their execution context.