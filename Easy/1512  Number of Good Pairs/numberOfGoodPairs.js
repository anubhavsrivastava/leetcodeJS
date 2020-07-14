/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    var index = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        index[nums[i]] = index[nums[i]] || [];
        index[nums[i]].push(i);
    }

    Object.values(index).filter(s => s.length > 1).forEach(set => {
        count += (set.length - 1) * set.length / 2;

    })

    return count;
};