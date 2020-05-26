let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "do you agree?",
  yes = () => { alert("Yes I agree")},
  no = () => { alert("I don't agree")}
);