/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	let string = [];
	for (var i = 0; i < s.length; i += k) {
		string.push(s.substr(i, k));
	}
	return string
		.map((r, i) => {
			if (i % 2 !== 0) {
				return r;
			}
			return r
				.split('')
				.reverse()
				.join('');
		})
		.join('');
};
