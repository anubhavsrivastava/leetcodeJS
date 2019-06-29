/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
	const o = [...heights];
	heights.sort((a, b) => a - b);
	return o.reduce((p, n, i) => {
		if (n !== heights[i]) {
			p += 1;
		}
		return p;
	}, 0);
};
