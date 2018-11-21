/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(a, b) {
	if (a === b) return true;
	if (a.length > b.length) return false;
	let ava = {};
	for (let c of b) {
		ava[c] = ava[c] || 0;
		ava[c]++;
	}
	for (let c of a) {
		if (ava[c]) {
			ava[c]--;
		} else {
			return false;
		}
	}

	return true;
};
