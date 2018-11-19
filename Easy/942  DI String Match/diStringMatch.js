/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
	let n = new Array(S.length + 1).fill(0).map((e, i) => i);
	let result = [];
	let mode;

	for (let i = 0; i < S.length; i++) {
		if (S[i] === 'I') {
			mode = 1;
			result.push(n.shift());
		} else {
			mode = 2;
			result.push(n.pop());
		}
	}

	if (mode === 1) result.push(n.shift());
	if (mode === 2) result.push(n.pop());

	return result;
};
