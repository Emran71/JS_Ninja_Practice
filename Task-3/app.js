// 1. When and why function is needed?
// Answer : In programming fnctions are needed whenever we want to organize, reuse, or structure code for specific tasks.

// 2.write down and recap the difference between console and Return

//Answer : 
        // console: 1. Used to display output  2. Does not return anything.  3. it can not return anything.
        // return : 1. Used to send a value back from a function. 2. Returns a value to the caller. 3. Can return any data type, including objects,
        // arrays, or primitive values.


// 3.write this function takes in two parameters and returns the difference of the two;
function calculateDifference(a, b) {
    return a - b;
}
let result = calculateDifference(10, 5);
let result1 = calculateDifference(0, 2);
console.log(result); // Output: 5
console.log(result1); // Output: -2

// 4. Write a function that takes a value as argument and return the type of value
function getType(value) {
    return typeof value;
}
let type1 = getType(42);
let type2 = getType("Hello");
console.log(type1); // Output: "number"
console.log(type2); // Output: "string"

// 5.Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:) - 4
function getDayOfWeek(dayNumber) {  
    const dayName = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    if (dayName < 1 || dayName > 7) {
        return undefined;
    }
    return dayName[dayNumber - 1];
}
const dayName  = getDayOfWeek(3);
console.log(dayName); // Output: "Monday"

//  Write down this function takes in one parameter (an array) and returns the last value in the array
//  It should return undefined if the array is empty.
function lastElement(arr){
    if(arr.length==0){
        return undefined ;
    }
    return arr[arr.length-1];
}
let lastValue = lastElement([]);
console.log(lastValue);

// // 7. write a function that return an object based on passed arguments 
// // Returned object key must be x , y, z in order and value will be passed arguments order

function convertToObject(a,b,c){
  if(a==null || b==null || c==null){
    return undefined;
  }
  return {
    x : a,
    y : b,
    z : c
  }
}
let obj1= convertToObject(10,29)
console.log(obj1);
