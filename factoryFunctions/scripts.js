// Factory Functions

let globalAge  = 23; // Globally scoped variable

function printAge (age) {
  var varAge = 34; // Function scoped variable

  // this is another 'curly brace', thus a block
  if (age > 0) {
    // This is a block-scoped variable that exists
    // within its nearest enclosing block, the if's block
    const constAge = age * 2;
    console.log(constAge);
  }

  // ERROR! We tried to access a block scoped variable
  // not within its scope
  console.log(constAge);
}

printAge(globalAge);
