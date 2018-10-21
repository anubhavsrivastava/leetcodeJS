## Problem

Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"

Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"

## Pre analysis

Will do simple JS reverse. I think better way would be get swap left with right unless you reach center.

## Another solution

    var reverseString = function(s) {
        let res = "";

        for (let i = s.length - 1; i >= 0; i--) {
            res += s[i];
        }
        return res;
    };
