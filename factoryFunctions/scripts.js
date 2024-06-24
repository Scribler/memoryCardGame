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

//
// mini game start
//

function player(name) {
  this.name = name;
  const health = 100;
  return { name, health };
}

const john = player("John"); // Initialize player "John"

function returnPlayerHealth({health}) { // return player health
  return health;
};
function returnPlayerName({name}) { // return player name
  return name;
}

function attackPlayer(player) { // reduce player health by 10
  player.health -= 10;
  return player.health
}

function drinkHealthPotion(player) { // increase health by 10
  player.health += 10;
  return player.health;
}

// run commands
console.log(`Player ${returnPlayerName(john)}s health: ${returnPlayerHealth(john)}`);
console.log(`Player has been attacked. Health is now: ${attackPlayer(john)}`);
console.log(`Player has been attacked. Health is now: ${attackPlayer(john)}`);
console.log(`Player has been attacked. Health is now: ${attackPlayer(john)}`);
console.log(`Player drinks health potion. Health is now: ${drinkHealthPotion(john)}`);
console.log(`Player drinks health potion. Health is now: ${drinkHealthPotion(john)}`);

//
// mini game end
//

//
// user name display start
//

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "Jane",
    lastName: "Doe",
  },
};

//
// user name display start
//


// start working on Japanese flashcards game?
