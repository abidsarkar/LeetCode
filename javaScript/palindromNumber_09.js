/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const original = x.toString();
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};


let kk = 121
isPalindrome(kk)