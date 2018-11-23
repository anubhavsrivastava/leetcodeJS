/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	if (s.length !== t.length) return false;
	let mapper = {};
	let rMap = {};
	for (let i = 0; i < s.length; i++) {
		let c = s[i];
		mapper[c] = mapper[c] || (rMap[t[i]] ? undefined : t[i]);
		rMap[t[i]] = true;
		if (t[i] !== mapper[c]) return false;
	}

	return true;
};
