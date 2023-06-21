//TODO - ABOUT OBJECT

// * Accessing Object Properties:
let candidate = {
  name: "John",
  age: 21,
};
console.log(candidate.name); // "John"
console.log(candidate["age"]); // 30
// * Modifying Object Properties:
candidate.age = 35;
candidate["city"] = "San Francisco";
// * Adding and Removing Object Properties:
candidate.gender = "Male"; // Adding a new property
delete candidate.city; // Removing the "city" property

for (var key in candidate) {
  console.log(key + ": " + candidate[key]);
}
// * Object Iteration:
// * You can iterate over object properties using loops like for...in or by utilizing methods like
// * Object.keys(), Object.values(), or Object.entries()
var person = {
  name: "John",
  age: 30,
  city: "New York",
};

var values = Object.values(person);
console.log(values); // Output: ["John", 30, "New York"]
var entries = Object.entries(person);
console.log(entries);
/* Output:
[
  ["name", "John"],
  ["age", 30],
  ["city", "New York"]
]
*/
var keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city"]

// * Object Constructors and Prototypes:
// * JavaScript provides constructor functions and prototypes for creating objects with shared properties and methods. They are used to define object blueprints or templates.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

var person = new Person("John", 30);
person.greet(); // "Hello, my name is John and I am 30 years old."

// * Inheritance:
// * JavaScript supports inheritance through prototypes or classes, allowing objects to inherit properties and methods from other objects. This enables code reuse and object hierarchies.
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  console.log("Studying...");
};

var student = new Student("Alice", 18, 12);
student.greet(); // "Hello, my name is Alice and I am 18 years old."
student.study(); // "Studying..."


//NOTE built-in objects

//error
var error = new Error();
console.log(error.name);

//date
var date = new Date();
console.log(date.getDate()); //current date

//string
var str = new String();
console.log(typeof str);

var regx = new RegExp();
console.log(regx);