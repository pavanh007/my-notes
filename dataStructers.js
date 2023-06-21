//TODO MAP
// * The `Map` object in JavaScript is a built-in data structure that allows you to store key-value pairs and iterate over them in the order of insertion. 
// * Here's a comprehensive overview of `Map` in JavaScript:

// * You can create a `Map` object using the `Map` constructor or the `new` keyword. For example:

var map = new Map();

// * You can add key-value pairs to a `Map` using the `set()` method, and retrieve values using the `get()` method. For example:

map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.get("key1")); // Output: "value1"
console.log(map.get("key2")); // Output: "value2"

// * The `size` property of a `Map` returns the number of key-value pairs it contains. You can check if a key exists in a `Map` using the `has()` method. For example:

console.log(map.size); // Output: 2
console.log(map.has("key1")); // Output: true
console.log(map.has("key3")); // Output: false

// * To remove a key-value pair from a `Map`, you can use the `delete()` method. For example:

map.delete("key2");
console.log(map.get("key2")); // Output: undefined
console.log(map.size); // Output: 1

// * `Map` provides several methods for iterating over its entries, including `keys()`, `values()`, and `entries()`. For example:

for (var key of map.keys()) {
  console.log(key);
}

for (var value of map.values()) {
  console.log(value);
}

for (var entry of map.entries()) {
  console.log(entry[0], entry[1]);
}

// * You can remove all entries from a `Map` using the `clear()` method. For example:

map.clear();
console.log(map.size); // Output: 0

// * In a `Map`, keys are compared using the "SameValueZero" algorithm, which is similar to the strict equality (`===`) comparison.
// *  In a `Map`, keys can be of any type, including objects, functions, and primitive values.


// * These are the core concepts and features of the `Map` object in JavaScript. 
// * It provides a flexible and powerful way to store and retrieve key-value pairs with additional functionalities for iteration and manipulation.

//TODO WEAKMAP

// * WeakMap` is a built-in JavaScript data structure introduced in ECMAScript 6 (ES6). 
// * It is similar to a `Map` but has some distinct characteristics and use cases. 
// * Remember that `WeakMap` is primarily used when you need to create associations with objects while allowing those objects to be garbage collected when no longer referenced.


// * 1. Key-Value Pairs:
   // * Like a `Map`, a `WeakMap` stores key-value pairs, where the key can be any object and the value can be any value or object.

// * 2. Weak References:
   // * The key references in a `WeakMap` are weak, meaning that they do not prevent their associated objects from being garbage collected if there are no other references to those objects. This makes `WeakMap` particularly useful when you want to associate additional data with specific objects without keeping them alive beyond their natural lifecycle.

// * 3. Key Sensitivity:
   // * In a `WeakMap`, the keys must be objects. Primitive values (such as numbers, strings, etc.) cannot be used as keys. This is because `WeakMap` relies on object references and weakly holds those references.

// * 4. Limited Functionality:
   // * WeakMap` has a more limited API compared to `Map`. It does not provide methods for iterating over all keys or values directly. This is because the keys in a `WeakMap` may be eligible for garbage collection and therefore cannot be reliably enumerated.

// * 5. Use Cases:
   // * Some common use cases for `WeakMap` include:

   // * - Augmenting Objects: You can associate additional data or metadata with objects without extending their lifetime or interfering with their memory management.
   // * - Private Data: `WeakMap` can be used to store private or internal data associated with objects, as the weakly held references ensure that the private data is automatically discarded when the object is garbage collected.
   // * - Caching: `WeakMap` can be used for caching computed values or memoization, where the cached values can be automatically discarded when the associated objects are no longer reachable.



var weakMap = new WeakMap();

var obj1 = {};
var obj2 = {};

weakMap.set(obj1, "Value for obj1");
weakMap.set(obj2, "Value for obj2");

console.log(weakMap.get(obj1)); // Output: "Value for obj1"
console.log(weakMap.has(obj2)); // Output: true

weakMap.delete(obj1);
console.log(weakMap.get(obj1)); // Output: undefined


//TODO - SET

// * In JavaScript, a `Set` is a built-in object that allows you to store unique values of any type. 
// * It provides a collection of distinct elements, and each element can only occur once within a `Set`. 

// * Creating a Set: You can create a `Set` using the `new` keyword and the `Set()` constructor. Optionally, you can pass an iterable object (such as an array) to initialize the `Set` with initial values. For example:

var mySet = new Set();
var anotherSet = new Set([1, 2, 3]);

// * Adding and Removing Elements: You can add elements to a `Set` using the `add()` method, and remove elements using the `delete()` method. For example:
mySet.add(4);
mySet.add("Hello");
mySet.delete(4);

// * Checking Element Existence: You can check if an element exists in a `Set` using the `has()` method. It returns a boolean indicating whether the element is present in the `Set`. For example:
console.log(mySet.has("Hello")); // Output: true
console.log(mySet.has(4)); // Output: false


