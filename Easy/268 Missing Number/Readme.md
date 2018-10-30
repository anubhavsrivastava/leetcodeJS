## Problem

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]

Output: 2

Example 2:

Input: [9,6,4,2,3,5,7,0,1]

Output: 8

Note:

Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

## Pre analysis

Will substract the summation with n\*(n+1)/2 sigma function (Gauss' Formula)

## Another solution

Approach #1 Sorting

Approach #2 HashSet

Approach #3 Bit Manipulation
Intuition

We can harness the fact that XOR is its own inverse to find the missing element in linear time.

Algorithm

Because we know that nums contains nn numbers and that it is missing exactly one number on the range [0..n−1], we know that n definitely replaces the missing number in nums. Therefore, if we initialize an integer to nn and XOR it with every index and value, we will be left with the missing number.
