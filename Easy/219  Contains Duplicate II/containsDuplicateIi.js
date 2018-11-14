/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	let hash = {};

	for (let i = 0; i < nums.length; i++) {
		let c = nums[i];

		hash[c] = hash[c] === undefined ? i : hash[c];
		if (i - hash[c] !== 0 && i - hash[c] <= k) return true;
		hash[c] = i;
	}

	return false;
};
