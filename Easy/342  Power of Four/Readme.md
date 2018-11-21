## Problem

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:

Input: 16
Output: true

Example 2:

Input: 5
Output: false

Follow up: Could you solve it without loops/recursion?

## Pre analysis

Will use the power of log . Also log 16 (base e) / log 4 (base e) = log 16(base 4)

## Another solution

Recursive division

    var isPowerOfFour = function(num) {
        if (num < 1) {return false;}
        while (num > 1) {
            if (num % 4 === 0) {
                num = num/4;
            }
            else {
                return false;
            }
        }
        return true;
    };

Greedy solution

    var isPowerOfFour = function(num) {
        count = 0

        while(Math.pow(4, count) < num)
            {
            count += 1;
            }

        return (Math.pow(4, count) == num);
    };
