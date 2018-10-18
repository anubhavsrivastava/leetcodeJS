## Problem

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.

Example:

Input: words = ["gin", "zen", "gig", "msg"]

Output: 2

Explanation:
The transformation of each word is:

"gin" -> "--...-."

"zen" -> "--...-."

"gig" -> "--...--."

"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".

Note:

The length of words will be at most 100.
Each words[i] will have length in range [1, 12].
words[i] will only consist of lowercase letters.

## Pre analysis

If I am able to convert respective word into morse code, then all convertion can be mapped to a Set DS so that resultant is unique and its size would give desired result.
Since converting the character in a word is 1-1 mapping, either simple hash object would work. I will go with mapping the ascii diff with array index to get the map;

## Post analysis

Closure wasn't required probably, I could have gone with simple for loop as well for sake of simplicity and should work for language without functions as First Class citizens.

## Another solution

    var uniqueMorseRepresentations = function(words) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        let results = [];
        for(word of words){
            const sum = word.split("").reduce((total, letter) => total+morse[letters.indexOf(letter)],"");
            if(results.indexOf(sum) === -1)
                results.push(sum);
        }
        return results.length;
    };
