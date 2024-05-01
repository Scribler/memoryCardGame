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

console.log("ODIN PROJECT STUFF START")
console.log("*");

// **************** //
//  *** PERSON *** 
// **************** //

// 'Person' Constructor followed by 'sayName' function afixed to the 'Person' prototype
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
}

// Initialize new 'Person' and utilize '.sayName'
const joe = new Person("Joe Davids");
joe.sayName(); // prints 'Hello I'm Joe Davids!'

// **************** //
//  *** PLAYER *** 
// **************** //

// Player constructor
function Player(name, marker) {
  this.name = name;
  this.marker =  marker;
}

// Initialize 'Player' and print contents
const dale = new Player("Dale Jables", "O");
console.log(`name: ${dale.name}, marker: ${dale.marker}`);

// **************** //
//  *** ENEMY *** 
// **************** //
function Enemy(name) {
  this.name = name;
  this.marker = '^';
}


// **************** //
//  *** MODIFYING CONSTRUCTORS AND ADDING PROTOTYPES *** 
// **************** //
// Object.setPrototype(Player.prototype, Person.prototype);
Player.prototype = Person.prototype
Enemy.prototype = Person.prototype;
Enemy.prototype.sayName = function() {
  console.log("HAHAHAHAHAHAHAHAHAHA!!!");
}

// running functions
const carl = new Player('carl', 'X');
carl.sayName();

console.log("*");
console.log("ODIN PROJECT STUFF END")


