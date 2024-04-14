## Problem

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.



Example 1:

Input: s = "hello"

Output: 13

Explanation:

The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

Example 2:

Input: s = "zaz"

Output: 50

Explanation:

The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.



Constraints:

2 <= s.length <= 100
s consists only of lowercase English letters.

## Pre analysis

Since the difference it abs value, we cannot eliminate the sumation of an element in next count. i,e
|101-102| +|102 -103| cannot be 101 - 103. (remove -102 and +102), so we will need to individually iterate and find the summation.

The approach is algorithmic, simply finding the difference and summing them together.

Complexity
Time complexity:
O(n) - Need to iterate once at least.

Space complexity:
O(1) - extra summation space