// * Getting the Size of a Set: The number of elements in a `Set` can be obtained using the `size` property. For example:
console.log(mySet.size); // Output: 1

// * Iterating Over a Set: You can iterate over the elements of a `Set` using a loop or by utilizing the `forEach()` method. For example:
mySet.forEach(function(value) {
  console.log(value);
});


// * Clearing a Set: To remove all elements from a `Set`, you can use the `clear()` method. For example:
mySet.clear();

// * Set Operations: The `Set` object supports various set operations such as union, intersection, and difference. However, these operations are not built-in methods, so you would need to implement them manually using loops and other JavaScript constructs.

// * Set and Array Conversion: You can convert a `Set` to an array using the `Array.from()` method or the spread operator (`...`). Similarly, you can convert an array to a `Set` by passing the array to the `Set` constructor. For example:

var mySet = new Set([1, 2, 3]);
var myArray = Array.from(mySet);
console.log(myArray); // Output: [1, 2, 3]


//TODO -WEAKSET

// * In JavaScript, `WeakSet` is a built-in object that provides a collection of unique, weakly-referenced objects. It shares some similarities with `Set`, but there are a few important differences. Here's an overview of `WeakSet` and its characteristics:
// * Creating a WeakSet: A `WeakSet` can be created using the `new WeakSet()` constructor. It does not accept any initial values during creation.

var weakSet = new WeakSet();

// * Adding Objects to a WeakSet: Objects can be added to a `WeakSet` using the `add()` method. Only objects can be added as values, and duplicate values are not allowed.


var obj1 = { name: "John" };
var obj2 = { name: "Jane" };

weakSet.add(obj1);
weakSet.add(obj2);

// * Checking Existence of Objects: The `WeakSet` provides the `has()` method to check if a specific object exists in the set.

console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true

// * Removing Objects from a WeakSet: To remove an object from a `WeakSet`, you can use the `delete()` method.


weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // Output: false

// * Weak References and Garbage Collection: The key feature of `WeakSet` is that it holds weak references to the objects it contains. 
// * This means that if an object added to a `WeakSet` is no longer referenced from anywhere else in the code, it becomes eligible for garbage collection.When an object is garbage collected, it is automatically removed from the`WeakSet` as well.

// * WeakSet Limitations:
// * - `WeakSet` can only store objects; primitive values cannot be added to a `WeakSet`.
// * - Iteration and direct access to all elements are not possible in a `WeakSet` because the underlying objects can be garbage collected.


//TODO - JSON
// * JSON (JavaScript Object Notation) is a lightweight data interchange format commonly used for representing structured data. 
// * It is based on a subset of the JavaScript programming language syntax, but it can be used with many programming languages. 
// * Here's an overview of JSON with a code snippet example:

// * JSON Syntax: JSON consists of key-value pairs, where the keys are always strings and the values can be strings, numbers, booleans, objects, arrays, or `null`. JSON values are separated by commas, and objects and arrays are enclosed in curly braces `{}` and square brackets `[]`, respectively.

```
{
  "name": "John",
  "age": 30,
  "city": "New York",
  "isStudent": true,
  "friends": ["Alice", "Bob", "Charlie"],
  "address": {
    "street": "123 Main St",
    "city": "San Francisco",
    "country": "USA"
  },
  "work": null
}
```

// * In this example, we have an object with various key-value pairs representing different types of data.

// * Parsing JSON: In JavaScript, you can use the built-in `JSON.parse()` method to parse a JSON string and convert it into a JavaScript object. For example:

var jsonString = '{"name":"John","age":30,"city":"New York"}';
var person = JSON.parse(jsonString);
console.log(person.name); // Output: "John"

// * Stringifying JavaScript Object to JSON: To convert a JavaScript object into a JSON string, you can use the `JSON.stringify()` method. For example:

var person = {
  name: "John",
  age: 30,
  city: "New York"
};
var jsonString = JSON.stringify(person);
console.log(jsonString); // Output: '{"name":"John","age":30,"city":"New York"}'

// * In this example, the `person` object is converted into a JSON string.

// * Handling Nested Objects and Arrays: JSON allows nesting objects and arrays. 
// * You can access nested values using dot notation for objects and square bracket notation for arrays. For example:

var data = {
  "name": "John",
  "friends": ["Alice", "Bob", "Charlie"],
  "address": {
    "street": "123 Main St",
    "city": "San Francisco",
    "country": "USA"
  }
};

console.log(data.name); // Output: "John"
console.log(data.friends[0]); // Output: "Alice"
console.log(data.address.city); // Output: "San Francisco"


// * In this example, we access nested values within the `data` object.
// * JSON is widely used for data exchange between client and server applications, as well as for storing and transmitting structured data. 
// * It provides a standardized format that is easy to read, write, and parse across different programming languages.
