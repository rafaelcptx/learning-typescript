// Better way to write functions.

function addThree(num: number): number {
  // The return below shouldnt be allowed.
  // return "hello";

  // To solve the problem above you have to tell TS what type of data the function should return.
  return num + 3;
}

const heros = ["thor", "spiderman", "ironman"];

// How to avoid unexpected returns from map
heros.map((hero): string => {
  return `The hero is ${hero}`;
});

// It is a good practice for you to explicit shows in your code that a void function don't return anything.
// If someone try to put a return in this function, it will show an error in the code.
function consoleError(errmsg: string): void {
  console.log(errmsg);
}
