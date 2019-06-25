/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
	let hashMap = {};

	return time.reduce((p, n) => {
		if (hashMap[(60 - (n % 60)) % 60]) {
			p += hashMap[(60 - (n % 60)) % 60];
		}

		hashMap[n % 60] = hashMap[n % 60] || 0;
		hashMap[n % 60] += 1;

		return p;
	}, 0);
};
