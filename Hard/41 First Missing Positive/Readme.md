## Problem

Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.



Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.



Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1

## Pre analysis

Since the question asks for O(n) time and O(1) space, we can't use any extra space. So, we can't use a set to store the numbers. We can use the array itself.
Additionally we have a constraint that the smallest positive integer that is not present in nums. So, we can ignore all the negative numbers and 0. We can also ignore all the numbers greater than the length of the array.

Approach

- Iterate through the array and place each positive integer i at index i-1 if possible. This ensures that the element nums[i] == i+1 if it exists in the array.
- Iterate through the array again to find the first index i where nums[i] != i+1. Return i+1 as the smallest missing positive integer.
- If all numbers from 1 to n are present in the array, return n+1 as the result.
