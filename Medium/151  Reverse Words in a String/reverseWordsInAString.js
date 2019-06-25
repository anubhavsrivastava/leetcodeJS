/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	//There is no stringBuilder in JS

	let reverse = '';
	let start = s.length;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === ' ') {
			start = i;
		} else if (s[i - 1] === ' ' || i === 0) {
			if (reverse.length) {
				reverse += ' ';
			}
			reverse += s.substring(i, start);

			start = i;
		}
	}
	return reverse;
};
