/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	let L = [];
	let R = [];

	L[0] = 1;
	R[nums.length - 1] = 1;
	for (let i = 1; i < nums.length; i++) {
		L[i] = L[i - 1] * nums[i - 1];
		R[nums.length - 1 - i] = R[nums.length - i] * nums[nums.length - i];
	}

	return L.map((l, i) => l * R[i]);
};
