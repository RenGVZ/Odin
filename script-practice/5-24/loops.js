//Exercise 5 - While loops

const iLike = ["books", "music", "coffee", "cringe"];
let para = document.getElementById("paragraph");
let sentence = "I like ";

let i = 0;
while (i < iLike.length){
  if (i === iLike.length - 1) {
    sentence += " and " + iLike[i] + ".";
  } else {
    sentence += iLike[i] + ", ";
  }
  i++
};

para.textContent += sentence;

//Exercise 4 - Skipping iterations with 'continue'

// const input = document.getElementById('search');
// const para = document.getElementById('paragraph');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//   let num = input.value;

//   for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//       continue;
//     }

//     para.textContent += i + ' ';
//   }

// });

//Exercise 3 - Exiting loops with 'break'

// const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
// const input = document.getElementById('search');
// const btn = document.getElementById('btn');
// const para = document.getElementById('paragraph');

// btn.addEventListener('click', function() {
//   let searchName = input.value.toLowerCase();
//   input.value = '';
//   input.focus();
//   for (i = 0; i < contacts.length -1; i++){
//     let splitContact = contacts[i].split(':');
//     if (splitContact[0].toLowerCase() === searchName){
//       para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
//       break
//     } else {
//       para.textContent = "No name matches";
//     }

//   }
// });

//Exercise 2 - For loop with an array

// const iLike = ["books", "music", "coffee", "cringe"];
// let sentence = "I really like";
// const para = document.getElementById("paragraph");

// for (i = 0; i < iLike.length; i++){
//   if (i === iLike.length -1 ){
//     sentence += " and " + iLike[i] + ".";
//   } else {
//     sentence += " " + iLike[i] + ", ";
//   }
// }
// para.textContent = sentence;

//Exercise 1 - Simple for loop

// const para = document.getElementById("paragraph");
// const list = document.querySelector("#list");
// const li = document.getElementById("list-item");

// for (let i = 0; i < 10; i++){
//   list.textContent += `Iteration number  ${i}`;
// };