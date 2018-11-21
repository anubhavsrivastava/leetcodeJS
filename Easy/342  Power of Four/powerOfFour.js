/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	if (!num) return false;
	let log = Math.log(num) / Math.log(4);
	return Math.round(log) === log;
};
