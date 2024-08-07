// Factory Functions
const start = Date.now();

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


function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

// basic way
// function createPlayer(name,level){
//   const {getReputation,giveReputation} = createUser(name);
//   const increaseLevel = () => level++;
//   return {name,getReputation,giveReputation,increaseLevel};
// }

// Object.assign way
function createPlayer(name,level){
  const user = createUser(name);
  
  const increaseLevel = () => level++;
  return Object.assign({}, user, {increaseLevel});
}

const josh = createPlayer("josh");
josh.giveReputation();
josh.giveReputation();
// console.log(josh.getReputation());

const calculator = (function(){ 
  const add = (a,b) => a + b;
  const sub= (a,b) => a - b;
  const mul= (a,b) => a * b;
  const div= (a,b) => a / b;
  return {add, sub, mul, div};
})(); // '()' at the end of the '()' wrapped function calls it immediately
      // This allows you to immediately use it's functions without seperately
      // instantiating it. COOL!

// console.log(calculator.add(1,1));
// console.log(calculator.mul(3,3));

//
// Calculator END
//

//
// Closures START
//

// function newGreeting (greeting=""){ // takes variable on initialization
//   const myGreeting = greeting.toUpperCase();
//   function greet(name){ // takes variable on post instatiation useage
//     console.log(`${myGreeting} ${name}.`);
//   }
//   return greet;
// }
//
// const hello = newGreeting("Hello");
// const howdy = newGreeting("Howdy doody,");
//
// hello("John");
// howdy("Samuel");
//
// function createGame (gameType) { // doesn't have to be stored in a variable to be accessed by the next function.
//   let score = 0;
//   return function win() {
//     score++;
//     console.log(`You won the ${gameType} game! Your score is: ${score}`);
//   }
// }
//
// const hockeyGame = createGame("Hockey");
// hockeyGame();
// hockeyGame();
// hockeyGame();
// hockeyGame();

//
// Closures END
//

// Modules START 
//

//documentMock
const documentMock = (() => ({
  querySelector: (target) => ({
    innerHTML: null,
    appendChild: (element) => ({
      innerHTML: null,
    }),
  }),
}))();

const Formatter = (function(doc){
  const log = (message) => console.log(`[${Date.now()}] logger: ${message}`); // log time and a given message
  const timesRun = [];

  const makeUpperCase = (text) => { // make given text uppercase.
    log("Making Uppercase");
    timesRun.push(null);
    return text.toUpperCase();
  };

  const writeToDom = (target, type, text) => { // put text in targeted dom element
    const element = document.createElement(type);
    element.innerText = text;
    doc.querySelector(target).appendChild(element);
  };

  return {
    makeUpperCase,
    timesRun,
    writeToDom,
  };
})(document || documentMock);

console.log(Formatter.makeUpperCase("Upper case Words"));
console.log(`makeUpperCase > times run: ${Formatter.timesRun.length}`);
Formatter.writeToDom("#modulesContent", "h1", "This is an H1?");

