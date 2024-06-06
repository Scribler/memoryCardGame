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
fillLibraryButton.addEventListener('click', fillTheShelves);

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

function getBookInfo(event) { //make new book and add to library uses prompts for user input
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const read = document.querySelector('input[name="read"]:checked');
  const book = new Book(title.value, author.value, read.value);
  addBookToLibrary(book);
  title.value = "";
  author.value = "";
  read.checked = false;
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

function fillTheShelves() {
  // clear shelf
  bookshelf.innerHTML = '';
  for (const key in library) {
    if (library.hasOwnProperty(key)) {
      const book = library[key];
      // Title
      const bookTitle = document.createElement('h3');
      const bookTitleText = document.createTextNode(book.title);
      bookTitle.appendChild(bookTitleText);
      // Author
      const bookAuthor = document.createElement('h3');
      const bookAuthorText = document.createTextNode(book.author);
      bookAuthor.appendChild(bookAuthorText);
      // Read?
      const bookRead = document.createElement('p');
      const bookReadText = document.createTextNode(book.read);
      bookRead.appendChild(bookReadText);
      // Remove Book
      const removeBookButton = document.createElement('button');
      removeBookButton.classList.add('removeBook');
      // #1 need to make css for 'removeBook' class.


      //
      //
      // remove book button needs to be finished
      //
      //





      // Book Body
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      bookDiv.appendChild(bookRead);
      // Add to shelf
      bookshelf.appendChild(bookDiv);
      console.log("should have worked?");
    }
  }

}


/*
Testing
*/
// console.log(library);


