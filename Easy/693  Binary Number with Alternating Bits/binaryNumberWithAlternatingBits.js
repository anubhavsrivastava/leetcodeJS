/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
	let mod = n % 2;
	n = Math.floor(n / 2);

	while (n) {
		let newMod = n % 2;
		if (mod === newMod) return false;
		mod = newMod;
		n = Math.floor(n / 2);
	}
	return true;
};
