/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	let range = new Array(right - left + 1).fill(1).map((e, i) => (i + left).toString());

	let result = range.filter(n => {
		let compared = {};
		for (let i = 0; i < n.length; i++) {
			let s = n[i];
			if (compared[i]) continue;
			compared[i] = true;

			if (+n % +s !== 0) {
				return false;
			}
		}
		return true;
	});

	return result;
};
