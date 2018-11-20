## Problem

Given an integer, return its base 7 string representation.

Example 1:

Input: 100

Output: "202"

Example 2:

Input: -7

Output: "-10"

Note: The input will be in range of [-1e7, 1e7].

## Pre analysis

Will use toString(base) function on top of number.
A more language independent way would be to keep dividing by base and collecting quotient and remainder

## Another Solution

    var convertToBase7 = function(num) {
        if (num === 0) {
            return "0";
        }
        let sign = "";
        if (num < 0) {
            sign = "-";
            num = - num;
        }
        let base7 = "";
        while (num > 0) {
            base7 = num % 7 + base7;
            num = Math.floor(num / 7);
        }
        return sign + base7;
    };
