// get card Area
const cardArea = document.getElementById("cardArea");

// CARD CONSTRUCTOR
function Card(name, cardNum) {
  // variables
  this.name = name;
  this.cardNum = cardNum;
  
  // BUILDING THE CARD 
  // create div (body of card), and add 'card' class
  const flipCard = document.createElement("div");
  flipCard.className = "flip-card";
  flipCard.id = name;
  // create front side of card
  const frontSide = document.createElement("div");
  frontSide.className = "flip-card__front-side";
  // create back side of card
  const backSide = document.createElement("div");
  backSide.className = "flip-card__back-side";
  // create cardFront with picture and alt text
  const cardFrontContent = document.createElement("img");
  cardFrontContent.src = "assets/tartan.jpeg";
  cardFrontContent.alt = "tartan pattern";
  // creat cardBack with centered h3 element
  const cardBackContent = document.createElement("h3");
  cardBackContent.innerText = cardNum;
  
  // PUTTING CARD PIECES TOGETHER AND ADDING TO DOM
  // add img to 'front-card' and add to flip card
  frontSide.appendChild(cardFrontContent);
  flipCard.appendChild(frontSide);
  // add text to back card and add to flip card
  backSide.appendChild(cardBackContent);
  flipCard.appendChild(backSide);
  // add card to 'cardArea'
  this.loadCard = function () {
    cardArea.appendChild(flipCard);
  }
  
  // CARD DATA AND FUNCTIONS
  // ** To Do Start **
  //
  // - function to add card to the board
  //
  // ON-CHICK - flip Card
  //          - store cardName.cardNum
  //          - 
  // ** To Do End **
}

// Builds Game Board by running the card constructor a fixed number of times.
function createGameBoard (numberOfCardPairs) {
  for (let index = 1; index <= numberOfCardPairs; index++) {
    const card1 = new Card(`card1${index}`, index);
    const card2 = new Card(`card2${index}`, index);
    card1.loadCard();
    card2.loadCard();
  }
}

// Create's game board with given number of Cards
// *** warning *** number of cards should be divisible by two.
createGameBoard(3);






// ODIN PROJECT STUFF

console.log("***************************");
console.log("*");
console.log("My Testing Area");
console.log("*");

// for(let prop in rabbit) {
//   // this line checks if the property is part of 'rabbit' every loop
//   let isRabbit = rabbit.hasOwnProperty(prop);
//   // if 'isRabbit' evaluates to 'true'
//   if(isRabbit) {
//     console.log(`${prop} IS a property of "rabbit".`);
//   // if 'isRabbit' evaluates to 'false'
//   } else {
//     console.log(`${prop} is NOT property of rabbit.`);
//   }
// }
// Level 0 - Vehicle Constructor
function Vehicle(brand, model, objName) {
  this.brand = brand;
  this.model = model;
  this.objName = objName;
  this.fillUp = function() {
    this.gas = true;
    console.log(`gas = ${this.gas}`);
  }
  this.drive = function() {
    this.gas = false;
    console.log(`gas = ${this.gas}`);
  }
}
Vehicle.prototype.showBrand = function() {
  console.log(this.brand);
}
Vehicle.prototype.showInfo = function() {
  console.log(`The ${this.constructor.name} is a ${this.brand} ${this.model} ${this.type}`);
}

// Level 1 - Car Constructor
function Car(brand, model, type, objName) {
  Vehicle.call(this, brand, model, objName);
  this.type = type;
}
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Car.prototype.constructor = Car;

// Level 1 - Motorcycle Constructor
function Motorcycle(brand, model, type, objName) {
  Vehicle.call(this, brand, model, objName)
  this.type = type;
}
Object.setPrototypeOf(Motorcycle.prototype, Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

// Building Objects

//build Car
const mustang = new Car("Ford", "Mustang", "Sports Car", "mustang");
mustang.showInfo();

// testing


//
for(let property in mustang) {
  const isProperty = mustang.hasOwnProperty(property);
  if(isProperty) {
    console.log(`${property}: IS a property of ${mustang.objName}`);
  } else {
    console.log(`${property}: is NOT a property of ${mustang.objName}`);
  }
}
console.log("**");
console.log("**");

//build Motorcycle
const gixxer = new Motorcycle("Suzuki", "GSXR-600", "Sports Bike");
gixxer.showInfo();
console.log("**");

// test Motorcycle
for(let property in gixxer) {
  const isProperty = gixxer.hasOwnProperty(property);
  if(isProperty) {
    console.log(`${property}: IS a property of 'gixxer'`);
  } else {
    console.log(`${property}: is NOT a property of 'gixxer'`)
  }
}

console.log("**");
console.log("**");

const myArray = [mustang, gixxer];

for(let arrayItem in myArray) {
  const myObject = myArray[arrayItem];
  // looping through properties of each object
  for(let prop in myObject) {
    const isProperty = myObject.hasOwnProperty(prop);
    console.log(`${prop}: is property of ${myObject.constructor.name}:: ${isProperty}`);
  }
}

gixxer.fillUp();
gixxer.drive();
