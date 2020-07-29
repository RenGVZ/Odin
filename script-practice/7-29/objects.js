// Method 1: Object Literal syntax
let pets = [
  dog = {
    name: 'Larry',
    legs: 4,
    sayName: function() {
      return `Yo, i'm ${this.name}`;
    }
  },
  cat = {
    name: 'Steve',
    legs: 2
  }
]

// Method 2: Object constructor

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.sayWhatsWhat = function() {
    return `It's ${this.name}, beotch`;
  }
}

const bob = new Person('Bob', 67)
// console.log(bob.sayWhatsWhat())

function Book(title, author, pages) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = true
  this.info = function() {
    let readString = "I have read it";
    let unreadString = "I haven't read it";
    return `${this.title} is a book by ${this.author}. It is ${this.pages} pages 
    long and ${(this.read === true)? readString : unreadString}`
  }
}
const hp = new Book('Harry Pothead', 'J.K Stoning', 10000);
hp["read"] = false;
// console.log(hp.info())

function Vehicle(type) {
  this.type = type
  this.description = function() {
    return `The Type of vehicle is: ${this.type}`;
  }
}

function Car(name, company, year) {
  this.name = name,
  this.company = company,
  this.year = year
  this.carInfo = function() {
    return `Name: ${this.name} company: ${this.company} year: ${this.year} vehicle type: ${this.type}`
  }
}

Car.prototype = new Vehicle('Car');

let  corolla = new Car('Corolla', "Toyota", 2019);