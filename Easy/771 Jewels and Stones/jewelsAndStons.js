/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	var myJewels = {};
	S.split('').forEach(function(s) {
		if (myJewels[s]) {
			myJewels[s] = myJewels[s] + 1;
		} else {
			myJewels[s] = 1;
		}
	});

	return J.split('').reduce(function(count, j) {
		return count + (myJewels[j] || 0);
	}, 0);
};
