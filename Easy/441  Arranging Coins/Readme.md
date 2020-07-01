## Problem

You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.


Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.


## Pre analysis
Basically if summation of first kth element such that E (k) <= n , then k is solution
https://en.wikipedia.org/wiki/Completing_the_square

## Another analysis
Binary search

    const arrangeCoins = function (n) {

        if (n == 0 || n == 1) {
            return n;
        }

        let lo = 1;
        let hi = n;

        while (lo < hi) {
            let mid = Math.floor((lo+hi)/2);
            let sum = mid * (mid+1) / 2;

            if (sum > n) {
                hi = mid;
            }

            else {
                lo = mid+1;
            }
        }

        return lo-1;
    }