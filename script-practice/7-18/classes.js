class Dog {
  constructor(name, age, breed){
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  getName() {
    console.log(`Your dog's name is ${this.name}.`);
  }

  getAge() {
    console.log(`The ${this.name} is ${this.age} years old.`);
  }

  getBreed() {
    console.log(`${this.name} is a ${this.breed}`);
  }

}

const larry = new Dog('Larry', 14, 'Golden Retreiver');

larry.getBreed();