## Problem

You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

Return the number of special letters in word.

Example 1:

Input: word = "aaAbcBC"

Output: 3

Explanation:

The special characters are 'a', 'b', and 'c'.

Example 2:

Input: word = "abc"

Output: 0

Explanation:

There are no special characters in word.

Example 3:

Input: word = "AbBCab"

Output: 0

Explanation:

There are no special characters in word.

Constraints:

1 <= word.length <= 2 \* 105
word consists of only lowercase and uppercase English letters.

## Pre analysis

The approach is simply hash based. If we find existing lower case letter already visited before and not the uppercase before, we add it to result. Otherwise we remove it from our result set.

Keep a set as a result of all characters who are special. Maintain a hashset of already visited characters of the word.
Iterate over each character, if there is already visited lowercase character and current character is uppercase which is not previously visited, add it to result set to mark it as visited. Otherwise if its is lowercase, remove it from result set and mark it visited.
Return result set length.

## Post analysis

Complexity

- Time complexity:
  O(n)

- Space complexity:
  O(n)
