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

// New hero constructor
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// method's for hero prototype
 Hero.prototype.greet = function () {
  console.log(`${this.name} says hello.`);
}


// *** Class CONSTRUCTORS *** //

// Warrior
function Warrior(name, level, weapon) {
  // chain constructor with call
  Hero.call(this, name, level);

  // add a new weapon
  this.weapon = weapon;
}

// Healer
function Healer(name, level, spell) {
  Hero.call(this, name, level);
  
  this.spell = spell;
}

// Wizard
function Wizard(name, level, spell) {
  Hero.call(this, name, level);
  
  this.spell = spell;
}

// *** Class METHODS *** //

// Warrior
Warrior.prototype.attack = function() {
  console.log(`${this.name} attackes with the ${this.weapon}.`);
}

// Healer 
Healer.prototype.heal = function () {
  console.log(`${this.name} casts ${this.spell}.`);
}

// Wizard methods
Wizard.prototype.fireball= function () {
  console.log(`${this.name} casts ${this.spell}`);
}

// *** Link prototypes and add prototype methods *** //
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Object.setPrototypeOf(Wizard.prototype, Hero.prototype);


// ********* //
//
// testing INITIATING OBJECTS
const Hero1 = new Warrior('Bjorn', 1, 'axe');
const Hero2 = new Healer('Kanin', 1, 'cure');
const Hero3 = new Wizard('Kanin', 1, 'fire ball');
// testing running
console.log(Hero1);
console.log("*");

// Hero1 actions
Hero1.greet();
Hero1.attack();
console.log("*");

// Hero2 actions
Hero2.greet();
Hero2.heal();
console.log("*");

// Hero3 actions
Hero3.greet();
Hero3.fireball();
console.log("*");
//
// ********* //
