/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	if (nums.length < k) {
		k = k % nums.length;
	}

	if (k === 0) return;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
};

var reverse = function(nums, start, end) {
	while (start < end) {
		let temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}
};
