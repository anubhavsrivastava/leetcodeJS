## Problem

Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

Example 1:

Input: name = "alex", typed = "aaleex"

Output: true

Explanation: 'a' and 'e' in 'alex' were long pressed.

Example 2:

Input: name = "saeed", typed = "ssaaedd"

Output: false

Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

Example 3:

Input: name = "leelee", typed = "lleeelee"

Output: true

Example 4:

Input: name = "laiden", typed = "laiden"

Output: true

Explanation: It's not necessary to long press any character.

Note:

name.length <= 1000

typed.length <= 1000

The characters of name and typed are lowercase letters.

## Pre analysis

Will use two pointer technique.

## Post analysis

Another approach could be to keep count of each consequtive characters for each named, typed and each name character count should be less than or equal to respected typed count.

## Another solution

Reverse Pointers approach

    var isLongPressedName = function(name, typed) {
        if(name===typed){
            return true;
        }
        let index = 0;
        for(let i=0;i<typed.length;i++){
            if(typed[i]===name[index]){
                index++;
            }else if(typed[i]!==name[index-1]){
                return false;
            }
        }
        if(index===name.length){
            return true;
        }
        return false;
    };
