/**
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2


 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/** Time limit exceeded First attempt */
var majorityElement = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const arr = nums.filter(x => x === element);
    if (arr.length > nums.length / 2) {
      return element;
    }
  }
};

/**Performs pretty well. */

var majorityElement = function(nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (hash[element]) {
      hash[element] = hash[element] + 1;
    } else {
      hash[element] = 1;
    }
  }
  for (const key in hash) {
    if (hash[key] > nums.length / 2) {
      return key;
    }
  }
};
