function findAllHobbyists(hobby, hobbies) {
  // return [];
  let names = [];
  Object.values(hobbies).forEach((hbby, i) => {
    // let names = [1];
    console.log(`hbby ${hbby[i]}`);
    console.log(`Hobby ${hobby}`);
    if(hobby === hbby[i]){
      names.push(hbby[i]);
    }
    // return names;
  }) 
  return names;
}

var hobbies = {
  "Steve": ['Fashion', 'Piano', 'Reading'],
  "Patty": ['Drama', 'Magic', 'Pets'],
  "Chad": ['Puzzles', 'Pets', 'Yoga']
};

console.log(findAllHobbyists('Yoga', hobbies));
// const a = document.querySelector('.a');

// a.addEventListener('click', clickRedirectHandler);

// function clickRedirectHandler(a) {
//   // Handles the click event for the <a> element
//   console.log(a.innerText)
// }

// function validateInput() {
//   // Write your code here.
//   if(document.getElementById('#delighted').checked){
//    document.getElementById('#donate').checked = true; 
//   }
// }

// document.body.innerHTML = `
// <div class="error-message">
//   <!-- Display error message here -->
// </div>

// <form id="feedback" onsubmit="return validateInput()">
//   <input type="radio" id="delighted" name="delighted" checked="checked" required /> Delighted
//   <input type="checkbox" id="donate" name="donate" /> Donate<br />
//   <input type="radio" id="not-delighted" name="delighted" required /> Not delighted
//   <input type="text" id="reason" name="reason" /> Reason<br />
//   <input type="submit" value="Submit" />
// </form>`;

// validateInput();

// console.log(document.getElementsByClassName("error-message")[0].innerHTML);