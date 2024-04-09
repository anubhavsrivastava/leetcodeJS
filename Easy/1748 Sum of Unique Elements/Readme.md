## Problem

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

## Pre analysis

Will keep a track of visited number. If the number is already visited then will substract the value. if this is first time of visit will add it to total sum.

## Another Solution

One liner to check first and last occurence of number, if they are same then add it to sum.

```javascript
var sumOfUnique = function (nums) {
  return nums
    .filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))
    .reduce((a, b) => a + b, 0);
};
```
