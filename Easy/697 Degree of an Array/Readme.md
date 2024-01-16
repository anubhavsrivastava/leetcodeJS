## Problem

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation:
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

## Pre analysis

Will apply heuristic approach and keep track of longest subarray and its length. Will use dictionary to keep track of count of each element.

## Another solution

```javascript
var findShortestSubArray = function (nums) {
  let map = {};
  let max = 0;
  let min = nums.length;
  let maxNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
    if (map[nums[i]] > max) {
      max = map[nums[i]];
      maxNums = [nums[i]];
    } else if (map[nums[i]] === max) {
      maxNums.push(nums[i]);
    }
  }
  for (let i = 0; i < maxNums.length; i++) {
    let num = maxNums[i];
    let start = nums.indexOf(num);
    let end = nums.lastIndexOf(num);
    if (end - start + 1 < min) {
      min = end - start + 1;
    }
  }
  return min;
};
```
