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
// user name display end
//

function userNameDisplay({displayName: dname}) {
  return dname;
}

function whois({ displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}
console.log(userNameDisplay(user));
console.log(whois(user));

function drawChart({
  size = "big",
  coords = { x: 0, y: 0},
  radius = 25
  }) {
  console.log(size, coords, radius);
}

drawChart({
  size: "extraLG",
  radius: 44,
});
drawChart({});
drawChart({
  coords: {x: 22, y: 33},
  radius: 66,
});

const metadata = {
  title: "scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata; // this makes the above an assignment (renaming englishtitle and localtitle)

console.log(englishTitle); // "scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "mary",
      father: "Harry Smith"
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
    },
    age: 44,
  },
];

for (const {
  name: n, 
  family: {father: f},
  } of people) {
  console.log(`Name: ${n}, Father: ${f}`);
};

const { a, toFixed } = 1;
console.log(a, toFixed);

const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [,{ name },] = props;

console.log(name)
console.log(props[2].name)
