## Problem

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

Example 1:

Input: [4,2,5,7]

Output: [4,5,2,7]

Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Note:

2 <= A.length <= 20000

A.length % 2 == 0

0 <= A[i] <= 1000

## Pre analysis

Will keep even,odd index and push them into different array keeping both indices incremented after occurence of even=odd number

## Post analysis

Could had been done with left-right pointers

## Another solution

        var sortArrayByParityII = function(A) {
            let j = 1;

            for (let i = 0; i < A.length; i += 2) {
                if (A[i]%2===1) { // A[i] is odd
                    while (A[j]%2===1) { // move through odd indices until A[j] is even, then swap
                        j+=2;
                    }
                    let tmp = A[i];
                    A[i] = A[j]; // swap even-in-odd with current odd-in-even
                    A[j] = tmp;
                }
            }

            return A;
        };
