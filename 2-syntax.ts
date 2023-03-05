// First contact with syntax types in TypeScript.

// string
let greetings: string = "Hello Rafael";
// number
let myNum: number = 5;
// boolean
let isLoggedIn: boolean = false;

// myNum.toUpperCase() < error.
/* If you try to use a string method in a number type variable TypeScript 
 shows you an error and remember the type of the variable. */

// greetings.toUppercase() < error. "Did you mean: toUpperCase?"
greetings.toUpperCase();
// If you miss a letter of a method Typescript shows you an error and recommends the correct method.

console.log(greetings);
console.log(myNum);
console.log(isLoggedIn);

export {};
