/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {

        if (carry === 0) {
            break;
        }

        if (digits[i] === 9) {
            digits[i] = 0;
            carry = 1;
        }
        else {
            digits[i] = digits[i] + carry;
            carry = 0;
        };

    }
    if (carry === 1) {
        digits[0] = 0;
        digits = [1, ...digits]
    }

    return digits;
};