/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
	return S.split(' ')
		.map((word, i) => {
			if (!['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase())) {
				word = word.substr(1) + word[0];
			}
			word += 'ma' + new Array(i + 1).fill('a').join('');
			return word;
		})
		.join(' ');
};
