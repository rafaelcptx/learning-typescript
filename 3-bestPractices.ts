// In the previous lesson I learned the TypeScript syntax, but i found out that the way I learned was just to be didactic.

// TypeScript is smart and for best practices we should avoid to be redundant.

// string
let greetings = "Hello Rafael";
// number
let myNum = 5;
// boolean
let isLoggedIn = false;

// TypeScript automatically recognizes the type when a valued is immediately assigned after the variable declaration.

/* ERRORS.

greetings = 2; ERROR: Type 'number' is not assignable to type 'string'.
myNum = "Hey"; ERROR: Type 'string' is not assignable to type 'number'.
isLoggedIn = "No"; ERROR: Type 'string' is not assignable to type 'boolean'.

*/
