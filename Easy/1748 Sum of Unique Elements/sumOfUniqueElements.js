/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const h = {};
  let sum = 0;
  nums.forEach((n) => {
    h[n] = (h[n] || 0) + 1;
    if (h[n] > 1) {
      sum = sum - n;
      h[n] = -1000;
    }
    if (h[n] === 1) {
      sum = sum + n;
    }
  });

  return sum;
};
