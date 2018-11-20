## Problem

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]

Output: ["Alaska", "Dad"]

Note:

You may use one character in the keyboard more than once.

You may assume the input string will only contain letters of alphabet.

## Pre analysis

Will keep a hashmap of alphabet in keyboard corresponding to row number, if all characters in words are from same row then it is our candidate else no.

## Another Solution

Different code for same approach

    var findWords = function(words) {
        const top = "qwertyuoip".split('');
        const mid = "asdfghjkl".split('');
        const bot = "zxcvbnm".split('');

        return words.filter((w) => {
            const ws = w.toLowerCase().split('');
            const a = ws.find(l => top.indexOf(l) === -1);
            const b = ws.find(l => mid.indexOf(l) === -1);
            const c = ws.find(l => bot.indexOf(l) === -1);
            return !a || !b || !c;
        });
    };
