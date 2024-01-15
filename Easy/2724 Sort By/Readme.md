## Problem

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

Example 1:

Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

Example 2:

Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

Example 3:

Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1.

Constraints:

arr is a valid JSON array
fn is a function that returns a number
1 <= arr.length <= 5 \* 105

## Pre analysis

Will simply sort the array via `Array.prototype.sort` and pass the compare function to it

## Post analysis

Time complexity is O(n log n) and space complexity is O(1)
The problem with in place sort is that it will mutate the original array. If we want to keep the original array intact, we can use `Array.prototype.slice` to create a copy of the array and then sort it.
