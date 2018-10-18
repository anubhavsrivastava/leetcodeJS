## Problem

Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:

Input: [3,1,2,4]

Output: [2,4,3,1]

The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000

## Pre analysis

I would use unshift and push prototypal methods available over array to segregate two groups of array.

## Post analysis

A simple language independent solution could had been simple two arrays of even and odd and returning the concatinated array as result.

## Another solution

    var sortArrayByParity = function(A) {
    var oddArray = [];
    var finalArray = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2) {
            oddArray.push(A[i]);
        } else {
            finalArray.push(A[i]);
        }
    }
    return finalArray.concat(oddArray);
    };
