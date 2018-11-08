## Problem

Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:

Input: "ab-cd"

Output: "dc-ba"

Example 2:

Input: "a-bC-dEf-ghIj"

Output: "j-Ih-gfE-dCba"

Example 3:

Input: "Test1ng-Leet=code-Q!"

Output: "Qedo1ct-eeLg=ntse-T!"

Note:

S.length <= 100

33 <= S[i].ASCIIcode <= 122

S doesn't contain \ or "

## Pre analysis

This problem is similar to `345 Reverse Vowels of a String` problem. Will take same approach and replace isVowel check with isChar check

## Post analysis

Interestingly, one can also use regex to check whether character is alphabet

    function isLetter(char) {
            var regex = /[A-Za-z]/gi;
            return regex.test(char);
        }
