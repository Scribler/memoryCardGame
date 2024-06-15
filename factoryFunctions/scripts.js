// Factory Functions

function sizeChanger (size) {
  return function addNum(sizeModifier=0) {
    if(isNaN(sizeModifier)) { // bind fills sizeModifier with click object of no nummber given
      sizeModifier = 0;       // this rebinds size modifier to zero so that it can still run.
    };
    // console.log(isNaN(sizeModifier));
    // console.log(`Font size modifier is: ${sizeModifier}`);
    // console.log(`Font size is now: ${size + sizeModifier}`);
    return document.body.style.fontSize = `${size+sizeModifier}px`;
  };
};

const size12= sizeChanger(12);
const size14= sizeChanger(14);
const size16 = sizeChanger(16);
const size16plus = sizeChanger(16);

document.getElementById("size-12").onclick = size12.bind(sizeChanger);
document.getElementById("size-14").onclick = size14.bind(sizeChanger);
document.getElementById("size-16").onclick = size16.bind(sizeChanger);
document.getElementById("size-16-plus").onclick = size16.bind(sizeChanger, 6);


//
// Factory Function Shorthand and other formats
//

const bArray = [];
const bObj = { a: 1, b: 2};

({ a: bArray[0], b: bArray[1]} = bObj); // assigns 1, and 2, to positions 0, and 1, 
                                        //respectively in 'bArray'
                                        // *NOTE* MUST have () surrounding the statement

console.log(bArray); // = [1, 2]

const [aa = 1, bb = 0] = [2]; // assigns aa = 2, bb = 0
                              // first array contains variable name and default value for it if none given in the second half of the declaration.

console.log(aa, bb); // = 2 0

const { cc = console.log("default value")} = { cc: undefined}; // if 'cc' has a value other than undefined it will console.log

const ccc = [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = ccc;

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);