/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	return [...S].map((char, i) => {
		let lSearch = S.substr(0, i + 1).lastIndexOf(C, i);
		let rSearch = S.indexOf(C, i);
		lSearch = lSearch === -1 ? Infinity : lSearch;
		rSearch = rSearch === -1 ? Infinity : rSearch;
		return Math.min(Math.abs(i - lSearch), Math.abs(i - rSearch));
	});
};
