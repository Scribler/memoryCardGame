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
console.log("My Testing Area");
console.log("***************************");

console.log("**");
console.log("Adding Machine");
console.log("**");
const adder = {
  addingMachine: function(){
    console.log(`Added: ${this.numberA + this.numberB}`);
  }
}

const numGroup2 = {
  numberA: 22,
  numberB: 33
}

const numbers = {
  innerArray: ['inner1', 'inner2'],
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(`"this === numbers" => ${this === numbers}`); // => true
    // Using the arrow function before lets this equal numbers.  A regular function would make 'this'equal 'window'.
    const calculate = () => {
      console.log(`"this === numbers" => ${this === numbers}`); // => true
    }
    return calculate();
  },
};

numbers.sum(); // => 15
adder.addingMachine.call(numbers); // should be => 'Adding machine says: 15';
adder.addingMachine.call(numGroup2); // should be => 'Adding machine says: 55';


// Person Objects
console.log("**");
console.log("Person Objects");
console.log("**");
const PersonBuilder = function(firstName, lastName, age, job){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.job = job;
}

const manipulators = {
  allInfo: function(){
    return `${this.firstName} ${this.lastName} is ${this.age} years old and is a ${this.job}`;
  },
  fullName: function(){
    return `Full Name: ${this.firstName} ${this.lastName}`;
  },
  firstName: function() {
    return `First Name: ${this.firstName}`;
  }
}

const person1 = new PersonBuilder('Dale', 'Anderson', 25, 'Brick Layer');
const person2 = new PersonBuilder('Scott', 'Bergundy', 53, 'Roofer');
const person3 = new PersonBuilder('Garret', 'Binns', 29, 'Engineer');
const person4 = new PersonBuilder('Sammy', 'Shale', 32, 'Doctor');

console.log(manipulators.firstName.call(person1));

















