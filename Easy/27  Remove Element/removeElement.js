/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let l = nums.length;
	for (let i = 0; i < l; ) {
		if (nums[i] === val) {
			let subArr = nums.slice(i + 1);
			nums.length = i;
			nums.push(...subArr);
			l--;
		} else {
			i++;
		}
	}

	return nums.length;
};

//better approach can be seen in #26
