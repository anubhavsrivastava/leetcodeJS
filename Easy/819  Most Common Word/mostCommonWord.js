/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
	let result = {};
	banned.forEach(w => (result[w] = -Infinity));
	let maxL = 0;
	let maxR = '';
	paragraph
		.toLowerCase()
		.replace(/[^a-z\s]/gi, ' ')
		.split(' ')
		.forEach(w => {
			if (!w) return;
			result[w] = result[w] || 0;
			result[w] += 1;
			if (result[w] >= maxL) {
				maxL = result[w];
				maxR = w;
			}
		});

	return maxR;
};
