/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
	let r = A.length - 1;
	let f = [0];
	let max = 0;
	let seen = {};

	function maxAdd(v) {
		if (v > max) {
			max = v;
			f.push(v);
		}
	}

	while (r != -1) {
		while (seen[r]) r--;
		for (let i = 0; i < r; i++) {
			if (A[i] <= A[r]) {
				maxAdd(r - i);
				break;
			}
		}
		r--;
	}

	return Math.max.apply(null, f);
};
