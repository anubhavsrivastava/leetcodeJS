## Problem

Given an array of integers A with even length, return true if and only if it is possible to reorder it such that A[2 * i + 1] = 2 _ A[2 _ i] for every 0 <= i < len(A) / 2.

Example 1:

Input: [3,1,3,6]

Output: false

Example 2:

Input: [2,1,2,6]

Output: false

Example 3:

Input: [4,-2,2,-4]

Output: true

Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].

Example 4:

Input: [1,2,4,16,8,4]

Output: false

Note:

0 <= A.length <= 30000

A.length is even

-100000 <= A[i] <= 100000

## Pre analysis

Will take heuristic approach

## Another solution

    var canReorderDoubled = function(A) {
        var i, key, keyNext, B = {}, C = [];
        for (i = 0; i < A.length; ++i) {
            key = A[i];
            B[key] = (B[key] || 0) + 1;
        }
        for (key in B) {
            C.push(key);
        }
        C.sort(function(a, b) { return a - b; });

        for (i = 0; i < C.length; ++i) {
            key = C[i];
            if(B[key] === 0) { continue; }
            if(key === 0) {
                if(B[key] % 2 === 1) { return false; }
                continue;
            }
            key = C[i];
            do{
                keyNext = (key < 0) ? key / 2 : key * 2;
                if(B[keyNext] == null) { return false; }
                B[keyNext] -= B[key];
                B[key] = 0;
                key = keyNext;
            }while(B[keyNext] > 0);
            if(B[key] < 0) { return false; }
        }

        return true;
    };
