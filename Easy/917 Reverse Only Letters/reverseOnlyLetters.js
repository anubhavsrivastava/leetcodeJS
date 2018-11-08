/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
	let left = 0;
	let right = s.length - 1;
	let sa = s.split('');

	function isChar(t) {
		let ascii = t.charCodeAt(0);
		if (ascii >= 65 && ascii < 91) return true;
		if (ascii >= 97 && ascii < 123) return true;
		return false;
	}

	while (left < right) {
		while (left < right && !isChar(s[left])) left++;
		while (left < right && !isChar(s[right])) right--;

		if (left < right) {
			let t = sa[left];
			sa[left] = sa[right];
			sa[right] = t;
			left++, right--;
		}
	}

	return sa.join('');
};
