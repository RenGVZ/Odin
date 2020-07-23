let numbers = [1, 12, 3, 4, 1, 6, 7, 8, 9];

// numbers = numbers.filter((x, i, a) => (a.indexOf(x) > 5 ));
// console.log(numbers);

let animals = ['cat', 'dog', 'cow', 'turtle', 'chicken', 'snake'];

// console.log(animals);
animals = animals.filter(word => word.length > 4);
// console.log(animals);

// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers);

let myArray = ['a', 'b', 'a', 'c', 'c']
let myOrderedArray = myArray.reduce((accumulator, currentValue) => {
  if (accumulator.indexOf(currentValue) === -1) {
    // console.log(`array updated with ${currentValue}`);
    accumulator.push(currentValue)
  } else if (accumulator.indexOf(currentValue) > -1) {
    // console.log(`${currentValue} already exists in this array`);
  }
  // console.log(`accumulator array is now [${accumulator}]`);
  return accumulator
}, [])

// console.log(myOrderedArray);

const reducedAlph = myArray.reduce((acc, cv) => acc + '/' + cv);
// console.log(reducedAlph);

let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// console.log(days.indexOf(2));
// for (let i = 0);
let newDays = [];
days.forEach(day => {
  newDays.push(day)
});

// console.table(newDays);
let unflat = [[1], [2, 3], [4]];
let flattened = unflat.reduce((acc, cv) => {
  return acc.concat(cv);
},[]);

// console.log(flattened);
let filteredDays = days.filter(day => day.includes('r') || day.includes('u'));
// console.log(filteredDays);

const bark = ((cluck) => {
  console.log('woof, woof');
  cluck();
});

const cluck = () => {
  console.log('string');
}

console.log(bark(cluck));