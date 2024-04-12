## Problem

An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

Given an integer n, return true if n is strictly palindromic and false otherwise.

A string is palindromic if it reads the same forward and backward.

Example 1:

Input: n = 9
Output: false
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

Example 2:

Input: n = 4
Output: false
Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
Therefore, we return false.

Constraints:

4 <= n <= 105

## Pre analysis

Will simply follow algorithm to convert number to base and check if it is palindrome or not

## Another solution

1. Verbose implementation of the same

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  let isPalindromeFlag = false;
  for (let i = 2; i < n - 1; i++) {
    let b = n.toString(i);
    isPalindromeFlag = checkPalindrome(b);
    if (!isPalindromeFlag) return false;
  }
  return isPalindromeFlag;
};

function checkPalindrome(base) {
  let len = base.length,
    left = 0,
    right = len - 1,
    flag = false;
  while (left <= right) {
    if (base[left] === base[right]) {
      flag = true;
      left++;
      right--;
    } else return false;
  }
  return flag;
}
```
