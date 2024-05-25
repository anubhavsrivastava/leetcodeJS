/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, q, x) {
  let occurences = {};

  for (let i = 0; i < nums.length; i++) {
    occurences[nums[i]] = occurences[nums[i]] ?? [];
    occurences[nums[i]].push(i);
  }

  return q.map((query) => {
    return occurences[x]?.[query - 1] ?? -1;
  });
};
