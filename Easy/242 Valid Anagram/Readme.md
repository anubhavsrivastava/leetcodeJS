## Problem

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

## Pre analysis

Will just sort character and match string. This is gonna be a heuristic approach only.

## Another solution

Better solution

    var isAnagram = function(s, t) {
    if (s.length - t.length !== 0) return false
    const map = new Array(26).fill(0)
    for (let i = 0, len = s.length; i < len; i++) {
        ++map[s.charCodeAt(i) - 'a'.charCodeAt(0)]
    }
    for (let i = 0, len = t.length; i < len; i++) {
        if (--map[t.charCodeAt(i) - 'a'.charCodeAt(0)] < 0) return false
    }
    return true
    };
