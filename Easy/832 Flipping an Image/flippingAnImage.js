/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
	function flipAndInvert(B) {
		return B.reverse().map(t => +!Boolean(t));
	}
	return A.map(flipAndInvert);
};
