const palindromes = function(string) {
  const reversed = string.split('').reverse().join('');
  // console.log(string);
  // console.log(reversed);
  // console.log(string.localeCompare(reversed));
  return (string.localeCompare(reversed) == 0) ? true : false;
}

console.log(palindromes('vanilla'))

module.exports = palindromes
