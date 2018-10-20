## Problem

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121

Output: true

Example 2:

Input: -121

Output: false

Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: 10

Output: false

Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:

Coud you solve it without converting the integer to a string?

## Pre analysis

Will just match reversed string.

## Another solution

1.  Magical solution

        var isPalindrome = function(x) {
        if( x < 0 ){return false;}
        if( x < 10 ){return true;}
        if( x % 10 === 0){return false;}
        var z = x;
        var f = 0;

        while(f < z){
            var f = f \* 10 + z % 10;
            var z = ~~(z / 10);

            if( z === f || ~~(z/10) === f ){
             return true;
            }

            }

            return false;

        }

2.  Optimised Approach

        var isPalindrome = function(x) {
            const val = x.toString()
            const last = val.length - 1;
            const middle = Math.floor(last / 2)

            for (let i = 0; i <= middle; i++) {
                if (val[i] !== val[last - i]) {
                    return false;
                }
            }

            return true;
        };
