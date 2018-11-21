## Problem

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false

canConstruct("aa", "ab") -> false

canConstruct("aa", "aab") -> true

## Pre analysis

Will keep a hashmap with count of occurence of character c in magazine and compare it with ransome note.

## Another Solution

Removal of charact from magazine with each letter in ransom note (simulation);

    var canConstruct = function(ransomNote, magazine) {
        for (let i = 0; i < ransomNote.length; i++){
            if (magazine.indexOf(ransomNote[i]) === -1) return false;
            magazine = magazine.slice(0, magazine.indexOf(ransomNote[i])) + magazine.slice(magazine.indexOf(ransomNote[i])+1)
        }
        return true;
    };
