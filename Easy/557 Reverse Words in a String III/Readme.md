## Problem

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: "Let's take LeetCode contest"

Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.

## Pre analysis

Will split/join each word

## Another solution

    var reverseWords = function(s) {
        let res = '';
        let stack = '';

        for (let i = 0; i <= s.length; i++) {
            const char = s[i];

            if (char === ' ') {
                res += stack + ' ';
                stack = '';
            } else if (!char) {
                res += stack;
            } else {
                stack = char + stack;
            }
        }

        return res;
    };
