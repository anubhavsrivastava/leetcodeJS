/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
	let d = deck.length;
	deck = deck.sort((a, b) => a - b);
	let result = new Array(d).fill('e');
	let inserted = 0;
	let empty = 0;

	while (inserted !== d) {
		result[empty] = deck[inserted];
		inserted++;
		if (inserted == d) break;
		let p = false;
		for (let i = empty; ; i++) {
			if (result[i % d] === 'e') {
				if (p) {
					empty = i % d;
					break;
				}
				p = true;
			}
		}
	}
	return result;
};
