/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let l = nums.length;
	for (let i = 0; i < l; ) {
		if (nums[i] === 0) {
			let subArr = nums.slice(i + 1);
			nums.length = i;
			nums.push(...subArr, 0);
			l--;
		} else {
			i++;
		}
	}
};
