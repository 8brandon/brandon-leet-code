/**
 * Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Valid Solution 1) (Slow runttime)
 * Sort the array, and then check while looping through the array if the i + 1 element is the same as the current
 * iteration
 */
var containsDuplicate = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

var containsDuplicate = function(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(`in loop ${i} times`);

    let curNum = nums[i];
    console.log("TCL: containsDuplicate -> curNum", curNum);
    if (obj[curNum]) {
      return true;
    } else {
      obj[curNum] = true;
    }
    console.log("TCL: containsDuplicate -> obj", obj);
  }
  return false;
};
