function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}


function sum (array) {
	let total = 0;

	if (array.length == 0) {
		return 0;
	} 
	else if (array.length >= 2) {
		array.map(num => {
			total += num;
		})
		return total;
	} else {
		return array[0];
	}
}
// console.log(sum([5, 5, 5, 6, 365]));

function multiply (array) {
	return array.length 
		? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
	};

// const a = [2,4,6];
// console.log(multiply(a));

function power(int, exp) {
	return Math.pow(int, exp);
}

// console.log(power(4, 3));

function factorial(n) {
	return n ? n * factorial(n - 1 ) : 1;
}

console.log(factorial(5));

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}