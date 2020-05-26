function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
    return(`${title} is a book written by ${author}. It is ${pages} pages long. Have I read it? ${read}`)
  }
};

// Book.prototype.haveRead = function() {
//   if(this.read)
//     console.log('I have read it')
//    else {
//     console.log('I have not read it')
//   }
// };

const lor = new Book('The Lord of the Rings', 'JRR Tolkien', 1200, true)

console.log(lor.info());
