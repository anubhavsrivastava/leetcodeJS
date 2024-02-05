/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const nums = num.toString().split('').sort()
    return +nums[0]*10 + (+nums[2]) + (+nums[1])*10 + (+nums[3])
};