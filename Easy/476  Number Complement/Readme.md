## Problem

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Note:

The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.

Example 1:

Input: 5

Output: 2

Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:

Input: 1

Output: 0

Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

## Pre analysis

Will XOR(^) the number with all 1's, basically if its 5(101) with ^ it will 111.

## Another Solution

Same Approach but generation of 1's is different

    var findComplement = function(num) {
        let mask = ~0
        while (mask & num) mask <<= 1
        mask = ~mask
        return mask & (~num>>>0)
    };

Heuristic approach

    var findComplement = function(num) {
        let binNum = (num).toString(2);
        let complement = '';
        for(let i=0; i<binNum.length; i++) {
            if(binNum.charAt(i) === '0')
                complement = complement + '1';
            else if(binNum.charAt(i) === '1')
                complement = complement + '0';
        }
        return parseInt(complement,2);
    };
