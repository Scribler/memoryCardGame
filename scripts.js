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

function Book(title, author, read, pages, arrLoc) { // book constructor
  this.title = title;
  this.author = author;
  this.read = read;
  // this.pages = pages;
  this.arrLoc = arrLoc;
}

/*
Functions
*/

function addBookToLibrary(bookObject, bookLocation) { // add book to library
  bookObject.arrLoc = bookLocation;
  library.push(bookObject);
};

function getBookInfo(event) { //make new book and add to library uses prompts for user input
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const read = document.querySelector('input[name="read"]:checked');
  const book = new Book(title.value, author.value, read.value);
  addBookToLibrary(book, library.length);
  title.value = "";
  author.value = "";
  read.checked = false;
  event.preventDefault(); // this works, but stops the inputs from clearing after submission...
}

function removeBook() {
  console.log(`book array location?: ${this.arrLoc}`);
  library.splice(this.arrLoc, 1);
  fillTheShelves();
}


function fillTheShelves() {
  // clear shelf
  bookshelf.innerHTML = '';
  for (const key in library) {
    if (library.hasOwnProperty(key)) {
      const book = library[key]; // book === individual book object
     
      //
      // BOOK BODY
      //
      const bookDiv = document.createElement('div');
      
      //
      // BOOK CONTENTS 
      //
      const bookTitle = document.createElement('h3');
      bookTitle.textContent = book.title;
     
      const bookAuthor = document.createElement('h3');
      bookAuthor.textContent = book.author;
     
      const bookRead = document.createElement('p');
      bookRead.textContent = book.read;
      
      //
      // SET LOCATION IN ARRAY
      //
      // bookDiv.setAttribute('data-arrLoc', key); // store array location in data attribute
      // console.log(`${bookDiv}'s arrayLocation: ${bookDiv.getAttribute('data-arrLoc')}`);
    
      //
      // REMOVE BOOK BUTTON
      //
      const removeBookButton = document.createElement('button');
      removeBookButton.textContent = "Remove Book";
      removeBookButton.addEventListener('click', removeBook.bind(book));

     
      

      bookDiv.classList.add('book');
      
      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      bookDiv.appendChild(bookRead);
      bookDiv.appendChild(removeBookButton);
      // Add to shelf
      bookshelf.appendChild(bookDiv);
      console.log(`Book Location: ${book.arrLoc}`);
    }
  }

}


/*
Testing
*/
// console.log(library);


