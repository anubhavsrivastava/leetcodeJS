/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	let maxCount = 0;
	let count = 0;
	nums.forEach(n => {
		if (n === 1) count++;
		if (n === 0) {
			if (maxCount < count) {
				maxCount = count;
			}
			count = 0;
		}
	});

	return maxCount < count ? count : maxCount;
};
