## Problem

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]

Output: true

Example 2:

Input: [1,2,3,4]

Output: false

Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]

Output: true

## Pre analysis

Will keep a hashmap to keep the count of occurences of numbers;

## Another solution

1.  Using Set DS

        var containsDuplicate = function(nums) {
            return new Set(nums).size !== nums.length;
        };

2.  Better Hash Map

        var containsDuplicate = function(nums) {
        var seen = {};

        for (var i = 0; i < nums.length; i++) {
            var num = nums[i];

            if (seen[num]) {
            return true;
            } else {
            seen[num] = true;
            }
        }

        return false;
        };
