/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(num) {
	if (num < 1) return false;
	let log = Math.log2(num);
	return Math.round(log) === log;
};
