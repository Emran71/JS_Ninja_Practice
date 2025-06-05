//  Exercise : 01 (What will be the result and explain why?)

const x = 10;
const y = "a"
console.log(y === "b" || x >= 10); // output: true    
// Explanation:  The expression checks if y is equal to "b" or if x is greater than or equal to 10. Though the first 
// condition (y === "b") is false, the second condition (x >= 10) is true because x is 10. Since one of the conditions 
// in an OR operation is true, the overall expression evaluates to true.

//  Exercise : 02 (What will be the result and explain why?)
const x1 = 3;
const y1 = 8;

console.log(!(x1 == "3" || x1 === y1) && !(y1 != 8 && x1 <= y1)); // output: false
// Explanation: The expression contains two parts combined with an AND operator.Here the first part checks if x1 
// is equal to "3" (which is true due to type coercion) or if x1 is strictly equal to y1 (which is false). if two
//  part satisfies the condition then it returns true. but here one is false so ultimately it returns false.

//  Exercise : 03 (Check the value ans show output whether it's truthy or falsy ).What are the truthy and 
// falsy value in Javascript.

"Hello World" //true

"" //false

null //false

0 //false

-1 //true

NaN //false

// Explanation: In JavaScript, truthy values are those that evaluate to true in a boolean context, while falsy values
// evaluate to false. The truthy values include non-empty strings, non-zero numbers, objects, arrays, and functions.
// Falsy values include false, 0, "", null, undefined, and NaN.


// Exercise : 04 (What will be the result and explain why?) Explain short circuit
const str = "haha!"
const msg = ""
const isFunny = "false"

console.log(!(( str || msg ) || isFunny)); // output: false
// Explanation: The expression checks if either str or msg is truthy, and then combines that with the value of isFunny. Here mgs is empty string. so
//  its returns false.

// Exercise-6: operands++ vs ++operands. what are the differences between a++ and ++a?
const a = 10;
console.log(a++); // output: error
console.log(++a); // output: error
// Explanation: the code will throw an error because the variable `a` is declared as a constant using `const`, which means its value cannot be changed.
// The difference between a++ and ++a is that a++ (post-increment) returns the value of a before incrementing it, and ++a 
// (pre-increment) increments the value of a before returning it. In this case, a++ returns 10, and then a becomes 11. Also ++a increments a to 12 and returns it.

// Exercise-7: What will be the result? and explain why? what to do if I want to get the result of 1 after calculation?
console.log(10 / 2 * 5 ); // output: 25
// Explanation: The expression is evaluated from left to right due to the precedence of the division and multiplication operators.first 10 is divided by 2,
//  resulting in 5, and then that result is multiplied by 5, giving a final result of 25.

// Exercise-8: Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console

console.log(2 == "2" );// true
console.log(2 === 2);  // true
console.log(10 % 3); // 1
console.log(10 % 3 === 1); // true
console.log(true && false); // false
console.log(false || true); // true 
console.log(true || false); // true

