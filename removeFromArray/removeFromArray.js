const removeFromArray = function(...args) {
  // const array = args[0];

  // const newArray = [];

  // array.forEach((item) => {
  //   if (!args.includes(item)) {
  //     newArray.push(item);
  //   }
  // })
  // return newArray;

  const array = args[0];
  return array.filter(val => !args.includes(val));
  
};



console.log(removeFromArray([1,2,3,4], 3));

module.exports = removeFromArray
