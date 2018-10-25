/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
	var SA = A.reduce((a, n) => a + n);
	var SB = B.reduce((b, n) => b + n);
	var AVG = (SB - SA) / 2;
	A = [...new Set(A)];
	B = [...new Set(B)];

	for (var i = 0; i < A.length; i++) {
		if (B.includes(A[i] + AVG)) {
			return [A[i], A[i] + AVG];
		}
	}
};
