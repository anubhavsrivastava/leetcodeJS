## Problem

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"

Output: "holle"

Example 2:

Input: "leetcode"

Output: "leotcede"

Note:
The vowels does not include the letter "y".

## Pre analysis

Will keep two pointers. iterate both of them until reaching a vowel and swap their places.

## Another Solution

Syntactical sugar + clean approach

    var reverseVowels = function(s) {

        const swap = (arr, i, j) => {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        };

        //----------------------------//
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // include upper case here, no need to check toLowerCase() for each char

        let strArr = s.split('');
        let l = 0, r = strArr.length - 1;

        while (l < r) {
        if (!vowels.includes(strArr[l])) {
            l++;
        } else if (!vowels.includes(strArr[r])) {
            r--;
        } else {
            swap(strArr, l, r);
            l++;
            r--;
        }
    }
    return strArr.join('');
