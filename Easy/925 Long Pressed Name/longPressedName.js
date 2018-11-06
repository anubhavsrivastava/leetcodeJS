/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
	let currentNameChar;
	let currentTypeChar = 0;
	let l = name.length;
	let ll = typed.length;
	for (let i = 0; i < l; i++) {
		currentNameChar = name[i];
		while (currentTypeChar < ll && typed[currentTypeChar] !== currentNameChar) currentTypeChar++;
		if (currentTypeChar >= ll) return false;
		currentTypeChar++;
	}

	return true;
};
