// Odin Project Library
const library = [];

function Book(title, author, read) { // book constructor
  this.title = title;
  this.author = author;
  this.read = read;
}

// after getting user input use this to add the new book to the library
function addBookToLibrary(book) {library.push(book)};

function getBookInfo() {
  let title = prompt("What is the Title of the book?");
  let author = prompt("What is the Author of the book?");
  let read = prompt("Have you read the book?");
  const book = new Book(title, author, read);
  addBookToLibrary(book);
}


//
// Testing
//

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

