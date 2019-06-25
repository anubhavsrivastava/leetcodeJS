/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	const MAX = 2147483647;
	const MIN = -2147483648;
	const MAXDiv10 = 214748364;
	let i = 0;
	let sign = 1;
	let result = 0;
	while (str[i] === ' ') i++;
	if (str[i] === '+') {
		sign = 1;
		i++;
	} else if (str[i] === '-') {
		sign = -1;
		i++;
	}

	while (i < str.length) {
		let char = str[i];
		if (isDigit(char)) {
			let d = +char;

			if (result > MAXDiv10 || (result === MAXDiv10 && d >= 8)) {
				return sign === 1 ? MAX : MIN;
			}
			result = result * 10 + d;
			i++;
		} else {
			break;
		}
	}

	return sign * result;
};

//dirty isDigit
var isDigit = function(char) {
	return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1][char] === 1;
};
