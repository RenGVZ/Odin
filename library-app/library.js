const bookList = document.getElementById('books');

let myLibrary = [];
  myLibrary.push(new Book('Kafka on the Shore', 'Murakami', 286, true));
  myLibrary.push(new Book('Dune', 'Frank Herbert', 365, true));

function Book(title, author, pages, read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}


function addBookToLibrary(book){
  return myLibrary.push(book);
}

const harryPotter = new Book('The Goblet of Fire', 'J.K Rowling', 546, false);
addBookToLibrary(harryPotter);
// addBookToLibrary(dune);
// console.log(myLibrary);
