## Problem

You are given an integer array nums consisting of 2 \* n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.

Return true if nums can be divided into n pairs, otherwise return false.



Example 1:

Input: nums = [3,2,3,2,2,2]
Output: true
Explanation:
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

Example 2:

Input: nums = [1,2,3,4]
Output: false
Explanation:
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.



Constraints:

nums.length == 2 \* n
1 <= n <= 500
1 <= nums[i] <= 500

## Pre analysis

Will keep a track of number of occurences of number and then check if all numbers are even.

## Another solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBePaired = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }
  for (let key in map) {
    if (map[key] % 2 !== 0) {
      return false;
    }
  }
  return true;
};
```
