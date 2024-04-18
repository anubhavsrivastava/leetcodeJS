/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  return nums
    .map((n) => {
      let t = `${n}`.split("");
      return Math.max(...t)
        .toString()
        .repeat(t.length);
    })
    .reduce((p, n) => p + +n, 0);
};
