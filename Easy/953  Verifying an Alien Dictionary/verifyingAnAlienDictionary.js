/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
	let human = [];
	words.forEach(w => {
		let wo = '';
		for (let c of w) {
			wo += String.fromCharCode(97 + order.indexOf(c));
		}
		human.push(wo);
	});

	let compare = human.slice();
	compare.sort();
	for (let i = 0; i < compare.length; i++) {
		if (compare[i] !== human[i]) return false;
	}

	return true;
};
