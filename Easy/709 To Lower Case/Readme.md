## Problem

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"

Example 2:

Input: "here"
Output: "here"

Example 3:

Input: "LOVELY"
Output: "lovely"

## Pre analysis

This is simple problem when it comes to JS, there is already a prototypal method available on Strings.
I guess, language like C, where string constitutes of discrete character, would involve some manipulation.
Such language should involve playing over ASCII, if its in range of Uppercase alphabets it should subtract 32(97-65) from it.
My attempt would not overkill the problem wrt JS

## Post analysis

It would be interesting to check how toLowerCase is implemented internally in JS VM.
Or if writing some webAssembly version of it can make it performant.
`#todo`
