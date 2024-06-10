// Factory Functions
function sizeChanger (size) {
  function addNum() {
    document.body.style.fontSize = `${size}px`;
  };
  return addNum;
};

const size12 = sizeChanger(12);
const size14 = sizeChanger(14);
const size16 = sizeChanger(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
