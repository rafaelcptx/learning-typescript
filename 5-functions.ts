// How to define functions
function addTwo(num: number) {
  return num + 2;
}

function getUpper(string: string) {
  return string.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}
let loginUser = (name: string, email: string, isPaid: boolean) => {};

addTwo(5);
getUpper("Hi, this is a string");

/* You should see errors in the lines of code below.

addTwo("String");
getUpper(234);
*/
