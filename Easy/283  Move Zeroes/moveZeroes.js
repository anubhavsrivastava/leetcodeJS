/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let s = 1;
    let f = 0;

    while (s < nums.length && f < nums.length) {
        if (nums[f] === 0) {
            while (nums[s] === 0 && s < nums.length) {
                s++;
            }
            if (s >= nums.length) {
                break;
            }
            nums[f] = nums[s];
            nums[s] = 0;

        }
        f++; s++;

    }


};