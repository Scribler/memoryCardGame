// Factory Functions
function sizeChanger (size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

const size12 = sizeChanger(12);
const size14 = sizeChanger(14);
const size16 = sizeChanger(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
