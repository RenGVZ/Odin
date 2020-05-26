const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
  //  e.target.classList.toggle('content');
  alert(`Target's id is ${e.target.id}`);
  })
})

// Exploring the 'e' Event Object
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', (e) => {
//   e.target.classList.toggle('content')
// });

// Javascript Best Practice 
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', buttonPress);
// function buttonPress() {
//   alert('Hello world');
// }

// Javascript Method 3
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert('Hello world');
// });

// Javascript Method 2
// const btn = document.querySelector('#btn')
// btn.onclick = () => { 
//   alert('hello world') 
// };