const parag = document.getElementById("paragraph");
  function sayHi(name) {
    if (name === undefined) {
      name = "stranger";
    }
    name ?? "unknown";

    parag.textContent = `Hello, ${name}`;
  }

  sayHi("Bob");