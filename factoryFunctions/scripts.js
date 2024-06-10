// Factory Functions

function sizeChanger (size) {
  return function addNum(sizeModifier=0) {
    console.log(`Font size modifier is: ${sizeModifier}`);
    console.log(`Font size is now: ${size + sizeModifier}`);
    return document.body.style.fontSize = `${size+sizeModifier}px`;
  };
};

const size12= sizeChanger(12);
const size14= sizeChanger(14);
const size16 = sizeChanger(16);
const size16plus = sizeChanger(16);

document.getElementById("size-12").onclick = size12.bind(sizeChanger, 0);
document.getElementById("size-14").onclick = size14.bind(sizeChanger, 0);
document.getElementById("size-16").onclick = size16.bind(sizeChanger, 0);
document.getElementById("size-16-plus").onclick = size16.bind(sizeChanger, 6);

