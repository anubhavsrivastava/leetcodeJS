/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let i = 0;
    let result = [];

    while (i < n) {
        result.push(nums[i], nums[i + n]);
        i++;
    }

    return result;
};