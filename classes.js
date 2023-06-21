//TODO - CLASSES AND OOPs
// * 1. Class Declaration:
   // * - To declare a class, you use the `class` keyword followed by the class name. By convention, class names start with a capital letter.
   // * - Inside the class body, you define properties and methods that describe the behavior of objects created from the class.
   // * - Here's an example of a basic class declaration:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// * 2. Constructor Method:
   // * - The `constructor` method is a special method that gets called when an object is created from a class using the `new` keyword.
   // * - It is used to initialize the object's properties and perform any setup required.
   // * - In the example above, the `Person` class has a constructor that takes `name` and `age` as parameters and assigns them to the object's properties.

// * 3. Class Methods:
   // * - Class methods are defined inside the class and provide functionality to the objects created from the class.
   // * - They can be accessed by the instances of the class and are called using the dot notation.
   // * - In the example above, the `sayHello` method is defined to log a greeting using the object's `name` and `age` properties.

// * 4. Creating Objects:
   // * - To create an object from a class, you use the `new` keyword followed by the class name and any required constructor arguments.
   // * - This creates a new instance of the class and allows you to work with its properties and methods.
   // * - Here's an example of creating objects from the `Person` class:

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.sayHello(); // Output: Hello, my name is Alice and I'm 25 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I'm 30 years old.

// * 5. Inheritance:
   // * - Classes in JavaScript support inheritance, allowing you to create a hierarchy of classes where child classes inherit properties and methods from parent classes.
   // * - To create a subclass, you use the `extends` keyword followed by the name of the parent class.
   // * - The child class can then define additional properties or override methods inherited from the parent class.
   // * - Here's an example of class inheritance:

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  introduce() {
    console.log(`I'm ${this.name}, ${this.age} years old, and I'm in grade ${this.grade}.`);
  }
}

// * In this example, the `Student` class extends the `Person` class. It has its own constructor and introduces method, while still having access to the properties and methods inherited from the `Person` class.
// * Classes in JavaScript provide a more structured and intuitive way to work with objects and their behavior. They facilitate code organization, code reuse, and the implementation of OOP concepts. 
// * Understanding classes is essential for building scalable and maintainable JavaScript applications.

//TODO - OOPs concepts
// * class, Object, inheritance, abstraction, polymorphism, encapsulation
// * inheritance - single, multiple, multilevel, hierarchical
// * class - templates for creating object.
// * object - instance of the class
// * inheritance - Accessing the properties from parent class to child class.
// * abstraction - Showing only needed features instead of showing internal implementation.
// * polymorphism - ability take more than one form.
// * encapsulation - data and method combined together in class.