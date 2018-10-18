## Problem

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:

    [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz"
    ]

## Pre analysis

This is variant of traditional FizzBuzz problem, there are solution which keeps a result-string and only check for mod of 3 and 5 and add fizz/buzz to result.
But for sake of clarity I do explicit check for mod 15.

## Post analysis

The generation of array with that length is crucial. Although there is cleaner way by just iterating for that length and keep pushing item in array.

## Another solution

Another generic JS independent Solution

    var fizzBuzz = function(n) {
        let arr = [];
        for(let i = 1; i <= n; i++) {
            if(i % 15 === 0)  {
                arr.push('FizzBuzz');
            } else if (i % 5 === 0) {
                arr.push('Buzz');
            } else if (i % 3 === 0) {
                arr.push('Fizz');
            } else {
                arr.push(`${i}`);
            }
        }
        return arr;
    };
