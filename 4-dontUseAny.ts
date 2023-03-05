// any should be used only when you don't want to do type checking in the particular variable;

// let hero;
// Variable 'hero' implicitly has an 'any' type, but a better type may be inferred from usage.

function setHeroString() {
  return "Thor";
}
function setHeroBoolean() {
  return false;
}

let hero: string;

// When the declaration is "let hero;" Both lines of code below are accepted. It isnt a good practice.
hero = setHeroString();
// hero = setHeroBoolean();

// To avoid this. Set the type in the variable declaration.
// let hero: string; Then you will see an error in the atempt to set a boolean value to the hero variable.
