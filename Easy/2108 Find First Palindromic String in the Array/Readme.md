## Problem

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.



Example 1:

Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:

Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:

Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.



Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.

## Pre analysis

This is just an entension of finding the palindrome in a string. We can use the same logic to find the palindrome in a list and return the find occurence.

## Another solution

Efficient palindrome way

```javascript
/**
 * @param {string[]} words
 * @return {string}
 */

function isPalindrome(str) {
  let left = 0;
  right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

var firstPalindrome = function (words) {
  for (let word of words) {
    if (isPalindrome(word)) {
      return word;
    }
  }
  return "";
};
```
