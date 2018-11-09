## Problem

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:

Input:

left = 1, right = 22

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.

## Pre analysis

For each number in the range, will check whether it is self dividing by converting that number to a character array , then checking that each digit is nonzero and divides the original number.

## Another Solution

    var selfDividingNumbers = function(left, right) {
        let result = [];
        for (let i = left; i <= right; i++) {
            if(i < 10) {
                result.push(i);
                continue;
            }
            let tmp = i;
            while(tmp > 0) {
                let module = tmp % 10;
                if(module == 0 || i % module != 0) break;
                tmp = Math.floor(tmp / 10);
            }
            if(tmp == 0){
                result.push(i);
            }
        }
        return result;
    };
