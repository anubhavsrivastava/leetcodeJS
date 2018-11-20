## Problem

Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

Example 1:

Input: candies = [1,1,2,2,3,3]

Output: 3

Explanation:

There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too.
The sister has three different kinds of candies.

Example 2:

Input: candies = [1,1,2,3]

Output: 2

Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of candies.

Note:

The length of the given array is in range [2, 10,000], and will be even.

The number in given array is in range [-100,000, 100,000].

## Pre analysis

Broken down the problem into mathematical one, which is, Unique candies or Total Candies/2 (distribute between bro and sis) , whichever is less.

## Another Solution

Find Unique Candies

    var distributeCandies = function(candies) {
        let typesCandy = 0;
        let existingCandy = {};
        const max = candies.length  / 2;
        //find how many types of candies there are
        for (let i = 0; i < candies.length; i++) {
            if (!existingCandy[candies[i]]) {
                existingCandy[candies[i]] = true;
                typesCandy++;
                if (typesCandy === max) {
                    return max;
                }
            }
        }
        return typesCandy;

    };
