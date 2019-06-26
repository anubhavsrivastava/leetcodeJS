/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(d) {
	if (!d) return d;
	for (let i = d.length - 1; i >= 0; i--) {
		let num = d[i] + 1;

		if (num < 10) {
			d[i] = num;
			return d;
		} else {
			d[i] = num % 10;
		}
	}
	d.unshift(1);
	return d;
};
