## Problem

Given an integer, write a function to determine if it is a power of two.

Example 1:

Input: 1

Output: true

Explanation: 20 = 1

Example 2:

Input: 16

Output: true

Explanation: 24 = 16

Example 3:

Input: 218

Output: false

## Pre analysis

Will use the power of log2 .

## Another solution

Recursive division

    var isPowerOfTwo = function(n) {
        if(n === 0) {
            return false;
        }
        while(n % 2 === 0) {
            n = n / 2;
        }
        return n === 1;
    };

Greedy solution

    var isPowerOfTwo = function(n) {
        let exp = 0;
        let current = 1;

        while(current < n) {
            current = Math.pow(2, ++exp);
        }

        return current === n ? true : false;
    };
