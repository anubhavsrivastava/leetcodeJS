/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    return nums.reduce((prev, next) => {
        prev.push(next + (prev[prev.length - 1] || 0));
        return prev;
    }, [])
};