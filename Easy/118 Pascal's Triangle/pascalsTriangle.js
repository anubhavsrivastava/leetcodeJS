/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	let result = [];
	for (let i = 0; i < numRows; i++) {
		let current = new Array(i + 1).fill(1);
		let previos = result[i - 1];
		for (let j = 1; j < current.length - 1; j++) {
			current[j] = previos[j] + previos[j - 1];
		}

		result.push(current);
	}
	return result;
};
