## Problem

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:

    1   (0 0 0 1)
    4   (0 1 0 0)
           ↑   ↑

The above arrows point to positions where the corresponding bits are different.

## Pre analysis

Using '^' operator I shall get corresponding number in base10 and after conversion to base2, it can be counted

## Post analysis

Bit by bit travesal was better solution `todo: bit Manupilation`

## Another solution

    var hammingDistance = function(x, y) {
        let res = 0;
        while (x > 0 || y > 0) {
            res += (x%2)^(y%2);
            x >>= 1;
            y >>= 1;
        }
        return res;
    };
