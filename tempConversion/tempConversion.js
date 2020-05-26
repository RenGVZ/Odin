const ftoc = function(temp) {
  let celsius = (temp - 32) * (5/9);
  celsiusDecimal = Math.round(celsius * 10) / 10;
  return celsiusDecimal;
}

const ctof = function(temp) {
  let fahrenheit = ((temp) * (9/5)) + 32;
  fahrenheitDecimal = Math.round(fahrenheit * 10) / 10;
  return fahrenheitDecimal;
}

module.exports = {
  ftoc,
  ctof
}
