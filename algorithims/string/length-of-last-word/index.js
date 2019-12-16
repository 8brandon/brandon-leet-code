/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5

 */

/**
 * @param {string} s
 * @return {number}
 */

/**
 * One line solution! Interstingly, I didn't find many other 1 line soltuions.
 */
var lengthOfLastWord = function(s) {
  return s.split(" ").pop().length;
};
