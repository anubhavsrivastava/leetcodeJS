/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
	if (s.includes('LLL')) return false;

	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'A') {
			count += 1;
			if (count > 1) {
				return false;
			}
		}
	}

	return true;
};
