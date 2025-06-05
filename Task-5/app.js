// Exercise-1: Answer the following questions about this code block: What should the above code console.log?

const isLearning = true;
if(isLearning){
    console.log("Keep Learning");
} else {
    console.log("I hope you are learning....");
}
// output: Keep Learning . Because the variable is true . if condition is satisfied then if block will be executed.
// ====================================================

// Exercise-2:Why do we not need to specify if(isLearning === true)? 
// Why does if(isLearning) work on its own?
//    Explanation: In JavaScript, the if statement checks for truthiness. If the variable isLearning is true, it evaluates to true in the if condition.
//    So, we can simply write if(isLearning) without explicitly checking for equality with true. This is because JavaScript treats the
//    value of isLearning as a boolean, and if it is truthy, the condition passes.
// ====================================================
// Exercise-3:
// Use both if and switch statement
// age: less then 10  
// output: stay home under your mom supervision

// age: more and equal then 10 and less then 15 
//  output: Try to gain knowledge from outside of home

// age: more then and equal to 15 and less than 18
// output: prepare to cast vote

// age: more or equal then 18 
//  output: cast you vote

// age: unknown
//   output: You are out of range
const age = 16;
if (age < 10) {
    console.log("Stay home under your mom's supervision");
}
else if (age >= 10 && age < 15) {
    console.log("Try to gain knowledge from outside of home");
}
else if (age >= 15 && age < 18) {
    console.log("Prepare to cast vote");
}
else if (age >= 18) {
    console.log("Cast your vote");
}
else {
    console.log("You are out of range");
}

switch (age) {  
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Stay home under your mom's supervision");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
        console.log("Try to gain knowledge from outside of home");
        break;
    case 15:
    case 16:
    case 17:
        console.log("Prepare to cast vote");
        break;
    default:
        if (age >= 18) {
            console.log("Cast your vote");
        } else {
            console.log("You are out of range");
        }
}
// ====================================================

// Exercise-4:
let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if(var1){
    console.log("first");
} else if(var1 || var2){
    console.log("second");
} else if(var1 || var3){
    console.log("third");
} else {
    console.log("fourth");
}
// What should the above code console.log? Why? 
// output: third . Because var1 is undefined, var2 is an empty string (falsy), and var3 is a truthy value (1).

// What is the value of var1 when it is initialized? 
// Is the value of var1 a "truthy" value? Why? 
// Is the value of var2 a "truthy" value? Why? 
// Is the value of var3 a "truthy" value? Why?
// Explaination: firstly var1 is undefined, which is a falsy value.because it has not been assigned any value.
// var2 is an empty string, which is also a falsy value in JavaScript.
// var3 is a number with value 1, which is a truthy value in JavaScript.
// ====================================================

// Exercise-5: Choose the correct conditional (ternary) operator to console  "Too young" if age is less than 18, otherwise alert "Old enough" 
const age2 = 16;
const message = age2 < 18 ? "Too young" : "Old enough";
console.log(message); // output: Too young
// ====================================================

// Exercise-6:When to Use if else vs ternary vs switch?
// Expaination: When to use if-else, ternary, and switch statements in JavaScript depends on the complexity of the conditions and the number of cases you need to handle.
// Use if-else statements when you have complex conditions or multiple conditions that need to be evaluated sequentially.
// Use ternary operators for simple conditions where you want to assign a value based on a condition in a concise way.
// Use switch statements when you have multiple discrete values to compare  against a single variable or expression, especially when dealing with many cases.
