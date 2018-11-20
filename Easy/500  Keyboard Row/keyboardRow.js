/**
 * @param {string[]} words
 * @return {string[]}
 */
var f = 'QWERTYUIOPqwertyuiop'.split('');
var s = 'ASDFGHJKLasdfghjkl'.split('');
var t = 'ZXCVBNMzxcvbnm'.split('');

var mapper = Object.assign(
	{},
	f.reduce((map, k) => {
		map[k] = 1;
		return map;
	}, {}),
	s.reduce((map, k) => {
		map[k] = 2;
		return map;
	}, {}),
	t.reduce((map, k) => {
		map[k] = 3;
		return map;
	}, {})
);

var isSameRow = function(word) {
	let row = mapper[word[0]];

	for (var c of word) {
		if (mapper[c] !== row) return false;
	}

	return true;
};

var findWords = function(words) {
	return words.filter(isSameRow);
};
