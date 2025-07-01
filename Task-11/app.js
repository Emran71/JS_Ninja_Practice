// // Exercise: 1
// // Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the
// // first array with all of the values in the second array placed in the middle of the first array.
// function placeInMiddle(arr, vals){
//       let position = Math.ceil(arr.length/2);
//       arr[position] = [...vals];
//       return arr.flat(Infinity);
// }
// console.log(placeInMiddle([1,2,6,7],[3,4,5])); // [ 1, 2, 3, 4, 5, 7 ]
// console.log(placeInMiddle([1],[3,4,5]));  // [ 1, 3, 4, 5 ]
// console.log(placeInMiddle([1,6],[2,3,4,5])); // [ 1, 2, 3, 4, 5 ]
// console.log(placeInMiddle([],[2,3,4,5])); // [ 2, 3, 4, 5 ]

// // Exercise: 2
// // Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) 
// // and returns an array of all of the parameters concatenated together

// function joinArrays(...array){
//     return array.flat(Infinity);
// }
// console.log(joinArrays([1],[2],[3])); // [ 1, 2, 3 ]
// console.log(joinArrays([1],[2],[3],[1],[2],[3])); // [ 1, 2, 3, 1, 2, 3 ]
// console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(joinArrays([1],[3],[0],[7]));  // [ 1, 3, 0, 7 ]

// // Exercise: 3
// // Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.
// function sumEvenArgs(...array){
//    let sum = 0; 
//    for(let num of array){
//     if(num%2==0){
//         sum +=num;
//     }
//    }
//    console.log(sum);
// }
// sumEvenArgs(1,2,3,4) // 6
// sumEvenArgs(1,2,6) // 8
// sumEvenArgs(1,2) // 2

// // Exercise: 4
// // you have given a object with some nested properties and method , you have to access the property and method in single statement(using destructuring)

// // Access city, getAddress from the object and console the output 
// // Get the correct output form by getAddress function calling .Ex: Dhaka-Bangladesh

const obj = {
  name: 'samim',
  email: 'samimfazlu091@gmail.com',
  address: {
    location: {
      country: {
        cname: 'Bangladesh',
        city: 'Dhaka'
      },
    },
    getAddress() {
      return this.country.city + '-' + this.country.cname
    },
  },
}
const {name, email, address:{location:{country:{cname,city}},getAddress}} = obj
console.log(getAddress.call(obj.address.location)); // Dhaka-Bangladesh

// // Exercise: 5 
// // you have given a function sum with arr of number as arguments, you have to Sum up those Number and return the result
// // you can check validation before summing up the number 
// // =================================================================
// function sum(values) {
//     if (!Array.isArray(values)) {
//         throw new Error("Input must be an array");
//       }
//       let sum = values.reduce((total, num) => total + num, 0);
//       return sum;
// }
// console.log(sum([1, 2, 3, 4])); //10

// Exercise: 6 
// what are the difference between rest(...) and spread(...) operator.Explain with Example. When to use what? 
// Answer :  Rest operator (...) is used to collect multiple elements into an array, while Spread operator (...) is used to expand an array into individual elements.
// Rest operator is used in function parameters to gather remaining arguments into an array.
// Spread operator is used to spread elements of an array into individual elements or to merge arrays.

