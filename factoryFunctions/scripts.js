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

function parseProtocol(url){
  // const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  const parsedURL = /(\w+)/.exec(url);
  console.log(parsedURL);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [fullURL, protocol, fullhost, fullpath] = parsedURL;
  console.log(`fullURL: ${fullURL}`);
  console.log(`protocol: ${protocol}`);
  console.log(`fullhost: ${fullhost}`);
  console.log(`fullpath: ${fullpath}`);

  return protocol;

}

console.log("...");
console.log("...");
console.log("...");


console.log(
  parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
);
// "https"

console.log("...");
console.log("...");
console.log("...");
console.log("...");

