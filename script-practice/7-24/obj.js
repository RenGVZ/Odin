const phone = {
  name: 'iPhone',
  price: 1000,
  specs() {
     return `This is the ${this.name} and it costs $${this.price}`;
  },
}
const h1 = document.querySelector('.header');

const displayObj = () => {
  h1.innerText = `${phone.specs()}`
}

const hideObj = () => {
  h1.innerText = ''
}

window.addEventListener('click', displayObj);
window.addEventListener('mouseup', hideObj);


