## Problem

You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

Return the number of special letters in word.



Example 1:

Input: word = "aaAbcBC"

Output: 3

Explanation:

The special characters in word are 'a', 'b', and 'c'.

Example 2:

Input: word = "abc"

Output: 0

Explanation:

No character in word appears in uppercase.

Example 3:

Input: word = "abBCab"

Output: 1

Explanation:

The only special character in word is 'b'.



Constraints:

1 <= word.length <= 50
word consists of only lowercase and uppercase English letters.

## Pre analysis

The approach is simply hash based. If we find existing letter with both lowerCase and upperCase of it, the we add that letter to our result set.

Keep a set as a result of all characters who are special. Maintain a hashset of already visited characters of the word.
Iterate over each character, add it to hashset to mark it as visited. if there is already lower case and upper case of that letter present if our hashset, add it to result.
Return result set length.

Complexity
Time complexity:
O(n)

Space complexity:
O(n)
