// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log
// console.log(itemList.parentNode);

// change style
// itemList.parentNode.style.background = '#f4f4f4';

// chain parent nodes
// console.log(itemList.parentNode.parentNode.parentNode.style.background = 'black');

// parentElement
// console.log(itemList.parentElement);

// change style
// itemList.parentElement.style.background = "#e0e0e0";

// chain parent elements
// console.log(itemList.parentElement.parentElement.parentElement);
// itemList.parentElement.parentElement.parentElement.style.background = 'yellow';

// children
// console.log(itemList.children);

// Find 1st element
// console.log(itemList.children[1]);

// change style
// itemList.children[1].style.fontSize ='40px';

// // firstElementChild
// console.log(itemList.firstElementChild);

// change text
// itemList.firstElementChild.textContent = "Yo what up";

// lastElementChild
// console.log(itemList.lastElementChild);

// change text
// itemList.lastElementChild.textContent = "blah";

// // nextElementSibling
// console.log(itemList.nextElementSibling)

// change style
// itemList.nextElementSibling.style.background = 'lightgreen';

// previousElementSibling
// console.log(itemList.previousElementSibling);

// change style
// itemList.previousElementSibling.style.background = 'lightblue';
// itemList.previousElementSibling.style.color = 'white';

// Create a div
 const newDiv = document.createElement('div');
console.log(newDiv);
// Add class
newDiv.className = 'my-div';

// Add id
newDiv.id = 'div-id'

// Add attr
newDiv.setAttribute('title', 'this');

// Create text node
const text = document.createTextNode('this is the text node text');

// Add text to div
newDiv.appendChild(text);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


// console.log newDiv



// change newDiv font size
newDiv.style.fontSize = '40px';

// insert newDiv in container
container.insertAdjacentText("beforeend", text.textContent);

// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
//   //console.log('Button clicked');
//   // document.getElementById('header-title').textContent = 'Changed';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   //console.log(e);

//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
  // var output = document.getElementById('output');
  // output.innerHTML = `<h3>${e.target.id}</h3>`;

  // console.log(e.type);

  // console.log(e.clientX);
  // console.log(e.clientY);

  // console.log(e.offsetX);
  // console.log(e.offsetY);

  // console.log(e.altKey);
  // console.log(e.ctrlKey);
  // console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);
const array = []
function runEvent(e){
  console.log(e);
  const key = e.key;
  if (key === 'Backspace') {
    array.pop(-1);
  } else {
    array.push(key);
  }
  
  console.log(array);
  const output = document.querySelector('#output');
  output.innerHTML = `<h3>${array.join('')}</h3>`;
  // e.preventDefault();
  // console.log(e.target.value);
  // const output = document.getElementById('output');
  // output.innerText = e.target.value;

  // console.log(e.target);
  // const output = document.querySelector('#output');
  // output.innerHTML = `
  //     <h3>X: ${e.offsetX}</h3><h3>Y: ${e.offsetY}</h3>
  //  `;

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
}