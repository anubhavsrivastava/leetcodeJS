/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
	let order = 0;
	for (var i = 0; i < A.length - 1; i++) {
		if (order === 0) {
			order = A[i + 1] - A[i];
			continue;
		}
		if (order > 0 && A[i] <= A[i + 1]) {
			continue;
		}
		if (order < 0 && A[i] >= A[i + 1]) {
			continue;
		} else {
			console.log(i);
			return false;
		}
	}

	return true;
};
