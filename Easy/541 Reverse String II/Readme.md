## Problem

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

Example:

Input: s = "abcdefg", k = 2

Output: "bacdfeg"

Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]

## Pre analysis

Will group string into an array and return joined array with alternate reverse mechanism;

## Another solution

Iterating over

        var reverseStr = function (s, k) {
            let len = s.length;
            let j = 2 * k;
            let i = 0;
            let res = "";
            function reverse(s, start, end) {
                let tmp = "";
                while (--end >= start) {
                    tmp += s[end];
                }
                return tmp;
            }
            while (j < len) {
                res = res.concat(reverse(s, i, i + k), s.slice(i + k, j));
                i = j;
                j += 2 * k;
            }
            if (i < len) {
                let n = Math.min(len, i + k);
                res = res.concat(reverse(s, i, n));
                if (n < len) {
                    res = res.concat(s.slice(n, len));
                }
            }

            return res;
        };
