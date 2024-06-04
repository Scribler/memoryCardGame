// Odin Project Library

/*
Initializing constants
*/
const library = [];
const bookshelf = document.getElementById("bookshelf");

// New bookk form elements
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const read = document.getElementsByName(`read`).value;


// Add all the books from the library array to the page.
const addBook = document.getElementById("button_addBook")
addBook.addEventListener('click', getBookInfo);

const fillLibraryButton = document.querySelector("#button_fillLibrary");
fillLibraryButton.addEventListener('click', showLibraryContents);

/*
Constructors
*/

function Book(title, author, read) { // book constructor
  this.title = title;
  this.author = author;
  this.read = read;
}

/*
Functions
*/

function addBookToLibrary(bookObject) { // add book to library
  library.push(bookObject);
  console.log(library[0].title);
  console.log(library[0].author);
  console.log(library[0].read);
};

function getBookInfo(event) { //make new book and add to library uses prompts for user input
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  const book = new Book(title, author, read);
  addBookToLibrary(book);
  event.preventDefault(); // this works, but stops the inputs from clearing after submission...
}


// list library contents
function showLibraryContents() {
  console.log("show Library Contents function running");
  console.log(library);
  console.log(library[0]);
  console.log(library[1]);
  for (const book in library) {
    if (library.hasOwnProperty(book)) {
      const bookElement = library[book];
      console.log(`Book: ${bookElement.title}`);
      console.log(`Author: ${bookElement.author}`);
      console.log(`Read?: ${bookElement.read}`);
      console.log("-------");
    }
  }
}



/*
Testing
*/
// console.log(library);


