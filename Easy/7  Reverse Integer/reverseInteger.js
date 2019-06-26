/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let r = 0;
	let sign = x > 0 ? 1 : -1;
	x = x * sign;
	while (x != 0) {
		if (r > 214748364) {
			return 0;
		}
		r = r * 10 + (x % 10);

		x = Math.floor(x / 10);
	}

	return sign * r;
};
