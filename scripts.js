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
  console.log(event);
  addBooksToShelf(library);
  console.log(library[0].title);
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
 
  const book = document.createElement("div");
 
  book.classList.add("book");
 
  const titleText = document.createTextNode(this.title);
  const authorText = document.createTextNode(this.author);
  const readText = document.createTextNode(this.read);

  book.appendChild(titleText);
  book.appendChild(authorText);
  book.appendChild(readText);
}

/*
Functions
*/

function addBookToLibrary(bookObject) { // add book to library
  library.push(bookObject);
  for (const book in library) {
    if (library.hasOwnProperty(book)) {
      const theBook= library[book];
      console.log(theBook.title);
    }
  }
};

function addBooksToShelf(library) { // add book to library
  for (const book in library) {
    if (library.hasOwnProperty(book)) {
      const bookObj = library[book];

      const newBook = document.createElement("div");
    
      newBook.classList.add("book");
    
      const titleText = document.createTextNode(bookObj.title);
      const authorText = document.createTextNode(bookObj.author);
      const readText = document.createTextNode(bookObj.read);

      newBook.appendChild(titleText);
      newBook.appendChild(authorText);
      newBook.appendChild(readText);
      bookshelf.appendChild(newBook);
      
    }
  }
  // bookshelf.appendChild(bookObject.book);
  // console.log(bookObject.title);
  // console.log(bookObject.author);
  // console.log(bookObject.read);
  // console.log(bookObject);
};

function getBookInfo() { //make new book and add to library uses prompts for user input
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const read = document.querySelector('input[name="read"]:checked').value;
  // let newTitle = title;
  // let newAuthor = author;
  // let newRead = read;
  const book = new Book(title, author, read);
  addBookToLibrary(book);
}


/*
Testing
*/
// console.log(library);


