/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
	const B = [];
	for (let row = 0; row < A.length; row++) {
		for (let col = 0; col < A[row].length; col++) {
			B[col] = B[col] || [];
			B[col][row] = B[col][row] || [];
			B[col][row] = A[row][col];
		}
	}

	return B;
};
