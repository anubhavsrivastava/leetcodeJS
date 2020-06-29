## Problem

Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2\*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

Example 1:

Input: n = 5, start = 0

Output: 8

Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

Example 2:

Input: n = 4, start = 3

Output: 8

Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

Example 3:

Input: n = 1, start = 7

Output: 7

Example 4:

Input: n = 10, start = 5

Output: 2

Constraints:

1 <= n <= 1000
0 <= start <= 1000
n == nums.length

## Pre analysis

-   Will XOR over the sequence.
-   O(n)
-   Somehow I get the feeling that the operation can be performed in O(1) :shrug:

## Another solution

Solution with O(1)

    function xorOperationB(n, start)
    {
        if (n % 2 == 0)
        return (n / 2) & 1;
        else
        return ((n / 2) & 1) ^ (start + n - 1);
    }
    function xorOperationA(n, start)
    {
        if (start & 1)
        return (start - 1) ^ xorOperationB(n + 1, start - 1);
        else
        return xorOperationB(n, start);
    }

    /**

    @param {number} n
    @param {number} start
    @return {number}
    */
    var xorOperation = function(n, start) {
        let ret = 2 * xorOperationA(n, start / 2);
        if (n & start & 1) ret++;
        return ret;
    };
