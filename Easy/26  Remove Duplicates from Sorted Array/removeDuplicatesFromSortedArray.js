/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let k = 0;
	let l = nums.length;
	for (let i = 0; i < l; i++) {
		if (nums[k] !== nums[i]) {
			k++;
			nums[k] = nums[i];
		}
	}

	return k + 1;
};
