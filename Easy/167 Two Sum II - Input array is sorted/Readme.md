## Problem

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:

Input: numbers = [2,7,11,15], target = 9

Output: [1,2]

Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

## Pre analysis

Will keept left and right pointer on array, if sum is target than that is the pair, if sum is less than target than we need to increment left pointer , else we need to decrement right pointer;

## Another solution

Brute force search method

    var twoSum = function(numbers, target) {
        var binarysearch = function(findtarget,start,end){
            if(end<start){return -1;}
            let mid = Math.floor((start+end)/2);
            if(numbers[mid]===findtarget){
                return mid;
            }
            else if(numbers[mid]<findtarget){
                return binarysearch(findtarget,mid+1,end);
            }
            else if(numbers[mid]>findtarget){
                return binarysearch(findtarget,start,mid-1);
            }
        }
        for(let i=0;i<numbers.length;i++){
            if((target-numbers[i])<numbers[i]){
                break;
            }
            let ans=binarysearch(target-numbers[i],i+1,numbers.length-1);
            if(ans!==-1){
                return [i+1,ans+1];
            }
        }
        return -1;
    };
