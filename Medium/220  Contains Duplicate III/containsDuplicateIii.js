/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	for (let i = 0; i < nums.length; i++) {
		let c = nums[i];

		for (let j = 1; j <= k; j++) {
			if (i - j >= 0) {
				let diff = Math.abs(c - nums[i - j]);
				if (i - (i - j) != 0 && diff <= t) return true;
			}
		}
	}

	return false;
};
