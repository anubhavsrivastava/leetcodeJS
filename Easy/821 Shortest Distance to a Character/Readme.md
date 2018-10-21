## Problem

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'

Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

## Pre analysis

Will use heuristic approach using indexOf and lastIndexOf javascript Array prototypal functions.
Time Complexity: O(N), where N is the length of S. We scan through the string twice.

Space Complexity: O(N), the size of ans

## Another solution

    var shortestToChar = function(S, C) {
        const out = [];

        let lastIndex = Number.NEGATIVE_INFINITY;
        let nextIndex = S.indexOf(C);

        S.split("").map((l, i) => {
            if (i === nextIndex) {
                out[i] = 0;
                lastIndex = nextIndex;
                nextIndex = S.indexOf(C, nextIndex + 1)
                if (nextIndex === -1) nextIndex = Number.POSITIVE_INFINITY;
            } else {
                var dist = Math.min(i - lastIndex, nextIndex - i);
                out[i] = dist;
            }
        })

        return out;
    };
