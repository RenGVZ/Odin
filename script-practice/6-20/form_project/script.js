const submitBtn = document.getElementById('submit-btn');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const form = document.querySelector('form');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');

const colorCircle1 = document.getElementById('color-circle1');
const colorCircle2 = document.getElementById('color-circle2');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.style.backgroundImage = `linear-gradient(to left, ${color2.value}, ${color1.value})`;
  form.style.background = `${color2.value}`;
  submitBtn.style.background = `${color1.value}`;
  label1.style.background = `${color1.value}`;
  label2.style.background = `${color1.value}`;
});

color1.addEventListener('change', (e) => {
  console.log(e);
  colorCircle1.style.background = `${color1.value}`;
})

color2.addEventListener('change', (e) => {
  console.log(e);
  colorCircle2.style.background = `${color2.value}`;
})