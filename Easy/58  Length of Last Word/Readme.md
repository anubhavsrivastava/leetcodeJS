## Problem

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

## Pre analysis

Will split the words by ' ' space and count length of last word

## Another Solution

    let lengthOfLastWord = function(string) {
        let currentStringLength = 0;

        const trimmedString = string.trim();

        const lastIndex = trimmedString.length - 1;

        if (lastIndex === -1) return currentStringLength;

        for (let i = lastIndex; i >= 0; i--) {
            // not getting to this if statement
            if (trimmedString[i] === ' ') {
            return currentStringLength;
            } else if (i === 0) {
            currentStringLength++;
            return currentStringLength;
            } else {
            currentStringLength++;
            }
        }
    }
