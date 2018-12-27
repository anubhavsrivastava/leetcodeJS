/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
	let visited = {};

	for (let i = 0; i < A.length; i++) {
		let c = A[i];
		visited[c] = visited[c] || 0;
		visited[c]++;
		if (visited[c] > 1) return c;
	}
};
