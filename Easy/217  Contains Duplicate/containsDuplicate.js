/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let hash = {};

	for (let i = 0; i < nums.length; i++) {
		let c = nums[i];

		hash[c] = hash[c] || 0;
		hash[c]++;
		if (hash[c] === 2) return true;
	}

	return false;
};
