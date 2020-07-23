const user = {
  name: 'John',
  surname: 'Smith',
}

user.name = 'Paul';
delete user.name;
user['age'] = 36;

const schedule = {};
const isEmpty = (obj) => (Object.keys(obj).length === 0);
// console.log(isEmpty(schedule))

schedule["8:30"] = ["get up"];
// console.log(isEmpty(schedule))
// console.log(schedule)

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

const sum = (obj) => {
  let sals = Object.values(obj);
  return sals.reduce((acc, cv) => acc + cv);
}

// console.log(sum(salaries));

// let sum = 0;
// for (key in salaries) {
//   sum += salaries[key];
// }

// console.log(sum)

let menu = {
  width: 200,
  height: 300,
  title: "my menu",
}

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

const multiplyNumeric = (obj) => {
  let vals = Object.values(menu);
  return vals.map(val => (typeof val == 'number')? (val * 2) : false)
} 

console.log(multiplyNumeric(menu))
