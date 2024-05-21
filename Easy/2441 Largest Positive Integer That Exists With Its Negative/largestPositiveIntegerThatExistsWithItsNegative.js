/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let s = {};
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    s[nums[i]] = 1;
    if (s[nums[i]] && s[nums[i] * -1]) {
      if (Math.abs(nums[i]) > max) {
        max = Math.abs(nums[i]);
      }
    }
  }

  return max;
};
