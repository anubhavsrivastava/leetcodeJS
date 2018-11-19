/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
	let tries = A[0].length;
	let count = 0;

	for (let i = 0; i < tries; i++) {
		for (let j = 1; j < A.length; j++) {
			if (A[j - 1][i] > A[j][i]) {
				//lexigraphical order
				count++;
				break;
			}
		}
	}

	return count;
};
