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
createGameBoard(6);






// ODIN PROJECT STUFF

console.log("***************************");
console.log("My Testing Area");
console.log("***************************");


const numbers = {
  array: [3, 5, 10],

  getNumbers() {
    console.log(this.array); // this is the object
    return this.array;
  }
}



//
// run functions / methods here
//
numbers.getNumbers(); // log the array

const boundGetNumbers = numbers.getNumbers.bind(numbers);
boundGetNumbers();
const simpleGetNumbers = numbers.getNumbers();
simpleGetNumbers;




















