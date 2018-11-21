/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
	let sum = 0;
	for (let c of s) {
		sum -= c.charCodeAt(0);
	}
	for (let c of t) {
		sum += c.charCodeAt(0);
	}

	return String.fromCharCode(sum);
};
