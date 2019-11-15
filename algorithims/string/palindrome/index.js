/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * Accept solution, faster than 96% of solutions.
 * 
 * Uses a left and right pointer, and increments and decrements those respectively on each pass through the while loop. 
 * If they don't equal each other, than return false. 

 */
var isPalindrome = function(s) {
  s = s.replace(/\W/g, "").toLowerCase();
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) {
      return false;
    }
    leftPointer += 1;
    rightPointer -= 1;
  }
  return true;
};
