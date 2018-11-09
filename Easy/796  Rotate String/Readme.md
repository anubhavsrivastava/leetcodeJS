## Problem

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:

Input: A = 'abcde', B = 'cdeab'

Output: true

Example 2:

Input: A = 'abcde', B = 'abced'

Output: false

Note:

A and B will have length at most 100.

## Pre analysis

Will Combine B with B and check whether it contains A

## Post analysis

Another solution could be using brute force.
Another one from leetcode is KMP (Knuth-Morris-Pratt) Algortihm `todo`

## Another solution

1.  Brute Force

        var rotateString = function(A, B) {
        if (!A.length && !B.length) {
            return true;
        } else if (!A.length || !B.length) {
            return false;
        }

        for (let i = 0; i < A.length; i++) {
            A = `${A.slice(1)}${A[0]}`;

            if (A === B) {
                return true;
            }
        }

        return false;

    };
