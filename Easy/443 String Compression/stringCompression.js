/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
	var str = '';
	var currentCount = 0;
	var currentChar = '';
	for (var i = 0; i < chars.length; ) {
		currentChar = chars[i];

		while (currentChar === chars[i]) {
			currentCount++;
			i++;
		}
		str += currentChar;
		if (currentCount > 1) {
			str += currentCount.toString();
		}

		currentCount = 0;
	}

	chars.length = 0;
	for (let i in str) {
		chars[i] = str[i];
	}
};
