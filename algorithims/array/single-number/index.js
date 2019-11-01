/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */

/**
  * First solution I came up with, slow runtime. 
  *if you don't find the current iteration already in our Obj, set it to 1, otherwise set it to 2.
  Then return the key, where the value === 1 . There should only be one of these. 
  */
var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let curNum = nums[i];
    if (!obj[curNum]) {
      obj[curNum] = 1;
    } else {
      obj[curNum] = 2;
    }
  }
  return Object.keys(obj).find(key => obj[key] === 1);
};

/**
 * Better solution, if it's already there in the obj, then delete it, otherwise set it to true.
 * Return the first, and only, element in the object.
 */

var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      delete obj[nums[i]];
    } else {
      obj[nums[i]] = true;
    }
  }
  return Object.keys(obj)[0];
};

/**
 * Best runtime I could create, with a set, add it to the set if it's not there, and delete it if it is there.
 * The nice thing about using a set as opposed to an array is that Sets don't allow duplicates. So we know if you are deleting
 * it, all instances are deleted.
 */
var singleNumber = function(nums) {
  let obj = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!obj.has(nums[i])) {
      obj.add(nums[i]);
    } else {
      obj.delete(nums[i]);
    }
  }
  return Array.from(obj).pop();
};
