## Problem

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.

## Pre analysis

Will keep a track of all characters encountered and keep a sum of all characters. If sum is 351 (26\*13) then it is a pangram.

## Another solution

1. Keep a set of all characters and check if length of set is 26.

```javascript
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphaSeen = new Set();
  for (let i = 0; i < sentence.length; i++) {
    alphaSeen.add(sentence[i]);
  }

  return alphaSeen.size === 26;
};
```
