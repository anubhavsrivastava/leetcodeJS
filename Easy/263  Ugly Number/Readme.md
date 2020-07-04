## Problem

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:

Input: 6

Output: true

Explanation: 6 = 2 × 3

Example 2:

Input: 8

Output: true

Explanation: 8 = 2 × 2 × 2

Example 3:

Input: 14

Output: false

Explanation: 14 is not ugly since it includes another prime factor 7.

Note:

1 is typically treated as an ugly number.

Input is within the 32-bit signed integer range: [−231,  231 − 1].

## Pre analysis

Will factorise with 2 then 3 then 5, and find whether the divident is ugly.

## Another solution

1.  Iterative approach for same

        var isUgly = function(num) {
            if (num <= 0) return false;

            while (num > 1){
                if (num % 5 === 0){
                    num /= 5;
                } else if (num % 3 === 0){
                    num /= 3;
                } else if (num % 2 === 0){
                    num /= 2;
                } else {
                    return false;
                }
            }

            return true;
        };


---

    var isUgly = function(num) {
        let primes = [2,3,5];
        let ugly = !!num;
        while(ugly) {
            ugly = primes.some(prime=>{
                if ( !(num % prime) ){
                    num /= prime;
                    return true;
                };
                return false;
            });
        };
        return num === 1;
    };

---

    var isUgly = function(num) {
        for (const p of [2, 3, 5])
        while (num && num % p == 0)
            num /= p;
        return num == 1;
    };