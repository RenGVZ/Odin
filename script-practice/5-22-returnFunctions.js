function checkAge(age) {
  // return (age>18) ? true : confirm("where are your parents?");

  return (age > 18) || confirm("where are your parents?");
}

function min(a, b) {
  return (a < b) ? a : b;
}

const parag = document.getElementById("paragraph");
parag.textContent = min(200, 3092);