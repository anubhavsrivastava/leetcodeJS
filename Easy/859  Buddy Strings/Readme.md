## Problem

Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:

Input: A = "ab", B = "ba"

Output: true

Example 2:

Input: A = "ab", B = "ab"

Output: false

Example 3:

Input: A = "aa", B = "aa"

Output: true

Example 4:

Input: A = "aaaaaaabc", B = "aaaaaaacb"

Output: true

Example 5:

Input: A = "", B = "aa"

Output: false

Note:

0 <= A.length <= 20000

0 <= B.length <= 20000

A and B consist only of lowercase letters.

## Pre analysis

Case by case solution should work

## Another solution

In Depth solution

    var buddyStrings = function(A, B) {
        if(A.length != B.length || A.length < 2) return false
        var a1 = null,
            a2 = null,
            b1 = null,
            b2 = null;
        for(var i = 0; i < A.length; i++){
            if(A[i]==B[i]) continue
            else{
                if (!a1) { a1 = A[i]; b1 = B[i]; continue}
                if (!a2) { a2 = A[i]; b2 = B[i]; continue}
                else return false
            }
        }
        if (!a1) {
            var obj = {}
            for(var i = 0; i < A.length; i++){
                if (!obj[A[i]]) obj[A[i]] = 1
                else return true
            }
            return false
        }
        else if (!a2) return false;
        else return a1===b2 && a2 === b1;
    };
