/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	let result = [];
	let even = 0;
	let odd = 1;

	for (let i = 0; i < A.length; i++) {
		let current = A[i];

		if (current % 2 === 0) {
			result[even] = current;
			even += 2;
		} else {
			result[odd] = current;
			odd += 2;
		}
	}
	return result;
};
