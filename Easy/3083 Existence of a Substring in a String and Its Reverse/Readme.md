## Problem

Given a string s, find any
substring
of length 2 which is also present in the reverse of s.

Return true if such a substring exists, and false otherwise.



Example 1:

Input: s = "leetcode"

Output: true

Explanation: Substring "ee" is of length 2 which is also present in reverse(s) == "edocteel".

Example 2:

Input: s = "abcba"

Output: true

Explanation: All of the substrings of length 2 "ab", "bc", "cb", "ba" are also present in reverse(s) == "abcba".

Example 3:

Input: s = "abcd"

Output: false

Explanation: There is no substring of length 2 in s, which is also present in the reverse of s.



Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters.

## Pre analysis

Will check for each substring of length 2 and check if it is present in reverse of string.

## Another solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  let reverseS = s.split("").reverse().join("");
  for (let i = 0; i < s.length - 1; i++) {
    let substr = s.slice(i, i + 2);
    if (reverseS.includes(substr)) return true;
  }
  return false;
};
```
