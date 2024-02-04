## Problem

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0

Constraints:

0 <= num <= 231 - 1

Follow up: Could you do it without any loop/recursion in O(1) runtime?

## Pre analysis

Will split the number and add them until it becomes single digit

## Another solution

- Approach
  Upon observing carefully, we can see that 38 -> 11 -> 2 is similar to 38 % 9 which is again 2

Similarly, for any number which is a multiple of 9, the result will be 9. For example, 18 -> 9, 27 -> 9, 36 -> 9 and so on.

- Edge Case Scenario:
  If num == 0, then 0 % 9 will give 9 which is wrong as the correct answer should be 0. So, we need to handle it separately.

```javascript
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};
```
