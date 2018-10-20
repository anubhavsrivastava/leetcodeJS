/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let hashMap = {};
	let len = nums.length;
	let threshHold = len / 2;
	for (let i = 0; i < len; i++) {
		let num = nums[i];
		hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
		if (hashMap[num] > threshHold) {
			return num;
		}
	}
};
