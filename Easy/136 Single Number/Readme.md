## Problem

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]

Output: 1

Example 2:

Input: [4,1,2,1,2]

Output: 4

## Pre analysis

Not sure if I am getting everything solved by hashmap. Since question is about linear complexity, it should only be possible via iterating over only once.
I could had incremented hash value if there is occurence and return at last whose key has value 1, but [2,2,2] should return 2 but will fail. Will add to hash key and delete if for even-odd parity.

## Post analysis

Need to work on bit manipulation `#todo`

## Another solution

There are better solution in terms of time and space complexity.

1.  ### Concept

    2 \* (a + b + c) - (a + a + b + b + c) = c2∗(a+b+c)−(a+a+b+b+c)=c

    Time complexity : O(n⋅1)=O(n). Time complexity of for loop is O(n). Time complexity of hash table operation pop is O(1).

    Space complexity :O(n). The space required by hash_tablehash_table is equal to the number of elements in nums.

2.  ### Concept

    a^0 = a
    a^a = 0
    a^a^b = b

    so ^ over all would give the number

        var singleNumber = function(nums) {
            return nums.reduce((c, n) => c ^ n);
        };

    Time complexity : O(n) We only iterate through nums, so the time complexity is the number of elements in nums.

    Space complexity : O(1).
