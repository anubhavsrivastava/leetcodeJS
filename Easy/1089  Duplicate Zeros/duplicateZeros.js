/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	let l = arr.length;
	for (let i = 0; i < l; i++) {
		if (arr[i] === 0) {
			let sArr = [0, ...arr.slice(i)];

			arr.length = i;
			arr.push(...sArr);
			i++;
		}
	}

	arr.length = l;
};
