// Factory Functions
function sizeChanger (size) {
  return function addNum(plusSize) { // this is running on page load... why???
    console.log(plusSize);
    console.log(size + plusSize);
    return document.body.style.fontSize = `${size + plusSize}px`;
  };
};

const size12init = sizeChanger(10);
const size12= size12init(0);
const size14init = sizeChanger(12);
const size14= size14init(0);
const size16init = sizeChanger(14);
const size16= size16init(0);
const size16plusinit = sizeChanger(16);
const size16plus= sizeChanger(6);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
document.getElementById("size-16-plus").onclick = size16plus;
