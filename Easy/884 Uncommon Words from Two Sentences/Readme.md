## Problem

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.

## Pre analysis

Since it is that only word can appear once in either of sentences , implies it does not have to do anything with two sentences and they can be combined. Using simple hash dictionary to keep count. Result should be all keys whose value is 1;

## Another solution

Another solution with Regex (interesting)

    var uncommonFromSentences = function(A, B) {
        var str=A+" "+B
        var out = []
        for(e of new Set(str.split(" "))){
            if(str.match(new RegExp("\\b"+e+"\\b","g")).length==1){
                out.push(e)
            }
        }
        return out
    };
