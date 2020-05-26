const repeatString = function(word, num) {
  if (word === '') {
    return '';
  } else if (num < 0) {
    return 'ERROR';
  } else {
    let string = '';
    for (let x = 0; x < num; x++) {
      string += word;
    }
  return string;
}
}

module.exports = repeatString
