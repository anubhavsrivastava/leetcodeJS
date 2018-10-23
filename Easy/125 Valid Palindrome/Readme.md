## Problem

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"

Output: true

Example 2:

Input: "race a car"

Output: false

## Pre analysis

Will remove non alphanumberic characters and check palindrome

## Post analysis

removal of alphanumeric was better with Regex `#todo`

## Another solution

        var isPalindrome = function(s) {
        s = s.replace(/[^\w]/g,'').toLowerCase();
            let start = 0;
            let end = s.length -1;

            while(start < end){
                if(s[start]!=s[end])
                    return false;
                else{
                    start++;
                    end--;
                }
            }
            return true;
        };
