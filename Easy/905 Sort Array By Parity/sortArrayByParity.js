/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	var result = [];
	A.forEach(a => {
		if (a % 2 === 0) {
			result.unshift(a);
		} else {
			result.push(a);
		}
	});

	return result;
};
