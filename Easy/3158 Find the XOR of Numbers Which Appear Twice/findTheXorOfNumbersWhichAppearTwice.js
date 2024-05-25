/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let oc = {};
  let twice = [];

  for (let i = 0; i < nums.length; i++) {
    oc[nums[i]] = (oc[nums[i]] || 0) + 1;
    if (oc[nums[i]] === 2) {
      twice.push(nums[i]);
    }
  }

  return twice.reduce((p, n) => p ^ n, 0);
};
