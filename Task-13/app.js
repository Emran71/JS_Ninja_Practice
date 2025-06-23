// Exercise-1:
// What will be the output of the following code snippet? Why?
function greet() {
    let message = "Hello";
    if (true) {
        let message = "Hi";
        console.log(message);
    }
    console.log(message);
}
greet(); // output: Hi , Hello
// Expalaination:  The first console.log prints "Hi" because  if condition is true so it refers to the inner `message` 
// variable defined within the if block. The second console.log prints "Hello" because there is no return in the if 
// block so the program exewcute next statement. 

// Exercise-2:
// A developer wrote this function to keep track of users, but it doesn’t work as expected. Fix the scope issue.
// 🛠️ Task:
// 1. Fix the function so that the global `count` is updated.
// 2. Why wasn't the count increasing?
let count = 0;
function addUser(name) {
    count++;
    console.log(`${name} added. Total users: ${count}`);
}
console.log(addUser("Samim")); // output: "Samim added. Total users: 1"
console.log(addUser("Raihan")); // output: "Raihan added. Total users: 2"
console.log(addUser("Abul")); // output: "Abul added. Total users: 3"
// Explaination: The count variable is declared in the global scope, so it can be accessed and modified by the addUser function. but 
// the original code was not updating the global count variable because it was using a local variable with the same name. and the value
//  is 0. so every time the count value set to 0 when adding a new user.


// Exercise-3:
// What will be printed? Explain using scope chain.
// // 📌 Task:
// // 1. Understand which variables are accessible where.
// // 2. Add comments showing why `z` is or isn’t accessible outside.
let x = 10;
function outer() {
    let y = 20;
    function inner() {
        let z = 30;
        console.log(x + y + z); // 60
    }
    inner();
}
outer();
console.log(z); // here z is not accessible in the global scope because it has initialized in the inner() function. 
// z is only accessible in the function scope. so it shows ReferenceError.
// Explaination: Moreover y variable is accessible in outer function and inner function and x is accessible 
// everywhere because it is a global varible.


// Exercise-4:
// Write a function `createCounter` that returns another function which increments and returns a count.
let count = 0;
function createCounter(){
    return function() {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Exercise-5:
// Fix the following loop to print the correct value of `i` each second.
// 🔍 Task:
// Use closure (or let) to fix the issue so it prints 1, 2, 3 properly
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log("After " + i + " second(s):", i); // After 1 second(s): 1   After 2 second(s): 2    After 3 second(s): 3
    }, i * 1000);
}


// Exercise-6:
// Create a function `secureProfile` that returns an object with:
// - a method to get the name
// - a method to update the name
// - a method to hide the name (null it)
// The name should not be directly accessible.
function secureProfile(name) {
    let profileName = name;
    return {
        getName: function() {
            return profileName;
        },
        updateName: function(newName) {
            profileName = newName;
        },
        hide: function() {
            profileName = null;
        }
    };
}
let profile = secureProfile("Samim");
console.log(profile.getName()); // "Samim"
profile.updateName("Raihan");
console.log(profile.getName());// "Raihan"
profile.hide();
console.log(profile.getName()); // null


// Exercise-7:
// Predict the output and explain why.
// 🧠 Task:
// 1. Which function runs and why?
// 2. What does the second log do?


console.log(foo());
function foo() {
    return "Hoisted!";
}

console.log(bar());
var bar = function () {
    return "Not hoisted?";
};
// Explaination: only foo() function has been executed because foo has already in declareation state so in the 
// execution foo() is already declared and easily executed but bar throws an error because in declaration state it intialize undefined
// when we call the bar then it throughs an error.


// Exercise-8:
// Wrap the following code in an IIFE to prevent `user` from being accessible globally.
// 🧩 Task:
// 1. Make `user` private using IIFE
// 2. Ensure the log still prints correctly inside the IIFE
(function(){
    let user = "Emran";
    console.log(user);
})()


// Exercise-9 (Bonus):
// Create a `createBankAccount` function that returns an object with methods:
// - `deposit(amount)`
// - `withdraw(amount)`
// - `getBalance()`
function createBankAccount(){
    let balance = 0;
    return {
        deposit: (amount)=>{
          balance +=amount;
          return balance;
        },
        withdraw: (amount)=>{
            if (amount > balance) {
                console.log("Insufficient balance");
                return balance;
            }
            balance -= amount;
            return balance;
        },
        getBalance: ()=>{
           return balance;
        }

    }
}
let account = createBankAccount();
account.deposit(1000);
account.withdraw(300);
console.log(account.getBalance()); // 700
console.log(account.balance); // undefined


