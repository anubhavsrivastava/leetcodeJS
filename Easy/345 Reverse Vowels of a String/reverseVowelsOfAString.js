/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	let left = 0;
	let right = s.length - 1;
	let sa = s.split('');

	function isVowel(t) {
		return ['a', 'e', 'i', 'o', 'u'].includes(t.toLowerCase());
	}

	while (left < right) {
		while (left < right && !isVowel(s[left])) left++;
		while (left < right && !isVowel(s[right])) right--;

		if (left < right) {
			let t = sa[left];
			sa[left] = sa[right];
			sa[right] = t;
			left++, right--;
		}
	}

	return sa.join('');
};
