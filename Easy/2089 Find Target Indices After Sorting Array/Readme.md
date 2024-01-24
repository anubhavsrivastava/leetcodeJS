## Problem

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.

Constraints:

1 <= nums.length <= 100
1 <= nums[i], target <= 100

## Pre analysis

Sorting and then finding index of target element is straight forward and will be O(nlogn) time complexity. However, we can do better by using the count of numbers of occurences and numbers below the target. the First index of occurence will be NumbersBelowTarget+1 till NumbersBelowTarget+totalTargetCounts . This will be O(n) time complexity.

## Another solution

```javascript
var getTargetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  let arr = [];
  nums.forEach((num, index) => {
    if (num == target) {
      arr.push(index);
    }
  });
  return arr;
};
```
