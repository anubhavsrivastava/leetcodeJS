/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (isSameParity(nums[i], nums[i - 1])) {
      return false;
    }
  }
  return true;
};

const isSameParity = (a, b) => (a & 1) === (b & 1);
