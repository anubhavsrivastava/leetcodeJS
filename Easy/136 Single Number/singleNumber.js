/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let hashMap = {};
	nums.forEach(num => {
		if (hashMap[num]) {
			delete hashMap[num];
		} else {
			hashMap[num] = 1;
		}
	});

	return +Object.keys(hashMap)[0];
};
