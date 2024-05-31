// Odin Project Library
const library = [];
const bookshelf = document.getElementById("bookshelf");

function Book(title, author, read) { // book constructor
  this.title = title;
  this.author = author;
  this.read = read;
 
  const book = document.createElement("div");
 
  book.classList.add("book");
 
  const titleText = document.createTextNode(this.title);
  const authorText = document.createTextNode(this.author);
  const readText = document.createTextNode(this.read);

  book.appendChild(titleText);
  book.appendChild(authorText);
  book.appendChild(readText);
}

function addBookToLibrary(book) {library.push(book)};// add book to library
function tempAddToPage(book) {bookshelf.appendChild(book)};// add book to library

function getBookInfo() {//make new book and add to library uses prompts for user input
  let title = prompt("What is the Title of the book?");
  let author = prompt("What is the Author of the book?");
  let read = prompt("Have you read the book?");
  const book = new Book(title, author, read);
  addBookToLibrary(book);
  tempAddToPage(book);
}


//
// Testing
//

getBookInfo();
console.log(library);


// To do

// list out each book from the library's information.
// display library books on screen
// build a form for adding books instead of a prompt
// form 
//    - title field
//    - author field
//    - read/unread radio buttons
//    - ADD BOOK button
//    - 'Is this information correct?' modal to confirm ( yes / no ) buttons
//          - initially just re-run get book with blank fields
//          - eventually allows you to go back and correct input
//

