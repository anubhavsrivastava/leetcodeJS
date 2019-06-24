/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
	let sum = A.reduce((p, n) => {
		if (n % 2 === 0) {
			p = p + n;
		}
		return p;
	}, 0);

	let result = [];
	queries.forEach(q => {
		let [newSum, index] = q;

		if (A[index] % 2 === 0) {
			sum -= A[index];
		}

		A[index] += newSum;
		if (A[index] % 2 === 0) {
			sum += A[index];
		}

		result.push(sum);
	});

	return result;
};
