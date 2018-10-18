/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	let codes = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
	function getMorseCode(word) {
		return word
			.split('')
			.map(t => codes[t.charCodeAt(0) - 97])
			.join('');
	}

	return new Set(words.map(getMorseCode)).size;
};
