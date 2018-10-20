/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
	let hashMap = {};
	(A + ' ' + B).split(' ').forEach(word => {
		if (hashMap[word]) {
			hashMap[word] = hashMap[word] + 1;
		} else {
			hashMap[word] = 1;
		}
	});

	return Object.keys(hashMap).filter(key => hashMap[key] === 1);
};
