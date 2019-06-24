/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	let left = 0;
	let right = A.length - 1;
	let result = [];
	while (left <= right) {
		let [l, r] = [Math.abs(A[left]), Math.abs(A[right])];
		if (l > r) {
			result.unshift(l * l);
			left++;
		} else {
			result.unshift(r * r);
			right--;
		}
	}
	return result;
};
