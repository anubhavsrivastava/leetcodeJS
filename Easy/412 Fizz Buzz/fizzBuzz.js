/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	return new Array(n).fill(1).map((e, i) => {
		const number = i + 1;
		if (number % 15 === 0) {
			return 'FizzBuzz';
		}
		if (number % 5 === 0) {
			return 'Buzz';
		}
		if (number % 3 === 0) {
			return 'Fizz';
		}
		return number.toString();
	});
};
