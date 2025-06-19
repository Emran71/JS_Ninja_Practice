// Exercise-1: What is the value of the keyword this in the following example:
const data = this;
console.log(data); // This will log the global object "window" in a browser environment, or an empty object in Node.js

function logThis(){
    return this;
}
logThis(); // This will log the global object "window" in a browser environment, or an empty object in Node.js

// Exercise-2: What does this function output? Why?
const instructor = {
  firstName: "Adnan",
  sayHi() {
    console.log("Hello! " + this.firstName);
  },
};

instructor.sayHi(); // This will output "Hello! Adnan" because the `this` keyword
//  refers to the `instructor` object within the context of the `sayHi` method.

// Exercise-3: What does this function output? Why?
// Bind this to get correct output ex: "Cat owner?-true "
const instructor1 = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: false,
  },
  displayInfo: function () {
    console.log("Cat owner? " + "-" + this.catOwner);
  },
};
const result = instructor1.displayInfo.bind(instructor1.info);
result(); // this will display "Cat owner? -true" because we bound the `this` context to `instructor1.info`. 
         // If we didn't bind, it would throw an error because `this.catOwner` would be undefined.

// 4.What does this function output? Why? 
const instructor2 = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: false,
        displayLocation: function(){
            return  `Residing ${this.data.location}`;
        },
        data: {
            location: "Dhaka"
        }
    },
}

console.log(instructor2.info.displayLocation() );
// This will output "Residing Dhaka" because the `this` keyword in the refers to the
// `info` object, which has access to the `data` property containing the location.

// 5.What does this function output? Why? 
const instructor3 = {
    firstName: 'Adnan',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return  `Residing ${this.data.location}`;
        },
        data: {
            location: "Dahaka",
            logLocation: this.displayLocation
        }
    },
}

console.log(instructor3.info.data.logLocation()); // Why might we be getting an error here?
// This will throw an error because `this.displayLocation` is not defined in the context of `data`.
// The `this` keyword in `logLocation` refers to the global object or undefined in strict mode,
// not to the `info` object where `displayLocation` is defined.
// To fix this, we can bind the `displayLocation` method to the `info` object when assigning it to `logLocation`

// 6.What are the ways to deep or shallow copy for array and object? 

// Shallow copy methods:
// 1. Using the spread operator
const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];
const originalObject = { a: 1, b: 2 };
const shallowCopyObject = { ...originalObject };
// 2. Using Object.assign() for objects
const shallowCopyObject2 = Object.assign({}, originalObject);
// Deep copy methods:
// 1. Using JSON methods
const deepCopyArray = JSON.parse(JSON.stringify(originalArray));
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));

// 7. What are the mutable and immutable data in Javascript?
// Mutable data types can be changed after creation, such as objects and arrays.
// Immutable data types cannot be changed after creation, such as strings and numbers.

// 8. Explain pass by value vs pass by reference with example?
// Pass by value means that a copy of the variable's value is passed to the function.
function modifyValue(x) {
    x = 10; // This will not affect the original variable
}
let num = 5;
modifyValue(num);
console.log(num); // Output: 5
// Pass by reference means that a reference to the variable's memory location is passed to the function.
function modifyObject(obj) {
    obj.value = 10; // This will affect the original object
}
let myObject = { value: 5 };
modifyObject(myObject);
console.log(myObject.value); // Output: 10

