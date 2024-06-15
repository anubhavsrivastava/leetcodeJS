## Problem

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000

## Pre analysis

will just follow the instruction and insert at the beginning of the array and odd at the end of the array

## Post analysis

Simple solution, can be done in O(n) time complexity

```javascript
var sortArrayByParity = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    if (nums[i] % 2 === 0) i++;
    if (nums[j] % 2 === 1) j--;
  }
  return nums;
};
```
