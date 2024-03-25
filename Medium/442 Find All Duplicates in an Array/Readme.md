## Problem

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.



Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:

Input: nums = [1,1,2]
Output: [1]

Example 3:

Input: nums = [1]
Output: []



Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.

## Pre analysis

To solve this problem in O(n) time and constant extra space, we can utilize the fact that all integers in the array are in the range [1, n] and each integer appears once or twice. We can iterate through the array and use each element as an index to mark the corresponding element as negative. If we encounter an element that is already negative, it means we have seen it before and it's a duplicate.

## Another solution

using set

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const set = new Set();

  return nums.reduce((agg, curr) => {
    if (set.has(curr)) {
      agg.push(curr);
    } else {
      set.add(curr);
    }
    return agg;
  }, []);
};
```
