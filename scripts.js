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

// Book Directory

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // have || haven't
  this.info = function(){
    return `${this.title} by ${this.author} has ${this.pages} pages and I ${this.read} read it.`;
  }
}

const theScar = new Book ("The Scar", "China Mieville", 717, "have");
const perdidoStreetStation = new Book ("Perdido Street Station", "China Mieville", 867, "have");

console.log(theScar.author);
console.log(theScar.info());

Book.prototype.titleAuthor = function(){
  return `${this.title} by ${this.author}.`
}
console.log(theScar.titleAuthor());
console.log(theScar.valueOf());







//////

function Person (name) {
  this.name = name;
}

// the below function must be defined OUTSIDE of 'Person' with '.prototype'
// or you won't be able to use it with another object prototype like **HERE** 

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
}

//////





function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
}

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make 'Player' objects inherit from 'Person'
//
// **HERE**
//
// *NOTE* This should be done always BEFORE new objects are created with it otherwise there will be a performance hit.
Object.setPrototypeOf(Player.prototype, Person.prototype);
// object to modify  >> ^^                ^^  <<< object that 'Player' wants to inherit from
Object.getPrototypeOf(Player.prototype); // returns Person.prototype
// Sample Person
const joe = new Person("Joe");

// Sample Player
const player1 = new Player("James", "X");
const player2 = new Player("James the Second", "O");
player1.sayName();
player1.getMarker();
player2.sayName();
player2.getMarker();


// Scratch work.  Following along with articles in odin project assignment.
const x = [];
// Below I am exposing an object's prototype.
// It's a good way to see what an objects functions(methods?) are.
console.log(Object.getPrototypeOf(x)); // x.__proto__  << this is the old depricated way


