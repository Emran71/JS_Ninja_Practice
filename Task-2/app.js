// 1.What are the complex data type in JavaScript?
// Answer: The complex data types are Array and Object.

//  2. When and why to use Array vs object (Mention 3 point)
//     Answer : Array : 1. When the data is ordered   2. When you mostly access elements by index.  3. Itaration is easier
//              Object : 1. When the data is unordered  2. When you access data by unique keys or property names  3. Organize the detailed data

// 3.Create an profile object that has your firstName, lastName, and occupation as keys
//    Ansswer : Access each value from your object and console using both dot notation and bracket notation
//              Add a key for hobby to your existing object. Remove the key and value for occupation

let profile = {
  fName: "Emran",
  lName: "Khan",
  occupation: "Software Developer",
};
console.log(profile.fName);
console.log(profile["fName"]);

console.log(profile.lName);
console.log(profile["lName"]);

console.log(profile.occupation);
console.log(profile["occupation"]);

profile.hobby = "Programming";
console.log(profile);

delete profile.occupation;
console.log(profile);

// 4.when to use dot notation vs bracket notation to access data from object?
// Answer : Dot Notation : It prefers when the property name is known and static
//          braket Notation : Bracket notation is necessary when the property name is dynamically assigned.

// 5. Write down the multiple ways to define an array and object?
//Answer:
// Array Declaration:
//  1. Array Literal
const colors = ["red", "green", "blue"];
// 2. Using the Array Constructor:
const color1 = new Array("red", "green", "blue");

// Object Declaration:

// 1. Object Literal:
        const personName = {
        name: "Alice",
        age: 25,
    };

// 2. Using the Object Constructor:
        const persons = new Object();
        persons.name = "Alice";
        persons.age = 25;

// 3. Using a Function Constructor
        class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
   const Newperson = new Student("Alice", 25);

//  4. Using a Class in ES6
        class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        }
    const person = new Person("Alice", 25);

// 5. Nested data access from array and object

const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};

const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];

// Access university name from the object and array

console.log(userObj.address.university.name);
console.log(userArr[1][1][0]);