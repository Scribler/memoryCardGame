// Odin Project Library

/*
Initializing constants
*/
const library = [];
const bookshelf = document.getElementById("bookshelf");

// Add new book object to library array
const addBookButton = document.querySelector("#button_addBook");
addBookButton.addEventListener('click', (event) => {
  console.log(event);
  getBookInfo();
});

// Add all the books from the library array to the page.
const fillLibraryButton = document.querySelector("#button_fillLibrary");
fillLibraryButton.addEventListener('click', (event) => {
  console.log("fill library pressed");
  showLibraryContents();
});

const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const read = document.getElementsByName(`read`).value;

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
};

function getBookInfo() { //make new book and add to library uses prompts for user input
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  const book = new Book(title, author, read);
  addBookToLibrary(book);
}


// list library contents
function showLibraryContents() {
  console.log("show Library Contents function running");
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


