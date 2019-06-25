/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let hashMap = {};

	for (let i = 0; i < nums.length; i++) {
		let requiredNum = target - nums[i];

		if (requiredNum in hashMap) {
			return [hashMap[requiredNum], i];
		}

		hashMap[nums[i]] = i;
	}

	return null;
};
