/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
	if (A.length !== B.length) return false;
	return (B + B).indexOf(A) >= 0;
};
