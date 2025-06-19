// Exercise-1:
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  let aNew = a.toLowerCase();
  let bNew = b.toLowerCase();
  if (aNew.includes(bNew)) {
    console.log(b + a);
  } else {
    console.log(a + b);
  }
}
myFunction("cheese", "cake"); //'cheesecake'
myFunction("lips", "s"); //'slips'
myFunction("Java", "script"); //'Javascript'
myFunction(" think, therefore I am", "I"); //'I think, therefore I am'

//Exercise-2:
// Write a function that takes two strings (a and b) as arguments
// From the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
  let result = "";
  let count = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    result = a[i] + result;
    count++;

    if (count % 3 === 0 && i !== 0) {
      result = b + result;
    }
  }

  return result;
}
console.log(myFunction('abcde', '$'));

//Exercise-3:
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  let newStr ="";
  for(let i=0; i<str.length; i++){
    let code = str.charCodeAt(i);
    newStr += String.fromCharCode(code + 1);
  }
  return newStr;
}
console.log(myFunction('bnchmf')); //'coding'
console.log(myFunction('bgddrd')); //'cheese'
console.log(myFunction('sdrshmf')); //'testing'

//Exercise-4:
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
//make sure you don't mutate original array
function myFunction(a, n) {
  let newArr=[];
  if(a.length < n){
    return a;
  }
  else{
    for(let i=a.length-1; i>a.length-1-n ; i--){
      newArr.unshift(a[i]);
    }
    return newArr;
  }
}
console.log(myFunction([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(myFunction([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]


//Exercise-5:
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
  if(a<b){
    return a/b;
  }else{
    return a*b;
  }
}
console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); //4050
console.log(myFunction(8, 20)); //0.4
console.log(myFunction(2, 0.5)); //1

// Exercise-6:(5)
// For each of the exercises below, assume you are starting with the following people array.

// Make sure follow the order for rest of the action list
// 1.Using a loop, iterate through this array and console.log all of the people one by one.
// 2.Write the command to remove "samim" from the array.
// 3.Write the command to remove "Karim" from the array.
// 4.Write the command to add "Ifat" to the front of the array.
// 5.Write the command to add your name to the end of the array.
// 6.Using a loop, iterate through this array and after logging "Anis", exit from the loop.
// 7.Write the command to make a copy of the array using slice. The copy should NOT include "Anis" or "Ifat".
// 8.Write the command that gives the indexOf where "Anis" is located.
// 9.Write the command that gives the indexOf where "Foo" is located (this should return -1).
// 10.Redefine the people variable with the value you started with. Using the splice command, remove "Adnan" from the array 
// and add "Elizabeth" and "Bob". Your array 1.should look like this when you are done ["samim", "Anis", "Elizabeth", "Bob", "Karim"].
// 11.Create a new variable called withMiraz and set it equal to the people array 1.concatenated with the string of "Miraz".
let people = ["samim", "Anis", "Adnan", "Karim"];
 
for(let i of people){
  console.log(i); // samim Anis Adnan Karim
}

people.shift();
console.log(people); // [ "Anis", "Adnan", "Karim" ]

people.pop();
console.log(people);  // [ "Anis", "Adnan" ]

people.unshift("Ifat");
console.log(people);  // [ "Ifat", "Anis", "Adnan" ]

people.push("Emran");
console.log(people);  // [ "Ifat", "Anis", "Adnan", "Emran" ]

for(let i of people){
  console.log(i);
  if(i === "Anis"){
    break; // Anis
  }
}

let peopleCopy = people.slice(2, people.length - 1);
console.log(peopleCopy); // ["Adnan" ]

console.log(people.indexOf("Anis")); // 0

console.log(people.indexOf("Foo")); // -1

people = ["samim", "Anis", "Adnan", "Karim"];
people.splice(2, 1, "Elizabeth", "Bob");
console.log(people); //  [ "samim", "Anis", "Elizabeth", "Bob", "Karim" ]

let withMiraz = people.concat("Miraz");
console.log(withMiraz); // [ "samim", "Anis", "Elizabeth", "Bob", "Karim", "Miraz" ]








