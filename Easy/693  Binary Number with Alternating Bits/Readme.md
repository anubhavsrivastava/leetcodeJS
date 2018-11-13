## Problem

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:

Input: 5

Output: True

Explanation:

The binary representation of 5 is: 101

Example 2:

Input: 7

Output: False

Explanation:

The binary representation of 7 is: 111.

Example 3:

Input: 11

Output: False

Explanation:

The binary representation of 11 is: 1011.

Example 4:

Input: 10

Output: True

Explanation:

The binary representation of 10 is: 1010.

## Pre analysis

Converting to String represtation and checking for alternating bits could solve.
Another way is to match previous mod result with new mod. Will try this method. The approach is
We can get the last bit and the rest of the bits via n % 2 and n / 2 operations.
Let's remember cur, the last bit of n. If the last bit ever equals the last bit of the remaining, then two adjacent bits have the same value, and the answer is False. Otherwise, the answer is True.

## Another Solution

String representation and checks

    var hasAlternatingBits = function(n) {
        let arr = n.toString(2).split('');
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] === arr[i]) {
                return false;
            }
        }
        return true;
    };

Using bti manupilatino for n%2 and n/2 with n &1 and n <<< 1

    var hasAlternatingBits = function(n) {
        let prevBit = n & 1
        n >>>=1
        while (n > 0) {
            if (prevBit === (n & 1)) {
                return false
            }
            prevBit = n & 1
            n >>>=1
        }
        return true
    };
