/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
	let visited = {};
	let sum = 0;
	for (let i = 0; i < A.length; i++) {
		let n = A[i];
		if (visited[n]) {
			while (visited[n]) {
				sum++;
				n++;
			}
			visited[n] = true;
		} else {
			visited[n] = true;
		}
	}

	return sum;
};
