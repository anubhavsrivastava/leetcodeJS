/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
	if (A.length < 3) return false;
	let finds = [];
	let d = true;
	for (let i = 1; i < A.length; i++) {
		if (A[i - 1] < A[i] && A[i] > A[i + 1]) finds.push(i);
		if (A[i - 1] >= A[i] && A[i] <= A[i + 1]) d = false;
	}

	return finds.length === 1 && d;
};
