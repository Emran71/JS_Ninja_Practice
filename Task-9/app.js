// 1.Exercise-1
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  return a.getTime() === b.getTime();
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //false
console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false
console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //true


// 2.Exercise-2
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

function myFunction(a, b) {
  return Math.abs(Math.round((a - b) / (1000 * 60 * 60 * 24)));
}
console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01'))); //10
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01'))); //7457


// 3.Exercise-3
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
  return a < b;
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //true
console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))); //false
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false


// 4.Exercise-4
// This is a more difficult challenge, you have to research little on internet 
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b) {
  return {
    hrs: Math.abs(a.getHours() - b.getHours()),
    min: Math.abs(a.getMinutes() - b.getMinutes()),
    sec: Math.abs(a.getSeconds() - b.getSeconds())
  };
}
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))); //{ hrs: 0, min: 45, sec: 10 }
console.log(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))); //{ hrs: 1, min: 50, sec: 23 }
console.log(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))); //{ hrs: 3, min: 4, sec: 12}

// 5.Exercise-5
//Generate a Random Number between two values
//Number must be a full Number (not fraction)
//endNum must be exclusive
function generateRandomNum(startNum, endNum){
  return Math.floor(Math.random() * (endNum - startNum)) + startNum;
}
console.log(generateRandomNum(5, 10) );
