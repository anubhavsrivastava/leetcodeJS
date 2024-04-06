/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let max = -Infinity;
  let total = 0;
  let c = {};

  for (let i = 0; i < nums.length; i++) {
    c[nums[i]] = (c[nums[i]] || 0) + 1;

    if (c[nums[i]] > max) {
      max = c[nums[i]];
      total = 1;
    } else if (c[nums[i]] === max) {
      total++;
    }
  }

  return total * max;
};
