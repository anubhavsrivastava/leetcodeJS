## Problem

You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.

A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:

Input: "PPALLP"

Output: True

Example 2:

Input: "PPALLL"

Output: False

## Pre analysis

Heuristic approach should work.

## Another solution

Counting LL and A both,

        var checkRecord = function(s) {
            var aCount = 0;
            for (var i = 0; i < s.length; i++) {
                if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
                    return false;
                }
                if (s[i] === "A") {
                    if (aCount === 0) {
                        aCount = 1;
                    } else {
                        return false;
                    }
                }
            }
            return true;
        };
