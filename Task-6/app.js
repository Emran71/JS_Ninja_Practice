// // # Exercise-1(what will be the output and explain)

// let num = 1;

// while (num <= 10) {
//   console.log(num);
//   num += 2;
// }
// // Output: 1, 3, 5, 7, 9 . Here the loop starts with num = 1 and increments by 2 each time, printing odd numbers until it exceeds 10.

// // # Exercise-2(what will be the output and explain)

// let num1 = 1;

// while (num1 <= 20) {
//   if (num1 % 4 === 0) {
//     console.log(num1);
//   }
//   num1++;
// }
// // Output: 4, 8, 12, 16, 20. The loop checks each number from 1 to 20 and prints it if it is divisible by 4.
// // The condition num1 % 4 === 0 checks for divisibility by 4.

// // # Exercise-3(what will be the output and explain)
// let num2 = 100;
// while (num2 < 150) {
//   console.log(num2 + 1);
//   num--;
// }
// // Output: This code will result in an infinite loop. The variable num2 starts at 100 and is checked against the condition num2 < 150,
// //  which is true.So the condition is always true, and num2 is never incremented or changed, leading to an infinite loop.

// // # Exercise-4(what will be the output? It May require if condition inside loop
// // Print out all even numbers between 1 and 100. Write two solutions: one with a while loop and one with a for loop.

// // first Solution:
// let i = 1;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// // Second Solution:
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// // Exercise-5(Run loop and add $ in each repetition)
// function repeat(num) {
//   for (let i = 0; i < num; i++) {
//     let line = "";
//     for (let j = 0; j <= i; j++) {
//       line += "$";
//     }
//     console.log(line);
//   }
// }
// repeat(5);

// # Exercise-6(what will be the output and Let's explain)
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples
// of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 !== 0) {
      console.log("Buzz");
    } else if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100);

// // Exercise-7:Write a function that takes two strings (a and b) as arguments
// // Return the number of times a occurs in b

// function myFunction(a, b) {
//     let count =0;
//     for(let i=0; i<b.length; i++){
//         if(b[i]==a){
//             count++;
//         }
//     }
//     console.log(`Total ${a} = ${count}`);
//     return;
// }
// myFunction('m', 'how many times does the character occur in this sentence?') //2
// myFunction('h', 'how many times does the character occur in this sentence?') //4
// myFunction('?', 'how many times does the character occur in this sentence?') //1
// myFunction('z', 'how many times does the character occur in this sentence?') //0

// let str1= "l"
// let str ="L"
// console.log(str1.toUpperCase()===str.toUpperCase());
