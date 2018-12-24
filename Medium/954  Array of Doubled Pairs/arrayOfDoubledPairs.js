/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
	if (!A.length) return true;
	A.sort((a, b) => a - b);

	while (A.length !== 0) {
		let val = A[A.length - 1];
		A.splice(A.length - 1, 1);
		let match = -1;
		if (val < 0) {
			match = A.indexOf(val * 2);
		} else {
			match = A.indexOf(val / 2);
		}

		if (match === -1) return false;
		A.splice(match, 1);
	}
	return true;
};
