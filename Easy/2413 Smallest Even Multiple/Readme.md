## Problem

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

Constraints:

1 <= n <= 150

## Pre analysis

if number is divisible by 2, it is n itself, else it is 2\*n

## Another solution

```javascript
var gcd = function (a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
};
```
