const container = document.querySelector("#container");

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = "This is the glorious content";
// container.appendChild(content);

const para = document.createElement('p');
para.style.color = "red";
para.textContent = "Hey I'm red";
container.appendChild(para);

const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "Hi I'm a blue h3"
container.appendChild(h3);

const nextDiv = document.createElement('div');
nextDiv.style.border = "2px solid black";
nextDiv.style.background = "pink";
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
const p = document.createElement('p');
p.textContent = "Me too!";
p.style.textAlign = "center";
nextDiv.appendChild(h1);
nextDiv.appendChild(p);

container.appendChild(nextDiv);
