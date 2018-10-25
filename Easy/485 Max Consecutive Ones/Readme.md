## Problem

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]

Output: 3

Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

## Pre analysis

Will keep a track of last maxCount until reaching a '0' value;

## Another Solution

Another javascript based solution

    var findMaxConsecutiveOnes = function(nums) {

        return nums.join('').split(0).reduce( (a, x) => Math.max(a, x.length) , Number.MIN_VALUE)
    };
