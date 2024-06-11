// Factory Functions

function sizeChanger (size) {
  return function addNum(sizeModifier=0) {
    if(isNaN(sizeModifier)) { // bind fills sizeModifier with click object of no nummber given
      sizeModifier = 0;       // this rebinds size modifier to zero so that it can still run.
    };
    console.log(isNaN(sizeModifier));
    console.log(`Font size modifier is: ${sizeModifier}`);
    console.log(`Font size is now: ${size + sizeModifier}`);
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

