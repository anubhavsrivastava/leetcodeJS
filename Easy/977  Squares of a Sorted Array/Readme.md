## Problem

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.

## Pre analysis

Will keep two pointers to track the greatest number to be add.

Time Complexity: O(N), where N is the length of A.

Space Complexity: O(N).

## Another solution

```javascript
var sortedSquares = function(A) {
	for (var i = 0; i < A.length; i++) {
		A[i] = A[i] * A[i];
	}
	return A.sort(function(a, b) {
		return a - b;
	});
};

<!-- Time Complexity: O(N log N), where N is the length of A.
Space Complexity: O(N)  -->

```
