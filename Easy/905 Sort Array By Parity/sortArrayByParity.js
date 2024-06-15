/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let result = [];

  nums.forEach((n) => {
    if (isEven(n)) {
      result.unshift(n);
    } else {
      result.push(n);
    }
  });
  return result;
};

const isEven = (n) => n % 2 === 0;
